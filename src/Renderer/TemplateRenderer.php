<?php

namespace App\Renderer;

use Slim\App;
use Latte\Engine;
use Psr\Http\Message\ResponseInterface as Response;

final class TemplateRenderer
{
	public function __construct(private Engine $engine)
  {
    $this->engine = $engine;
		// コンポーネント関数を登録 
		$this->engine->addFunction('renderComponent', function (string $name, array $params = [])
		{ 
			$componentPath = "components/{$name}.latte";
			// JSファイルが存在すればアセットに追加 
			return $this->engine->renderToString($componentPath, $params); 
		});
		// Latte に渡すとき
		$this->engine->addFunction('getIconName', function (string $mime): string {
  		return match (true) {
    		str_starts_with($mime, 'image/') => 'image',
    		str_starts_with($mime, 'application/pdf') => 'file-pdf',
    		str_starts_with($mime, 'text/') => 'file-text',
    		default => 'file'
  		};
		});

  }

	public function render(Response $response, string $template, array $data = [] ): Response
	{
		$string = $this->engine->renderToString($template, $data);
		$response->getBody()->write($string);
		return $response;
	}
}
