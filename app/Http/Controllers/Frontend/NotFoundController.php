<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Contracts\View\View;
use Illuminate\Http\Response;

final class NotFoundController extends Controller
{
    public function __invoke(): View|Response
    {
        return response()->view('frontend.pages.not-found', [], 404);
    }
}
