<?php

use Slim\Psr7\Factory\ResponseFactory;
use Slim\Psr7\Factory\ServerRequestFactory;
use Slim\Psr7\Factory\StreamFactory;
use Slim\Psr7\Factory\UploadedFileFactory;
use Slim\Psr7\Factory\UriFactory;
use Psr\Http\Message\ResponseFactoryInterface;
use Psr\Http\Message\ServerRequestFactoryInterface;
use Psr\Http\Message\StreamFactoryInterface;
use Psr\Http\Message\UploadedFileFactoryInterface;
use Psr\Http\Message\UriFactoryInterface;

return [
  ResponseFactoryInterface::class => DI\create(ResponseFactory::class),
  ServerRequestFactoryInterface::class => DI\create(ServerRequestFactory::class),
  StreamFactoryInterface::class => DI\create(StreamFactory::class),
  UploadedFileFactoryInterface::class => DI\create(UploadedFileFactory::class),
  UriFactoryInterface::class => DI\create(UriFactory::class),
];
