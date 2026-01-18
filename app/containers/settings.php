<?php

use Monolog\Logger;

return [
  'settings' =>[
    'logger' => [
      'name'     => 'debug',
      'path'     => __DIR__ . '/../../var/logs',
      'rotation' => 7,
      'level'    => Logger::DEBUG,
    ],
    'latte' => [
      'template'      => __DIR__ . '/../../templates',
      'template_temp' => __DIR__ . '/../../var/cache',
      'auto_refresh'  => true
    ],
  ]
];
