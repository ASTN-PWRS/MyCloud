<?php

namespace App\Cache;

class RedisCacheManager
{
  private ?\Redis $redis;
  private string $prefix;
  private bool $enabled;

  public function __construct(?\Redis $redis, string $prefix = 'mycloud:', bool $enabled = true)
  {
    $this->redis = $redis;
    $this->prefix = $prefix;
    $this->enabled = $enabled;
  }

  private function key(string $key): string
  {
    return $this->prefix . $key;
  }

  public function get(string $key)
  {
    if (!$this->enabled || !$this->redis) {
      return null;
    }

    $value = $this->redis->get($this->key($key));
    return $value !== false ? json_decode($value, true) : null;
  }

  public function set(string $key, $data, int $ttl = 86400): void
  {
    if (!$this->enabled || !$this->redis) {
      return;
    }

    $this->redis->setex($this->key($key), $ttl, json_encode($data));
  }

  public function delete(string $key): void
  {
    if (!$this->enabled || !$this->redis) {
      return;
    }

    $this->redis->del($this->key($key));
  }

  public function remember(string $key, callable $callback, int $ttl = 86400)
  {
    if (!$this->enabled || !$this->redis) {
      return $callback();
    }

    $cached = $this->get($key);
    if ($cached !== null) {
      return $cached;
    }

    $data = $callback();
    if ($data !== null) {
      $this->set($key, $data, $ttl);
    }

    return $data;
  }

  public function rememberInt(string $key, callable $callback, int $ttl = 86400): ?int
  {
    if (!$this->enabled || !$this->redis) {
      return $callback();
    }

    $raw = $this->redis->get($this->key($key));
    if ($raw !== false) {
      return (int)$raw;
    }

    $value = $callback();
    if ($value !== null) {
      $this->redis->setex($this->key($key), $ttl, $value);
    }

    return $value;
  }

  public function tag(string $tag, string $key): void
  {
    if (!$this->enabled || !$this->redis) {
      return;
    }

    $tagKey = $this->key("tag:$tag");
    $this->redis->sAdd($tagKey, $this->key($key));
  }

  public function flushTag(string $tag): void
  {
    if (!$this->enabled || !$this->redis) {
      return;
    }

    $tagKey = $this->key("tag:$tag");
    $keys = $this->redis->sMembers($tagKey);
    if (!empty($keys)) {
      $this->redis->del(...$keys);
    }
    $this->redis->del($tagKey);
  }
}
