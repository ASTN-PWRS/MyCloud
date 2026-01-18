<?php

namespace App\Web;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Log\LoggerInterface;
use App\Renderer\TemplateRenderer;

final class Home
{
  public function __construct(
    private TemplateRenderer $renderer,
    private LoggerInterface $logger
  ) 
  {
    $this->renderer = $renderer;
    $this->logger   = $logger;
  }
  public function index(Request $request, Response $response): Response
  {
    $this->logger->info("Home");
    $viewData = [];
    return $this->renderer->render($response, 'pages/mycloud.latte', $viewData);    
  }
}
