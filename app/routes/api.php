<?php

use Slim\App;
use App\MyCloud\FolderController;

return function (App $app) {
  $app->post('/folders[/{path:.*}]', FolderController::class . ':create');
};