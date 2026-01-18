<?php

use Psr\Container\ContainerInterface;
use App\Renderer\TemplateRenderer;
use Psr\Log\LoggerInterface;

use App\Web\Home;

return [
  Home::class => function (ContainerInterface $c) { 
    $renderer = $c->get(TemplateRenderer::class);
    $logger   = $c->get(LoggerInterface::class);
    return new Home($renderer, $logger); 
  }, 
];
