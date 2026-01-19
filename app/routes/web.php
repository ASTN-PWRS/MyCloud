<?php

use Slim\App;
use App\Web\Home;
use App\MyCloud\FolderController;

return function (App $app) {
  $app->get('/', [Home::class, 'index']);
  $app->get('/folders[/{path:.*}]', FolderController::class . ':list');
};



