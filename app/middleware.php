<?php

use Slim\App;
use Slim\Middleware\ErrorMiddleware;
use App\Middleware\RequestLoggerMiddleware;
//
use App\Middleware\CorsMiddleware;

$errorMiddleware = new ErrorMiddleware(
  $app->getCallableResolver(),
  $app->getResponseFactory(),
  $_ENV['DISPLAY_ERROR_DETAILS'] === 'true',
  true,  // logErrors
  true   // logErrorDetails
);

return function (App $app): void {
  $container = $app->getContainer();
  // リクエストボディのパース（最初）
  $app->addBodyParsingMiddleware();
  // CORS
  $app->add($container->get(CorsMiddleware::class));
  // ログなどのカスタムミドルウェア
  //$app->add($container->get(RequestLoggerMiddleware::class));
  // エラー処理（最後）
  $app->add($container->get(ErrorMiddleware::class));
};
