<?php

namespace App\Support;

final class ProjectCatalog
{
    public static function all(): array
    {
        return json_decode(file_get_contents(resource_path('data/projects.json')), true, 512, JSON_THROW_ON_ERROR);
    }

    public static function find(string $id): ?array
    {
        foreach (self::all() as $p) {
            if ($p['id'] === $id) {
                return $p;
            }
        }

return null;
    }

    public static function data(): array
    {
        return ['projects' => self::all(), 'statistics' => json_decode(file_get_contents(resource_path('data/statistics.json')), true), 'photoCredits' => json_decode(file_get_contents(public_path('images/concepts/credits.json')), true), 'mapConfig' => config('investment-map')];
    }
}
