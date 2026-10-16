<?php

namespace Tests\Feature;

use App\Support\NewsCatalog;
use Tests\TestCase;

class NewsTest extends TestCase
{
    public function test_news_listing_details_and_home_preview(): void
    {
        $articles = NewsCatalog::all();
        $this->assertCount(3, $articles);
        $dates = array_column($articles, 'date');
        $sorted = $dates;
        rsort($sorted);
        $this->assertSame($sorted, $dates);
        $listing = $this->get('/news')->assertOk()->assertSeeInOrder(array_column($articles, 'title'));
        $home = $this->get('/')->assertOk()->assertSee('Latest news')->assertSeeInOrder(array_column($articles, 'title'));
        foreach ($articles as $article) {
            $url = route('frontend.news.show', ['id' => $article['id']], false);
            $listing->assertSee($url);
            $home->assertSee($url);
            $this->get($url)->assertOk()->assertSee($article['title'])->assertSee('Sample article.')->assertSee('Back to news')->assertSee('Photography credits');
            $this->assertFileExists(public_path('images/concepts/'.$article['image'].'-960.webp'));
        }
        $this->get('/news/missing')->assertNotFound()->assertViewIs('frontend.pages.not-found');
    }

    private function withArticles(array $articles, callable $check): void
    {
        $path = resource_path('data/news.json');
        $original = file_get_contents($path);
        try {
            file_put_contents($path, json_encode($articles));
            $check();
        } finally {
            file_put_contents($path, $original);
        }
    }

    public function test_empty_catalog(): void
    {
        $this->withArticles([], function () {
            $this->get('/news')->assertOk()->assertSee('No news yet');
            $this->get('/')->assertOk()->assertDontSee('Latest news')->assertDontSee('news-card');
            $this->get('/news/exploring-thoughtful-tourism')->assertNotFound();
        });
    }

    public function test_order_lookup_and_safe_escaping(): void
    {
        $articles = array_reverse(NewsCatalog::all());
        $unsafe = '<script>alert("news")</script>';
        $articles[0]['title'] = $unsafe;
        $articles[0]['excerpt'] = $unsafe;
        $articles[0]['body'] = [$unsafe];
        $this->withArticles($articles, function () use ($articles, $unsafe) {
            $this->assertSame('2026-10-03', NewsCatalog::all()[0]['date']);
            $this->assertSame($articles[0], NewsCatalog::find($articles[0]['id']));
            foreach (['/', '/news', '/news/'.$articles[0]['id']] as $url) {
                $this->get($url)->assertOk()->assertDontSee($unsafe, false)->assertSee(e($unsafe), false);
            }
        });
    }
}
