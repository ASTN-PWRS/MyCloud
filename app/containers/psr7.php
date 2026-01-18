<?php

use Nyholm\Psr7\Factory\Psr17Factory;
use Psr\Http\Message\ResponseFactoryInterface;
use Psr\Http\Message\ServerRequestFactoryInterface;
use Psr\Http\Message\StreamFactoryInterface;
use Psr\Http\Message\UploadedFileFactoryInterface;
use Psr\Http\Message\UriFactoryInterface;

return [
  ResponseFactoryInterface::class => DI\create(Psr17Factory::class),
  ServerRequestFactoryInterface::class => DI\get(Psr17Factory::class),
  StreamFactoryInterface::class => DI\get(Psr17Factory::class),
  UploadedFileFactoryInterface::class => DI\get(Psr17Factory::class),
  UriFactoryInterface::class => DI\get(Psr17Factory::class),
];