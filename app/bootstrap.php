<?php

use Slim\App;
use Slim\Factory\AppFactory;
use Psr\Container\ContainerInterface;
use App\Web\Home;
use Slim\Psr7\Factory\ResponseFactory;
use App\Middleware\CorsMiddleware;
use Slim\Middleware\ErrorMiddleware;
return array_merge(
  ...[
    require __DIR__ . '/containers/settings.php',
    require __DIR__ . '/containers/config.php',
    require __DIR__ . '/containers/logger.php',
    require __DIR__ . '/containers/psr7.php',
    require __DIR__ . '/containers/renderer.php',
    require __DIR__ . '/containers/pdo.php',
    require __DIR__ . '/containers/web.php',
    require __DIR__ . '/containers/cache.php',
    //require __DIR__ . '/containers/middleware.php',    
  [
    // Slim\App の定義（AppFactory 経由で生成） 
    App::class => function (ContainerInterface $c) {
      //$responseFactory = new ResponseFactory(); 
      //AppFactory::setResponseFactory($responseFactory);
      $app = AppFactory::createFromContainer($c);
      if (!empty($_ENV['BASE_PATH'])) 
      { 
        $app->setBasePath($_ENV['BASE_PATH']); 
      } else {
        $_ENV['BASE_PATH'] = '';
      }
      // ルーティングを読み込む 
      (require __DIR__.'/routes/web.php')($app); 
      (require __DIR__.'/routes/api.php')($app);
      // リクエストボディのパース（最初）
      $app->addBodyParsingMiddleware();
      //
      $app->addRoutingMiddleware();
      // ログなどのカスタムミドルウェア
      //$app->add($c->get(RequestLoggerMiddleware::class));
      // エラー処理（最後）
      $app->addErrorMiddleware(true, true, true);
      return $app; 
    }, 
    
  ],
]);