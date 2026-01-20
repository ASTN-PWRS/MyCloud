<?php

namespace App\Config;

class CacheConfig
{
  public function useRedis(): bool
  {
    return getenv('USE_REDIS_CACHE') === 'true';
  }

  public function redisHost(): string
  {
    return getenv('REDIS_HOST') ?: '127.0.0.1';
  }

  public function redisPort(): int
  {
    return (int)(getenv('REDIS_PORT') ?: 6379);
  }

  public function redisPrefix(): string
  {
    return getenv('REDIS_PREFIX') ?: 'mycloud:';
  }
}
