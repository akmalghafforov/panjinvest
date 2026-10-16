@extends('frontend.layouts.app')
@section('content')
<div x-data="OpportunitiesPage" data-page="OpportunitiesPage">
<div class="min-h-screen bg-[#F6F8FA]">
<section class="bg-gradient-to-br from-[#123A63] to-[#0F8A5F] text-white py-16">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h1 class="text-4xl md:text-5xl font-bold mb-4">Investment Opportunities</h1><p class="text-xl text-white/90 max-w-3xl">Explore available investment projects across priority sectors in Panjakent </p></div></section>
<section class="bg-white border-b border-gray-200 sticky top-20 z-40">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
<div class="flex flex-col lg:flex-row gap-4">
<div class="flex-1 relative"><svg class="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#667085]" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Search&quot;)"></use></svg><input type="text" placeholder="Search opportunities..." :value="searchQuery" @input="(e =&gt; setSearchQuery(e.target.value))($event)" class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#123A63] focus:border-transparent"></div><button @click="(() =&gt; setShowFilters(!showFilters))($event)" class="lg:hidden flex items-center justify-center gap-2 px-4 py-3 bg-[#123A63] text-white rounded-lg hover:bg-[#123A63]/90 transition-colors"><svg class="h-5 w-5" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;SlidersHorizontal&quot;)"></use></svg>Filters </button>
<div class="hidden lg:flex items-center gap-4"><select :value="selectedSector" @change="(e =&gt; setSelectedSector(e.target.value))($event)" class="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#123A63] focus:border-transparent">
<template x-for="sector in sectors"><option :value="sector"><span x-text="sector"></span></option></template></select><select :value="sortBy" @change="(e =&gt; setSortBy(e.target.value))($event)" class="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#123A63] focus:border-transparent"><option value="newest">Newest First</option><option value="investment-low">Lowest Investment</option><option value="investment-high">Highest Investment</option><option value="roi-high">Highest ROI</option></select></div></div>
<template x-if="Boolean(showFilters)">
<div class="lg:hidden mt-4 pt-4 border-t border-gray-200 space-y-4">
<div><label class="block text-sm font-medium text-[#1F2933] mb-2">Sector</label><select :value="selectedSector" @change="(e =&gt; setSelectedSector(e.target.value))($event)" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#123A63] focus:border-transparent">
<template x-for="sector in sectors"><option :value="sector"><span x-text="sector"></span></option></template></select></div>
<div><label class="block text-sm font-medium text-[#1F2933] mb-2">Status</label><select :value="selectedStatus" @change="(e =&gt; setSelectedStatus(e.target.value))($event)" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#123A63] focus:border-transparent"><option value="all">All Status</option><option value="Available">Available</option><option value="Under Review">Under Review</option><option value="Reserved">Reserved</option></select></div></div></template>
<div class="mt-4 text-sm text-[#667085]">Showing <span x-text="filteredProjects.length"></span> of <span x-text="projects.length"></span> opportunities </div></div></section>
<section class="py-12">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<template x-if="Boolean(filteredProjects.length &gt; 0)">
<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
<template x-for="project in filteredProjects">
@include('components.project-card', ['scope' => 'ProjectCard(()=>({id:project.id,title:project.title,sector:project.sector,location:project.location,investment:project.investment,roi:project.roi,landSize:project.land,status:project.status.toLowerCase(),image:project.image,description:project.description,onSave:() => console.log("Save project", project.id)}))'])</template></div></template>
<template x-if="Boolean(!(filteredProjects.length &gt; 0))">
@include('components.empty-state', ['scope' => 'EmptyState(()=>({icon:"FolderOpen",title:"No opportunities found",description:"Try adjusting your filters or search query to find investment opportunities",actionLabel:"Clear Filters",onAction:() => {
  setSelectedSector("all");
  setSelectedStatus("all");
  setSearchQuery("");
  setSortBy("newest");
}}))'])</template></div></section></div>
</div>
@endsection
