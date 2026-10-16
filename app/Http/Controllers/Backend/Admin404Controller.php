<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Contracts\View\View;
use Illuminate\Http\Response;

final class Admin404Controller extends Controller
{
    public function __invoke(): View|Response
    {
        return response()->view('backend.pages.admin404', [], 404);
    }
}
