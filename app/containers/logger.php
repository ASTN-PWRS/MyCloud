<?php
use Psr\Container\ContainerInterface;
use Monolog\Logger;
use Monolog\Handler\RotatingFileHandler;
use Psr\Log\LoggerInterface;

return [
  // (ローテーション）
  LoggerInterface::class => function (ContainerInterface $c) {
    $settings    = $c->get('settings')['logger'];
    $logger      = new Logger($settings['name']);
    $logPath     = $settings['path'] . '/app.log';
    $logLevel    = $settings['level'];
    $logRotation = $settings['rotation'];
    $handler = new RotatingFileHandler($logPath, $logRotation, $logLevel);
    $logger->pushHandler($handler);
    return $logger;
  },
];
