@extends('backend.layouts.app')
@section('content')
<div x-data="AdminDocumentsPage" data-page="AdminDocumentsPage">

@include('backend.partials.admin-page-start')
<div class="flex-1">
<div class="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-4 md:px-6 md:py-5 lg:px-8 lg:py-6">
<div class="flex items-center justify-between">
<div>
<h1 class="text-xl md:text-2xl font-bold text-[#1F2933]">Documents</h1><p class="text-[#667085] mt-1">Manage investment-related documents and resources</p></div><x-button type="button" class="h-9 px-4 py-2 bg-[#0F8A5F] hover:bg-[#0F8A5F]/90 text-white gap-2 has-[>svg]:px-3"><svg class="h-5 w-5" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Upload&quot;)"></use></svg>Upload Document </x-button></div></div>
<div class="p-4 md:p-4 md:p-5 lg:p-6 lg:p-8">
<div class="grid grid-cols-1 md:grid-cols-5 gap-4 md:p-5 lg:p-6 mb-8">
<template x-for="category in categories">
<div class="bg-white rounded-lg border border-gray-200 p-4 md:p-5 lg:p-6"><p class="text-sm text-[#667085] mb-2"><span x-text="category.name"></span></p><p :class="`text-xl md:text-2xl font-bold ${category.color}`"><span x-text="category.count"></span></p></div></template></div>
<div class="bg-white rounded-lg border border-gray-200">
<div class="p-4 md:p-5 lg:p-6 border-b border-gray-200">
<div class="flex gap-4">
<div class="flex-1 relative"><svg class="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#667085]" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Search&quot;)"></use></svg><input type="text" placeholder="Search documents..." class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F8A5F] focus:border-transparent"></div><x-button type="button" class="border bg-background text-foreground hover:bg-accent h-9 px-4 py-2 gap-2 has-[>svg]:px-3"><svg class="h-5 w-5" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Filter&quot;)"></use></svg>Filters </x-button></div></div>
<div class="overflow-x-auto -mx-4 md:mx-0 px-4 md:px-0">
<table class="w-full">
<thead class="bg-gray-50">
<tr>
<th class="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">Document Name </th>
<th class="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">Category </th>
<th class="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">Size </th>
<th class="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">Uploaded By </th>
<th class="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">Upload Date </th>
<th class="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">Downloads </th>
<th class="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">Actions </th></tr></thead>
<tbody class="bg-white divide-y divide-gray-200">
<template x-for="doc in documents">
<tr class="hover:bg-gray-50">
<td class="px-6 py-4">
<div class="flex items-center gap-3">
<div class="p-2 bg-blue-50 rounded-lg"><svg class="h-5 w-5 text-blue-600" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;FileText&quot;)"></use></svg></div>
<div><p class="font-medium text-[#1F2933]"><span x-text="doc.name"></span></p><p class="text-sm text-[#667085]"><span x-text="doc.type"></span></p></div></div></td>
<td class="px-6 py-4 whitespace-nowrap"><span class="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm"><span x-text="doc.category"></span></span></td>
<td class="px-6 py-4 whitespace-nowrap text-[#667085]"><span x-text="doc.size"></span></td>
<td class="px-6 py-4 whitespace-nowrap text-[#667085]"><span x-text="doc.uploadedBy"></span></td>
<td class="px-6 py-4 whitespace-nowrap text-[#667085]"><span x-text="doc.uploadedDate"></span></td>
<td class="px-6 py-4 whitespace-nowrap text-[#667085]"><span x-text="doc.downloads"></span></td>
<td class="px-6 py-4 whitespace-nowrap">
<div class="flex gap-2"><x-button type="button" class="border bg-background text-foreground hover:bg-accent h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5"><svg class="h-4 w-4" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Eye&quot;)"></use></svg></x-button><x-button type="button" class="border bg-background text-foreground hover:bg-accent h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5"><svg class="h-4 w-4" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Download&quot;)"></use></svg></x-button><x-button type="button" class="border bg-background text-foreground hover:bg-accent h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5"><svg class="h-4 w-4 text-red-500" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Trash2&quot;)"></use></svg></x-button></div></td></tr></template></tbody></table></div></div></div></div>

@include('backend.partials.admin-page-end')
</div>
@endsection
