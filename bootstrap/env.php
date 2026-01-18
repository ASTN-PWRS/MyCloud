<?php

use Dotenv\Dotenv;
use Dotenv\Exception\InvalidPathException;
use Dotenv\Exception\ValidationException;

function loadEnv(string $basePath, string $envFile = '.env'): void
{
  try {
    $dotenv = Dotenv::createImmutable($basePath, $envFile);
    $dotenv->load();
    // 必須項目のバリデーション
    $dotenv->required([
      'APP_ENV',
      'DISPLAY_ERROR_DETAILS',
    ])->notEmpty();
    $_ENV['BASE_PATH'] = $_ENV['BASE_PATH'] ?? "";
    
    } catch (InvalidPathException $e) {
        die('環境ファイルが見つかりません: ' . $e->getMessage());
    } catch (ValidationException $e) {
        die('環境変数のバリデーションエラー: ' . $e->getMessage());
    }
}
