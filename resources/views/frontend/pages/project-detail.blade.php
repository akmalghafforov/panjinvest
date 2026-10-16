@extends('frontend.layouts.app')
@section('content')
<div x-data="ProjectDetailPage" data-page="ProjectDetailPage">
<div class="min-h-screen bg-[#F6F8FA]">
<div class="bg-white border-b border-gray-200">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4"><a href="{{ route('frontend.opportunities') }}" class="inline-flex items-center gap-2 text-[#123A63] hover:text-[#0F8A5F] transition-colors"><svg class="h-5 w-5" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;ArrowLeft&quot;)"></use></svg>Back to Opportunities </a></div></div>
<section class="relative h-96 overflow-hidden"><img :src="assetUrl(project.image)" :alt="project.title" class="w-full h-full object-cover">
<div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div class="absolute bottom-0 left-0 right-0 p-8">
<div class="max-w-7xl mx-auto">
<div class="flex gap-2 mb-4"><span class="px-4 py-2 bg-[#123A63] text-white text-sm rounded-full"><span x-text="project.sector"></span></span><span class="px-4 py-2 bg-[#0F8A5F] text-white text-sm rounded-full"><span x-text="project.status"></span></span></div>
<h1 class="text-4xl md:text-5xl font-bold text-white mb-2"><span x-text="project.title"></span></h1><p class="text-xl text-white/90"><span x-text="project.location"></span></p></div></div></section>
<section class="py-12">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="grid lg:grid-cols-3 gap-8">
<div class="lg:col-span-2 space-y-8">
<div class="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
<h2 class="text-2xl font-bold text-[#1F2933] mb-4">Project Overview</h2><p class="text-[#667085] leading-relaxed"><span x-text="project.description"></span></p></div>
<div class="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
<h2 class="text-2xl font-bold text-[#1F2933] mb-6">Financial Overview</h2>
<div class="grid md:grid-cols-2 gap-6">
<template x-for="(item, index) in project.financials">
<div class="flex justify-between items-center p-4 bg-[#F6F8FA] rounded-lg"><span class="text-[#667085]"><span x-text="item.label"></span></span><span class="font-semibold text-[#1F2933]"><span x-text="item.value"></span></span></div></template></div></div>
<div class="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
<h2 class="text-2xl font-bold text-[#1F2933] mb-6">Infrastructure Availability</h2>
<div class="grid md:grid-cols-2 gap-4">
<template x-for="(item, index) in project.infrastructure">
<div class="flex items-center gap-3 p-4 bg-[#F6F8FA] rounded-lg">
<template x-if="Boolean(item.available)"><svg class="h-5 w-5 text-[#0F8A5F] flex-shrink-0" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;CheckCircle2&quot;)"></use></svg></template>
<template x-if="Boolean(!(item.available))"><svg class="h-5 w-5 text-[#667085] flex-shrink-0" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;XCircle&quot;)"></use></svg></template><span :class="item.available ? &quot;text-[#1F2933]&quot; : &quot;text-[#667085]&quot;"><span x-text="item.name"></span></span></div></template></div></div>
<div class="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
<h2 class="text-2xl font-bold text-[#1F2933] mb-6">Location</h2>
<div class="h-64 bg-gradient-to-br from-[#123A63]/5 to-[#0F8A5F]/5 rounded-lg flex items-center justify-center">
<div class="text-center"><svg class="h-12 w-12 text-[#123A63] mx-auto mb-4" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;MapPin&quot;)"></use></svg><p class="text-[#667085]">Interactive map view</p></div></div></div>
<div class="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
<h2 class="text-2xl font-bold text-[#1F2933] mb-6">Photo Gallery</h2>
<div class="grid grid-cols-2 gap-4">
<template x-for="(image, index) in project.gallery">
<div class="h-48 rounded-lg overflow-hidden"><img :src="assetUrl(image)" :alt="`Gallery ${index + 1}`" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"></div></template></div></div></div>
<div class="space-y-6">
<div class="bg-white rounded-xl shadow-sm p-6 border border-gray-100 sticky top-24">
<h3 class="text-lg font-semibold text-[#1F2933] mb-4">Take Action</h3>
<div class="space-y-3"><a :href="url(`/submit-interest?project=${id}`)" class="w-full px-6 py-3 bg-[#0F8A5F] text-white rounded-lg hover:bg-[#0F8A5F]/90 transition-colors inline-flex items-center justify-center gap-2"><svg class="h-5 w-5" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;FileText&quot;)"></use></svg>Submit Interest in This Project </a><button class="w-full px-6 py-3 border-2 border-[#123A63] text-[#123A63] rounded-lg hover:bg-[#123A63]/5 transition-colors inline-flex items-center justify-center gap-2"><svg class="h-5 w-5" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Download&quot;)"></use></svg>Download Investment Brief </button><a href="{{ route('frontend.contact') }}" class="w-full px-6 py-3 border border-gray-300 text-[#1F2933] rounded-lg hover:bg-gray-50 transition-colors inline-flex items-center justify-center gap-2"><svg class="h-4 w-4" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Phone&quot;)"></use></svg>Book Consultation </a><button class="w-full px-6 py-3 border border-gray-300 text-[#1F2933] rounded-lg hover:bg-gray-50 transition-colors inline-flex items-center justify-center gap-2"><svg class="h-4 w-4" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Mail&quot;)"></use></svg>Ask a Question </button></div>
<div class="mt-6 pt-6 border-t border-gray-200 space-y-4">
<div class="flex items-start gap-3"><svg class="h-5 w-5 text-[#123A63] mt-0.5" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;DollarSign&quot;)"></use></svg>
<div>
<div class="text-sm text-[#667085]">Investment Range</div>
<div class="font-semibold text-[#1F2933]"><span x-text="project.investment"></span></div></div></div>
<div class="flex items-start gap-3"><svg class="h-5 w-5 text-[#123A63] mt-0.5" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;TrendingUp&quot;)"></use></svg>
<div>
<div class="text-sm text-[#667085]">Expected ROI</div>
<div class="font-semibold text-[#0F8A5F]"><span x-text="project.roi"></span></div></div></div>
<div class="flex items-start gap-3"><svg class="h-5 w-5 text-[#123A63] mt-0.5" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Calendar&quot;)"></use></svg>
<div>
<div class="text-sm text-[#667085]">Timeline</div>
<div class="font-semibold text-[#1F2933]"><span x-text="project.timeline"></span></div></div></div>
<div class="flex items-start gap-3"><svg class="h-5 w-5 text-[#123A63] mt-0.5" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;MapPin&quot;)"></use></svg>
<div>
<div class="text-sm text-[#667085]">Land Size</div>
<div class="font-semibold text-[#1F2933]"><span x-text="project.land"></span></div></div></div>
<div class="flex items-start gap-3"><svg class="h-5 w-5 text-[#123A63] mt-0.5" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Building2&quot;)"></use></svg>
<div>
<div class="text-sm text-[#667085]">Project Stage</div>
<div class="font-semibold text-[#1F2933]"><span x-text="project.stage"></span></div></div></div>
<div class="flex items-start gap-3"><svg class="h-5 w-5 text-[#123A63] mt-0.5" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Users&quot;)"></use></svg>
<div>
<div class="text-sm text-[#667085]">Responsible Department</div>
<div class="font-semibold text-[#1F2933] text-sm"><span x-text="project.department"></span></div></div></div></div>
<div class="mt-6 pt-6 border-t border-gray-200 space-y-3">
<div class="flex items-center gap-2 text-sm"><svg class="h-4 w-4 text-[#0F8A5F]" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;CheckCircle2&quot;)"></use></svg><span class="text-[#667085]">Verified by government</span></div>
<div class="flex items-center gap-2 text-sm"><svg class="h-4 w-4 text-[#667085]" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Clock&quot;)"></use></svg><span class="text-[#667085]">Last updated: January 2026</span></div></div></div>
<div class="bg-gradient-to-br from-[#123A63] to-[#0F8A5F] rounded-xl shadow-sm p-6 text-white">
<h3 class="text-lg font-semibold mb-4">Government Contact</h3>
<div class="space-y-4">
<div>
<div class="text-white/80 text-sm">Department</div>
<div class="font-medium"><span x-text="project.department"></span></div></div>
<div class="border-t border-white/20 pt-4">
<div class="text-white/80 text-sm mb-2">Contact Person</div>
<div class="font-semibold mb-1"><span x-text="project.contact.name"></span></div>
<div class="text-white/90 text-sm mb-3"><span x-text="project.contact.position"></span></div>
<div class="space-y-2">
<div class="flex items-center gap-2 text-sm"><svg class="h-4 w-4" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Phone&quot;)"></use></svg><span><span x-text="project.contact.phone"></span></span></div>
<div class="flex items-center gap-2 text-sm"><svg class="h-4 w-4" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Mail&quot;)"></use></svg><span><span x-text="project.contact.email"></span></span></div></div></div></div></div></div></div>
<div class="mt-16">
<h2 class="text-3xl font-bold text-[#1F2933] mb-8">Similar Opportunities</h2>
<div class="grid md:grid-cols-2 gap-8">
<template x-for="similarProject in similarProjects"><a :href="url(`/opportunities/${similarProject.id}`)" class="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden border border-gray-100 group">
<div class="flex">
<div class="w-40 h-40 flex-shrink-0"><img :src="assetUrl(similarProject.image)" :alt="similarProject.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"></div>
<div class="p-6 flex-1"><span class="px-3 py-1 bg-[#123A63]/10 text-[#123A63] text-xs rounded-full"><span x-text="similarProject.sector"></span></span>
<h3 class="text-lg font-semibold text-[#1F2933] mt-3 mb-2 group-hover:text-[#123A63] transition-colors"><span x-text="similarProject.title"></span></h3>
<div class="text-sm text-[#667085] flex items-center gap-2"><svg class="h-4 w-4" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;TrendingUp&quot;)"></use></svg><span x-text="similarProject.investment"></span></div></div></div></a></template></div></div></div></section></div>
</div>
@endsection
