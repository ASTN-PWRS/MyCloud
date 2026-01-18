<?php

use Psr\Container\ContainerInterface;
//
use Slim\Middleware\ErrorMiddleware;
use App\Middleware\CorsMiddleware;

return [
  CorsMiddleware::class => DI\autowire(),
  ErrorMiddleware::class => function (ContainerInterface $c) {
    $app = $c->get(Slim\App::class);
    //$logger = $c->get(Psr\Log\LoggerInterface::class);
    $middleware = new ErrorMiddleware(
    $app->getCallableResolver(),
    $app->getResponseFactory(),
    $_ENV['DISPLAY_ERROR_DETAILS'] === 'true',
    true,
    true
  );
  // $middleware->setDefaultErrorHandler(
  //   function ($request, Throwable $exception, bool $displayErrorDetails) use ($logger) {
  //     $logger->error($exception->getMessage());
  //     throw $exception;
  //   }
  // );
  return $middleware;
  },
];