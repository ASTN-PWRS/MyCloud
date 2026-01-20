<?php

use App\Config\CacheConfig;
use App\Config\DatabaseConfig;

return [
  CacheConfig::class => fn () =>new CacheConfig(),
  DatabaseConfig::class => fn() => new DatabaseConfig(),
];
