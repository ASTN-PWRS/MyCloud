<?php

use Slim\App;
use App\Web\Home;

return function (App $app) {
  $app->get('/', [Home::class, 'index']);
};
