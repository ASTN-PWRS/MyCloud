
$app->post('/folders[/{path:.*}]', \App\Controllers\FolderController::class . ':create');
$app->get('/folders[/{path:.*}]', \App\MyCloud\FolderController::class . ':list');

$app->get('/view/{id}', \App\Controllers\FileController::class . ':view');
