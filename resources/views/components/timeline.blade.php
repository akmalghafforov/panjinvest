<div x-data="{{ $scope }}" :class="cn(&quot;space-y-6&quot;, className)">
<template x-for="(step, index) in steps">
<div x-data="({
  get isLast() {
    return index === steps.length - 1;
  }
})" class="relative flex gap-4">
<template x-if="Boolean(!isLast)">
<div class="absolute left-5 top-10 bottom-0 w-0.5 bg-gray-200"></div></template>
<div class="relative flex-shrink-0">
<template x-if="Boolean(step.status === &quot;completed&quot;)">
<div class="w-10 h-10 rounded-full bg-[#0F8A5F] flex items-center justify-center"><svg class="h-5 w-5 text-white" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;CheckCircle2&quot;)"></use></svg></div></template>
<template x-if="Boolean(step.status === &quot;current&quot;)">
<div class="w-10 h-10 rounded-full bg-[#D6A536] flex items-center justify-center animate-pulse"><svg class="h-5 w-5 text-white" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Clock&quot;)"></use></svg></div></template>
<template x-if="Boolean(step.status === &quot;upcoming&quot;)">
<div class="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center"><svg class="h-5 w-5 text-gray-400" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Circle&quot;)"></use></svg></div></template></div>
<div class="flex-1 pt-1">
<h4 :class="cn(&quot;font-semibold mb-1&quot;, step.status === &quot;completed&quot; &amp;&amp; &quot;text-[#0F8A5F]&quot;, step.status === &quot;current&quot; &amp;&amp; &quot;text-[#123A63]&quot;, step.status === &quot;upcoming&quot; &amp;&amp; &quot;text-gray-500&quot;)"><span x-text="step.title"></span></h4>
<template x-if="Boolean(step.description)"><p class="text-sm text-[#667085] mb-1"><span x-text="step.description"></span></p></template>
<template x-if="Boolean(step.date)"><p class="text-xs text-[#667085]"><span x-text="step.date"></span></p></template></div></div></template></div>