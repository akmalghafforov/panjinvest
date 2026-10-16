@extends('backend.layouts.app')
@section('content')
<div x-data="ImprovedAdminDashboardPage" data-page="ImprovedAdminDashboardPage">

@include('backend.partials.admin-page-start')
<div class="flex-1 overflow-auto">
<header class="bg-white border-b border-gray-200 sticky top-0 z-10">
<div class="px-4 py-4 md:px-6 md:py-5 lg:px-8 lg:py-6">
<h1 class="text-xl md:text-2xl lg:text-3xl font-bold text-[#1F2933]">Dashboard</h1><p class="text-[#667085] mt-1">Welcome back, Farrukh</p></div></header>
<main class="p-4 md:p-4 md:p-5 lg:p-6 lg:p-8">
<div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 md:p-5 lg:p-6 mb-8">
<template x-for="(stat, index) in stats">
<div x-data="({
  get Icon() {
    return stat.icon;
  }
})" class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-5 lg:p-6">
<div class="flex items-center justify-between mb-4">
<div :class="`p-3 ${stat.bgColor} rounded-lg`"><svg :class="`h-6 w-6 ${stat.color}`" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (Icon)"></use></svg></div></div>
<div class="text-xl md:text-2xl lg:text-3xl font-bold text-[#1F2933] mb-1"><span x-text="stat.value"></span></div>
<div class="text-sm text-[#667085]"><span x-text="stat.label"></span></div></div></template></div>
<div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-4 md:p-5 lg:p-6 lg:p-8 mb-8">
<h2 class="text-2xl font-semibold text-[#1F2933] mb-6">Lead Pipeline</h2>
<div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
<template x-for="(stage, index) in pipeline">
<div class="text-center">
<div :class="`${stage.color} text-white rounded-lg p-4 mb-2`">
<div class="text-xl md:text-2xl lg:text-3xl font-bold"><span x-text="stage.count"></span></div></div>
<div class="text-xs text-[#667085] font-medium"><span x-text="stage.stage"></span></div></div></template></div></div>
<div class="grid lg:grid-cols-3 gap-4 md:p-4 md:p-5 lg:p-6 lg:p-8">
<div class="lg:col-span-2">
<div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
<div class="p-4 md:p-5 lg:p-6 border-b border-gray-200 flex items-center justify-between">
<h2 class="text-xl font-semibold text-[#1F2933]">Recent Applications</h2><a href="{{ route('backend.applications') }}"><x-button type="button" class="border bg-background text-foreground hover:bg-accent h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5">View All</x-button></a></div>
<div class="overflow-x-auto -mx-4 md:mx-0 px-4 md:px-0">
<table class="w-full">
<thead class="bg-gray-50 border-b border-gray-200">
<tr>
<th class="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase">Investor</th>
<th class="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase">Project</th>
<th class="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase">Amount</th>
<th class="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase">Status</th>
<th class="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase">Officer</th>
<th class="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase">Action</th></tr></thead>
<tbody class="divide-y divide-gray-200">
<template x-for="app in recentApplications">
<tr class="hover:bg-gray-50">
<td class="px-6 py-4">
<div>
<div class="font-medium text-[#1F2933]"><span x-text="app.investorName"></span></div>
<div class="text-sm text-[#667085]"><span x-text="app.country"></span></div></div></td>
<td class="px-6 py-4">
<div class="text-sm text-[#1F2933]"><span x-text="app.project"></span></div>
<div class="text-xs text-[#667085]"><span x-text="app.sector"></span></div></td>
<td class="px-6 py-4 text-sm font-semibold text-[#1F2933]"><span x-text="app.investmentAmount"></span></td>
<td class="px-6 py-4">
@include('components.status-badge', ['scope' => 'StatusBadge(()=>({variant:"application",status:app.status,label:app.status.replace(/-/g, " ")}))'])</td>
<td class="px-6 py-4 text-sm text-[#1F2933]"><span x-text="app.officer"></span></td>
<td class="px-6 py-4"><a :href="url(`/admin/applications/${app.id}`)"><x-button type="button" class="hover:bg-accent h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5"><svg class="h-4 w-4" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Eye&quot;)"></use></svg></x-button></a></td></tr></template></tbody></table></div></div></div>
<div>
<div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-5 lg:p-6 mb-6">
<h2 class="text-xl font-semibold text-[#1F2933] mb-6">Upcoming Meetings</h2>
<div class="space-y-4">
<template x-for="meeting in upcomingMeetings">
<div class="border border-gray-200 rounded-lg p-4">
<div class="font-semibold text-[#1F2933] mb-2"><span x-text="meeting.investor"></span></div>
<div class="text-sm text-[#667085] mb-3"><span x-text="meeting.project"></span></div>
<div class="flex items-center gap-2 text-xs text-[#667085] mb-2"><svg class="h-3 w-3" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Calendar&quot;)"></use></svg><span x-text="meeting.date"></span> at <span x-text="meeting.time"></span></div>
<div class="flex items-center gap-2 text-xs text-[#667085]"><svg class="h-3 w-3" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;CheckCircle2&quot;)"></use></svg><span x-text="meeting.type"></span></div></div></template></div></div>
<div class="bg-gradient-to-br from-[#123A63] to-[#0F8A5F] rounded-xl shadow-sm p-4 md:p-5 lg:p-6 text-white">
<h2 class="text-lg font-semibold mb-4">Quick Actions</h2>
<div class="space-y-3"><a href="{{ route('backend.not-found', ['path' => 'applications/new']) }}"><x-button type="button" class="border h-9 px-4 py-2 w-full bg-white/10 border-white/20 text-white hover:bg-white/20 has-[>svg]:px-3"><svg class="h-4 w-4 mr-2" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;FileText&quot;)"></use></svg>New Application </x-button></a><a href="{{ route('backend.crm') }}"><x-button type="button" class="border h-9 px-4 py-2 w-full bg-white/10 border-white/20 text-white hover:bg-white/20 has-[>svg]:px-3"><svg class="h-4 w-4 mr-2" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Users&quot;)"></use></svg>View All Investors </x-button></a><a href="{{ route('backend.projects') }}"><x-button type="button" class="border h-9 px-4 py-2 w-full bg-white/10 border-white/20 text-white hover:bg-white/20 has-[>svg]:px-3"><svg class="h-4 w-4 mr-2" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Building2&quot;)"></use></svg>Manage Projects </x-button></a></div></div></div></div></main></div>

@include('backend.partials.admin-page-end')
</div>
@endsection
