<div x-data="{{ $scope }}" :class="cn(&quot;bg-white rounded-sm border border-gray-200 p-4&quot;, className)">
<div class="flex flex-wrap gap-3 items-start justify-between mb-3">
<div class="flex-1">
<div class="flex flex-wrap items-center gap-2 mb-1">
<h4 class="font-semibold text-[#1F2933]"><span x-text="title"></span></h4>
@include('components.status-badge', ['scope' => 'StatusBadge(()=>({variant:required ? "required" : "optional",label:required ? "Required" : "Optional"}))'])</div>
<template x-if="Boolean(description)"><p class="text-sm text-[#667085]"><span x-text="description"></span></p></template></div>
@include('components.status-badge', ['scope' => 'StatusBadge(()=>({variant:"document",status:status,label:status.replace(/-/g, " ")}))'])</div>
<template x-if="Boolean(status === &quot;not-uploaded&quot;)">
<div @dragover="(handleDragOver)($event)" @dragleave="(handleDragLeave)($event)" @drop="(handleDrop)($event)" :class="cn(&quot;border-2 border-dashed rounded-sm p-6 text-center transition-colors&quot;, isDragging ? &quot;border-[#123A63] bg-[#123A63]/5&quot; : &quot;border-gray-300&quot;)"><svg class="h-8 w-8 text-gray-400 mx-auto mb-2" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Upload&quot;)"></use></svg><p class="text-sm text-[#667085] mb-3">Drag and drop your file here, or click to browse </p><label class="cursor-pointer"><input type="file" class="hidden" @change="(handleFileSelect)($event)" accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"><span class="inline-flex items-center gap-2 px-4 py-2 bg-[#123A63] text-white rounded-sm hover:bg-[#123A63]/90 transition-colors text-sm"><svg class="h-4 w-4" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Upload&quot;)"></use></svg>Select File </span></label><p class="text-[13px] text-[#667085] mt-2">Supported: PDF, DOC, DOCX, JPG, PNG (Max 10MB) </p></div></template>
<template x-if="Boolean(!(status === &quot;not-uploaded&quot;))">
<div class="border border-gray-200 rounded-sm p-4 bg-gray-50">
<div class="flex items-center justify-between">
<div class="flex items-center gap-3 flex-1"><svg class="h-4 w-4" :class="{'text-blue-600':status==='uploaded','text-green-600':status==='verified','text-red-600':status==='needs-correction'}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><use :href="'#icon-'+statusIcon[status]"></use></svg>
<div class="flex-1 min-w-0"><p class="text-sm font-medium text-[#1F2933] truncate"><span x-text="fileName || &quot;document.pdf&quot;"></span></p>
<template x-if="Boolean(status === &quot;verified&quot;)"><p class="text-[13px] text-green-600">Verified by administration</p></template>
<template x-if="Boolean(status === &quot;needs-correction&quot; &amp;&amp; adminComment)"><p class="text-[13px] text-red-600"><span x-text="adminComment"></span></p></template></div></div>
<div class="flex items-center gap-2">
<template x-if="Boolean(onDownload)"><x-button type="button" x-on:click="(onDownload)($event)" class="hover:bg-accent h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5">Download </x-button></template>
<template x-if="Boolean(onRemove &amp;&amp; status !== &quot;verified&quot;)"><button @click="(onRemove)($event)" class="p-1 hover:bg-gray-200 rounded transition-colors"><svg class="h-4 w-4 text-gray-500" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;X&quot;)"></use></svg></button></template></div></div></div></template></div>