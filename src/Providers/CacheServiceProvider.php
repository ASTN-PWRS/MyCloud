<?php

namespace App\Providers;

use App\Cache\RedisCacheManager;
use App\Config\AppConfig;

class CacheServiceProvider
{
  public static function register(): RedisCacheManager
  {
    if (!AppConfig::useRedis()) {
      return new RedisCacheManager(null, AppConfig::redisPrefix(), false);
    }

    $redis = new \Redis();
    $redis->connect(AppConfig::redisHost(), AppConfig::redisPort());

    return new RedisCacheManager($redis, AppConfig::redisPrefix(), true);
  }
}
