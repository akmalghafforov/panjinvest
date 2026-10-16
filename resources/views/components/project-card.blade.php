<div x-data="{{ $scope }}" class="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden border border-gray-100 group"><a :href="url(`/opportunities/${id}`)" class="block">
<div class="h-48 overflow-hidden relative">
<template x-if="Boolean(image)"><img :src="assetUrl(image)" :alt="title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"></template>
<template x-if="Boolean(!(image))">
<div class="w-full h-full bg-gradient-to-br from-[#123A63]/10 to-[#0F8A5F]/10 flex items-center justify-center"><svg class="h-16 w-16 text-[#123A63]/20" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Building2&quot;)"></use></svg></div></template>
<template x-if="Boolean(onSave)"><button @click="(e =&gt; {
  e.preventDefault();
  onSave();
})($event)" class="absolute top-3 right-3 p-2 bg-white/90 hover:bg-white rounded-lg transition-colors"><svg class="h-4 w-4 text-[#123A63]" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Bookmark&quot;)"></use></svg></button></template></div></a>
<div class="p-6">
<div class="flex gap-2 mb-3 flex-wrap">
@include('components.status-badge', ['scope' => 'StatusBadge(()=>({variant:"sector",label:sector}))'])<template x-if="Boolean(status &amp;&amp; status !== &quot;available&quot;)">
@include('components.status-badge', ['scope' => 'StatusBadge(()=>({variant:"status",status:status,label:status}))'])</template></div><a :href="url(`/opportunities/${id}`)">
<h3 class="text-xl font-semibold text-[#1F2933] mb-3 group-hover:text-[#123A63] transition-colors"><span x-text="title"></span></h3></a>
<template x-if="Boolean(description)"><p class="text-sm text-[#667085] mb-4 line-clamp-2"><span x-text="description"></span></p></template>
<div class="space-y-2 text-sm text-[#667085] mb-4">
<div class="flex items-center gap-2"><svg class="h-4 w-4 flex-shrink-0" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;MapPin&quot;)"></use></svg><span><span x-text="location"></span></span></div>
<div class="flex items-center gap-2"><svg class="h-4 w-4 flex-shrink-0" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;TrendingUp&quot;)"></use></svg><span><span x-text="investment"></span></span></div>
<template x-if="Boolean(landSize)">
<div class="flex items-center gap-2"><svg class="h-4 w-4 flex-shrink-0" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Building2&quot;)"></use></svg><span><span x-text="landSize"></span></span></div></template>
<template x-if="Boolean(roi)">
<div class="flex items-center gap-2"><svg class="h-4 w-4 flex-shrink-0 text-[#0F8A5F]" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;TrendingUp&quot;)"></use></svg><span class="text-[#0F8A5F] font-semibold">ROI: <span x-text="roi"></span></span></div></template></div>
<div class="flex gap-2"><a :href="url(`/opportunities/${id}`)" class="flex-1"><x-button type="button" class="text-primary-foreground h-9 px-4 py-2 w-full bg-[#0F8A5F] hover:bg-[#0F8A5F]/90 has-[>svg]:px-3">View Project </x-button></a><x-button type="button" class="border bg-background text-foreground hover:bg-accent size-9"><svg class="h-4 w-4" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Download&quot;)"></use></svg></x-button></div></div></div>