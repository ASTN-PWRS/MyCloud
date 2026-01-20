<?php

use App\Cache\RedisCacheManager;
use App\Config\CacheConfig;
use Psr\Container\ContainerInterface;

return [
  RedisCacheManager::class => function (ContainerInterface $c) {
    $cacheConfig = $c->get(CacheConfig::class);
    $enabled = $cacheConfig->useRedis();

    if (!$enabled) {
      return new RedisCacheManager(null, $cacheConfig->redisPrefix(), false);
    }

    $redis = new \Redis();
    $redis->connect($cacheConfig->redisHost(), $cacheConfig->redisPort());

    return new RedisCacheManager($redis, $cacheConfig->redisPrefix(), true);
  },
];
