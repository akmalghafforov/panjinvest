@extends('backend.layouts.app')
@section('content')
<div x-data="AdminCMSPage" data-page="AdminCMSPage">

@include('backend.partials.admin-page-start')
<div class="flex-1">
<div class="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-4 md:px-6 md:py-5 lg:px-8 lg:py-6">
<div class="flex items-center justify-between">
<div>
<h1 class="text-xl md:text-2xl font-bold text-[#1F2933]">Pages / CMS</h1><p class="text-[#667085] mt-1">Manage website content and pages</p></div><x-button type="button" class="h-9 px-4 py-2 bg-[#0F8A5F] hover:bg-[#0F8A5F]/90 text-white gap-2 has-[>svg]:px-3"><svg class="h-5 w-5" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Plus&quot;)"></use></svg>Create New Page </x-button></div></div>
<div class="p-4 md:p-4 md:p-5 lg:p-6 lg:p-8">
<div class="grid grid-cols-1 md:grid-cols-4 gap-4 md:p-5 lg:p-6 mb-8">
<template x-for="stat in stats">
<div class="bg-white rounded-lg border border-gray-200 p-4 md:p-5 lg:p-6"><p class="text-sm text-[#667085]"><span x-text="stat.label"></span></p><p :class="`text-xl md:text-2xl lg:text-3xl font-bold mt-2 ${stat.color}`"><span x-text="stat.value"></span></p></div></template></div>
<div class="bg-white rounded-lg border border-gray-200">
<div class="p-4 md:p-5 lg:p-6 border-b border-gray-200">
<div class="flex gap-4">
<div class="flex-1 relative"><svg class="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#667085]" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Search&quot;)"></use></svg><input type="text" placeholder="Search pages..." class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F8A5F] focus:border-transparent"></div><select class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F8A5F]"><option>All Status</option><option>Published</option><option>Draft</option></select><select class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F8A5F]"><option>All Languages</option><option>English</option><option>Tajik</option><option>Russian</option></select></div></div>
<div class="overflow-x-auto -mx-4 md:mx-0 px-4 md:px-0">
<table class="w-full">
<thead class="bg-gray-50">
<tr>
<th class="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">Page Title </th>
<th class="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">URL Slug </th>
<th class="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">Status </th>
<th class="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">Language </th>
<th class="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">Last Modified </th>
<th class="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">Modified By </th>
<th class="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">Actions </th></tr></thead>
<tbody class="bg-white divide-y divide-gray-200">
<template x-for="page in pages">
<tr class="hover:bg-gray-50">
<td class="px-6 py-4">
<div class="flex items-center gap-3">
<div class="p-2 bg-purple-50 rounded-lg"><svg class="h-5 w-5 text-purple-600" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;FileCode&quot;)"></use></svg></div><p class="font-medium text-[#1F2933]"><span x-text="page.title"></span></p></div></td>
<td class="px-6 py-4 whitespace-nowrap">
<div class="flex items-center gap-2 text-[#667085]"><svg class="h-4 w-4" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Globe&quot;)"></use></svg><code class="text-sm"><span x-text="page.slug"></span></code></div></td>
<td class="px-6 py-4 whitespace-nowrap"><span :class="`px-3 py-1 rounded-full text-sm ${page.status === &quot;published&quot; ? &quot;bg-green-50 text-green-700&quot; : &quot;bg-yellow-50 text-yellow-700&quot;}`"><span x-text="page.status.charAt(0).toUpperCase() + page.status.slice(1)"></span></span></td>
<td class="px-6 py-4 whitespace-nowrap"><span class="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"><span x-text="page.language"></span></span></td>
<td class="px-6 py-4 whitespace-nowrap text-[#667085]"><span x-text="page.lastModified"></span></td>
<td class="px-6 py-4 whitespace-nowrap text-[#667085]"><span x-text="page.modifiedBy"></span></td>
<td class="px-6 py-4 whitespace-nowrap">
<div class="flex gap-2"><x-button type="button" class="border bg-background text-foreground hover:bg-accent h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5"><svg class="h-4 w-4" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Eye&quot;)"></use></svg></x-button><x-button type="button" class="border bg-background text-foreground hover:bg-accent h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5"><svg class="h-4 w-4" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Edit&quot;)"></use></svg></x-button><x-button type="button" class="border bg-background text-foreground hover:bg-accent h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5"><svg class="h-4 w-4 text-red-500" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Trash2&quot;)"></use></svg></x-button></div></td></tr></template></tbody></table></div></div></div></div>

@include('backend.partials.admin-page-end')
</div>
@endsection
