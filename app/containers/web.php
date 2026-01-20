<?php

use Psr\Container\ContainerInterface;
use App\Renderer\TemplateRenderer;
use Psr\Log\LoggerInterface;

use App\Web\Home;
use App\MyCloud\FolderController;
use App\Cache\RedisCacheManager;

return [
  Home::class => function (ContainerInterface $c) { 
    $renderer = $c->get(TemplateRenderer::class);
    $logger   = $c->get(LoggerInterface::class);
    return new Home($renderer, $logger); 
  },
  FolderController::class => function (ContainerInterface $c) {
    $pdo      = $c->get(PDO::class);
    $renderer = $c->get(TemplateRenderer::class);
    $cachemanager = $c->get(RedisCacheManager::class);
    return new FolderController($pdo, $renderer, $cachemanager);
  }
];
