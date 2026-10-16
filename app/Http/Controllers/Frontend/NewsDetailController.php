<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Support\NewsCatalog;
use Illuminate\Contracts\View\View;
use Illuminate\Http\Response;

final class NewsDetailController extends Controller
{
    public function __invoke(string $id): View|Response
    {
        $article = NewsCatalog::find($id);
        if ($article === null) {
            return response()->view('frontend.pages.not-found', [], 404);
        }

        return view('frontend.pages.news-detail', ['article' => $article, 'photoCredits' => NewsCatalog::credits()]);
    }
}
