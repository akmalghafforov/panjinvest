@extends('frontend.layouts.app')
@section('content')
<div x-data="InvestmentMapPage" data-page="InvestmentMapPage">
<div class="h-screen flex flex-col bg-[#F6F8FA]">
<div class="bg-gradient-to-br from-[#123A63] to-[#0F8A5F] text-white py-4 md:py-8">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="flex items-center justify-between">
<div>
<h1 class="text-xl md:text-3xl font-bold mb-1 md:mb-2">Interactive Investment Map</h1><p class="text-white/90 text-sm md:text-base">Explore <span x-text="filteredProjects.length"></span> investment opportunities across Panjakent</p></div><button @click="(() =&gt; setShowFilters(!showFilters))($event)" class="lg:hidden p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"><svg class="h-6 w-6" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Filter&quot;)"></use></svg></button></div></div></div>
<div class="flex-1 flex overflow-hidden relative">
<template x-if="Boolean(showFilters)">
<div class="fixed inset-0 bg-black/50 z-40 lg:hidden" @click="(() =&gt; setShowFilters(false))($event)"></div></template>
<div :class="`
          fixed lg:static inset-y-0 left-0 z-50 lg:z-auto
          w-80 bg-white border-r border-gray-200 overflow-y-auto
          transform transition-transform duration-300 lg:transform-none
          ${showFilters ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `">
<div class="p-4 md:p-6 space-y-4 md:space-y-6">
<div class="flex items-center justify-between lg:hidden pb-4 border-b border-gray-200">
<h2 class="font-semibold text-[#1F2933]">Filters</h2><button @click="(() =&gt; setShowFilters(false))($event)" class="p-2 hover:bg-gray-100 rounded-lg"><svg class="h-5 w-5" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;X&quot;)"></use></svg></button></div>
<div><label class="block text-sm font-semibold text-[#1F2933] mb-2">Search</label>
<div class="relative"><svg class="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#667085]" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Search&quot;)"></use></svg><input type="text" placeholder="Location or project..." :value="searchQuery" @input="(e =&gt; setSearchQuery(e.target.value))($event)" class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#123A63] focus:border-transparent text-sm"></div></div>
<div><label class="block text-sm font-semibold text-[#1F2933] mb-3">Sector</label>
<div class="space-y-2">
<template x-for="sector in sectors"><button x-data="({
  get Icon() {
    return sector.icon;
  },
  get isSelected() {
    return selectedSector.includes(sector.value);
  }
})" @click="(() =&gt; toggleFilter(sector.value, selectedSector, setSelectedSector))($event)" :class="`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all text-sm ${isSelected ? &quot;bg-[#123A63] text-white&quot; : &quot;bg-gray-50 text-[#1F2933] hover:bg-gray-100&quot;}`"><svg class="h-4 w-4" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (Icon)"></use></svg><span class="flex-1 text-left"><span x-text="sector.name"></span></span>
<template x-if="Boolean(isSelected)"><svg class="h-4 w-4" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;X&quot;)"></use></svg></template></button></template></div></div>
<div><label class="block text-sm font-semibold text-[#1F2933] mb-3">Infrastructure</label>
<div class="space-y-2">
<template x-for="infra in infrastructure"><button x-data="({
  get Icon() {
    return infra.icon;
  },
  get isSelected() {
    return selectedInfrastructure.includes(infra.value);
  }
})" @click="(() =&gt; toggleFilter(infra.value, selectedInfrastructure, setSelectedInfrastructure))($event)" :class="`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all text-sm ${isSelected ? &quot;bg-[#0F8A5F] text-white&quot; : &quot;bg-gray-50 text-[#1F2933] hover:bg-gray-100&quot;}`"><svg class="h-4 w-4" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (Icon)"></use></svg><span class="flex-1 text-left"><span x-text="infra.name"></span></span>
<template x-if="Boolean(isSelected)"><svg class="h-4 w-4" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;X&quot;)"></use></svg></template></button></template></div></div>
<div><label class="block text-sm font-semibold text-[#1F2933] mb-3">Project Status</label>
<div class="space-y-2">
<template x-for="status in statusOptions"><button x-data="({
  get isSelected() {
    return selectedStatus.includes(status.value);
  }
})" @click="(() =&gt; toggleFilter(status.value, selectedStatus, setSelectedStatus))($event)" :class="`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all text-sm ${isSelected ? &quot;bg-[#123A63] text-white&quot; : &quot;bg-gray-50 text-[#1F2933] hover:bg-gray-100&quot;}`"><span class="flex-1 text-left"><span x-text="status.name"></span></span>
<template x-if="Boolean(isSelected)"><svg class="h-4 w-4" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;X&quot;)"></use></svg></template></button></template></div></div>
<div><label class="block text-sm font-semibold text-[#1F2933] mb-3">Land Type</label>
<div class="space-y-2">
<template x-for="landType in landTypes"><button x-data="({
  get isSelected() {
    return selectedLandType.includes(landType.value);
  }
})" @click="(() =&gt; toggleFilter(landType.value, selectedLandType, setSelectedLandType))($event)" :class="`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all text-sm ${isSelected ? &quot;bg-[#D6A536] text-white&quot; : &quot;bg-gray-50 text-[#1F2933] hover:bg-gray-100&quot;}`"><span class="flex-1 text-left"><span x-text="landType.name"></span></span>
<template x-if="Boolean(isSelected)"><svg class="h-4 w-4" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;X&quot;)"></use></svg></template></button></template></div></div>
<div class="pt-4 border-t border-gray-200"><label class="block text-sm font-semibold text-[#1F2933] mb-2">Distance Calculator</label>
<div class="flex gap-2"><input type="number" placeholder="Max km" class="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#123A63] focus:border-transparent text-sm"><button class="px-4 py-2 bg-[#123A63] text-white rounded-lg hover:bg-[#123A63]/90 transition-colors text-sm">Apply </button></div></div>
<template x-if="Boolean(selectedSector.length &gt; 0 || selectedInfrastructure.length &gt; 0 || selectedStatus.length &gt; 0 || selectedLandType.length &gt; 0)"><button @click="(() =&gt; {
  setSelectedSector([]);
  setSelectedInfrastructure([]);
  setSelectedStatus([]);
  setSelectedLandType([]);
  setSearchQuery(&quot;&quot;);
})($event)" class="w-full px-4 py-2 border-2 border-[#123A63] text-[#123A63] rounded-lg hover:bg-[#123A63]/5 transition-colors text-sm">Clear All Filters </button></template><button @click="(() =&gt; setShowFilters(false))($event)" class="lg:hidden w-full px-4 py-3 bg-[#0F8A5F] text-white rounded-lg hover:bg-[#0F8A5F]/90 transition-colors text-sm font-medium">Apply Filters (<span x-text="filteredProjects.length"></span> projects) </button></div></div>
<div class="flex-1 relative">
<div class="absolute inset-0 bg-gradient-to-br from-[#E8F5E9] via-[#FFF8E1] to-[#E3F2FD]">
<div class="absolute inset-0 opacity-10"><svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg"><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="#123A63" stroke-width="0.5"></path></pattern><rect width="100%" height="100%" fill="url(#grid)"></rect></svg></div>
<template x-for="project in filteredProjects">
<div class="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10" :style="project.position" @click="(() =&gt; setSelectedPin(selectedPin === project.id ? null : project.id))($event)">
<div class="w-10 h-10 rounded-full border-4 border-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform" :style="{
  backgroundColor: getSectorColor(project.sector)
}"><svg class="h-5 w-5 text-white" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;MapPin&quot;)"></use></svg></div>
<template x-if="Boolean(selectedPin === project.id)">
<div class="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 w-[calc(100vw-2rem)] max-w-sm bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-50"><button @click="(e =&gt; {
  e.stopPropagation();
  setSelectedPin(null);
})($event)" class="absolute top-2 right-2 z-10 p-1.5 bg-white/90 rounded-full shadow-md hover:bg-white"><svg class="h-4 w-4 text-[#1F2933]" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;X&quot;)"></use></svg></button>
<div class="h-32 md:h-40 overflow-hidden"><img :src="assetUrl(project.image)" :alt="project.title" class="w-full h-full object-cover"></div>
<div class="p-3 md:p-4"><span class="px-2 md:px-3 py-1 text-white text-xs rounded-full inline-block mb-2" :style="{
  backgroundColor: getSectorColor(project.sector)
}"><span x-text="sectors.find(s =&gt; s.value === project.sector)?.name"></span></span>
<h3 class="text-base md:text-lg font-semibold text-[#1F2933] mb-2"><span x-text="project.title"></span></h3>
<div class="space-y-1.5 md:space-y-2 text-xs md:text-sm text-[#667085] mb-3 md:mb-4">
<div class="flex items-center gap-2"><svg class="h-3.5 w-3.5 md:h-4 md:w-4 flex-shrink-0" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;MapPin&quot;)"></use></svg><span class="truncate"><span x-text="project.location"></span></span></div>
<div class="flex items-center gap-2"><svg class="h-3.5 w-3.5 md:h-4 md:w-4 flex-shrink-0" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;TrendingUp&quot;)"></use></svg><span><span x-text="project.investment"></span></span></div>
<div class="flex items-center gap-2"><svg class="h-3.5 w-3.5 md:h-4 md:w-4 flex-shrink-0" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Navigation&quot;)"></use></svg><span><span x-text="project.distance"></span></span></div></div><a :href="url(`/opportunities/${project.id}`)" class="w-full px-3 md:px-4 py-2 bg-[#0F8A5F] text-white rounded-lg hover:bg-[#0F8A5F]/90 transition-colors inline-flex items-center justify-center gap-2 text-xs md:text-sm"><svg class="h-3.5 w-3.5 md:h-4 md:w-4" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Eye&quot;)"></use></svg>View Project </a></div></div></template></div></template>
<div class="absolute bottom-4 md:bottom-6 left-4 md:left-6 bg-white rounded-lg shadow-lg p-3 md:p-4 border border-gray-200 max-w-[calc(100vw-2rem)] md:max-w-none">
<h3 class="font-semibold text-[#1F2933] mb-2 md:mb-3 text-xs md:text-sm">Map Legend</h3>
<div class="grid grid-cols-2 md:grid-cols-1 gap-1.5 md:gap-2">
<template x-for="sector in sectors">
<div x-data="({
  get Icon() {
    return sector.icon;
  }
})" class="flex items-center gap-1.5 md:gap-2">
<div class="w-5 h-5 md:w-6 md:h-6 rounded-full border-2 border-white shadow flex items-center justify-center flex-shrink-0" :style="{
  backgroundColor: sector.color
}"><svg class="h-2.5 w-2.5 md:h-3 md:w-3 text-white" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (Icon)"></use></svg></div><span class="text-[10px] md:text-xs text-[#667085] truncate"><span x-text="sector.name"></span></span></div></template></div></div>
<div class="absolute top-4 md:top-6 right-4 md:right-6 bg-white rounded-lg shadow-lg p-3 md:p-4 border border-gray-200">
<div class="text-center">
<div class="text-2xl md:text-3xl font-bold text-[#123A63]"><span x-text="filteredProjects.length"></span></div>
<div class="text-xs md:text-sm text-[#667085] whitespace-nowrap">Projects Found</div></div></div></div></div></div></div>
</div>
@endsection
