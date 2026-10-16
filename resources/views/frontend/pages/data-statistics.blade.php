@extends('frontend.layouts.app')
@section('content')
<div x-data="DataStatisticsPage" data-page="DataStatisticsPage">
<div class="min-h-screen bg-[#F6F8FA]">
<section class="atlas-band text-white py-16">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
<div>
<h1 class="text-4xl md:text-5xl font-bold mb-2">Data & Statistics</h1><p class="text-xl text-white/90">Comprehensive economic and demographic data for Panjakent region </p></div>
<div class="flex gap-3"><button class="px-6 py-3 bg-white text-[#123A63] rounded-sm hover:bg-white/90 transition-colors inline-flex items-center gap-2"><svg class="h-5 w-5" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Download&quot;)"></use></svg>Export PDF </button><button class="px-6 py-3 bg-white text-[#123A63] rounded-sm hover:bg-white/90 transition-colors inline-flex items-center gap-2"><svg class="h-5 w-5" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;FileSpreadsheet&quot;)"></use></svg>Export Excel </button></div></div></div></section>
<section class="bg-white border-b border-gray-200 sticky top-20 z-40">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
<div class="flex flex-col md:flex-row gap-4">
<div class="flex-1"><label class="block text-sm font-medium text-[#1F2933] mb-2">Year</label><select :value="selectedYear" @change="(e =&gt; setSelectedYear(e.target.value))($event)" class="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#123A63] focus:border-transparent"><option value="2025">2025</option><option value="2024">2024</option><option value="2023">2023</option><option value="2022">2022</option><option value="2021">2021</option></select></div>
<div class="flex-1"><label class="block text-sm font-medium text-[#1F2933] mb-2">Sector</label><select :value="selectedSector" @change="(e =&gt; setSelectedSector(e.target.value))($event)" class="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#123A63] focus:border-transparent"><option value="all">All Sectors</option><option value="tourism">Tourism</option><option value="agriculture">Agriculture</option><option value="food">Food Processing</option><option value="logistics">Logistics</option></select></div>
<div class="flex-1"><label class="block text-sm font-medium text-[#1F2933] mb-2">Location</label><select :value="selectedLocation" @change="(e =&gt; setSelectedLocation(e.target.value))($event)" class="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#123A63] focus:border-transparent"><option value="all">All Locations</option><option value="city">Panjakent City</option><option value="seven-lakes">Seven Lakes Region</option><option value="industrial">Industrial Zone</option></select></div></div></div></section>
<section class="py-12">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
<template x-for="(block, index) in dataBlocks">
<div x-data="({
  get Icon() {
    return block.icon;
  }
})" class="bg-white rounded-sm  p-6 border border-gray-100">
<div class="flex items-start justify-between mb-4">
<div :class="`p-3 ${block.color} rounded-sm`"><svg class="h-6 w-6 text-white" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (Icon)"></use></svg></div></div>
<div class="text-3xl font-bold text-[#1F2933] mb-1"><span x-text="block.value"></span></div>
<div class="text-sm text-[#667085] mb-2"><span x-text="block.label"></span></div>
<div class="text-[13px] text-[#667085]"><span x-text="block.change"></span></div></div></template></div>
<div class="bg-white rounded-sm  p-8 border border-gray-100 mb-8">
<div class="flex justify-between items-center mb-6">
<div>
<h2 class="text-2xl font-bold text-[#1F2933] mb-2">Economic Growth Trends</h2><p class="text-[#667085]">GDP, Foreign Investment, and Exports (in millions USD)</p></div></div>
@include('components.chart', ['chartType'=>'LineChart', 'chartData'=>'economicData'])</div>
<div class="grid lg:grid-cols-2 gap-8 mb-8">
<div class="bg-white rounded-sm  p-8 border border-gray-100">
<h2 class="text-2xl font-bold text-[#1F2933] mb-6">Investment by Sector</h2>
@include('components.chart', ['chartType'=>'PieChart', 'chartData'=>'sectorData'])<div class="mt-6 space-y-2">
<template x-for="(sector, index) in sectorData">
<div class="flex items-center justify-between p-3 bg-gray-50 rounded-sm">
<div class="flex items-center gap-3">
<div class="w-4 h-4 rounded-sm" :style="{
  backgroundColor: sector.color
}"></div><span class="text-sm text-[#1F2933]"><span x-text="sector.name"></span></span></div><span class="text-sm font-semibold text-[#1F2933]"><span x-text="sector.value"></span>%</span></div></template></div></div>
<div class="bg-white rounded-sm  p-8 border border-gray-100">
<h2 class="text-2xl font-bold text-[#1F2933] mb-6">Tourism Visitors (2025)</h2>
@include('components.chart', ['chartType'=>'BarChart', 'chartData'=>'monthlyVisitors'])</div></div>
<div class="bg-white rounded-sm  overflow-hidden border border-gray-100 mb-8">
<div class="p-8 border-b border-gray-200">
<h2 class="text-2xl font-bold text-[#1F2933]">Infrastructure Overview</h2></div>
<div class="overflow-x-auto">
<table class="w-full">
<thead class="bg-gray-50">
<tr>
<th class="px-6 py-4 text-left text-sm font-semibold text-[#1F2933]">Infrastructure</th>
<th class="px-6 py-4 text-left text-sm font-semibold text-[#1F2933]">Coverage</th>
<th class="px-6 py-4 text-left text-sm font-semibold text-[#1F2933]">Status</th>
<th class="px-6 py-4 text-left text-sm font-semibold text-[#1F2933]">Details</th></tr></thead>
<tbody class="divide-y divide-gray-200">
<tr>
<td class="px-6 py-4 text-sm text-[#1F2933]">Electricity</td>
<td class="px-6 py-4 text-sm font-semibold text-[#1F2933]">99%</td>
<td class="px-6 py-4"><span class="px-3 py-1 bg-green-100 text-green-700 text-[13px] rounded-sm">Excellent</span></td>
<td class="px-6 py-4 text-sm text-[#667085]">Reliable grid, industrial capacity available</td></tr>
<tr>
<td class="px-6 py-4 text-sm text-[#1F2933]">Water Supply</td>
<td class="px-6 py-4 text-sm font-semibold text-[#1F2933]">95%</td>
<td class="px-6 py-4"><span class="px-3 py-1 bg-green-100 text-green-700 text-[13px] rounded-sm">Excellent</span></td>
<td class="px-6 py-4 text-sm text-[#667085]">Clean mountain water, abundant supply</td></tr>
<tr>
<td class="px-6 py-4 text-sm text-[#1F2933]">Road Network</td>
<td class="px-6 py-4 text-sm font-semibold text-[#1F2933]">88%</td>
<td class="px-6 py-4"><span class="px-3 py-1 bg-green-100 text-green-700 text-[13px] rounded-sm">Good</span></td>
<td class="px-6 py-4 text-sm text-[#667085]">Connection to M34 highway</td></tr>
<tr>
<td class="px-6 py-4 text-sm text-[#1F2933]">Internet/Telecom</td>
<td class="px-6 py-4 text-sm font-semibold text-[#1F2933]">72%</td>
<td class="px-6 py-4"><span class="px-3 py-1 bg-yellow-100 text-yellow-700 text-[13px] rounded-sm">Developing</span></td>
<td class="px-6 py-4 text-sm text-[#667085]">4G coverage, fiber expansion underway</td></tr>
<tr>
<td class="px-6 py-4 text-sm text-[#1F2933]">Airport Access</td>
<td class="px-6 py-4 text-sm font-semibold text-[#1F2933]">Regional</td>
<td class="px-6 py-4"><span class="px-3 py-1 bg-blue-100 text-[#123A63] text-[13px] rounded-sm">Available</span></td>
<td class="px-6 py-4 text-sm text-[#667085]">Dushanbe Airport 280km (4 hours drive)</td></tr></tbody></table></div></div>
<div class="bg-white rounded-sm  p-8 border border-gray-100">
<h2 class="text-2xl font-bold text-[#1F2933] mb-6">Top Export Products (2025)</h2>
<div class="grid md:grid-cols-4 gap-6">
<div class="text-center p-4 bg-[#F6F8FA] rounded-sm">
<div class="text-2xl font-bold text-[#123A63] mb-1">$12M</div>
<div class="text-sm text-[#667085]">Dried Fruits</div></div>
<div class="text-center p-4 bg-[#F6F8FA] rounded-sm">
<div class="text-2xl font-bold text-[#123A63] mb-1">$8M</div>
<div class="text-sm text-[#667085]">Fresh Produce</div></div>
<div class="text-center p-4 bg-[#F6F8FA] rounded-sm">
<div class="text-2xl font-bold text-[#123A63] mb-1">$5M</div>
<div class="text-sm text-[#667085]">Honey Products</div></div>
<div class="text-center p-4 bg-[#F6F8FA] rounded-sm">
<div class="text-2xl font-bold text-[#123A63] mb-1">$3M</div>
<div class="text-sm text-[#667085]">Handicrafts</div></div></div></div></div></section></div>
</div>
@endsection
