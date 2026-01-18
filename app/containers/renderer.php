<?php
namespace App\Renderer;

use Slim\App;
use Latte\Engine;
use Psr\Container\ContainerInterface;
use Latte\Loaders\FileLoader;
use Latte\Essential\EssentialExtension;

use App\Renderer\TemplateRenderer;

return [
	Engine::class => function (ContainerInterface $container) {
		$latte = new Engine();
		$settings = $container->get('settings')['latte'];
		$latte->setLoader(new FileLoader($settings['template']));
		$latte->setTempDirectory($settings['template_temp']);
		$latte->setAutoRefresh($settings['auto_refresh']);
    //$latte->addExtension(new EssentialExtension());
		return $latte;
	},
  TemplateRenderer::class => function (ContainerInterface $container) {
    $engine = $container->get(Engine::class);
    $app    = $container->get(App::class);
    return new TemplateRenderer($engine);
  },
];