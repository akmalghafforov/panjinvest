<?php

namespace Tests\Feature;

use PHPUnit\Framework\Attributes\DataProvider;
use Tests\TestCase;

class PageRoutesTest extends TestCase
{
    public static function pages(): array
    {
        $cases = [];
        foreach (json_decode(file_get_contents(__DIR__.'/../route-matrix.json'), true) as $route) {
            $cases[$route['name']] = [$route];
        }
        return $cases;
    }

    #[DataProvider('pages')]
    public function test_page_renders_in_its_layout(array $route): void
    {
        $this->get(str_replace('{id}', 'example-slug', $route['path']))
            ->assertOk()
            ->assertViewIs($route['view'])
            ->assertSee('data-layout="'.$route['layout'].'"', false)
            ->assertSee('data-page="'.$route['page'].'"', false)
            ->assertSee('Invest Panjakent')
            ->assertSee($route['content'], false);
    }

    public function test_scoped_unknown_paths(): void
    {
        $this->get('/unknown/nested')->assertNotFound()->assertViewIs('frontend.pages.not-found')->assertSee('data-layout="frontend"', false);
        $this->get('/admin/unknown/nested')->assertNotFound()->assertViewIs('backend.pages.admin404')->assertSee('data-layout="backend"', false);
    }

    public function test_detail_parameters_and_generated_links(): void
    {
        foreach (['123', 'eco-lodge-seven-lakes'] as $id) {
            foreach (['frontend.opportunities.show', 'frontend.portal.applications.show', 'backend.applications.show'] as $name) {
                $url = route($name, ['id'=>$id], false);
                $this->get($url)->assertOk()->assertSee($id);
            }
        }
        $this->assertSame('/submit-interest?project=eco-lodge', route('frontend.submit-interest', ['project'=>'eco-lodge'], false));
        $this->get('/')->assertSee('__PARAM__')->assertSee('window.pageRoutes', false);
    }

    public function test_query_prefill_is_safely_serialized(): void
    {
        $value = '</script><script>alert("x")</script>';
        $this->get('/submit-interest?'.http_build_query(['project'=>$value]))
            ->assertOk()->assertDontSee($value, false)->assertSee('window.pageContext', false)->assertSee('u003C', false);
        $this->get('/portal/applications/'.rawurlencode('<img-onerror=alert(1)>'))
            ->assertOk()->assertDontSee('<img-onerror=alert(1)>', false)->assertSee('u003C', false);
    }

    public function test_demo_does_not_accept_submission_requests(): void
    {
        $this->post('/submit-interest', [])->assertStatus(405);
        $this->post('/contact', [])->assertStatus(405);
    }
}
