@extends('backend.layouts.app')
@section('content')
<div x-data="AdminUsersPage" data-page="AdminUsersPage">

@include('backend.partials.admin-page-start')
<div class="flex-1">
<div class="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-4 md:px-6 md:py-5 lg:px-8 lg:py-6">
<div class="flex items-center justify-between">
<div>
<h1 class="text-xl md:text-2xl font-bold text-[#1F2933]">Users and Roles</h1><p class="text-[#667085] mt-1">Manage user accounts and permissions</p></div><x-button type="button" class="h-9 px-4 py-2 bg-[#0F8A5F] hover:bg-[#0F8A5F]/90 text-white gap-2 has-[>svg]:px-3"><svg class="h-5 w-5" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Plus&quot;)"></use></svg>Add User </x-button></div></div>
<div class="p-4 md:p-4 md:p-5 lg:p-6 lg:p-8">
<div class="grid grid-cols-1 md:grid-cols-4 gap-4 md:p-5 lg:p-6 mb-8">
<template x-for="stat in stats">
<div class="bg-white rounded-lg border border-gray-200 p-4 md:p-5 lg:p-6"><p class="text-sm text-[#667085]"><span x-text="stat.label"></span></p><p :class="`text-xl md:text-2xl lg:text-3xl font-bold mt-2 ${stat.color}`"><span x-text="stat.value"></span></p></div></template></div>
<div class="grid grid-cols-1 lg:grid-cols-3 gap-4 md:p-5 lg:p-6 mb-8">
<template x-for="role in roles">
<div class="bg-white rounded-lg border border-gray-200 p-4 md:p-5 lg:p-6">
<div class="flex items-center justify-between mb-4">
<h3 class="font-semibold text-[#1F2933]"><span x-text="role.name"></span></h3><span :class="`px-3 py-1 rounded-full text-sm font-medium ${role.color}`"><span x-text="role.count"></span> users </span></div>
<ul class="space-y-2">
<template x-for="(permission, index) in role.permissions">
<li class="flex items-center gap-2 text-sm text-[#667085]">
<div class="w-1.5 h-1.5 rounded-full bg-[#0F8A5F]"></div><span x-text="permission"></span></li></template></ul><x-button type="button" class="border bg-background text-foreground hover:bg-accent h-8 rounded-md gap-1.5 px-3 w-full mt-4 has-[>svg]:px-2.5">Manage Role </x-button></div></template></div>
<div class="bg-white rounded-lg border border-gray-200">
<div class="p-4 md:p-5 lg:p-6 border-b border-gray-200">
<div class="flex gap-4">
<div class="flex-1 relative"><svg class="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#667085]" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Search&quot;)"></use></svg><input type="text" placeholder="Search users..." class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F8A5F] focus:border-transparent"></div><select class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F8A5F]"><option>All Roles</option><option>Admin</option><option>Editor</option><option>Viewer</option></select><select class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F8A5F]"><option>All Status</option><option>Active</option><option>Inactive</option></select></div></div>
<div class="overflow-x-auto -mx-4 md:mx-0 px-4 md:px-0">
<table class="w-full">
<thead class="bg-gray-50">
<tr>
<th class="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">User </th>
<th class="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">Role </th>
<th class="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">Status </th>
<th class="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">Last Login </th>
<th class="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">Created </th>
<th class="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">Actions </th></tr></thead>
<tbody class="bg-white divide-y divide-gray-200">
<template x-for="user in users">
<tr class="hover:bg-gray-50">
<td class="px-6 py-4">
<div><p class="font-medium text-[#1F2933]"><span x-text="user.name"></span></p><p class="text-sm text-[#667085]"><span x-text="user.email"></span></p></div></td>
<td class="px-6 py-4 whitespace-nowrap"><span :class="`px-3 py-1 rounded-full text-sm font-medium ${user.role === &quot;Admin&quot; ? &quot;bg-red-50 text-red-700&quot; : user.role === &quot;Editor&quot; ? &quot;bg-blue-50 text-blue-700&quot; : &quot;bg-green-50 text-green-700&quot;}`"><span x-text="user.role"></span></span></td>
<td class="px-6 py-4 whitespace-nowrap">
<div class="flex items-center gap-2">
<template x-if="Boolean(user.status === &quot;active&quot;)"><svg class="h-4 w-4 text-green-600" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;UserCheck&quot;)"></use></svg><span class="text-sm text-green-600">Active</span></template>
<template x-if="Boolean(!(user.status === &quot;active&quot;))"><svg class="h-4 w-4 text-gray-400" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;UserX&quot;)"></use></svg><span class="text-sm text-gray-600">Inactive</span></template></div></td>
<td class="px-6 py-4 whitespace-nowrap text-[#667085]"><span x-text="user.lastLogin"></span></td>
<td class="px-6 py-4 whitespace-nowrap text-[#667085]"><span x-text="user.createdAt"></span></td>
<td class="px-6 py-4 whitespace-nowrap">
<div class="flex gap-2"><x-button type="button" class="border bg-background text-foreground hover:bg-accent h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5"><svg class="h-4 w-4" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Edit&quot;)"></use></svg></x-button><x-button type="button" class="border bg-background text-foreground hover:bg-accent h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5"><svg class="h-4 w-4 text-red-500" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Trash2&quot;)"></use></svg></x-button></div></td></tr></template></tbody></table></div></div></div></div>

@include('backend.partials.admin-page-end')
</div>
@endsection
