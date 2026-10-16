<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Support\ProjectCatalog;
use App\Support\NewsCatalog;
use Illuminate\Contracts\View\View;

final class HomeController extends Controller
{
    public function __invoke(): View
    {

        return view('frontend.pages.home', ProjectCatalog::data() + ['latestNews' => array_slice(NewsCatalog::all(), 0, 3)]);
    }
}
