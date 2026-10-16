<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Support\NewsCatalog;
use Illuminate\Contracts\View\View;
use Illuminate\Http\Response;

final class NewsController extends Controller
{
    public function __invoke(): View|Response
    {
        return view('frontend.pages.news', ['articles' => NewsCatalog::all(), 'photoCredits' => NewsCatalog::credits()]);
    }
}
