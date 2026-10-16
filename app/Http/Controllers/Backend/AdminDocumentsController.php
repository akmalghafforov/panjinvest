<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Contracts\View\View;
use Illuminate\Http\Response;

final class AdminDocumentsController extends Controller
{
    public function __invoke(): View|Response
    {
        return view('backend.pages.admin-documents', ['fixturePage' => 'AdminDocumentsPage']);
    }
}
