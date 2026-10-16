@extends('frontend.layouts.app')
@section('content')
<div x-data="ContactPage" data-page="ContactPage">
<div class="min-h-screen bg-[#F6F8FA]">
<section class="bg-gradient-to-br from-[#123A63] to-[#0F8A5F] text-white py-16">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h1 class="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1><p class="text-xl text-white/90 max-w-3xl">Get in touch with our investment facilitation team </p></div></section>
<section class="py-12">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="grid lg:grid-cols-3 gap-8 mb-12">
<div class="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
<div class="p-3 bg-[#123A63]/10 rounded-lg w-fit mb-4"><svg class="h-6 w-6 text-[#123A63]" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Phone&quot;)"></use></svg></div>
<h3 class="text-xl font-semibold text-[#1F2933] mb-2">Phone</h3><p class="text-[#667085] mb-4">Call us during business hours</p><a href="tel:+99234225XXXX" class="text-[#123A63] font-semibold hover:text-[#0F8A5F] transition-colors">+992 3422 5-XX-XX </a></div>
<div class="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
<div class="p-3 bg-[#123A63]/10 rounded-lg w-fit mb-4"><svg class="h-6 w-6 text-[#123A63]" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Mail&quot;)"></use></svg></div>
<h3 class="text-xl font-semibold text-[#1F2933] mb-2">Email</h3><p class="text-[#667085] mb-4">Send us an email anytime</p><a href="mailto:invest@panjakent.tj" class="text-[#123A63] font-semibold hover:text-[#0F8A5F] transition-colors">invest@panjakent.tj </a></div>
<div class="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
<div class="p-3 bg-[#123A63]/10 rounded-lg w-fit mb-4"><svg class="h-6 w-6 text-[#123A63]" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;MapPin&quot;)"></use></svg></div>
<h3 class="text-xl font-semibold text-[#1F2933] mb-2">Office</h3><p class="text-[#667085] mb-4">Visit us at our office</p><p class="text-[#123A63] font-semibold">Investment Department<br>Panjakent City Administration </p></div></div>
<div class="grid lg:grid-cols-2 gap-8">
<div class="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
<h2 class="text-2xl font-bold text-[#1F2933] mb-6">Send Us a Message</h2>
<form class="space-y-6">
<div class="grid md:grid-cols-2 gap-6">
<div><label class="block text-sm font-medium text-[#1F2933] mb-2">First Name * </label><input type="text" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#123A63] focus:border-transparent" placeholder="John"></div>
<div><label class="block text-sm font-medium text-[#1F2933] mb-2">Last Name * </label><input type="text" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#123A63] focus:border-transparent" placeholder="Doe"></div></div>
<div><label class="block text-sm font-medium text-[#1F2933] mb-2">Email Address * </label><input type="email" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#123A63] focus:border-transparent" placeholder="john.doe@example.com"></div>
<div><label class="block text-sm font-medium text-[#1F2933] mb-2">Phone Number </label><input type="tel" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#123A63] focus:border-transparent" placeholder="+1 (555) 000-0000"></div>
<div><label class="block text-sm font-medium text-[#1F2933] mb-2">Subject * </label><select class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#123A63] focus:border-transparent"><option>General Inquiry</option><option>Investment Opportunity</option><option>Site Visit Request</option><option>Document Request</option><option>Other</option></select></div>
<div><label class="block text-sm font-medium text-[#1F2933] mb-2">Message * </label><textarea :rows="6" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#123A63] focus:border-transparent" placeholder="Tell us about your investment interest..."></textarea></div><button type="submit" class="w-full px-6 py-4 bg-[#0F8A5F] text-white rounded-lg hover:bg-[#0F8A5F]/90 transition-colors inline-flex items-center justify-center gap-2"><svg class="h-5 w-5" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Send&quot;)"></use></svg>Send Message </button></form></div>
<div class="space-y-8">
<div class="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
<div class="flex items-start gap-4 mb-6">
<div class="p-3 bg-[#0F8A5F]/10 rounded-lg"><svg class="h-6 w-6 text-[#0F8A5F]" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Clock&quot;)"></use></svg></div>
<div>
<h3 class="text-xl font-semibold text-[#1F2933] mb-2">Office Hours</h3><p class="text-[#667085]">We're here to help during business hours</p></div></div>
<div class="space-y-3">
<div class="flex justify-between p-3 bg-gray-50 rounded-lg"><span class="text-[#1F2933]">Monday - Friday</span><span class="font-semibold text-[#1F2933]">9:00 AM - 6:00 PM</span></div>
<div class="flex justify-between p-3 bg-gray-50 rounded-lg"><span class="text-[#1F2933]">Saturday</span><span class="font-semibold text-[#1F2933]">9:00 AM - 1:00 PM</span></div>
<div class="flex justify-between p-3 bg-gray-50 rounded-lg"><span class="text-[#1F2933]">Sunday</span><span class="font-semibold text-[#667085]">Closed</span></div></div></div>
<div class="bg-gradient-to-br from-[#123A63] to-[#0F8A5F] rounded-xl shadow-sm p-8 text-white">
<h3 class="text-xl font-semibold mb-6">Investment Team</h3>
<div class="space-y-4">
<div class="pb-4 border-b border-white/20">
<h4 class="font-semibold mb-1">Farrukh Mahmadov</h4><p class="text-white/80 text-sm mb-2">Investment Coordinator</p>
<div class="flex items-center gap-2 text-sm text-white/90"><svg class="h-4 w-4" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Mail&quot;)"></use></svg><span>f.mahmadov@panjakent.tj</span></div></div>
<div class="pb-4 border-b border-white/20">
<h4 class="font-semibold mb-1">Dilbar Rahimova</h4><p class="text-white/80 text-sm mb-2">Tourism Specialist</p>
<div class="flex items-center gap-2 text-sm text-white/90"><svg class="h-4 w-4" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Mail&quot;)"></use></svg><span>d.rahimova@panjakent.tj</span></div></div>
<div>
<h4 class="font-semibold mb-1">Rustam Nazarov</h4><p class="text-white/80 text-sm mb-2">Agriculture & Food Processing</p>
<div class="flex items-center gap-2 text-sm text-white/90"><svg class="h-4 w-4" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Mail&quot;)"></use></svg><span>r.nazarov@panjakent.tj</span></div></div></div></div>
<div class="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
<h3 class="text-xl font-semibold text-[#1F2933] mb-4">Quick Contact</h3>
<div class="space-y-3"><a href="https://wa.me/99234225XXXX" target="_blank" rel="noopener noreferrer" class="w-full px-4 py-3 bg-[#25D366] text-white rounded-lg hover:bg-[#25D366]/90 transition-colors inline-flex items-center justify-center gap-2"><svg class="h-5 w-5" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;MessageSquare&quot;)"></use></svg>WhatsApp </a><a href="https://t.me/investpanjakent" target="_blank" rel="noopener noreferrer" class="w-full px-4 py-3 bg-[#0088cc] text-white rounded-lg hover:bg-[#0088cc]/90 transition-colors inline-flex items-center justify-center gap-2"><svg class="h-5 w-5" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Send&quot;)"></use></svg>Telegram </a><button class="w-full px-4 py-3 border-2 border-[#123A63] text-[#123A63] rounded-lg hover:bg-[#123A63]/5 transition-colors inline-flex items-center justify-center gap-2"><svg class="h-5 w-5" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Calendar&quot;)"></use></svg>Book Consultation </button><a href="tel:+99234225XXXX" class="w-full px-4 py-3 bg-[#0F8A5F] text-white rounded-lg hover:bg-[#0F8A5F]/90 transition-colors inline-flex items-center justify-center gap-2"><svg class="h-5 w-5" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Phone&quot;)"></use></svg>Direct Hotline </a></div></div>
<div class="bg-gradient-to-br from-[#0F8A5F] to-[#123A63] rounded-xl shadow-sm p-6 text-white">
<div class="flex items-start gap-3 mb-4"><svg class="h-6 w-6 flex-shrink-0" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;CheckCircle2&quot;)"></use></svg>
<div>
<h3 class="font-semibold mb-2">Official Verified Contact</h3><p class="text-white/90 text-sm">This is the official investment portal of Panjakent City Administration. All information and contacts are verified. </p></div></div></div>
<div class="bg-white rounded-xl shadow-sm p-6 border-2 border-red-200">
<div class="flex items-start gap-3"><svg class="h-6 w-6 text-red-600 flex-shrink-0" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Shield&quot;)"></use></svg>
<div>
<h3 class="font-semibold text-[#1F2933] mb-2">Anti-Corruption Notice</h3><p class="text-sm text-[#667085] mb-3">Investment services are provided free of charge by government officials. Any request for unofficial payments should be reported immediately. </p><a href="mailto:anticorruption@panjakent.tj" class="text-sm text-red-600 hover:text-red-700 font-medium">Report Corruption → </a></div></div></div></div></div>
<div class="mt-12 bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
<div class="p-8 border-b border-gray-200">
<h2 class="text-2xl font-bold text-[#1F2933] mb-2">Office Location</h2><p class="text-[#667085]">Investment Department, Panjakent City Administration</p></div>
<div class="h-96 bg-gradient-to-br from-[#E8F5E9] via-[#FFF8E1] to-[#E3F2FD] flex items-center justify-center">
<div class="text-center"><svg class="h-16 w-16 text-[#123A63] mx-auto mb-4" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;MapPin&quot;)"></use></svg><p class="text-[#667085] mb-4">Panjakent City Center</p><p class="text-sm text-[#667085]">Working Hours: Monday - Friday, 9:00 AM - 6:00 PM</p></div></div></div></div></section></div>
</div>
@endsection
