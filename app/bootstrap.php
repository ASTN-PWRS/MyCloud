<?php

use Slim\App;
use Slim\Factory\AppFactory;
use Psr\Container\ContainerInterface;
use App\Web\Home;


return array_merge(
  ...[
    require __DIR__ . '/containers/settings.php',
    require __DIR__ . '/containers/logger.php',
    require __DIR__ . '/containers/psr7.php',
    require __DIR__ . '/containers/renderer.php',
    require __DIR__ . '/containers/pdo.php',
    require __DIR__ . '/containers/web.php',
    require __DIR__ . '/containers/cache.php',    
  [
    // Slim\App の定義（AppFactory 経由で生成） 
    App::class => function (ContainerInterface $c) { 
      $app = AppFactory::createFromContainer($c);
      if (!empty($_ENV['BASE_PATH'])) 
      { 
        $app->setBasePath($_ENV['BASE_PATH']); 
      } else {
        $_ENV['BASE_PATH'] = '';
      }
      // ルーティングを読み込む 
      (require __DIR__.'/routes/web.php')($app); 
      return $app; 
    }, 
  ],
  require __DIR__ . '/containers/middleware.php', 
]);