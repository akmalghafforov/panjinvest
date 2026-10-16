<?php

namespace App\Support;

final class NewsCatalog
{
    public static function all(): array
    {
        $articles = json_decode(file_get_contents(resource_path('data/news.json')), true, 512, JSON_THROW_ON_ERROR);
        usort($articles, fn (array $a, array $b) => strcmp($b['date'], $a['date']) ?: strcmp($a['id'], $b['id']));

        return $articles;
    }

    public static function find(string $id): ?array
    {
        foreach (self::all() as $article) {
            if ($article['id'] === $id) {
                return $article;
            }
        }

        return null;
    }

    public static function credits(): array
    {
        return json_decode(file_get_contents(public_path('images/concepts/credits.json')), true, 512, JSON_THROW_ON_ERROR);
    }
}
