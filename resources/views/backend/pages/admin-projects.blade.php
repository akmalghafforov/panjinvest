@extends('backend.layouts.app')
@section('content')
<div x-data="AdminProjectsPage" data-page="AdminProjectsPage">

@include('backend.partials.admin-page-start')
<div class="flex-1">
<div class="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-4 md:px-6 md:py-5 lg:px-8 lg:py-6">
<div class="flex items-center justify-between">
<div>
<h1 class="text-xl md:text-2xl lg:text-3xl font-bold text-[#1F2933]">Investment Projects</h1><p class="text-sm md:text-base text-[#667085] mt-1">Manage and monitor all investment projects</p></div><x-button type="button" class="h-9 px-4 py-2 bg-[#0F8A5F] hover:bg-[#0F8A5F]/90 text-white gap-2 has-[>svg]:px-3"><svg class="h-5 w-5" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Plus&quot;)"></use></svg><span class="hidden sm:inline">Add New Project</span><span class="sm:hidden">Add</span></x-button></div></div>
<div class="p-4 md:p-4 md:p-5 lg:p-6 lg:p-8">
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:p-5 lg:p-6 mb-8">
<template x-for="stat in stats">
<div x-data="({
  get Icon() {
    return stat.icon;
  }
})" class="bg-white rounded-lg border border-gray-200 p-4 md:p-5 lg:p-6">
<div class="flex items-center gap-4">
<div :class="`p-3 rounded-lg ${stat.color}`"><svg class="h-6 w-6" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (Icon)"></use></svg></div>
<div><p class="text-sm text-[#667085]"><span x-text="stat.label"></span></p><p class="text-xl md:text-2xl font-bold text-[#1F2933] mt-1"><span x-text="stat.value"></span></p></div></div></div></template></div>
<div class="bg-white rounded-lg border border-gray-200">
<div class="p-4 md:p-5 lg:p-6 border-b border-gray-200">
<div class="flex gap-4">
<div class="flex-1 relative"><svg class="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#667085]" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Search&quot;)"></use></svg><input type="text" placeholder="Search projects..." class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F8A5F] focus:border-transparent"></div><x-button type="button" class="border bg-background text-foreground hover:bg-accent h-9 px-4 py-2 gap-2 has-[>svg]:px-3"><svg class="h-5 w-5" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Filter&quot;)"></use></svg>Filters </x-button></div></div>
<div class="overflow-x-auto -mx-4 md:mx-0 px-4 md:px-0">
<table class="w-full">
<thead class="bg-gray-50">
<tr>
<th class="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">Project Name </th>
<th class="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">Location </th>
<th class="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">Sector </th>
<th class="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">Investment </th>
<th class="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">Status </th>
<th class="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">Progress </th>
<th class="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">Actions </th></tr></thead>
<tbody class="bg-white divide-y divide-gray-200">
<template x-for="project in projects">
<tr class="hover:bg-gray-50">
<td class="px-6 py-4 whitespace-nowrap">
<div class="flex items-center gap-3">
<div class="p-2 bg-blue-50 rounded-lg"><svg class="h-5 w-5 text-blue-600" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Building2&quot;)"></use></svg></div>
<div><p class="font-medium text-[#1F2933]"><span x-text="project.name"></span></p><p class="text-sm text-[#667085]">ID: PRJ-<span x-text="project.id.toString().padStart(3, '0')"></span></p></div></div></td>
<td class="px-6 py-4 whitespace-nowrap">
<div class="flex items-center gap-2 text-[#667085]"><svg class="h-4 w-4" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;MapPin&quot;)"></use></svg><span class="text-sm"><span x-text="project.location"></span></span></div></td>
<td class="px-6 py-4 whitespace-nowrap"><span class="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm"><span x-text="project.sector"></span></span></td>
<td class="px-6 py-4 whitespace-nowrap font-medium text-[#1F2933]"><span x-text="project.investment"></span></td>
<td class="px-6 py-4 whitespace-nowrap">
@include('components.status-badge', ['scope' => 'StatusBadge(()=>({status:project.status}))'])</td>
<td class="px-6 py-4 whitespace-nowrap">
<div class="flex items-center gap-3">
<div class="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
<div class="h-full bg-[#0F8A5F]" :style="{
  width: `${project.progress}%`
}"></div></div><span class="text-sm text-[#667085] w-12"><span x-text="project.progress"></span>%</span></div></td>
<td class="px-6 py-4 whitespace-nowrap"><x-button type="button" class="border bg-background text-foreground hover:bg-accent h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5">View Details </x-button></td></tr></template></tbody></table></div></div></div></div>

@include('backend.partials.admin-page-end')
</div>
@endsection
