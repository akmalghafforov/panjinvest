<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Contracts\View\View;
use Illuminate\Http\Response;

final class HomeController extends Controller
{
    public function __invoke(): View|Response
    {
        return view('frontend.pages.home', ['fixturePage' => 'HomePage']);
    }
}
