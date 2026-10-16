<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Contracts\View\View;
use Illuminate\Http\Response;

final class AdminNewsController extends Controller
{
    public function __invoke(): View|Response
    {
        return view('backend.pages.admin-news', ['fixturePage' => 'AdminNewsPage']);
    }
}
