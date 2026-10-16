<?php

use Illuminate\Support\Facades\Route;

Route::get('/', \App\Http\Controllers\Frontend\HomeController::class)->name('frontend.home');
Route::get('/news', \App\Http\Controllers\Frontend\NewsController::class)->name('frontend.news');
Route::get('/news/{id}', \App\Http\Controllers\Frontend\NewsDetailController::class)->name('frontend.news.show');
Route::get('/opportunities', \App\Http\Controllers\Frontend\OpportunitiesController::class)->name('frontend.opportunities');
Route::get('/opportunities/{id}', \App\Http\Controllers\Frontend\ProjectDetailController::class)->name('frontend.opportunities.show');
Route::get('/map', \App\Http\Controllers\Frontend\InvestmentMapController::class)->name('frontend.map');
Route::get('/guide', \App\Http\Controllers\Frontend\InvestorGuideController::class)->name('frontend.guide');
Route::get('/data', \App\Http\Controllers\Frontend\DataStatisticsController::class)->name('frontend.data');
Route::get('/documents', \App\Http\Controllers\Frontend\DocumentsController::class)->name('frontend.documents');
Route::get('/contact', \App\Http\Controllers\Frontend\ContactController::class)->name('frontend.contact');
Route::get('/submit-interest', \App\Http\Controllers\Frontend\SubmitInterestController::class)->name('frontend.submit-interest');
Route::get('/submit-interest/success', \App\Http\Controllers\Frontend\SubmitInterestSuccessController::class)->name('frontend.submit-interest.success');
Route::get('/portal', \App\Http\Controllers\Frontend\ImprovedInvestorPortalController::class)->name('frontend.portal');
Route::get('/portal/applications/{id}', \App\Http\Controllers\Frontend\ApplicationDetailController::class)->name('frontend.portal.applications.show');
Route::get('/admin', \App\Http\Controllers\Backend\ImprovedAdminDashboardController::class)->name('backend.dashboard');
Route::get('/admin/projects', \App\Http\Controllers\Backend\AdminProjectsController::class)->name('backend.projects');
Route::get('/admin/crm', \App\Http\Controllers\Backend\ImprovedInvestorCRMController::class)->name('backend.crm');
Route::get('/admin/applications', \App\Http\Controllers\Backend\AdminApplicationsController::class)->name('backend.applications');
Route::get('/admin/applications/{id}', \App\Http\Controllers\Backend\ImprovedApplicationReviewController::class)->name('backend.applications.show');
Route::get('/admin/map', \App\Http\Controllers\Backend\AdminMapController::class)->name('backend.map');
Route::get('/admin/documents', \App\Http\Controllers\Backend\AdminDocumentsController::class)->name('backend.documents');
Route::get('/admin/statistics', \App\Http\Controllers\Backend\AdminStatisticsController::class)->name('backend.statistics');
Route::get('/admin/news', \App\Http\Controllers\Backend\AdminNewsController::class)->name('backend.news');
Route::get('/admin/cms', \App\Http\Controllers\Backend\AdminCMSController::class)->name('backend.cms');
Route::get('/admin/languages', \App\Http\Controllers\Backend\AdminLanguagesController::class)->name('backend.languages');
Route::get('/admin/users', \App\Http\Controllers\Backend\AdminUsersController::class)->name('backend.users');
Route::get('/admin/activity', \App\Http\Controllers\Backend\AdminActivityController::class)->name('backend.activity');
Route::get('/admin/settings', \App\Http\Controllers\Backend\AdminSettingsController::class)->name('backend.settings');

// Keep the admin catch-all before the public catch-all.
Route::get('/admin/{path}', \App\Http\Controllers\Backend\Admin404Controller::class)->where('path', '.*')->name('backend.not-found');
Route::get('/{path}', \App\Http\Controllers\Frontend\NotFoundController::class)->where('path', '.*')->name('frontend.not-found');
