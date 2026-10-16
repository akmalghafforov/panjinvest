@extends('backend.layouts.app')
@section('content')
<div x-data="ImprovedApplicationReviewPage" data-page="ImprovedApplicationReviewPage">

@include('backend.partials.admin-page-start')
<div class="flex-1 overflow-auto">
<header class="bg-white border-b border-gray-200 sticky top-0 z-10">
<div class="px-8 py-4 flex items-center justify-between">
<div class="flex items-center gap-4"><a href="{{ route('backend.dashboard') }}" class="text-[#123A63] hover:text-[#0F8A5F]"><svg class="h-5 w-5" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;ArrowLeft&quot;)"></use></svg></a>
<div>
<h1 class="text-xl md:text-2xl font-bold text-[#1F2933]">Application Review</h1><p class="text-sm text-[#667085]">Ref: <span x-text="application.referenceNumber"></span></p></div></div>
@include('components.status-badge', ['scope' => 'StatusBadge(()=>({variant:"application",status:application.status,label:application.status.replace(/-/g, " "),className:"text-base px-4 py-2"}))'])</div></header>
<main class="p-4 md:p-4 md:p-5 lg:p-6 lg:p-8">
<div class="grid lg:grid-cols-3 gap-4 md:p-4 md:p-5 lg:p-6 lg:p-8">
<div class="lg:col-span-2 space-y-8">
<div x-data="{tab:&quot;overview&quot;}" class="flex flex-col gap-2 space-y-6">
<div class="bg-muted text-muted-foreground inline-flex h-9 items-center justify-center rounded-xl p-1" ><button type="button" @click="tab=&quot;overview&quot;" :class="tab===&quot;overview&quot;?'bg-white shadow-sm text-foreground':''" class="inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap" value="overview">Overview</button><button type="button" @click="tab=&quot;documents&quot;" :class="tab===&quot;documents&quot;?'bg-white shadow-sm text-foreground':''" class="inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap" value="documents">Documents</button><button type="button" @click="tab=&quot;messages&quot;" :class="tab===&quot;messages&quot;?'bg-white shadow-sm text-foreground':''" class="inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap" value="messages">Messages</button><button type="button" @click="tab=&quot;notes&quot;" :class="tab===&quot;notes&quot;?'bg-white shadow-sm text-foreground':''" class="inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap" value="notes">Internal Notes</button></div>
<div x-show="tab===&quot;overview&quot;" value="overview" class="space-y-6">
<div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-4 md:p-5 lg:p-6 lg:p-8">
<h2 class="text-xl font-semibold text-[#1F2933] mb-6">Investor Profile</h2>
<div class="grid md:grid-cols-2 gap-4 md:p-5 lg:p-6">
<div><p class="text-sm text-[#667085] mb-1">Full Name</p><p class="font-medium text-[#1F2933]"><span x-text="application.investor.name"></span></p></div>
<div><p class="text-sm text-[#667085] mb-1">Company</p><p class="font-medium text-[#1F2933]"><span x-text="application.investor.company"></span></p></div>
<div><p class="text-sm text-[#667085] mb-1">Email</p><a :href="`mailto:${application.investor.email}`" class="font-medium text-[#123A63] hover:text-[#0F8A5F]"><span x-text="application.investor.email"></span></a></div>
<div><p class="text-sm text-[#667085] mb-1">Phone</p><a :href="`tel:${application.investor.phone}`" class="font-medium text-[#123A63] hover:text-[#0F8A5F]"><span x-text="application.investor.phone"></span></a></div>
<div><p class="text-sm text-[#667085] mb-1">Country</p><p class="font-medium text-[#1F2933]"><span x-text="application.investor.country"></span></p></div>
<div><p class="text-sm text-[#667085] mb-1">Investor Type</p><p class="font-medium text-[#1F2933]"><span x-text="application.investor.investorType"></span></p></div></div></div>
<div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-4 md:p-5 lg:p-6 lg:p-8">
<h2 class="text-xl font-semibold text-[#1F2933] mb-6">Selected Investment Opportunity</h2>
<div class="space-y-4">
<div><p class="text-sm text-[#667085] mb-1">Project</p><a :href="url(`/opportunities/${application.project.id}`)" class="text-lg font-semibold text-[#123A63] hover:text-[#0F8A5F]"><span x-text="application.project.title"></span></a></div>
<div class="grid md:grid-cols-3 gap-4">
<div><p class="text-sm text-[#667085] mb-1">Sector</p>
@include('components.status-badge', ['scope' => 'StatusBadge(()=>({variant:"sector",label:application.project.sector}))'])</div>
<div><p class="text-sm text-[#667085] mb-1">Location</p><p class="font-medium text-[#1F2933]"><span x-text="application.project.location"></span></p></div>
<div><p class="text-sm text-[#667085] mb-1">Investment Range</p><p class="font-medium text-[#1F2933]"><span x-text="application.project.investment"></span></p></div></div></div></div>
<div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-4 md:p-5 lg:p-6 lg:p-8">
<h2 class="text-xl font-semibold text-[#1F2933] mb-6">Investment Details</h2>
<div class="space-y-4">
<div><p class="text-sm text-[#667085] mb-1">Estimated Investment Amount</p><p class="font-semibold text-[#1F2933] text-lg"><span x-text="application.formData.investmentAmount"></span></p></div>
<div><p class="text-sm text-[#667085] mb-1">Expected Timeline</p><p class="font-medium text-[#1F2933]"><span x-text="application.formData.timeline"></span></p></div>
<div><p class="text-sm text-[#667085] mb-1">Investor's Message</p><p class="text-[#1F2933]"><span x-text="application.formData.message"></span></p></div></div></div>
<div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-4 md:p-5 lg:p-6 lg:p-8">
<h2 class="text-xl font-semibold text-[#1F2933] mb-6">Application Progress</h2>
@include('components.timeline', ['scope' => 'Timeline(()=>({steps:application.timeline}))'])</div></div>
<div x-show="tab===&quot;documents&quot;" value="documents">
<div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-4 md:p-5 lg:p-6 lg:p-8">
<h2 class="text-xl font-semibold text-[#1F2933] mb-6">Document Review</h2>
<div class="space-y-4">
<template x-for="(doc, index) in application.documents">
<div class="border border-gray-200 rounded-lg p-4 md:p-5 lg:p-6">
<div class="flex items-start justify-between mb-4">
<div>
<h3 class="font-semibold text-[#1F2933] mb-1"><span x-text="doc.title"></span></h3>
<template x-if="Boolean(doc.fileName)"><p class="text-sm text-[#667085]"><span x-text="doc.fileName"></span></p></template></div>
@include('components.status-badge', ['scope' => 'StatusBadge(()=>({variant:"document",status:doc.status,label:doc.status.replace(/-/g, " ")}))'])</div>
<template x-if="Boolean(doc.status !== &quot;not-uploaded&quot;)">
<div class="flex gap-2"><x-button type="button" class="border bg-background text-foreground hover:bg-accent h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5">View Document</x-button><x-button type="button" class="border bg-background hover:bg-accent h-8 rounded-md gap-1.5 px-3 text-[#0F8A5F] border-[#0F8A5F] has-[>svg]:px-2.5"><svg class="h-4 w-4 mr-1" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;CheckCircle2&quot;)"></use></svg>Approve </x-button><x-button type="button" class="border bg-background hover:bg-accent h-8 rounded-md gap-1.5 px-3 text-red-600 border-red-200 has-[>svg]:px-2.5"><svg class="h-4 w-4 mr-1" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;XCircle&quot;)"></use></svg>Reject </x-button></div></template></div></template></div></div></div>
<div x-show="tab===&quot;messages&quot;" value="messages">
<div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-4 md:p-5 lg:p-6 lg:p-8">
<h2 class="text-xl font-semibold text-[#1F2933] mb-6">Message History</h2>
<div class="space-y-4 mb-6">
<template x-for="msg in application.messages">
<div class="border border-gray-200 rounded-lg p-4">
<div class="flex items-center justify-between mb-2"><span class="font-semibold text-[#1F2933]"><span x-text="msg.from"></span> → <span x-text="msg.to"></span></span><span class="text-xs text-[#667085]"><span x-text="msg.timestamp"></span></span></div><p class="text-sm text-[#1F2933]"><span x-text="msg.content"></span></p></div></template></div>
<div class="border-t border-gray-200 pt-6"><x-form.textarea placeholder="Send message to investor..." ::rows="4" class="mb-3"></x-form.textarea><x-button type="button" class="text-primary-foreground h-9 px-4 py-2 bg-[#123A63] hover:bg-[#123A63]/90 has-[>svg]:px-3"><svg class="h-4 w-4 mr-2" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Send&quot;)"></use></svg>Send Message </x-button></div></div></div>
<div x-show="tab===&quot;notes&quot;" value="notes">
<div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-4 md:p-5 lg:p-6 lg:p-8">
<h2 class="text-xl font-semibold text-[#1F2933] mb-6">Internal Notes</h2>
<div class="space-y-4 mb-6">
<template x-for="note in application.internalNotes">
<div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
<div class="flex items-center justify-between mb-2"><span class="font-semibold text-[#1F2933]"><span x-text="note.author"></span></span><span class="text-xs text-[#667085]"><span x-text="note.timestamp"></span></span></div><p class="text-sm text-[#1F2933]"><span x-text="note.content"></span></p></div></template></div>
<div class="border-t border-gray-200 pt-6"><x-form.textarea placeholder="Add internal note (not visible to investor)..." ::rows="4" class="mb-3"></x-form.textarea><x-button type="button" class="border bg-background text-foreground hover:bg-accent h-9 px-4 py-2 has-[>svg]:px-3"><svg class="h-4 w-4 mr-2" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;FileText&quot;)"></use></svg>Add Note </x-button></div></div></div></div></div>
<div class="space-y-6">
<div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-5 lg:p-6 sticky top-24">
<h3 class="font-semibold text-[#1F2933] mb-4">Admin Actions</h3>
<div class="space-y-3">
<div><label class="block text-sm font-medium text-[#1F2933] mb-2">Update Status</label><select x-init="$el.value=application.status"  class="flex h-9 w-full items-center rounded-md border border-input bg-input-background px-3 py-2 text-sm shadow-xs focus:outline-none focus:ring-2 focus:ring-[#123A63]"><option value="">Select</option><option value="new">New</option><option value="under-review">Under Review</option><option value="documents-pending">Documents Pending</option><option value="meeting-scheduled">Meeting Scheduled</option><option value="approved">Approved</option><option value="rejected">Rejected</option></select></div>
<div><label class="block text-sm font-medium text-[#1F2933] mb-2">Assign Case Manager</label><select x-init="$el.value='farrukh'"  class="flex h-9 w-full items-center rounded-md border border-input bg-input-background px-3 py-2 text-sm shadow-xs focus:outline-none focus:ring-2 focus:ring-[#123A63]"><option value="">Select</option><option value="farrukh">Farrukh Mahmadov</option><option value="aziza">Aziza Rahimova</option><option value="rustam">Rustam Nazarov</option></select></div><x-button type="button" class="text-primary-foreground h-9 px-4 py-2 w-full bg-[#0F8A5F] hover:bg-[#0F8A5F]/90 has-[>svg]:px-3"><svg class="h-4 w-4 mr-2" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;CheckCircle2&quot;)"></use></svg>Approve Application </x-button><x-button type="button" class="border bg-background text-foreground hover:bg-accent h-9 px-4 py-2 w-full has-[>svg]:px-3"><svg class="h-4 w-4 mr-2" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Calendar&quot;)"></use></svg>Schedule Meeting </x-button><x-button type="button" class="border bg-background text-foreground hover:bg-accent h-9 px-4 py-2 w-full has-[>svg]:px-3"><svg class="h-4 w-4 mr-2" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;AlertCircle&quot;)"></use></svg>Request Documents </x-button><x-button type="button" class="border bg-background hover:bg-accent h-9 px-4 py-2 w-full text-red-600 border-red-200 has-[>svg]:px-3"><svg class="h-4 w-4 mr-2" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;XCircle&quot;)"></use></svg>Reject Application </x-button></div></div>
<div class="bg-gradient-to-br from-[#123A63] to-[#0F8A5F] rounded-xl shadow-sm p-4 md:p-5 lg:p-6 text-white">
<h3 class="font-semibold mb-4">Current Case Manager</h3>
<div><p class="font-semibold"><span x-text="application.caseManager.name"></span></p><p class="text-white/80 text-sm"><span x-text="application.caseManager.position"></span></p></div></div></div></div></main></div>

@include('backend.partials.admin-page-end')
</div>
@endsection
