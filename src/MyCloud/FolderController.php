<?php
namespace App\MyCloud;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use PDO;

class FolderController
{
  private PDO $pdo;

  public function __construct(PDO $pdo)
  {
    $this->pdo = $pdo;
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

  // フォルダ一覧
  $stmtFolders = $this->pdo->prepare("
    SELECT id, name
    FROM folders
    WHERE parent_id = :parent_id AND is_deleted = FALSE
    ORDER BY name
  ");
  $stmtFolders->execute([':parent_id' => $folderId]);
  $folders = $stmtFolders->fetchAll();

  // ファイル一覧（全バージョン）
  $stmtFiles = $this->pdo->prepare("
    SELECT id, logical_name, version, mime_type, size, uploaded_at
    FROM files
    WHERE folder_id = :folder_id AND is_deleted = FALSE
    ORDER BY logical_name, version DESC
  ");
  $stmtFiles->execute([':folder_id' => $folderId]);
  $files = $stmtFiles->fetchAll();

  $response->getBody()->write(json_encode([
    'folders' => $folders,
    'files' => $files
  ]));

  return $response->withHeader('Content-Type', 'application/json');
}
  private function error(Response $response, string $message, int $status): Response
  {
    $response->getBody()->write(json_encode(['error' => $message]));
    return $response->withStatus($status)->withHeader('Content-Type', 'application/json');
  }
}
