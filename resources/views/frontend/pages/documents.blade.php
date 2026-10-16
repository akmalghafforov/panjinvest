@extends('frontend.layouts.app')
@section('content')
<div x-data="DocumentsPage" data-page="DocumentsPage">
<div class="min-h-screen bg-[#F6F8FA]">
<section class="atlas-band text-white py-16">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h1 class="text-4xl md:text-5xl font-bold mb-4">Documents & Downloads</h1><p class="text-xl text-white/90 max-w-3xl">Access guides, regulations, templates, and essential documents for investors </p></div></section>
<section class="bg-white border-b border-gray-200 sticky top-20 z-40">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
<div class="flex flex-col lg:flex-row gap-4">
<div class="flex-1 relative"><svg class="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#667085]" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Search&quot;)"></use></svg><input type="text" placeholder="Search documents..." :value="searchQuery" @input="(e =&gt; setSearchQuery(e.target.value))($event)" class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#123A63] focus:border-transparent"></div>
<div class="flex items-center gap-4"><select :value="selectedCategory" @change="(e =&gt; setSelectedCategory(e.target.value))($event)" class="px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#123A63] focus:border-transparent">
<template x-for="category in categories"><option :value="category"><span x-text="category"></span></option></template></select></div></div>
<div class="mt-4 text-sm text-[#667085]">Showing <span x-text="filteredDocuments.length"></span> of <span x-text="documents.length"></span> documents </div></div></section>
<section class="py-12">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="document-rows">
<template x-for="(doc, index) in filteredDocuments">
<div class="bg-white rounded-sm  p-6 border border-gray-100 hover:shadow-md transition-shadow">
<div class="flex items-start gap-4 mb-4">
<div class="p-3 bg-[#123A63]/10 rounded-sm"><svg class="h-6 w-6 text-[#123A63]" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;FileText&quot;)"></use></svg></div>
<div class="flex-1"><span class="px-2 py-1 bg-[#0F8A5F]/10 text-[#667085] text-[13px] rounded-sm"><span x-text="doc.category"></span></span></div></div>
<h3 class="text-lg font-semibold text-[#1F2933] mb-2"><span x-text="doc.title"></span></h3><p class="text-sm text-[#667085] mb-4"><span x-text="doc.description"></span></p>
<div class="grid grid-cols-2 gap-2 text-[13px] text-[#667085] mb-4">
<div><span class="font-medium">Type:</span> <span x-text="doc.type"></span></div>
<div><span class="font-medium">Size:</span> <span x-text="doc.size"></span></div>
<div><span class="font-medium">Pages:</span> <span x-text="doc.pages"></span></div>
<div><span class="font-medium">Language:</span> <span x-text="doc.language"></span></div>
<div class="col-span-2"><span class="font-medium">Updated:</span> <span x-text="doc.date"></span></div></div><button class="w-full px-4 py-3 bg-[#0F8A5F] text-white rounded-sm hover:bg-[#0F8A5F]/90 transition-colors inline-flex items-center justify-center gap-2"><svg class="h-4 w-4" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Download&quot;)"></use></svg>Download PDF </button></div></template></div></div></section></div>
</div>
@endsection
