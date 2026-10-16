@extends('frontend.layouts.app')
@section('content')
<div x-data="ImprovedInvestorPortalPage" data-page="ImprovedInvestorPortalPage">
<div class="min-h-screen bg-[#F6F8FA]">
<section class="bg-gradient-to-br from-[#123A63] to-[#0F8A5F] text-white py-12">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="flex items-center justify-between">
<div>
<h1 class="text-4xl font-bold mb-2">Investor Portal</h1><p class="text-white/90">Welcome back, John Investor</p></div><x-button type="button" class="border h-9 px-4 py-2 bg-white/10 border-white/20 text-white hover:bg-white/20 has-[>svg]:px-3"><svg class="h-4 w-4 mr-2" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Settings&quot;)"></use></svg>Settings </x-button></div></div></section>
<section class="py-8">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="grid md:grid-cols-4 gap-6 mb-8">
<div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
<div class="flex items-center justify-between mb-4"><svg class="h-8 w-8 text-[#123A63]" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;FileText&quot;)"></use></svg><span class="text-3xl font-bold text-[#123A63]"><span x-text="myApplications.length"></span></span></div>
<h3 class="text-sm text-[#667085]">Active Applications</h3></div>
<div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
<div class="flex items-center justify-between mb-4"><svg class="h-8 w-8 text-[#0F8A5F]" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Bookmark&quot;)"></use></svg><span class="text-3xl font-bold text-[#0F8A5F]"><span x-text="savedOpportunities.length"></span></span></div>
<h3 class="text-sm text-[#667085]">Saved Opportunities</h3></div>
<div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
<div class="flex items-center justify-between mb-4"><svg class="h-8 w-8 text-[#D6A536]" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Calendar&quot;)"></use></svg><span class="text-3xl font-bold text-[#D6A536]"><span x-text="upcomingMeetings.length"></span></span></div>
<h3 class="text-sm text-[#667085]">Upcoming Meetings</h3></div>
<div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
<div class="flex items-center justify-between mb-4"><svg class="h-8 w-8 text-blue-600" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;MessageSquare&quot;)"></use></svg><span class="text-3xl font-bold text-blue-600"><span x-text="recentMessages.filter(m =&gt; !m.read).length"></span></span></div>
<h3 class="text-sm text-[#667085]">Unread Messages</h3></div></div>
<div class="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
<div class="flex items-start gap-4"><svg class="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Bell&quot;)"></use></svg>
<div class="flex-1">
<h3 class="font-semibold text-blue-900 mb-2">Complete Your Profile</h3><p class="text-sm text-blue-800 mb-4">Your profile is 60% complete. Add more information to help us serve you better. </p>
<div class="w-full bg-blue-200 rounded-full h-2 mb-4">
<div class="bg-blue-600 h-2 rounded-full" :style="{
  width: &quot;60%&quot;
}"></div></div><a href="{{ route('frontend.not-found', ['path' => 'portal/profile']) }}"><x-button type="button" class="border bg-background h-9 px-4 py-2 border-blue-600 text-blue-600 hover:bg-blue-50 has-[>svg]:px-3"><svg class="h-4 w-4 mr-2" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;User&quot;)"></use></svg>Complete Profile </x-button></a></div></div></div>
<div x-data="{tab:&quot;applications&quot;}" class="flex flex-col gap-2 space-y-6">
<div class="bg-muted text-muted-foreground h-9 items-center justify-center rounded-xl p-[3px] grid w-full grid-cols-4 lg:w-auto"><button type="button" @click="tab=&quot;applications&quot;" :class="tab===&quot;applications&quot;?'bg-white shadow-sm text-foreground':''" class="inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap" value="applications">Applications</button><button type="button" @click="tab=&quot;saved&quot;" :class="tab===&quot;saved&quot;?'bg-white shadow-sm text-foreground':''" class="inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap" value="saved">Saved</button><button type="button" @click="tab=&quot;meetings&quot;" :class="tab===&quot;meetings&quot;?'bg-white shadow-sm text-foreground':''" class="inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap" value="meetings">Meetings</button><button type="button" @click="tab=&quot;messages&quot;" :class="tab===&quot;messages&quot;?'bg-white shadow-sm text-foreground':''" class="inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap" value="messages">Messages</button></div>
<div x-show="tab===&quot;applications&quot;" value="applications" class="space-y-4">
<div class="flex items-center justify-between">
<h2 class="text-2xl font-bold text-[#1F2933]">My Applications</h2><a href="{{ route('frontend.submit-interest') }}"><x-button type="button" class="text-primary-foreground h-9 px-4 py-2 bg-[#0F8A5F] hover:bg-[#0F8A5F]/90 has-[>svg]:px-3"><svg class="h-4 w-4 mr-2" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;FileText&quot;)"></use></svg>New Application </x-button></a></div>
<template x-if="Boolean(myApplications.length &gt; 0)">
<div class="grid gap-6">
<template x-for="app in myApplications">
@include('components.application-card', ['scope' => 'ApplicationCard(()=>({...app}))'])</template></div></template>
<template x-if="Boolean(!(myApplications.length &gt; 0))">
@include('components.empty-state', ['scope' => 'EmptyState(()=>({icon:"FileText",title:"No applications yet",description:"You haven\'t submitted any investment interest applications. Browse opportunities and submit your first application.",actionLabel:"Browse Opportunities",onAction:() => window.location.href = "/opportunities"}))'])</template></div>
<div x-show="tab===&quot;saved&quot;" value="saved" class="space-y-4">
<h2 class="text-2xl font-bold text-[#1F2933]">Saved Opportunities</h2>
<template x-if="Boolean(savedOpportunities.length &gt; 0)">
<div class="grid md:grid-cols-2 gap-6">
<template x-for="opp in savedOpportunities"><a :href="url(`/opportunities/${opp.id}`)">
<div class="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
<div class="flex items-start justify-between mb-3"><span class="px-3 py-1 bg-[#123A63]/10 text-[#123A63] text-xs rounded-full"><span x-text="opp.sector"></span></span><svg class="h-5 w-5 text-[#0F8A5F] fill-current" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Bookmark&quot;)"></use></svg></div>
<h3 class="font-semibold text-[#1F2933] mb-2"><span x-text="opp.title"></span></h3><p class="text-sm text-[#667085]"><span x-text="opp.investment"></span></p></div></a></template></div></template>
<template x-if="Boolean(!(savedOpportunities.length &gt; 0))">
@include('components.empty-state', ['scope' => 'EmptyState(()=>({icon:"Bookmark",title:"No saved opportunities",description:"Save investment opportunities to easily find them later and compare options.",actionLabel:"Browse Opportunities",onAction:() => window.location.href = "/opportunities"}))'])</template></div>
<div x-show="tab===&quot;meetings&quot;" value="meetings" class="space-y-4">
<div class="flex items-center justify-between">
<h2 class="text-2xl font-bold text-[#1F2933]">Upcoming Meetings</h2><a href="{{ route('frontend.contact') }}"><x-button type="button" class="border bg-background text-foreground hover:bg-accent h-9 px-4 py-2 has-[>svg]:px-3"><svg class="h-4 w-4 mr-2" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Calendar&quot;)"></use></svg>Book Consultation </x-button></a></div>
<template x-if="Boolean(upcomingMeetings.length &gt; 0)">
<div class="space-y-4">
<template x-for="meeting in upcomingMeetings">
<div class="bg-white rounded-lg border border-gray-200 p-6">
<div class="flex items-start justify-between">
<div class="flex-1">
<h3 class="font-semibold text-[#1F2933] mb-2"><span x-text="meeting.title"></span></h3>
<div class="space-y-1 text-sm text-[#667085]"><p class="flex items-center gap-2"><svg class="h-4 w-4" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Calendar&quot;)"></use></svg><span x-text="meeting.date"></span> at <span x-text="meeting.time"></span></p><p class="flex items-center gap-2"><svg class="h-4 w-4" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;User&quot;)"></use></svg>With: <span x-text="meeting.with"></span></p><p class="flex items-center gap-2"><svg class="h-4 w-4" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;MessageSquare&quot;)"></use></svg>Type: <span x-text="meeting.type"></span></p></div></div><x-button type="button" class="border bg-background text-foreground hover:bg-accent h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5">Join Meeting </x-button></div></div></template></div></template>
<template x-if="Boolean(!(upcomingMeetings.length &gt; 0))">
@include('components.empty-state', ['scope' => 'EmptyState(()=>({icon:"Calendar",title:"No upcoming meetings",description:"Schedule a consultation with our investment team to discuss opportunities.",actionLabel:"Book Consultation",onAction:() => window.location.href = "/contact"}))'])</template></div>
<div x-show="tab===&quot;messages&quot;" value="messages" class="space-y-4">
<h2 class="text-2xl font-bold text-[#1F2933]">Messages</h2>
<template x-if="Boolean(recentMessages.length &gt; 0)">
<div class="space-y-2">
<template x-for="message in recentMessages">
<div :class="`bg-white rounded-lg border border-gray-200 p-6 hover:shadow-sm transition-shadow cursor-pointer ${!message.read ? &quot;border-l-4 border-l-blue-600&quot; : &quot;&quot;}`">
<div class="flex items-start justify-between">
<div class="flex-1">
<div class="flex items-center gap-3 mb-2">
<h3 class="font-semibold text-[#1F2933]"><span x-text="message.from"></span></h3>
<template x-if="Boolean(!message.read)"><span class="px-2 py-0.5 bg-blue-600 text-white text-xs rounded-full">New </span></template></div><p class="text-sm text-[#1F2933] mb-1"><span x-text="message.subject"></span></p><p class="text-xs text-[#667085]"><span x-text="message.date"></span></p></div><svg class="h-5 w-5 text-[#667085]" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;MessageSquare&quot;)"></use></svg></div></div></template></div></template>
<template x-if="Boolean(!(recentMessages.length &gt; 0))">
@include('components.empty-state', ['scope' => 'EmptyState(()=>({icon:"MessageSquare",title:"No messages",description:"You don\'t have any messages from the investment support team yet."}))'])</template></div></div></div></section></div>
</div>
@endsection
