<div style="display:contents" x-data="{{ $scope }}">
<template x-if="Boolean(mobileOpen)">
<div class="fixed inset-0 bg-black/50 z-40 lg:hidden" @click="(onMobileClose)($event)"></div></template><aside :class="cn(&quot;bg-white border-r border-gray-200 transition-all duration-300 flex-shrink-0&quot;, &quot;fixed lg:static inset-y-0 left-0 z-50 lg:z-auto&quot;, &quot;transform lg:transform-none&quot;, collapsed ? &quot;w-20&quot; : &quot;w-64&quot;, mobileOpen ? &quot;translate-x-0&quot; : &quot;-translate-x-full lg:translate-x-0&quot;)">
<div class="h-full flex flex-col">
<div class="h-16 lg:h-20 border-b border-gray-200 flex items-center justify-between px-4 lg:px-6">
<template x-if="Boolean(!collapsed)">
<div>
<h2 class="font-bold text-[#123A63] text-sm lg:text-base">Admin Panel</h2><p class="text-xs text-[#667085]">Invest Panjakent</p></div></template>
<div class="flex items-center gap-2"><button @click="(onMobileClose)($event)" class="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"><svg class="h-5 w-5 text-[#667085]" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;X&quot;)"></use></svg></button><button @click="(() =&gt; setCollapsed(!collapsed))($event)" class="hidden lg:block p-2 hover:bg-gray-100 rounded-lg transition-colors">
<template x-if="Boolean(collapsed)"><svg class="h-5 w-5 text-[#667085]" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;ChevronRight&quot;)"></use></svg></template>
<template x-if="Boolean(!(collapsed))"><svg class="h-5 w-5 text-[#667085]" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;ChevronLeft&quot;)"></use></svg></template></button></div></div>
<nav class="flex-1 overflow-y-auto py-4 lg:py-6">
<ul class="space-y-1 px-2 lg:px-3">
<template x-for="item in menuItems">
<li x-data="({
  get Icon() {
    return item.icon;
  },
  get isActive() {
    return location.pathname === item.path;
  }
})"><a :href="url(item.path)" :class="cn(&quot;flex items-center gap-3 px-3 py-2.5 lg:py-3 rounded-lg transition-colors&quot;, isActive ? &quot;bg-[#123A63] text-white&quot; : &quot;text-[#1F2933] hover:bg-gray-100&quot;)" :title="collapsed ? item.label : undefined"><svg class="h-5 w-5 flex-shrink-0" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (Icon)"></use></svg>
<template x-if="Boolean(!collapsed)"><span class="text-sm font-medium"><span x-text="item.label"></span></span></template></a></li></template></ul></nav>
<div class="border-t border-gray-200 p-3 lg:p-4">
<template x-if="Boolean(!collapsed)">
<div class="flex items-center gap-3">
<div class="h-9 w-9 lg:h-10 lg:w-10 rounded-full bg-[#123A63] flex items-center justify-center flex-shrink-0"><span class="text-white font-semibold text-sm">FM</span></div>
<div class="flex-1 min-w-0"><p class="text-sm font-medium text-[#1F2933] truncate">Farrukh M.</p><p class="text-xs text-[#667085] truncate">Administrator</p></div></div></template>
<template x-if="Boolean(!(!collapsed))">
<div class="flex justify-center">
<div class="h-10 w-10 rounded-full bg-[#123A63] flex items-center justify-center"><span class="text-white font-semibold text-sm">FM</span></div></div></template></div></div></aside>
</div>