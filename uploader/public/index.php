<?php
use Slim\Factory\AppFactory;

require __DIR__ . '/../vendor/autoload.php';

//folders を親方向にたどってパスを作る関数
function buildFolderFullPath(PDO $db, int $folderId): string {
    $segments = [];

    while ($folderId !== null) {
        $stmt = $db->prepare("
            SELECT name, parent_id
            FROM folders
            WHERE id = :id
        ");
        $stmt->execute([':id' => $folderId]);
        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        if (!$row) {
            break;
        }

        // ルート "/" はそのまま
        if ($row['name'] !== '/') {
            array_unshift($segments, $row['name']);
        }

        $folderId = $row['parent_id'];
    }

    return '/' . implode('/', $segments);
}

//files.id からフルパスを作る関数
function getFileFullPath(PDO $db, int $fileId): ?string {
    // files 情報を取得
    $stmt = $db->prepare("
        SELECT folder_id, logical_name
        FROM files
        WHERE id = :id
    ");
    $stmt->execute([':id' => $fileId]);
    $file = $stmt->fetch(PDO::FETCH_ASSOC);

    if (!$file) {
        return null;
    }

    // フォルダのフルパスを取得
    $folderPath = buildFolderFullPath($db, $file['folder_id']);

    // フルパスを結合
    return rtrim($folderPath, '/') . '/' . $file['logical_name'];
}

/* ============================================================
   ファイルの次バージョンを取得
   ============================================================ */
function nextFileVersion(PDO $db, string $folderId, string $logicalName): int {
    $stmt = $db->prepare("
        SELECT COALESCE(MAX(version), 0) + 1
        FROM files
        WHERE folder_id = :folder AND logical_name = :name
    ");
    $stmt->execute([':folder' => $folderId, ':name' => $logicalName]);
    return (int)$stmt->fetchColumn();
}

/* ============================================================
   既存フォルダ階層を辿って folder_id を返す（存在しなければ null）
   ============================================================ */
function resolveFolderPath(PDO $db, string $path): ?int
{
    if (trim($path) === '') {
        // ルートフォルダを探す
        $stmt = $db->prepare("
            SELECT id FROM folders
            WHERE name = '/' AND parent_id IS NULL AND is_deleted = FALSE
            LIMIT 1
        ");
        $stmt->execute();
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        return $row['id'] ?? null;
    }

    $segments = array_filter(explode('/', $path));
    $parentId = null;

    foreach ($segments as $segment) {
        $stmt = $db->prepare("
            SELECT id FROM folders
            WHERE name = :name
              AND parent_id IS NOT DISTINCT FROM :parent_id
              AND is_deleted = FALSE
            LIMIT 1
        ");
        $stmt->execute([
            ':name' => $segment,
            ':parent_id' => $parentId
        ]);

        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        if (!$row) {
            return null; // 見つからない
        }

        $parentId = $row['id'];
    }

    return $parentId;
}

/* ============================================================
   フォルダ階層を作成し、最終フォルダIDを返す
   ============================================================ */
function ensureFolderPath(PDO $db, string $path) {
    if ($path === '' || $path === '.' || $path === '/') {
        return null;
    }

    $parts = explode('/', trim($path, '/'));
    $parentId = null;

    foreach ($parts as $name) {
        // 既存フォルダを検索
        $stmt = $db->prepare("
            SELECT id FROM folders
            WHERE name = :name AND parent_id IS NOT DISTINCT FROM :parent
        ");
        $stmt->execute([
            ':name' => $name,
            ':parent' => $parentId
        ]);
        $id = $stmt->fetchColumn();

        if (!$id) {
            // なければ作成
            $stmt = $db->prepare("
                INSERT INTO folders (name, parent_id)
                VALUES (:name, :parent)
                RETURNING id
            ");
            $stmt->execute([
                ':name' => $name,
                ':parent' => $parentId
            ]);
            $id = $stmt->fetchColumn();
        }

        $parentId = $id;
    }

    return $parentId;
}

/* ============================================================
   Slim アプリ
   ============================================================ */
$app = AppFactory::create();

/* ------------------------------------------------------------
   index.html を返す
   ------------------------------------------------------------ */
$app->get('/', function ($request, $response) {
    $html = file_get_contents(__DIR__ . '/index.html');
    $response->getBody()->write($html);
    return $response->withHeader('Content-Type', 'text/html');
});

/* ------------------------------------------------------------
   アップロード処理
   ------------------------------------------------------------ */
$app->post('/upload', function ($request, $response) {

    $db = new PDO("pgsql:host=localhost;dbname=clouddb", "postgres", "Pos_pass");

    $uploadedFiles = $request->getUploadedFiles();
    if (!isset($uploadedFiles['file'])) {
        return $response->withStatus(400);
    }

    $file = $uploadedFiles['file'];

    /* -------------------------------
       uploadRoot の存在チェック
       ------------------------------- */
    $uploadRoot = trim($request->getParsedBody()['uploadRoot'] ?? '', '/');
    $rootId = resolveFolderPath($db, $uploadRoot);

    if ($rootId === null) {
        $response->getBody()->write(json_encode([
            'error' => "uploadRoot '{$uploadRoot}' は folders に存在しません",
            'exists' => false
        ]));
        return $response
            ->withHeader('Content-Type', 'application/json')
            ->withStatus(400);
    }

    /* -------------------------------
       relativePath の解析
       ------------------------------- */
    $relativePath = trim($request->getParsedBody()['relativePath'] ?? '', '/');

    $folderPath = dirname($relativePath);   // aa/bb/cc
    $logicalName = basename($relativePath); // dd.pdf

    if ($folderPath === '.' || $folderPath === '') {
        $fullFolderPath = $uploadRoot;
    } else {
        $fullFolderPath = $uploadRoot . '/' . $folderPath;
    }

    /* -------------------------------
       サブフォルダを作成 or 取得
       ------------------------------- */
    $folderId = ensureFolderPath($db, $fullFolderPath);

    /* -------------------------------
       重複チェック
       ------------------------------- */
    $stmt = $db->prepare("
        SELECT id FROM files 
        WHERE folder_id = :folder AND logical_name = :name
    ");
    $stmt->execute([
        ':folder' => $folderId,
        ':name'   => $logicalName
    ]);

    if ($stmt->fetchColumn()) {
        $payload = json_encode([
            'error' => '同じファイル名が既に存在します',
            'exists' => true,
            'logical_name' => $logicalName,
            'folder_id' => $folderId
        ]);

        $response->getBody()->write($payload);
        return $response
            ->withHeader('Content-Type', 'application/json')
            ->withStatus(409);
    }

    /* -------------------------------
       バージョン番号
       ------------------------------- */
    $version = nextFileVersion($db, $folderId, $logicalName);

    /* -------------------------------
       files テーブルに登録
       ------------------------------- */
    $stmt = $db->prepare("
        INSERT INTO files (folder_id, logical_name, version, mime_type, size)
        VALUES (:folder, :name, :version, :mime, :size)
        RETURNING id
    ");
    $stmt->execute([
        ':folder' => $folderId,
        ':name'   => $logicalName,
        ':version'=> $version,
        ':mime'   => $file->getClientMediaType(),
        ':size'   => $file->getSize()
    ]);

    $id = $stmt->fetchColumn();

    /* -------------------------------
       ファイル保存（ID名で保存）
       ------------------------------- */
    $targetPath = __DIR__ . "/uploads";
    if (!is_dir($targetPath)) {
        mkdir($targetPath, 0777, true);
    }

    $file->moveTo($targetPath . "/" . $id);

    /* -------------------------------
       正常終了
       ------------------------------- */
    $response->getBody()->write(json_encode(['id' => $id]));
    return $response->withHeader('Content-Type', 'application/json');
});

$app->get('/view/{id}', function ($request, $response, $args) {
    $db = new PDO("pgsql:host=localhost;dbname=clouddb", "postgres", "Pos_pass");

    $id = (int)$args['id'];

    // DB からファイル情報を取得
    $stmt = $db->prepare("
        SELECT logical_name, mime_type, folder_id
        FROM files
        WHERE id = :id
    ");
    $stmt->execute([':id' => $id]);
    $file = $stmt->fetch(PDO::FETCH_ASSOC);

    if (!$file) {
        return $response->withStatus(404)->write("File not found");
    }

    $path = __DIR__ . "/uploads/" . $id;

    if (!file_exists($path)) {
        return $response->withStatus(404)->write("File not found");
    }

    // ブラウザで表示可能な MIME のリスト
    $inlineMimes = [
        'application/pdf',
        'text/plain',
        'text/html',
        'image/jpeg',
        'image/png',
        'image/gif',
        'image/webp',
        'image/svg+xml'
    ];

    // クエリパラメータ
    $query = $request->getQueryParams();
    $downloadName = $query['download'] ?? null;

    // Content-Type
    $response = $response->withHeader('Content-Type', $file['mime_type']);

    // ① download=xxx が指定されていたら強制ダウンロード
    if ($downloadName) {
        $response = $response->withHeader(
            'Content-Disposition',
            'attachment; filename="' . $downloadName . '"'
        );
    }
    // ② MIME が inline 対応ならブラウザ表示
    elseif (in_array($file['mime_type'], $inlineMimes, true)) {
        $response = $response->withHeader(
            'Content-Disposition',
            'inline; filename="' . $file['logical_name'] . '"'
        );
    }
    // ③ それ以外は自動ダウンロード
    else {
        $response = $response->withHeader(
            'Content-Disposition',
            'attachment; filename="' . $file['logical_name'] . '"'
        );
    }

    // ファイル内容を返す
    $response->getBody()->write(file_get_contents($path));
    return $response;
});

/* ============================================================ */
$app->run();
