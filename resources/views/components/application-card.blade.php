<a x-data="{{ $scope }}" :href="url(`/portal/applications/${id}`)">
<div class="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
<div class="flex items-start justify-between mb-4">
<div class="flex-1">
<h3 class="font-semibold text-[#1F2933] mb-2"><span x-text="projectName"></span></h3>
<div class="flex gap-2 flex-wrap">
@include('components.status-badge', ['scope' => 'StatusBadge(()=>({variant:"sector",label:sector}))'])
@include('components.status-badge', ['scope' => 'StatusBadge(()=>({variant:"application",status:status,label:status.replace(/-/g, " ")}))'])</div></div><svg class="h-5 w-5 text-gray-400 flex-shrink-0" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;ArrowRight&quot;)"></use></svg></div>
<div class="space-y-2 text-sm text-[#667085]">
<div class="flex items-center gap-2"><svg class="h-4 w-4" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Calendar&quot;)"></use></svg><span>Submitted: <span x-text="submittedDate"></span></span></div>
<template x-if="Boolean(assignedOfficer)">
<div class="flex items-center gap-2"><svg class="h-4 w-4" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;User&quot;)"></use></svg><span>Officer: <span x-text="assignedOfficer"></span></span></div></template></div>
<template x-if="Boolean(nextAction)">
<div class="mt-4 pt-4 border-t border-gray-200"><p class="text-sm"><span class="text-[#667085]">Next action: </span><span class="text-[#123A63] font-medium"><span x-text="nextAction"></span></span></p></div></template></div></a>