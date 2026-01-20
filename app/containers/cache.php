<?php

use App\Cache\RedisCacheManager;
use App\Config\CacheConfig;
use Psr\Container\ContainerInterface;

return [
  RedisCacheManager::class => function (ContainerInterface $c) {
    $enabled = CacheConfig::useRedis();

    if (!$enabled) {
      return new RedisCacheManager(null, CacheConfig::redisPrefix(), false);
    }

    $redis = new \Redis();
    $redis->connect(CacheConfig::redisHost(), CacheConfig::redisPort());

    return new RedisCacheManager($redis, CacheConfig::redisPrefix(), true);
  },
];
