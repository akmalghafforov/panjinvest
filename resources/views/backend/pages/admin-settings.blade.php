@extends('backend.layouts.app')
@section('content')
<div x-data="AdminSettingsPage" data-page="AdminSettingsPage">

@include('backend.partials.admin-page-start')
<div class="flex-1">
<div class="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-4 md:px-6 md:py-5 lg:px-8 lg:py-6">
<div class="flex items-center justify-between">
<div>
<h1 class="text-xl md:text-2xl font-bold text-[#1F2933]">Settings</h1><p class="text-[#667085] mt-1">Configure system preferences and options</p></div><x-button type="button" class="h-9 px-4 py-2 bg-[#0F8A5F] hover:bg-[#0F8A5F]/90 text-white gap-2 has-[>svg]:px-3"><svg class="h-5 w-5" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Save&quot;)"></use></svg>Save Changes </x-button></div></div>
<div class="p-4 md:p-4 md:p-5 lg:p-6 lg:p-8">
<div class="grid grid-cols-1 lg:grid-cols-4 gap-4 md:p-4 md:p-5 lg:p-6 lg:p-8">
<div class="bg-white rounded-lg border border-gray-200 p-4 h-fit">
<nav class="space-y-1">
<template x-for="tab in tabs"><button x-data="({
  get Icon() {
    return tab.icon;
  }
})" @click="(() =&gt; setActiveTab(tab.id))($event)" :class="`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === tab.id ? &quot;bg-[#0F8A5F] text-white&quot; : &quot;text-[#667085] hover:bg-gray-100&quot;}`"><svg class="h-5 w-5" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (Icon)"></use></svg><span class="font-medium"><span x-text="tab.label"></span></span></button></template></nav></div>
<div class="lg:col-span-3 bg-white rounded-lg border border-gray-200">
<template x-if="Boolean(activeTab === &quot;general&quot;)">
<div class="p-4 md:p-4 md:p-5 lg:p-6 lg:p-8">
<h2 class="text-lg font-semibold text-[#1F2933] mb-6">General Settings</h2>
<div class="space-y-6">
<div><label class="block text-sm font-medium text-[#667085] mb-2">Site Name </label><input type="text" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F8A5F]" value="Invest Panjakent"></div>
<div><label class="block text-sm font-medium text-[#667085] mb-2">Site Description </label><textarea :rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F8A5F]">Investment opportunities in Panjakent, Tajikistan</textarea></div>
<div><label class="block text-sm font-medium text-[#667085] mb-2">Default Language </label><select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F8A5F]"><option>English</option><option>Tajik</option><option>Russian</option></select></div>
<div><label class="block text-sm font-medium text-[#667085] mb-2">Timezone </label><select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F8A5F]"><option>Asia/Dushanbe (UTC+5)</option><option>UTC</option><option>Europe/London (UTC+0)</option></select></div>
<div class="flex items-center gap-3"><input type="checkbox" id="maintenance" class="w-4 h-4 text-[#0F8A5F] rounded focus:ring-[#0F8A5F]"><label for="maintenance" class="text-sm text-[#667085]">Enable maintenance mode </label></div></div></div></template>
<template x-if="Boolean(activeTab === &quot;appearance&quot;)">
<div class="p-4 md:p-4 md:p-5 lg:p-6 lg:p-8">
<h2 class="text-lg font-semibold text-[#1F2933] mb-6">Appearance Settings</h2>
<div class="space-y-6">
<div><label class="block text-sm font-medium text-[#667085] mb-2">Primary Color </label>
<div class="flex items-center gap-4"><input type="color" class="h-10 w-20 rounded border border-gray-300" value="#0F8A5F"><input type="text" class="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F8A5F]" value="#0F8A5F"></div></div>
<div><label class="block text-sm font-medium text-[#667085] mb-2">Secondary Color </label>
<div class="flex items-center gap-4"><input type="color" class="h-10 w-20 rounded border border-gray-300" value="#123A63"><input type="text" class="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F8A5F]" value="#123A63"></div></div>
<div><label class="block text-sm font-medium text-[#667085] mb-2">Logo Upload </label>
<div class="border-2 border-dashed border-gray-300 rounded-lg p-4 md:p-4 md:p-5 lg:p-6 lg:p-8 text-center"><p class="text-sm text-[#667085]">Click to upload or drag and drop</p><p class="text-xs text-[#667085] mt-1">SVG, PNG, JPG (max. 2MB)</p></div></div></div></div></template>
<template x-if="Boolean(activeTab === &quot;notifications&quot;)">
<div class="p-4 md:p-4 md:p-5 lg:p-6 lg:p-8">
<h2 class="text-lg font-semibold text-[#1F2933] mb-6">Notification Settings</h2>
<div class="space-y-4">
<div class="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
<div><p class="font-medium text-[#1F2933]">New Applications</p><p class="text-sm text-[#667085]">Receive notifications for new investment applications</p></div><input type="checkbox" class="w-4 h-4 text-[#0F8A5F] rounded" checked></div>
<div class="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
<div><p class="font-medium text-[#1F2933]">Application Status Changes</p><p class="text-sm text-[#667085]">Get notified when application status is updated</p></div><input type="checkbox" class="w-4 h-4 text-[#0F8A5F] rounded" checked></div>
<div class="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
<div><p class="font-medium text-[#1F2933]">New Messages</p><p class="text-sm text-[#667085]">Notifications for new investor messages</p></div><input type="checkbox" class="w-4 h-4 text-[#0F8A5F] rounded" checked></div>
<div class="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
<div><p class="font-medium text-[#1F2933]">System Updates</p><p class="text-sm text-[#667085]">Important system notifications and updates</p></div><input type="checkbox" class="w-4 h-4 text-[#0F8A5F] rounded" checked></div></div></div></template>
<template x-if="Boolean(activeTab === &quot;security&quot;)">
<div class="p-4 md:p-4 md:p-5 lg:p-6 lg:p-8">
<h2 class="text-lg font-semibold text-[#1F2933] mb-6">Security Settings</h2>
<div class="space-y-6">
<div><label class="block text-sm font-medium text-[#667085] mb-2">Session Timeout (minutes) </label><input type="number" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F8A5F]" value="30"></div>
<div class="flex items-center gap-3"><input type="checkbox" id="2fa" class="w-4 h-4 text-[#0F8A5F] rounded" checked><label for="2fa" class="text-sm text-[#667085]">Require two-factor authentication for all users </label></div>
<div class="flex items-center gap-3"><input type="checkbox" id="password-policy" class="w-4 h-4 text-[#0F8A5F] rounded" checked><label for="password-policy" class="text-sm text-[#667085]">Enforce strong password policy </label></div>
<div><label class="block text-sm font-medium text-[#667085] mb-2">Password Expiry (days) </label><input type="number" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F8A5F]" value="90"></div></div></div></template>
<template x-if="Boolean(activeTab === &quot;email&quot;)">
<div class="p-4 md:p-4 md:p-5 lg:p-6 lg:p-8">
<h2 class="text-lg font-semibold text-[#1F2933] mb-6">Email Settings</h2>
<div class="space-y-6">
<div><label class="block text-sm font-medium text-[#667085] mb-2">SMTP Host </label><input type="text" placeholder="smtp.example.com" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F8A5F]"></div>
<div><label class="block text-sm font-medium text-[#667085] mb-2">SMTP Port </label><input type="number" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F8A5F]" value="587"></div>
<div><label class="block text-sm font-medium text-[#667085] mb-2">From Email </label><input type="email" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F8A5F]" value="noreply@panjakent.tj"></div>
<div><label class="block text-sm font-medium text-[#667085] mb-2">From Name </label><input type="text" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F8A5F]" value="Invest Panjakent"></div><x-button type="button" class="border bg-background text-foreground hover:bg-accent h-9 px-4 py-2 has-[>svg]:px-3">Test Email Configuration</x-button></div></div></template>
<template x-if="Boolean(activeTab === &quot;advanced&quot;)">
<div class="p-4 md:p-4 md:p-5 lg:p-6 lg:p-8">
<h2 class="text-lg font-semibold text-[#1F2933] mb-6">Advanced Settings</h2>
<div class="space-y-6">
<div class="p-4 bg-yellow-50 border border-yellow-200 rounded-lg"><p class="text-sm text-yellow-800"><strong>Warning:</strong> These settings are for advanced users only. Incorrect configuration may affect system performance. </p></div>
<div><label class="block text-sm font-medium text-[#667085] mb-2">Cache Duration (seconds) </label><input type="number" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F8A5F]" value="3600"></div>
<div><label class="block text-sm font-medium text-[#667085] mb-2">API Rate Limit (requests/minute) </label><input type="number" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F8A5F]" value="100"></div>
<div class="flex items-center gap-3"><input type="checkbox" id="debug" class="w-4 h-4 text-[#0F8A5F] rounded"><label for="debug" class="text-sm text-[#667085]">Enable debug mode </label></div><x-button type="button" class="border bg-background hover:bg-accent h-9 px-4 py-2 text-red-600 border-red-600 has-[>svg]:px-3">Clear All Cache </x-button></div></div></template></div></div></div></div>

@include('backend.partials.admin-page-end')
</div>
@endsection
