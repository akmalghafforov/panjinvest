@extends('frontend.layouts.app')
@section('content')
<div x-data="ApplicationDetailPage" data-page="ApplicationDetailPage">
<div class="min-h-screen bg-[#F6F8FA]">
<div class="bg-white border-b border-gray-200">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4"><a href="{{ route('frontend.portal') }}" class="inline-flex items-center gap-2 text-[#123A63] hover:text-[#667085] transition-colors"><svg class="h-5 w-5" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;ArrowLeft&quot;)"></use></svg>Back to Portal </a></div></div>
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
<div class="bg-white rounded-sm  border border-gray-200 p-8 mb-8">
<div class="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
<div>
<h1 class="text-3xl font-bold text-[#1F2933] mb-2">Application Details</h1><p class="text-[#667085]">Reference: <span x-text="application.referenceNumber"></span></p></div>
<div class="mt-4 lg:mt-0">
@include('components.status-badge', ['scope' => 'StatusBadge(()=>({variant:"application",status:application.status,label:application.status.replace(/-/g, " "),className:"text-base px-4 py-2"}))'])</div></div>
<div class="grid md:grid-cols-3 gap-6">
<div><p class="text-sm text-[#667085] mb-1">Submitted</p><p class="font-semibold text-[#1F2933]"><span x-text="application.submittedDate"></span></p></div>
<div><p class="text-sm text-[#667085] mb-1">Project</p><a :href="url(`/opportunities/${application.project.id}`)" class="font-semibold text-[#123A63] hover:text-[#667085]"><span x-text="application.project.title"></span></a></div>
<div><p class="text-sm text-[#667085] mb-1">Case Manager</p><p class="font-semibold text-[#1F2933]"><span x-text="application.caseManager.name"></span></p></div></div>
<template x-if="Boolean(application.nextAction)">
<div class="mt-6 p-4 bg-[#F6F8FA] border border-[#E5E7EB] rounded-sm flex items-start gap-3"><svg class="h-5 w-5 text-[#123A63] flex-shrink-0 mt-0.5" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;AlertCircle&quot;)"></use></svg>
<div><p class="font-semibold text-[#1F2933] mb-1">Next Action Required</p><p class="text-sm text-[#667085]"><span x-text="application.nextAction"></span></p></div></div></template></div>
<div class="grid lg:grid-cols-3 gap-8">
<div class="lg:col-span-2 space-y-8">
<div class="bg-white rounded-sm  border border-gray-200 p-8">
<h2 class="text-2xl font-semibold text-[#1F2933] mb-6">Application Status</h2>
@include('frontend.partials.timeline', ['scope' => 'Timeline(()=>({steps:application.timeline}))'])</div>
<div class="bg-white rounded-sm  border border-gray-200 p-8">
<h2 class="text-2xl font-semibold text-[#1F2933] mb-6">Required Documents</h2>
<div class="space-y-4">
<template x-for="(doc, index) in application.documents">
@include('frontend.partials.file-upload-card', ['scope' => 'FileUploadCard(()=>({title:doc.title,description:doc.description,required:doc.required,status:doc.status,fileName:doc.fileName,adminComment:doc.adminComment,onUpload:file => console.log("Upload", file),onRemove:() => console.log("Remove"),onDownload:() => console.log("Download")}))'])</template></div></div>
<div class="bg-white rounded-sm  border border-gray-200 p-8">
<h2 class="text-2xl font-semibold text-[#1F2933] mb-6">Messages</h2>
<div class="space-y-4 mb-6">
<template x-for="message in application.messages">
<div :class="`p-4 rounded-sm ${message.fromType === &quot;admin&quot; ? &quot;bg-[#123A63]/5 border border-[#123A63]/10&quot; : &quot;bg-gray-50 border border-gray-200&quot;}`">
<div class="flex items-start justify-between mb-2">
<div class="flex items-center gap-2"><svg class="h-4 w-4 text-[#667085]" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;User&quot;)"></use></svg><span class="font-semibold text-[#1F2933]"><span x-text="message.from"></span></span></div><span class="text-[13px] text-[#667085]"><span x-text="message.timestamp"></span></span></div><p class="text-sm text-[#1F2933]"><span x-text="message.content"></span></p></div></template></div>
<div class="border-t border-gray-200 pt-6"><x-form.textarea placeholder="Type your message to the investment team..." ::rows="4" class="mb-3"></x-form.textarea><x-button type="button" class="text-primary-foreground h-9 px-4 py-2 bg-[#123A63] hover:bg-[#123A63]/90 has-[>svg]:px-3"><svg class="h-4 w-4 mr-2" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Send&quot;)"></use></svg>Send Message </x-button></div></div></div>
<div class="space-y-6">
<div class="bg-white rounded-sm  border border-gray-200 p-6 sticky top-24">
<h3 class="font-semibold text-[#1F2933] mb-4">Quick Actions</h3>
<div class="space-y-3"><x-button type="button" class="border bg-background text-foreground hover:bg-accent h-9 px-4 py-2 w-full justify-start has-[>svg]:px-3"><svg class="h-4 w-4 mr-2" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Download&quot;)"></use></svg>Download Application </x-button><x-button type="button" class="border bg-background text-foreground hover:bg-accent h-9 px-4 py-2 w-full justify-start has-[>svg]:px-3"><svg class="h-4 w-4 mr-2" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Calendar&quot;)"></use></svg>Request Meeting </x-button><x-button type="button" class="border bg-background h-9 px-4 py-2 w-full justify-start text-red-600 border-red-200 hover:bg-red-50 has-[>svg]:px-3"><svg class="h-4 w-4 mr-2" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;XCircle&quot;)"></use></svg>Withdraw Application </x-button></div></div>
<div class="bg-white rounded-sm  border border-gray-200 p-6">
<h3 class="font-semibold text-[#1F2933] mb-4">Selected Project</h3>
<div class="space-y-3">
<div><p class="text-sm text-[#667085]">Project Name</p><a :href="url(`/opportunities/${application.project.id}`)" class="font-medium text-[#123A63] hover:text-[#667085]"><span x-text="application.project.title"></span></a></div>
<div><p class="text-sm text-[#667085]">Sector</p><p class="font-medium text-[#1F2933]"><span x-text="application.project.sector"></span></p></div>
<div><p class="text-sm text-[#667085]">Location</p><p class="font-medium text-[#1F2933]"><span x-text="application.project.location"></span></p></div>
<div><p class="text-sm text-[#667085]">Investment Range</p><p class="font-medium text-[#1F2933]"><span x-text="application.project.investment"></span></p></div></div></div>
<div class="atlas-band rounded-sm  p-6 text-white">
<h3 class="font-semibold mb-4">Your Case Manager</h3>
<div class="space-y-3">
<div><p class="font-semibold"><span x-text="application.caseManager.name"></span></p><p class="text-white/80 text-sm"><span x-text="application.caseManager.position"></span></p></div>
<div class="pt-3 border-t border-white/20 space-y-2">
<div class="flex items-center gap-2 text-sm"><svg class="h-4 w-4" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Send&quot;)"></use></svg><span><span x-text="application.caseManager.email"></span></span></div>
<div class="flex items-center gap-2 text-sm"><svg class="h-4 w-4" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;User&quot;)"></use></svg><span><span x-text="application.caseManager.phone"></span></span></div></div></div></div>
<template x-if="Boolean(application.meetings.length &gt; 0)">
<div class="bg-white rounded-sm  border border-gray-200 p-6">
<h3 class="font-semibold text-[#1F2933] mb-4">Upcoming Meetings</h3>
<template x-for="meeting in application.meetings">
<div class="border border-gray-200 rounded-sm p-4">
<h4 class="font-semibold text-[#1F2933] mb-2"><span x-text="meeting.title"></span></h4>
<div class="space-y-1 text-sm text-[#667085]"><p class="flex items-center gap-2"><svg class="h-4 w-4" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Calendar&quot;)"></use></svg><span x-text="meeting.date"></span></p><p class="flex items-center gap-2"><svg class="h-4 w-4" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Clock&quot;)"></use></svg><span x-text="meeting.time"></span></p><p class="flex items-center gap-2"><svg class="h-4 w-4" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;MessageSquare&quot;)"></use></svg><span x-text="meeting.type"></span></p></div><x-button type="button" class="border bg-background text-foreground hover:bg-accent h-8 rounded-sm gap-1.5 px-3 w-full mt-3 has-[>svg]:px-2.5">Join Meeting </x-button></div></template></div></template></div></div></div></div>
</div>
@endsection
