<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Contracts\View\View;
use Illuminate\Http\Response;

final class ImprovedInvestorCRMController extends Controller
{
    public function __invoke(): View|Response
    {
        return view('backend.pages.improved-investor-crm', ['fixturePage' => 'ImprovedInvestorCRMPage']);
    }
}
