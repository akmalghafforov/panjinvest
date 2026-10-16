@extends('backend.layouts.app')
@section('content')
<div x-data="AdminMapPage" data-page="AdminMapPage">

@include('backend.partials.admin-page-start')
<div class="flex-1">
<div class="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-4 md:px-6 md:py-5 lg:px-8 lg:py-6">
<div class="flex items-center justify-between">
<div>
<h1 class="text-xl md:text-2xl font-bold text-[#1F2933]">Map Objects & Land Plots</h1><p class="text-[#667085] mt-1">Manage investment locations and land parcels</p></div><x-button type="button" class="h-9 px-4 py-2 bg-[#0F8A5F] hover:bg-[#0F8A5F]/90 text-white gap-2 has-[>svg]:px-3"><svg class="h-5 w-5" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Plus&quot;)"></use></svg>Add New Plot </x-button></div></div>
<div class="p-4 md:p-4 md:p-5 lg:p-6 lg:p-8">
<div class="grid grid-cols-1 lg:grid-cols-4 gap-4 md:p-5 lg:p-6 mb-8">
<template x-for="cat in categories"><button @click="(() =&gt; setSelectedCategory(cat.id))($event)" :class="`p-4 md:p-5 lg:p-6 rounded-lg border-2 transition-all ${selectedCategory === cat.id ? &quot;border-[#0F8A5F] bg-[#0F8A5F]/5&quot; : &quot;border-gray-200 bg-white hover:border-gray-300&quot;}`"><p class="text-sm text-[#667085]"><span x-text="cat.label"></span></p><p class="text-xl md:text-2xl lg:text-3xl font-bold text-[#1F2933] mt-2"><span x-text="cat.count"></span></p></button></template></div>
<div class="grid grid-cols-1 lg:grid-cols-3 gap-4 md:p-4 md:p-5 lg:p-6 lg:p-8">
<div class="lg:col-span-2">
<div class="bg-white rounded-lg border border-gray-200 p-4 md:p-5 lg:p-6">
<div class="flex items-center justify-between mb-6">
<h2 class="text-lg font-semibold text-[#1F2933]">Interactive Map</h2><x-button type="button" class="border bg-background text-foreground hover:bg-accent h-8 rounded-md px-3 gap-2 has-[>svg]:px-2.5"><svg class="h-4 w-4" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Maximize2&quot;)"></use></svg>Fullscreen </x-button></div>
<div class="aspect-video bg-gradient-to-br from-green-50 to-blue-50 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
<div class="text-center"><svg class="h-16 w-16 text-[#667085] mx-auto mb-4" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Map&quot;)"></use></svg><p class="text-[#667085]">Interactive Map View</p><p class="text-sm text-[#667085] mt-2">Map integration would display here </p></div></div></div></div>
<div class="bg-white rounded-lg border border-gray-200 p-4 md:p-5 lg:p-6">
<h2 class="text-lg font-semibold text-[#1F2933] mb-4">Quick Filters</h2>
<div class="space-y-4">
<div><label class="block text-sm font-medium text-[#667085] mb-2">Zoning Type </label><select class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F8A5F]"><option>All Types</option><option>Industrial</option><option>Commercial</option><option>Agricultural</option><option>Technology</option></select></div>
<div><label class="block text-sm font-medium text-[#667085] mb-2">Area Range </label><select class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F8A5F]"><option>All Sizes</option><option>0-50 hectares</option><option>50-100 hectares</option><option>100+ hectares</option></select></div>
<div><label class="block text-sm font-medium text-[#667085] mb-2">Location </label><select class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F8A5F]"><option>All Locations</option><option>City Center</option><option>North District</option><option>South District</option><option>Rural Areas</option></select></div><x-button type="button" class="h-9 px-4 py-2 w-full bg-[#123A63] hover:bg-[#123A63]/90 text-white has-[>svg]:px-3">Apply Filters </x-button></div></div></div>
<div class="bg-white rounded-lg border border-gray-200 mt-8">
<div class="p-4 md:p-5 lg:p-6 border-b border-gray-200">
<div class="relative"><svg class="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#667085]" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Search&quot;)"></use></svg><input type="text" placeholder="Search land plots..." class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F8A5F] focus:border-transparent"></div></div>
<div class="overflow-x-auto -mx-4 md:mx-0 px-4 md:px-0">
<table class="w-full">
<thead class="bg-gray-50">
<tr>
<th class="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">Plot ID </th>
<th class="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">Name </th>
<th class="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">Area </th>
<th class="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">Location </th>
<th class="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">Zoning </th>
<th class="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">Status </th>
<th class="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">Price </th>
<th class="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">Actions </th></tr></thead>
<tbody class="bg-white divide-y divide-gray-200">
<template x-for="plot in landPlots">
<tr class="hover:bg-gray-50">
<td class="px-6 py-4 whitespace-nowrap font-medium text-[#1F2933]"><span x-text="plot.id"></span></td>
<td class="px-6 py-4 whitespace-nowrap text-[#1F2933]"><span x-text="plot.name"></span></td>
<td class="px-6 py-4 whitespace-nowrap text-[#667085]"><span x-text="plot.area"></span></td>
<td class="px-6 py-4 whitespace-nowrap">
<div class="flex items-center gap-2 text-[#667085]"><svg class="h-4 w-4" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;MapPin&quot;)"></use></svg><span x-text="plot.location"></span></div></td>
<td class="px-6 py-4 whitespace-nowrap"><span class="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm"><span x-text="plot.zoning"></span></span></td>
<td class="px-6 py-4 whitespace-nowrap"><span :class="`px-3 py-1 rounded-full text-sm ${plot.status === &quot;available&quot; ? &quot;bg-green-50 text-green-700&quot; : plot.status === &quot;reserved&quot; ? &quot;bg-yellow-50 text-yellow-700&quot; : &quot;bg-gray-100 text-gray-700&quot;}`"><span x-text="plot.status.charAt(0).toUpperCase() + plot.status.slice(1)"></span></span></td>
<td class="px-6 py-4 whitespace-nowrap font-medium text-[#1F2933]"><span x-text="plot.price"></span></td>
<td class="px-6 py-4 whitespace-nowrap">
<div class="flex gap-2"><x-button type="button" class="border bg-background text-foreground hover:bg-accent h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5"><svg class="h-4 w-4" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Edit&quot;)"></use></svg></x-button><x-button type="button" class="border bg-background text-foreground hover:bg-accent h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5"><svg class="h-4 w-4 text-red-500" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Trash2&quot;)"></use></svg></x-button></div></td></tr></template></tbody></table></div></div></div></div>

@include('backend.partials.admin-page-end')
</div>
@endsection
