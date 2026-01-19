<?php
namespace App\MyCloud\Traits;

use PDO;

trait ResolvesFolderPath
{

protected function resolveFolderPath(string $path): ?string
{
  if (trim($path) === '') {
    // ルートフォルダを探してIDを返す
    $stmt = $this->pdo->prepare("
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
    $stmt = $this->pdo->prepare("
      SELECT id FROM folders
      WHERE name = :name AND parent_id IS NOT DISTINCT FROM :parent_id AND is_deleted = FALSE
      LIMIT 1
    ");
    $stmt->execute([
      ':name' => $segment,
      ':parent_id' => $parentId
    ]);
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    if (!$row) {
      return null;
    }
    $parentId = $row['id'];
  }

  return $parentId;
}
}
