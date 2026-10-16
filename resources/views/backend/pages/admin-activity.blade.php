@extends('backend.layouts.app')
@section('content')
<div x-data="AdminActivityPage" data-page="AdminActivityPage">

@include('backend.partials.admin-page-start')
<div class="flex-1">
<div class="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-4 md:px-6 md:py-5 lg:px-8 lg:py-6">
<div class="flex items-center justify-between">
<div>
<h1 class="text-xl md:text-2xl font-bold text-[#1F2933]">Activity Log</h1><p class="text-[#667085] mt-1">Monitor system activity and user actions</p></div><x-button type="button" class="border bg-background text-foreground hover:bg-accent h-9 px-4 py-2 gap-2 has-[>svg]:px-3"><svg class="h-5 w-5" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Download&quot;)"></use></svg>Export Log </x-button></div></div>
<div class="p-4 md:p-4 md:p-5 lg:p-6 lg:p-8">
<div class="grid grid-cols-1 md:grid-cols-4 gap-4 md:p-5 lg:p-6 mb-8">
<template x-for="stat in stats">
<div class="bg-white rounded-lg border border-gray-200 p-4 md:p-5 lg:p-6"><p class="text-sm text-[#667085]"><span x-text="stat.label"></span></p><p :class="`text-xl md:text-2xl lg:text-3xl font-bold mt-2 ${stat.color}`"><span x-text="stat.value"></span></p><p class="text-xs text-[#667085] mt-1">activities</p></div></template></div>
<div class="bg-white rounded-lg border border-gray-200">
<div class="p-4 md:p-5 lg:p-6 border-b border-gray-200">
<div class="flex gap-4"><select class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F8A5F]"><option>All Categories</option><option>Projects</option><option>Applications</option><option>News</option><option>Documents</option><option>Users</option><option>Map</option><option>CMS</option><option>Languages</option></select><select class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F8A5F]"><option>All Actions</option><option>Create</option><option>Update</option><option>Delete</option><option>Publish</option><option>Approve</option><option>Upload</option></select><select class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F8A5F]"><option>All Users</option><option>Sarah Johnson</option><option>Michael Chen</option><option>David Park</option><option>Admin</option></select><select class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F8A5F]"><option>Last 24 Hours</option><option>Last 7 Days</option><option>Last 30 Days</option><option>Last 90 Days</option></select></div></div>
<div class="divide-y divide-gray-200">
<template x-for="activity in activities">
<div class="p-4 md:p-5 lg:p-6 hover:bg-gray-50 transition-colors">
<div class="flex items-start gap-4">
<div :class="`p-3 rounded-lg ${getActivityIcon(activity.type)}`"><svg class="h-5 w-5" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Activity&quot;)"></use></svg></div>
<div class="flex-1">
<div class="flex items-start justify-between mb-2">
<div><p class="font-medium text-[#1F2933]"><span class="text-[#0F8A5F]"><span x-text="activity.user"></span></span> <span x-text="activity.action"></span></p><p class="text-sm text-[#667085] mt-1"><span x-text="activity.target"></span></p></div><span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"><span x-text="activity.category"></span></span></div>
<div class="flex items-center gap-4 text-sm text-[#667085]">
<div class="flex items-center gap-1"><svg class="h-4 w-4" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Calendar&quot;)"></use></svg><span x-text="activity.timestamp"></span></div>
<div class="flex items-center gap-1"><svg class="h-4 w-4" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;User&quot;)"></use></svg><span x-text="activity.user"></span></div></div></div></div></div></template></div>
<div class="p-4 md:p-5 lg:p-6 border-t border-gray-200 flex items-center justify-between"><p class="text-sm text-[#667085]">Showing 10 of 892 activities</p>
<div class="flex gap-2"><x-button type="button" class="border bg-background text-foreground hover:bg-accent h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5">Previous</x-button><x-button type="button" class="border bg-background text-foreground hover:bg-accent h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5">Next</x-button></div></div></div></div></div>

@include('backend.partials.admin-page-end')
</div>
@endsection
