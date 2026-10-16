@extends('backend.layouts.app')
@section('content')
<div x-data="AdminLanguagesPage" data-page="AdminLanguagesPage">

@include('backend.partials.admin-page-start')
<div class="flex-1">
<div class="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-4 md:px-6 md:py-5 lg:px-8 lg:py-6">
<div class="flex items-center justify-between">
<div>
<h1 class="text-xl md:text-2xl font-bold text-[#1F2933]">Languages</h1><p class="text-[#667085] mt-1">Manage translations and language settings</p></div><x-button type="button" class="h-9 px-4 py-2 bg-[#0F8A5F] hover:bg-[#0F8A5F]/90 text-white gap-2 has-[>svg]:px-3"><svg class="h-5 w-5" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Plus&quot;)"></use></svg>Add Language </x-button></div></div>
<div class="p-4 md:p-4 md:p-5 lg:p-6 lg:p-8">
<div class="bg-white rounded-lg border border-gray-200 mb-8">
<div class="p-4 md:p-5 lg:p-6 border-b border-gray-200">
<h2 class="text-lg font-semibold text-[#1F2933]">Available Languages</h2></div>
<div class="p-4 md:p-5 lg:p-6">
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:p-5 lg:p-6">
<template x-for="lang in languages">
<div :class="`p-4 md:p-5 lg:p-6 rounded-lg border-2 transition-all ${lang.isActive ? &quot;border-[#0F8A5F] bg-[#0F8A5F]/5&quot; : &quot;border-gray-200 bg-white&quot;}`">
<div class="flex items-start justify-between mb-4">
<div class="flex items-center gap-3"><span class="text-4xl"><span x-text="lang.flag"></span></span>
<div>
<h3 class="font-semibold text-[#1F2933]"><span x-text="lang.name"></span></h3><p class="text-sm text-[#667085]"><span x-text="lang.code.toUpperCase()"></span></p></div></div>
<div class="flex flex-col gap-2">
<template x-if="Boolean(lang.isDefault)"><span class="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs font-medium">Default </span></template>
<template x-if="Boolean(lang.isActive)"><svg class="h-5 w-5 text-green-600" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Check&quot;)"></use></svg></template>
<template x-if="Boolean(!(lang.isActive))"><svg class="h-5 w-5 text-gray-400" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;X&quot;)"></use></svg></template></div></div>
<div class="mb-4">
<div class="flex items-center justify-between text-sm mb-2"><span class="text-[#667085]">Translation Progress</span><span class="font-medium text-[#1F2933]"><span x-text="lang.translationProgress"></span>%</span></div>
<div class="h-2 bg-gray-200 rounded-full overflow-hidden">
<div class="h-full bg-[#0F8A5F]" :style="{
  width: `${lang.translationProgress}%`
}"></div></div></div><p class="text-sm text-[#667085] mb-4">Last updated: <span x-text="lang.lastUpdated"></span></p>
<div class="flex gap-2"><x-button type="button" class="border bg-background text-foreground hover:bg-accent h-8 rounded-md gap-1.5 px-3 flex-1 has-[>svg]:px-2.5"><svg class="h-4 w-4 mr-1" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Edit&quot;)"></use></svg>Edit </x-button><button type="button" :class="lang.isActive ? &quot;text-red-600&quot; : &quot;text-green-600&quot;">
<template x-if="Boolean(lang.isActive)"><span x-text="&quot;Disable&quot;"></span></template>
<template x-if="Boolean(!(lang.isActive))"><span x-text="&quot;Enable&quot;"></span></template></button></div></div></template></div></div></div>
<div class="bg-white rounded-lg border border-gray-200">
<div class="p-4 md:p-5 lg:p-6 border-b border-gray-200">
<div class="flex items-center justify-between">
<h2 class="text-lg font-semibold text-[#1F2933]">Translation Keys</h2><x-button type="button" class="border bg-background text-foreground hover:bg-accent h-9 px-4 py-2 gap-2 has-[>svg]:px-3"><svg class="h-5 w-5" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Plus&quot;)"></use></svg>Add Translation Key </x-button></div></div>
<div class="p-4 md:p-5 lg:p-6 border-b border-gray-200">
<div class="flex gap-4">
<div class="flex-1 relative"><svg class="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#667085]" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Search&quot;)"></use></svg><input type="text" placeholder="Search translation keys..." class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F8A5F] focus:border-transparent"></div><select class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F8A5F]"><option>All Categories</option><option>Common</option><option>Navigation</option><option>Buttons</option><option>Forms</option></select></div></div>
<div class="overflow-x-auto -mx-4 md:mx-0 px-4 md:px-0">
<table class="w-full">
<thead class="bg-gray-50">
<tr>
<th class="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">Key </th>
<th class="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">Category </th>
<th class="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">English </th>
<th class="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">Tajik </th>
<th class="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">Russian </th>
<th class="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">Actions </th></tr></thead>
<tbody class="bg-white divide-y divide-gray-200">
<template x-for="(item, index) in translationKeys">
<tr class="hover:bg-gray-50">
<td class="px-6 py-4 whitespace-nowrap"><code class="text-sm text-[#1F2933] bg-gray-100 px-2 py-1 rounded"><span x-text="item.key"></span></code></td>
<td class="px-6 py-4 whitespace-nowrap"><span class="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm"><span x-text="item.category"></span></span></td>
<td class="px-6 py-4 text-[#667085]"><span x-text="item.en"></span></td>
<td class="px-6 py-4 text-[#667085]"><span x-text="item.tj"></span></td>
<td class="px-6 py-4 text-[#667085]"><span x-text="item.ru"></span></td>
<td class="px-6 py-4 whitespace-nowrap"><x-button type="button" class="border bg-background text-foreground hover:bg-accent h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5"><svg class="h-4 w-4" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Edit&quot;)"></use></svg></x-button></td></tr></template></tbody></table></div></div></div></div>

@include('backend.partials.admin-page-end')
</div>
@endsection
