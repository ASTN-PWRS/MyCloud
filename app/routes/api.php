
$app->post('/folders[/{path:.*}]', \App\Controllers\FolderController::class . ':create');

$app->get('/view/{id}', \App\Controllers\FileController::class . ':view');
