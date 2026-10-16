<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Support\ProjectCatalog;
use Illuminate\Contracts\View\View;

final class ProjectDetailController extends Controller
{
    public function __invoke(string $id): View
    {
        $project = ProjectCatalog::find($id);
        abort_unless($project, 404);

        return view('frontend.pages.project-detail', ProjectCatalog::data() + ['project' => $project]);
    }
}
