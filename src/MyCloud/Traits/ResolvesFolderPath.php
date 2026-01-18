<?php
namespace App\MyCloud\Traits;

use PDO;
use App\MyCloud\Traits\ResolvesFolderPath;

trait ResolvesFolderPath
{
  use ResolvesFolderPath;
  protected PDO $pdo;

  protected function resolveFolderPath(string $path): ?string
  {
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
      $row = $stmt->fetch();
      if (!$row) {
        return null;
      }
      $parentId = $row['id'];
    }

    return $parentId;
  }
}
