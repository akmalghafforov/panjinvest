@php
    $fixtures = json_decode(file_get_contents(resource_path('fixtures/pages.json')), true);
    $shared = ['Header','TopBar','Footer','AdminSidebar','StatusBadge','Timeline','FormStepper','FileUploadCard','ProjectCard','ApplicationCard','EmptyState'];
    $fixtures = array_intersect_key($fixtures, array_flip([...$shared, $fixturePage ?? '']));
    $pageRoutes = [];
    foreach (Route::getRoutes() as $route) {
        if ($route->getName() && !str_contains($route->uri(), '{path}')) {
            $path = '/'.ltrim($route->uri(), '/');
            $pageRoutes[$path] = route($route->getName(), str_contains($path, '{id}') ? ['id' => '__PARAM__'] : [], false);
        }
    }
@endphp
<script>
window.pageFallbacks = {{ Illuminate\Support\Js::from(['frontend'=>route('frontend.not-found', ['path'=>'__PATH__'], false), 'backend'=>route('backend.not-found', ['path'=>'__PATH__'], false)]) }};
window.pageRoutes = {{ Illuminate\Support\Js::from($pageRoutes) }};
window.presentationFixtures = {{ Illuminate\Support\Js::from($fixtures) }};
window.pageContext = {{ Illuminate\Support\Js::from(['id' => request()->route('id'), 'project' => request()->query('project')]) }};
</script>
