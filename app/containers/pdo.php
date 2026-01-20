<?php

use App\Config\DatabaseConfig;
use Psr\Container\ContainerInterface;

return [
  \PDO::class => function (ContainerInterface $container) {
    $config = $container->get(DatabaseConfig::class);

    $options = [
      PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
      PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ];

    return new \PDO(
      $config->dsn(),
      $config->user(),
      $config->password(),
      $options
    );
  },
];
