<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Contracts\View\View;
use Illuminate\Http\Response;

final class OpportunitiesController extends Controller
{
    public function __invoke(): View|Response
    {
        return view('frontend.pages.opportunities', ['fixturePage' => 'OpportunitiesPage']);
    }
}
