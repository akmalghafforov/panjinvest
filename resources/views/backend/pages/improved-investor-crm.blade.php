@extends('backend.layouts.app')
@section('content')
<div x-data="ImprovedInvestorCRMPage" data-page="ImprovedInvestorCRMPage">

@include('backend.partials.admin-page-start')
<div class="flex-1 overflow-auto">
<header class="bg-white border-b border-gray-200 sticky top-0 z-10">
<div class="px-4 py-4 md:px-6 md:py-5 lg:px-8 lg:py-6">
<div class="flex items-center justify-between mb-4">
<div>
<h1 class="text-xl md:text-2xl lg:text-3xl font-bold text-[#1F2933]">Investor CRM</h1><p class="text-[#667085] mt-1"><span x-text="filteredInvestors.length"></span> investors</p></div><x-button type="button" class="text-primary-foreground h-9 px-4 py-2 bg-[#0F8A5F] hover:bg-[#0F8A5F]/90 has-[>svg]:px-3"><svg class="h-4 w-4 mr-2" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;User&quot;)"></use></svg>Add Investor </x-button></div>
<div class="flex flex-col lg:flex-row gap-4">
<div class="flex-1 relative"><svg class="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#667085]" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Search&quot;)"></use></svg><input type="text" placeholder="Search investors..." :value="searchQuery" @input="(e =&gt; setSearchQuery(e.target.value))($event)" class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#123A63]"></div><button @click="(() =&gt; setShowFilters(!showFilters))($event)" class="lg:hidden flex items-center justify-center gap-2 px-4 py-3 bg-[#123A63] text-white rounded-lg"><svg class="h-5 w-5" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Filter&quot;)"></use></svg>Filters </button>
<div class="hidden lg:flex gap-3"><select :value="selectedStage" @change="(setSelectedStage)($event.target.value)" class="flex h-9 w-full items-center rounded-md border border-input bg-input-background px-3 py-2 text-sm shadow-xs focus:outline-none focus:ring-2 focus:ring-[#123A63]"><option value="">Select</option>
<template x-for="stage in crmStages"><option :value="stage"><span x-text="stage"></span></option></template></select><select :value="selectedSector" @change="(setSelectedSector)($event.target.value)" class="flex h-9 w-full items-center rounded-md border border-input bg-input-background px-3 py-2 text-sm shadow-xs focus:outline-none focus:ring-2 focus:ring-[#123A63]"><option value="">Select</option>
<template x-for="sector in sectors"><option :value="sector"><span x-text="sector"></span></option></template></select><select :value="selectedCountry" @change="(setSelectedCountry)($event.target.value)" class="flex h-9 w-full items-center rounded-md border border-input bg-input-background px-3 py-2 text-sm shadow-xs focus:outline-none focus:ring-2 focus:ring-[#123A63]"><option value="">Select</option>
<template x-for="country in countries"><option :value="country"><span x-text="country"></span></option></template></select><select :value="selectedOfficer" @change="(setSelectedOfficer)($event.target.value)" class="flex h-9 w-full items-center rounded-md border border-input bg-input-background px-3 py-2 text-sm shadow-xs focus:outline-none focus:ring-2 focus:ring-[#123A63]"><option value="">Select</option>
<template x-for="officer in officers"><option :value="officer"><span x-text="officer"></span></option></template></select></div></div>
<template x-if="Boolean(showFilters)">
<div class="lg:hidden mt-4 pt-4 border-t border-gray-200 grid grid-cols-2 gap-4">
<div><label class="block text-sm font-medium text-[#1F2933] mb-2">Stage</label><select :value="selectedStage" @change="(setSelectedStage)($event.target.value)" class="flex h-9 w-full items-center rounded-md border border-input bg-input-background px-3 py-2 text-sm shadow-xs focus:outline-none focus:ring-2 focus:ring-[#123A63]"><option value="">Select</option>
<template x-for="stage in crmStages"><option :value="stage"><span x-text="stage"></span></option></template></select></div>
<div><label class="block text-sm font-medium text-[#1F2933] mb-2">Sector</label><select :value="selectedSector" @change="(setSelectedSector)($event.target.value)" class="flex h-9 w-full items-center rounded-md border border-input bg-input-background px-3 py-2 text-sm shadow-xs focus:outline-none focus:ring-2 focus:ring-[#123A63]"><option value="">Select</option>
<template x-for="sector in sectors"><option :value="sector"><span x-text="sector"></span></option></template></select></div>
<div><label class="block text-sm font-medium text-[#1F2933] mb-2">Country</label><select :value="selectedCountry" @change="(setSelectedCountry)($event.target.value)" class="flex h-9 w-full items-center rounded-md border border-input bg-input-background px-3 py-2 text-sm shadow-xs focus:outline-none focus:ring-2 focus:ring-[#123A63]"><option value="">Select</option>
<template x-for="country in countries"><option :value="country"><span x-text="country"></span></option></template></select></div>
<div><label class="block text-sm font-medium text-[#1F2933] mb-2">Officer</label><select :value="selectedOfficer" @change="(setSelectedOfficer)($event.target.value)" class="flex h-9 w-full items-center rounded-md border border-input bg-input-background px-3 py-2 text-sm shadow-xs focus:outline-none focus:ring-2 focus:ring-[#123A63]"><option value="">Select</option>
<template x-for="officer in officers"><option :value="officer"><span x-text="officer"></span></option></template></select></div></div></template></div></header>
<main class="p-4 md:p-4 md:p-5 lg:p-6 lg:p-8">
<div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
<div class="overflow-x-auto -mx-4 md:mx-0 px-4 md:px-0">
<table class="w-full">
<thead class="bg-gray-50 border-b border-gray-200">
<tr>
<th class="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase">Investor</th>
<th class="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase">Country</th>
<th class="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase">Sector</th>
<th class="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase">Amount</th>
<th class="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase">Stage</th>
<th class="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase">Officer</th>
<th class="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase">Next Follow-Up</th>
<th class="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase">Actions</th></tr></thead>
<tbody class="divide-y divide-gray-200">
<template x-for="investor in filteredInvestors">
<tr class="hover:bg-gray-50">
<td class="px-6 py-4">
<div>
<div class="font-medium text-[#1F2933]"><span x-text="investor.name"></span></div>
<div class="text-sm text-[#667085]"><span x-text="investor.company"></span></div></div></td>
<td class="px-6 py-4 text-sm text-[#1F2933]"><span x-text="investor.country"></span></td>
<td class="px-6 py-4">
@include('components.status-badge', ['scope' => 'StatusBadge(()=>({variant:"sector",label:investor.sector}))'])</td>
<td class="px-6 py-4 text-sm font-semibold text-[#1F2933]"><span x-text="investor.investmentAmount"></span></td>
<td class="px-6 py-4">
@include('components.status-badge', ['scope' => 'StatusBadge(()=>({variant:"application",status:getStageColor(investor.stage),label:investor.stage.replace(/-/g, " ")}))'])</td>
<td class="px-6 py-4 text-sm text-[#1F2933]"><span x-text="investor.officer"></span></td>
<td class="px-6 py-4 text-sm text-[#1F2933]"><span x-text="investor.nextFollowUp"></span></td>
<td class="px-6 py-4">
<div class="flex items-center gap-2"><a :href="url(`/admin/crm/${investor.id}`)"><x-button type="button" class="hover:bg-accent h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5"><svg class="h-4 w-4" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Eye&quot;)"></use></svg></x-button></a>
<div class="relative" x-data="{_open:false}" >
<div @click="_open=!_open"><x-button type="button" class="hover:bg-accent h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5"><svg class="h-4 w-4" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;ChevronDown&quot;)"></use></svg></x-button></div>
<div x-cloak x-show="_open" @click.outside="_open=false" @keydown.escape.window="_open=false" class="absolute right-0 top-full z-[80] min-w-32 rounded-md border bg-white p-1 shadow-lg"><button type="button"  class="block w-full text-left px-2 py-1.5 text-sm hover:bg-gray-100" @click="_open=false"><svg class="h-4 w-4 mr-2" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Send&quot;)"></use></svg>Send Message </button><button type="button"  class="block w-full text-left px-2 py-1.5 text-sm hover:bg-gray-100" @click="_open=false"><svg class="h-4 w-4 mr-2" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Calendar&quot;)"></use></svg>Schedule Meeting </button><button type="button"  class="block w-full text-left px-2 py-1.5 text-sm hover:bg-gray-100" @click="_open=false"><svg class="h-4 w-4 mr-2" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;User&quot;)"></use></svg>Assign Officer </button></div></div></div></td></tr></template></tbody></table></div></div></main></div>

@include('backend.partials.admin-page-end')
</div>
@endsection
