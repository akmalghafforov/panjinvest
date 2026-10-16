<div x-data="{mobileMenuOpen:false}" class="min-h-screen bg-[#F6F8FA] flex">

@include('backend.partials.admin-sidebar', ['scope' => 'AdminSidebar(()=>({mobileOpen:mobileMenuOpen,onMobileClose:()=>mobileMenuOpen=false}))'])
<div class="flex-1 flex flex-col min-w-0">
<div class="lg:hidden sticky top-0 z-30 bg-white border-b border-gray-200 px-4 py-3 flex items-center gap-3">
<button type="button" @click="mobileMenuOpen=true" aria-label="Open admin menu" class="p-2 hover:bg-gray-100 rounded-lg"><svg class="h-6 w-6" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><use href="#icon-Menu"/></svg></button>
<div>
<h2 class="font-bold text-[#123A63] text-sm">Admin Panel</h2><p class="text-xs text-[#667085]">Invest Panjakent</p></div>
</div>
<div class="flex-1">
