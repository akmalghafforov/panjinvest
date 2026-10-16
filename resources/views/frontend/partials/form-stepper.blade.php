<div x-data="{{ $scope }}" :class="cn(&quot;w-full&quot;, className)">
<div class="flex items-center justify-between">
<template x-for="(step, index) in steps">
<div x-data="({
  get isCompleted() {
    return currentStep &gt; step.number;
  },
  get isCurrent() {
    return currentStep === step.number;
  },
  get isLast() {
    return index === steps.length - 1;
  }
})" class="flex items-center flex-1">
<div class="flex flex-col items-center">
<div :class="cn(&quot;w-10 h-10 rounded-full flex items-center justify-center transition-colors&quot;, isCompleted &amp;&amp; &quot;bg-[#0F8A5F]&quot;, isCurrent &amp;&amp; &quot;bg-[#123A63]&quot;, !isCompleted &amp;&amp; !isCurrent &amp;&amp; &quot;bg-gray-200&quot;)">
<template x-if="Boolean(isCompleted)"><svg class="h-5 w-5 text-white" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Check&quot;)"></use></svg></template>
<template x-if="Boolean(!(isCompleted))"><span :class="cn(&quot;font-semibold&quot;, isCurrent ? &quot;text-white&quot; : &quot;text-gray-500&quot;)"><span x-text="step.number"></span></span></template></div><span :class="cn(&quot;mt-2 text-[13px] sm:text-sm text-center max-w-24 sm:max-w-none&quot;, isCurrent ? &quot;text-[#123A63] font-semibold&quot; : &quot;text-[#667085]&quot;)"><span x-text="step.title"></span></span></div>
<template x-if="Boolean(!isLast)">
<div :class="cn(&quot;flex-1 h-0.5 mx-2&quot;, isCompleted ? &quot;bg-[#0F8A5F]&quot; : &quot;bg-gray-200&quot;)"></div></template></div></template></div></div>