<?php

namespace App\Config;

class CacheConfig
{
  public function useRedis(): bool
  {
    return $_ENV['USE_REDIS_CACHE'] === 'true';
  }

  public function redisHost(): string
  {
    return  $_ENV['REDIS_HOST'] ?: '127.0.0.1';
  }

  public function redisPort(): int
  {
    return (int)( $_ENV['REDIS_PORT'] ?: 6379);
  }

  public function redisPrefix(): string
  {
    return  $_ENV['REDIS_PREFIX'] ?: 'mycloud:';
  }
}
