@extends('backend.layouts.app')
@section('content')
<div x-data="AdminStatisticsPage" data-page="AdminStatisticsPage">

@include('backend.partials.admin-page-start')
<div class="flex-1">
<div class="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-4 md:px-6 md:py-5 lg:px-8 lg:py-6">
<div class="flex items-center justify-between">
<div>
<h1 class="text-xl md:text-2xl font-bold text-[#1F2933]">Statistics & Analytics</h1><p class="text-[#667085] mt-1">Track performance metrics and insights</p></div>
<div class="flex gap-3"><select class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F8A5F]"><option>Last 30 Days</option><option>Last 3 Months</option><option>Last 6 Months</option><option>Last Year</option></select><x-button type="button" class="border bg-background text-foreground hover:bg-accent h-9 px-4 py-2 has-[>svg]:px-3">Export Report</x-button></div></div></div>
<div class="p-4 md:p-4 md:p-5 lg:p-6 lg:p-8">
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:p-5 lg:p-6 mb-8">
<template x-for="kpi in kpiData">
<div x-data="({
  get Icon() {
    return kpi.icon;
  },
  get TrendIcon() {
    return kpi.trend === &quot;up&quot; ? &quot;TrendingUp&quot; : &quot;TrendingDown&quot;;
  }
})" class="bg-white rounded-lg border border-gray-200 p-4 md:p-5 lg:p-6">
<div class="flex items-center justify-between mb-4">
<div :class="`p-3 rounded-lg ${kpi.color}`"><svg class="h-6 w-6" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (Icon)"></use></svg></div>
<div :class="`flex items-center gap-1 text-sm ${kpi.trend === &quot;up&quot; ? &quot;text-green-600&quot; : &quot;text-red-600&quot;}`"><svg class="h-4 w-4" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (TrendIcon)"></use></svg><span><span x-text="kpi.change"></span></span></div></div><p class="text-sm text-[#667085]"><span x-text="kpi.label"></span></p><p class="text-xl md:text-2xl font-bold text-[#1F2933] mt-1"><span x-text="kpi.value"></span></p></div></template></div>
<div class="grid grid-cols-1 lg:grid-cols-2 gap-4 md:p-4 md:p-5 lg:p-6 lg:p-8 mb-8">
<div class="bg-white rounded-lg border border-gray-200 p-4 md:p-5 lg:p-6">
<h2 class="text-lg font-semibold text-[#1F2933] mb-6">Investment by Sector</h2>
<div class="space-y-4">
<template x-for="sector in sectorData">
<div>
<div class="flex items-center justify-between mb-2"><span class="text-sm font-medium text-[#1F2933]"><span x-text="sector.name"></span></span><span class="text-sm text-[#667085]"><span x-text="sector.amount"></span></span></div>
<div class="h-3 bg-gray-100 rounded-full overflow-hidden">
<div :class="`h-full ${sector.color}`" :style="{
  width: `${sector.value}%`
}"></div></div>
<div class="flex items-center justify-between mt-1"><span class="text-xs text-[#667085]"><span x-text="sector.value"></span>%</span></div></div></template></div></div>
<div class="bg-white rounded-lg border border-gray-200 p-4 md:p-5 lg:p-6">
<h2 class="text-lg font-semibold text-[#1F2933] mb-6">Monthly Trends</h2>
<div class="space-y-6">
<div>
<h3 class="text-sm font-medium text-[#667085] mb-3">Applications vs Investments</h3>
<div class="h-48 flex items-end gap-4">
<template x-for="data in monthlyData">
<div class="flex-1">
<div class="flex gap-1 items-end h-32 mb-2">
<div class="flex-1 bg-blue-500 rounded-t" :style="{
  height: `${data.applications / 25 * 100}%`
}" :title="`Applications: ${data.applications}`"></div>
<div class="flex-1 bg-green-500 rounded-t" :style="{
  height: `${data.investments / 25 * 100}%`
}" :title="`Investments: ${data.investments}`"></div></div><p class="text-xs text-center text-[#667085]"><span x-text="data.month"></span></p></div></template></div>
<div class="flex items-center justify-center gap-4 md:p-5 lg:p-6 mt-4">
<div class="flex items-center gap-2">
<div class="w-3 h-3 bg-blue-500 rounded"></div><span class="text-xs text-[#667085]">Applications</span></div>
<div class="flex items-center gap-2">
<div class="w-3 h-3 bg-green-500 rounded"></div><span class="text-xs text-[#667085]">Investments</span></div></div></div></div></div></div>
<div class="bg-white rounded-lg border border-gray-200 p-4 md:p-5 lg:p-6">
<h2 class="text-lg font-semibold text-[#1F2933] mb-6">Investment Amount by Month</h2>
<div class="h-64 flex items-end gap-4 md:p-4 md:p-5 lg:p-6 lg:p-8 px-4">
<template x-for="data in monthlyData">
<div class="flex-1 flex flex-col items-center">
<div class="w-full bg-gradient-to-t from-[#0F8A5F] to-[#0F8A5F]/60 rounded-t-lg transition-all hover:from-[#0F8A5F]/80 hover:to-[#0F8A5F]/40" :style="{
  height: `${data.amount / 8 * 100}%`
}">
<div class="flex items-start justify-center pt-2"><span class="text-xs font-medium text-white">$<span x-text="data.amount"></span>M</span></div></div><p class="text-sm text-[#667085] mt-3"><span x-text="data.month"></span></p></div></template></div></div></div></div>

@include('backend.partials.admin-page-end')
</div>
@endsection
