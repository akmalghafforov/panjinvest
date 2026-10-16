<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Contracts\View\View;
use Illuminate\Http\Response;

final class InvestorGuideController extends Controller
{
    public function __invoke(): View|Response
    {
        return view('frontend.pages.investor-guide', ['fixturePage' => 'InvestorGuidePage']);
    }
}
