<?php

namespace App\Config;

class DatabaseConfig
{
  public function host(): string
  {
    return  $_ENV['DB_HOST'] ?: 'localhost';
  }

  public function port(): int
  {
    return (int)($_ENV['DB_PORT'] ?: 5432);
  }

  public function name(): string
  {
    return $_ENV['DB_NAME'] ?: 'mydb';
  }

  public function user(): string
  {
    return $_ENV['DB_USER'] ?: 'postgres';
  }

  public function password(): string
  {
    return $_ENV['DB_PASS'] ?: '';
  }

  public function dsn(): string
  {
    return sprintf(
      'pgsql:host=%s;port=%d;dbname=%s',
      $this->host(),
      $this->port(),
      $this->name()
    );
  }
}
