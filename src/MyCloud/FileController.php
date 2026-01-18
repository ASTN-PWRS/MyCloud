<?php
namespace App\MyCloud;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use PDO;

use App\MyCloud\Traits\ResolvesFolderPath;

class FileController
{
  use ResolvesFolderPath;
  private PDO $pdo;

  public function __construct(PDO $pdo)
  {
    $this->pdo = $pdo;
  }

  public function view(Request $request, Response $response, array $args): Response
  {
    $fileId = $args['id'] ?? null;

    if (!$fileId) {
      return $this->error($response, 'File ID is required', 400);
    }

    $stmt = $this->pdo->prepare("
      SELECT logical_name, mime_type, content
      FROM files
      WHERE id = :id AND is_deleted = FALSE
      ORDER BY version DESC
      LIMIT 1
    ");
    $stmt->execute([':id' => $fileId]);
    $file = $stmt->fetch();

    if (!$file) {
      return $this->error($response, 'File not found', 404);
    }

    $response->getBody()->write($file['content']);
    $filename = basename($file['logical_name']);
    return $response
      ->withHeader('Content-Type', $file['mime_type'] ?? 'application/octet-stream')
      ->withHeader('Content-Disposition', 'inline; filename="' . $filename . '"');
  }

  public function resolveAndRedirect(Request $request, Response $response, array $args): Response
  {
    $data = $request->getParsedBody();
    $fileName = $data['name'] ?? null;
    $path = $args['path'] ?? '';

    if (!$fileName) {
      return $this->error($response, 'name is required', 400);
    }

    $folderId = $this->resolveFolderPath($path);
    if ($folderId === null) {
      return $this->error($response, 'Invalid path', 404);
    }

    $stmt = $this->pdo->prepare("
      SELECT id FROM files
      WHERE folder_id = :folder_id AND logical_name = :name AND is_deleted = FALSE
      ORDER BY version DESC
      LIMIT 1
    ");
    $stmt->execute([
      ':folder_id' => $folderId,
      ':name' => $fileName
    ]);
    $file = $stmt->fetch();

    if (!$file) {
      return $this->error($response, 'File not found', 404);
    }

    // リダイレクト
    return $response
      ->withHeader('Location', '/view/' . $file['id'])
      ->withStatus(302);
  }

  private function error(Response $response, string $message, int $status): Response
  {
    $response->getBody()->write(json_encode(['error' => $message]));
    return $response->withStatus($status)->withHeader('Content-Type', 'application/json');
  }
}
