<?php 

use Slim\App;
use DI\ContainerBuilder;
use Dotenv\Dotenv;
use Dotenv\Exception\InvalidPathException; 
use Dotenv\Exception\ValidationException;

require __DIR__ . '/../vendor/autoload.php';
require __DIR__ . '/../bootstrap/env.php';

 // Start the session
if (session_status() === PHP_SESSION_NONE) {
  session_start();
}

$envFile = getenv('APP_ENV') === 'development' ? '.env.development' : '.env';
loadEnv(dirname(__DIR__, 1), $envFile);

$container = (new ContainerBuilder())
  ->addDefinitions(dirname(__DIR__, 1) . '/app/bootstrap.php')
  ->build();

$app = $container->get(App::class);

try { 
  $app->run();
} catch (Exception $e) {
  echo '<pre>'; 
  echo "Error: " . $e->getMessage() . "\n"; echo $e->getFile() . ':' . $e->getLine() . "\n"; 
  echo $e->getTraceAsString(); echo '</pre>'; 
  exit;
}
