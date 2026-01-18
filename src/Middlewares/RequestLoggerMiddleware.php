<?php

namespace App\Middleware;

use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Server\RequestHandlerInterface as Handler;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Server\MiddlewareInterface;

class RequestLoggerMiddleware implements MiddlewareInterface
{
  public function process(Request $request, Handler $handler): Response
  {
    error_log("[Request] " . $request->getMethod() . ' ' . $request->getUri());
    return $handler->handle($request);
  }
}
