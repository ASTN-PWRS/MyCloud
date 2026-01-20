<?php

use Slim\App;
use Slim\Middleware\ErrorMiddleware;
use App\Middleware\RequestLoggerMiddleware;
//
//use App\Middleware\CorsMiddleware;
use Slim\Middleware\RoutingMiddleware;

return function (App $app): void {
  // リクエストボディのパース（最初）
  $app->addBodyParsingMiddleware();
  // CORS
  //$app->add($container->get(CorsMiddleware::class));
  //
  $app->addRoutingMiddleware();
  // ログなどのカスタムミドルウェア
  //$app->add($container->get(RequestLoggerMiddleware::class));
  // エラー処理（最後）
  $app->add($container->get(ErrorMiddleware::class));
};
