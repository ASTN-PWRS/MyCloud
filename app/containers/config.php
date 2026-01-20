<?php

use App\Config\CacheConfig;
use App\Config\DatabaseConfig;

return [
  ChacheConfig::class => fn () =>new ChacheConfig(),
  DatabaseConfig::class => fn() => new DatabaseConfig(),
];
