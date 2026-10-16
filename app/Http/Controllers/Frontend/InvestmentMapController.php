<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Support\ProjectCatalog;
use Illuminate\Contracts\View\View;

final class InvestmentMapController extends Controller
{
    public function __invoke(): View
    {

        return view('frontend.pages.investment-map', ProjectCatalog::data());
    }
}
