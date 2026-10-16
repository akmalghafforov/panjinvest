@extends('frontend.layouts.app')
@section('content')
<div x-data="HomePage" data-page="HomePage">
<div class="bg-[#F6F8FA]">
<section class="relative bg-gradient-to-br from-[#123A63] to-[#0F8A5F] text-white py-20 overflow-hidden">
<div class="absolute inset-0 opacity-10">
<div class="absolute inset-0" :style="{
  backgroundImage: `url(&quot;data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E&quot;)`
}"></div></div>
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
<div class="text-center max-w-4xl mx-auto">
<h1 class="text-5xl md:text-6xl font-bold mb-6">Invest in Panjakent </h1><p class="text-xl md:text-2xl text-white/90 mb-8">Gateway to tourism, agriculture, logistics, regional trade, food processing, and sustainable growth in Tajikistan. </p>
<div class="flex flex-col sm:flex-row gap-4 justify-center"><a href="{{ route('frontend.opportunities') }}" class="px-8 py-4 bg-[#0F8A5F] text-white rounded-lg hover:bg-[#0F8A5F]/90 transition-colors inline-flex items-center justify-center gap-2"><svg class="h-5 w-5" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;FileText&quot;)"></use></svg>Submit Investment Interest </a><a href="{{ route('frontend.opportunities') }}" class="px-8 py-4 bg-white text-[#123A63] rounded-lg hover:bg-white/90 transition-colors inline-flex items-center justify-center gap-2">View Opportunities </a><a href="{{ route('frontend.guide') }}" class="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2"><svg class="h-5 w-5" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Download&quot;)"></use></svg>Download Investor Guide </a></div></div></div></section>
<section class="bg-white shadow-lg -mt-10 relative z-10">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
<template x-for="(stat, index) in stats">
<div x-data="({
  get Icon() {
    return stat.icon;
  }
})" class="text-center">
<div class="flex justify-center mb-3">
<div class="p-3 bg-[#123A63]/10 rounded-lg"><svg class="h-6 w-6 text-[#123A63]" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (Icon)"></use></svg></div></div>
<div class="text-2xl font-bold text-[#123A63] mb-1"><span x-text="stat.value"></span></div>
<div class="text-sm text-[#667085]"><span x-text="stat.label"></span></div></div></template></div></div></section>
<section class="py-20">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="text-center mb-12">
<h2 class="text-4xl font-bold text-[#1F2933] mb-4">Why Panjakent?</h2><p class="text-lg text-[#667085] max-w-2xl mx-auto">Discover the competitive advantages that make Panjakent an ideal investment destination </p></div>
<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
<template x-for="(advantage, index) in advantages">
<div x-data="({
  get Icon() {
    return advantage.icon;
  }
})" class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
<div class="p-3 bg-[#0F8A5F]/10 rounded-lg w-fit mb-4"><svg class="h-6 w-6 text-[#0F8A5F]" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (Icon)"></use></svg></div>
<h3 class="text-xl font-semibold text-[#1F2933] mb-2"><span x-text="advantage.title"></span></h3><p class="text-[#667085]"><span x-text="advantage.description"></span></p></div></template></div></div></section>
<section class="py-20 bg-white">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="flex justify-between items-end mb-12">
<div>
<h2 class="text-4xl font-bold text-[#1F2933] mb-4">Featured Investment Opportunities</h2><p class="text-lg text-[#667085]">Explore high-priority projects ready for investment</p></div><a href="{{ route('frontend.opportunities') }}" class="hidden md:flex items-center gap-2 text-[#123A63] hover:text-[#0F8A5F] transition-colors">View All Projects <svg class="h-5 w-5" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;ArrowRight&quot;)"></use></svg></a></div>
<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
<template x-for="project in featuredProjects"><a :href="url(`/opportunities/${project.id}`)" class="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden border border-gray-100 group">
<div class="h-48 overflow-hidden"><img :src="assetUrl(project.image)" :alt="project.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"></div>
<div class="p-6">
<div class="flex gap-2 mb-3"><span class="px-3 py-1 bg-[#123A63]/10 text-[#123A63] text-xs rounded-full"><span x-text="project.sector"></span></span></div>
<h3 class="text-xl font-semibold text-[#1F2933] mb-2 group-hover:text-[#123A63] transition-colors"><span x-text="project.title"></span></h3>
<div class="space-y-2 text-sm text-[#667085] mb-4">
<div class="flex items-center gap-2"><svg class="h-4 w-4" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;MapPin&quot;)"></use></svg><span><span x-text="project.location"></span></span></div>
<div class="flex items-center gap-2"><svg class="h-4 w-4" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;TrendingUp&quot;)"></use></svg><span><span x-text="project.investment"></span></span></div></div>
<div class="flex gap-2"><button class="flex-1 px-4 py-2 bg-[#0F8A5F] text-white rounded-lg hover:bg-[#0F8A5F]/90 transition-colors text-sm">View Project </button><button class="px-4 py-2 border border-gray-300 text-[#1F2933] rounded-lg hover:bg-gray-50 transition-colors text-sm"><svg class="h-4 w-4" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Download&quot;)"></use></svg></button></div></div></a></template></div>
<div class="mt-8 text-center md:hidden"><a href="{{ route('frontend.opportunities') }}" class="inline-flex items-center gap-2 text-[#123A63] hover:text-[#0F8A5F] transition-colors">View All Projects <svg class="h-5 w-5" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;ArrowRight&quot;)"></use></svg></a></div></div></section>
<section class="py-20">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="text-center mb-12">
<h2 class="text-4xl font-bold text-[#1F2933] mb-4">Interactive Investment Map</h2><p class="text-lg text-[#667085] max-w-2xl mx-auto">Explore investment opportunities by location and sector </p></div>
<div class="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
<div class="h-96 bg-gradient-to-br from-[#123A63]/5 to-[#0F8A5F]/5 flex items-center justify-center"><a href="{{ route('frontend.map') }}" class="px-8 py-4 bg-[#123A63] text-white rounded-lg hover:bg-[#123A63]/90 transition-colors inline-flex items-center gap-2"><svg class="h-5 w-5" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Map&quot;)"></use></svg>Explore Interactive Map </a></div></div></div></section>
<section class="py-20 bg-white">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="text-center mb-12">
<h2 class="text-4xl font-bold text-[#1F2933] mb-4">Priority Sectors</h2><p class="text-lg text-[#667085] max-w-2xl mx-auto">Key industries with high growth potential and government support </p></div>
<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
<template x-for="(sector, index) in sectors">
<div x-data="({
  get Icon() {
    return sector.icon;
  }
})" class="bg-white p-6 rounded-xl border-2 border-gray-100 hover:border-[#0F8A5F] transition-colors">
<div :class="`p-3 ${sector.color} rounded-lg w-fit mb-4`"><svg class="h-6 w-6 text-white" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (Icon)"></use></svg></div>
<h3 class="text-xl font-semibold text-[#1F2933] mb-2"><span x-text="sector.name"></span></h3><p class="text-[#667085] text-sm"><span x-text="sector.description"></span></p></div></template></div></div></section>
<section class="py-20">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="text-center mb-12">
<h2 class="text-4xl font-bold text-[#1F2933] mb-4">Your Investment Journey</h2><p class="text-lg text-[#667085] max-w-2xl mx-auto">A clear path from interest to successful operation </p></div>
<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
<template x-for="step in journeySteps">
<div class="relative bg-white p-6 rounded-xl shadow-sm border border-gray-100">
<div class="absolute -top-4 -left-4 w-12 h-12 bg-[#D6A536] rounded-full flex items-center justify-center shadow-lg"><span class="text-white font-bold"><span x-text="step.step"></span></span></div>
<div class="mt-4">
<h3 class="text-lg font-semibold text-[#1F2933] mb-2"><span x-text="step.title"></span></h3><p class="text-sm text-[#667085]"><span x-text="step.description"></span></p></div></div></template></div></div></section>
<section class="py-20 bg-white">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="text-center mb-12">
<h2 class="text-4xl font-bold text-[#1F2933] mb-4">Data & Statistics</h2><p class="text-lg text-[#667085] max-w-2xl mx-auto">Access comprehensive economic and demographic data </p></div>
<div class="bg-gradient-to-br from-[#123A63] to-[#0F8A5F] rounded-xl shadow-lg p-8 text-white">
<div class="grid md:grid-cols-3 gap-8 mb-8">
<div>
<div class="text-4xl font-bold mb-2">$120M</div>
<div class="text-white/80">Regional GDP</div></div>
<div>
<div class="text-4xl font-bold mb-2">15%</div>
<div class="text-white/80">Annual Growth Rate</div></div>
<div>
<div class="text-4xl font-bold mb-2">8,500+</div>
<div class="text-white/80">Active Businesses</div></div></div><a href="{{ route('frontend.data') }}" class="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#123A63] rounded-lg hover:bg-white/90 transition-colors"><svg class="h-5 w-5" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;BarChart3&quot;)"></use></svg>View Full Dashboard </a></div></div></section>
<section class="py-20">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="text-center mb-12">
<h2 class="text-4xl font-bold text-[#1F2933] mb-4">Essential Documents</h2><p class="text-lg text-[#667085] max-w-2xl mx-auto">Download guides, regulations, and templates for investors </p></div>
<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
<template x-for="(doc, index) in [{
  name: &quot;Investor Guide 2026&quot;,
  size: &quot;2.4 MB&quot;
}, {
  name: &quot;Legal Framework&quot;,
  size: &quot;1.8 MB&quot;
}, {
  name: &quot;Tax Incentives Guide&quot;,
  size: &quot;1.2 MB&quot;
}, {
  name: &quot;Application Templates&quot;,
  size: &quot;890 KB&quot;
}]">
<div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"><svg class="h-10 w-10 text-[#123A63] mb-4" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;FileText&quot;)"></use></svg>
<h3 class="font-semibold text-[#1F2933] mb-2"><span x-text="doc.name"></span></h3><p class="text-sm text-[#667085] mb-4"><span x-text="doc.size"></span></p><button class="w-full px-4 py-2 bg-[#0F8A5F] text-white rounded-lg hover:bg-[#0F8A5F]/90 transition-colors text-sm inline-flex items-center justify-center gap-2"><svg class="h-4 w-4" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Download&quot;)"></use></svg>Download </button></div></template></div></div></section>
<section class="py-20 bg-white">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="text-center mb-12">
<h2 class="text-4xl font-bold text-[#1F2933] mb-4">Success Stories</h2><p class="text-lg text-[#667085] max-w-2xl mx-auto">Learn from investors who have already succeeded in Panjakent </p></div>
<div class="grid md:grid-cols-2 gap-8">
<div class="bg-gradient-to-br from-[#123A63]/5 to-[#0F8A5F]/5 p-8 rounded-xl border border-gray-100">
<div class="flex items-start gap-4 mb-4">
<div class="p-3 bg-[#D6A536] rounded-full"><svg class="h-6 w-6 text-white" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;CheckCircle2&quot;)"></use></svg></div>
<div>
<h3 class="text-xl font-semibold text-[#1F2933] mb-2">Mountain View Eco-Lodge</h3><p class="text-sm text-[#667085] mb-4">Turkish investor | Tourism Sector</p><p class="text-[#667085]">"The support from local authorities and the streamlined process made our eco-lodge dream a reality. We're now hosting visitors from across the region." </p></div></div></div>
<div class="bg-gradient-to-br from-[#123A63]/5 to-[#0F8A5F]/5 p-8 rounded-xl border border-gray-100">
<div class="flex items-start gap-4 mb-4">
<div class="p-3 bg-[#D6A536] rounded-full"><svg class="h-6 w-6 text-white" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;CheckCircle2&quot;)"></use></svg></div>
<div>
<h3 class="text-xl font-semibold text-[#1F2933] mb-2">Golden Valley Dried Fruits</h3><p class="text-sm text-[#667085] mb-4">Iranian investor | Food Processing</p><p class="text-[#667085]">"Access to high-quality local fruits and export support helped us build a thriving dried fruit export business serving markets in Russia and Kazakhstan." </p></div></div></div></div></div></section>
<section class="py-20 bg-gradient-to-br from-[#123A63] to-[#0F8A5F] text-white">
<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 class="text-4xl font-bold mb-6">Ready to Invest in Panjakent?</h2><p class="text-xl text-white/90 mb-8">Our investment facilitation team is ready to guide you through every step of your investment journey. </p>
<div class="flex flex-col sm:flex-row gap-4 justify-center"><a href="{{ route('frontend.opportunities') }}" class="px-8 py-4 bg-white text-[#123A63] rounded-lg hover:bg-white/90 transition-colors inline-flex items-center justify-center gap-2"><svg class="h-5 w-5" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;FileText&quot;)"></use></svg>Submit Investment Interest </a><a href="{{ route('frontend.contact') }}" class="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2">Contact Investment Team </a></div></div></section></div>
</div>
@endsection
