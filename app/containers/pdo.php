<?php

use Psr\Container\ContainerInterface;

return [
  \PDO::class => function (ContainerInterface $container) {
    $host = $_ENV['DB_HOST']; 
    $port = $_ENV['DB_PORT']; 
    $db   = $_ENV['DB_NAME']; 
    $user = $_ENV['DB_USER']; 
    $pass = $_ENV['DB_PASS'];
    $dsn  = "pgsql:host=$host;port=$port;dbname=$db"; 
    $options = [ 
      PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, 
      PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC, 
    ]; 
    return new \PDO($dsn, $user, $pass, $options); 
  }
];
