<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Contracts\View\View;
use Illuminate\Http\Response;

final class AdminProjectsController extends Controller
{
    public function __invoke(): View|Response
    {
        return view('backend.pages.admin-projects', ['fixturePage' => 'AdminProjectsPage']);
    }
}
