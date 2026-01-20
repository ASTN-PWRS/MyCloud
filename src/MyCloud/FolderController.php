<?php
namespace App\MyCloud;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use PDO;

use App\Cache\RedisCacheManager;

use App\MyCloud\Traits\ResolvesFolderPath;

class FolderController
{
  use ResolvesFolderPath;

  private PDO $pdo;
  private $renderer;
  private $cacheManager;

  public function __construct(PDO $pdo, $renderer, RedisCacheManager $cacheManager)
  {
    $this->pdo          = $pdo;
    $this->renderer     = $renderer;
    $this->cacheManager = $cacheManager;
  }

  public function create(Request $request, Response $response, $args): Response
{
  $data = $request->getParsedBody();
  $name = $data['name'] ?? null;
  $path = $args['path'] ?? '';

  if (!$name) {
    return $this->error($response, 'name is required', 400);
  }

  $parentId = $this->resolveFolderPath($path);
  if ($parentId === null) {
    return $this->error($response, 'Invalid path', 404);
  }

  // 同名フォルダの存在チェック
  $checkStmt = $this->pdo->prepare("
    SELECT id FROM folders
    WHERE name = :name AND parent_id IS NOT DISTINCT FROM :parent_id AND is_deleted = FALSE
  ");
  $checkStmt->execute([
    ':name' => $name,
    ':parent_id' => $parentId
  ]);
  if ($checkStmt->fetch()) {
    return $this->error($response, 'Folder with the same name already exists', 409);
  }

  // フォルダ作成
  $stmt = $this->pdo->prepare("
    INSERT INTO folders (name, parent_id)
    VALUES (:name, :parent_id)
    RETURNING id, name, parent_id, created_at
  ");
  $stmt->execute([
    ':name' => $name,
    ':parent_id' => $parentId
  ]);

  $folder = $stmt->fetch();

  // 🌿 キャッシュ削除（親フォルダの一覧を無効化）
  $tag = 'folder:' . $parentId;
  $this->cacheManager->flushTag($tag);

  $response->getBody()->write(json_encode($folder));
  return $response->withHeader('Content-Type', 'application/json');
}

public function list(Request $request, Response $response, array $args): Response
{
  $path = $args['path'] ?? '';
  $folderId = $this->resolveFolderPath($path);

  if ($folderId === null) {
    return $this->error($response, 'Invalid path', 404);
  }

  $cacheKey = 'folder_list:' . md5($path);
  $tag = 'folder:' . $folderId;

  // キャッシュ取得または生成
  $viewData = $this->cacheManager->remember($cacheKey, function () use ($folderId, $path) {
    // フォルダ一覧
    $stmtFolders = $this->pdo->prepare("
      SELECT id, name
      FROM folders
      WHERE parent_id = :parent_id AND is_deleted = FALSE
      ORDER BY name
    ");
    $stmtFolders->execute([':parent_id' => $folderId]);
    $folders = $stmtFolders->fetchAll(PDO::FETCH_OBJ);

    // ファイル一覧（全バージョン）
    $stmtFiles = $this->pdo->prepare("
      SELECT id, logical_name, version, mime_type, size, uploaded_at
      FROM files
      WHERE folder_id = :folder_id AND is_deleted = FALSE
      ORDER BY logical_name, version DESC
    ");
    $stmtFiles->execute([':folder_id' => $folderId]);
    $rawFiles = $stmtFiles->fetchAll(PDO::FETCH_OBJ);

    // logical_name ごとにバージョンをまとめる
    $files = [];
    foreach ($rawFiles as $file) {
      $key = $file->logical_name;
      if (!isset($files[$key])) {
        $files[$key] = (object)[
          'logical_name' => $file->logical_name,
          'versions' => []
        ];
      }
      $files[$key]->versions[] = $file;
    }

    return [
      'folders'     => $folders,
      'files'       => array_values($files),
      'currentPath' => $path,
      'breadcrumbs' => $this->buildBreadcrumbs($path)
    ];
  }, 86400); // 1日キャッシュ

  // タグ登録（後で一括削除できるように）
  $this->cacheManager->tag($tag, $cacheKey);

  return $this->renderer->render($response, 'pages/mycloud.latte', $viewData);
}
private function buildBreadcrumbs(string $path): array
{
  $segments = array_filter(explode('/', trim($path, '/')));
  $breadcrumbs = [
    [
      'name' => 'ホーム',
      'url'  => '/',
      'icon' => 'house'
    ]
  ];

  $url = '';
  foreach ($segments as $segment) {
    $url .= '/' . $segment;
    $breadcrumbs[] = [
      'name' => urldecode($segment),
      'url'  => '/folders' . $url,
      'icon' => 'folder'
    ];
  }

  return $breadcrumbs;
}

}
