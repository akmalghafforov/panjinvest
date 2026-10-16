@extends('frontend.layouts.app')
@section('content')
<div x-data="InvestorGuidePage" data-page="InvestorGuidePage">
<div class="min-h-screen bg-[#F6F8FA]">
<section class="atlas-band text-white py-16">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h1 class="text-4xl md:text-5xl font-bold mb-4">Investor Guide</h1><p class="text-xl text-white/90 max-w-3xl mb-6">Complete guide to investing in Panjakent - from initial interest to successful operations </p><button class="px-6 py-3 bg-white text-[#123A63] rounded-sm hover:bg-white/90 transition-colors inline-flex items-center gap-2"><svg class="h-5 w-5" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Download&quot;)"></use></svg>Download Complete Guide (PDF) </button></div></section>
<section class="py-12">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="guide-layout">
<div class="guide-contents">
<div class="sticky top-24">
<div class="bg-white rounded-sm  p-6 border border-gray-100">
<h3 class="font-semibold text-[#1F2933] mb-4">Contents</h3>
<nav class="space-y-1">
<template x-for="item in tableOfContents"><button x-data="({
  get Icon() {
    return item.icon;
  }
})" @click="(() =&gt; scrollToSection(item.id))($event)" :class="`w-full flex items-center gap-3 px-3 py-2 rounded-sm transition-colors text-sm ${activeSection === item.id ? &quot;bg-[#123A63] text-white&quot; : &quot;text-[#667085] hover:bg-gray-50&quot;}`"><svg class="h-4 w-4" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (Icon)"></use></svg><span x-text="item.title"></span></button></template></nav></div></div></div>
<div class="flex-1 space-y-12">
<div id="how-to-invest" class="bg-white rounded-sm  p-8 border border-gray-100">
<div class="flex items-center gap-3 mb-6"><svg class="h-8 w-8 text-[#123A63]" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;TrendingUp&quot;)"></use></svg>
<h2 class="text-3xl font-bold text-[#1F2933]">How to Invest</h2></div><p class="text-[#667085] mb-8">Follow our streamlined 8-step process from initial interest to successful launch. Our dedicated investment facilitation team supports you at every stage. </p>
<div class="space-y-6">
<template x-for="(step, index) in investmentSteps">
<div class="relative flex gap-6">
<div class="flex flex-col items-center">
<div class="w-12 h-12 bg-[#123A63] rounded-sm flex items-center justify-center  flex-shrink-0"><span class="text-white text-lg font-bold"><span x-text="step.number"></span></span></div>
<template x-if="Boolean(index &lt; investmentSteps.length - 1)">
<div class="w-0.5 h-full bg-gray-200 mt-2"></div></template></div>
<div class="flex-1 pb-8">
<div class="flex items-start justify-between mb-2">
<h3 class="text-xl font-semibold text-[#1F2933]"><span x-text="step.title"></span></h3><span class="flex items-center gap-1 text-sm text-[#667085]"><svg class="h-4 w-4" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Clock&quot;)"></use></svg><span x-text="step.duration"></span></span></div><p class="text-[#667085]"><span x-text="step.description"></span></p></div></div></template></div></div>
<div id="registration" class="bg-white rounded-sm  p-8 border border-gray-100">
<div class="flex items-center gap-3 mb-6"><svg class="h-8 w-8 text-[#123A63]" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Building2&quot;)"></use></svg>
<h2 class="text-3xl font-bold text-[#1F2933]">Business Registration</h2></div><p class="text-[#667085] mb-6">Tajikistan offers a streamlined business registration process that typically takes 7-10 business days. </p>
<div class="grid md:grid-cols-2 gap-6">
<div class="p-6 bg-[#F6F8FA] rounded-sm">
<h4 class="font-semibold text-[#1F2933] mb-3">Required Documents</h4>
<ul class="space-y-2">
<li class="flex items-start gap-2 text-sm text-[#667085]"><svg class="h-4 w-4 text-[#667085] mt-0.5 flex-shrink-0" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;CheckCircle2&quot;)"></use></svg>Application form with company details </li>
<li class="flex items-start gap-2 text-sm text-[#667085]"><svg class="h-4 w-4 text-[#667085] mt-0.5 flex-shrink-0" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;CheckCircle2&quot;)"></use></svg>Company charter and founding documents </li>
<li class="flex items-start gap-2 text-sm text-[#667085]"><svg class="h-4 w-4 text-[#667085] mt-0.5 flex-shrink-0" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;CheckCircle2&quot;)"></use></svg>Passport copies of founders/shareholders </li>
<li class="flex items-start gap-2 text-sm text-[#667085]"><svg class="h-4 w-4 text-[#667085] mt-0.5 flex-shrink-0" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;CheckCircle2&quot;)"></use></svg>Proof of registered office address </li>
<li class="flex items-start gap-2 text-sm text-[#667085]"><svg class="h-4 w-4 text-[#667085] mt-0.5 flex-shrink-0" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;CheckCircle2&quot;)"></use></svg>Payment receipt for state registration fee </li></ul></div>
<div class="p-6 bg-[#F6F8FA] rounded-sm">
<h4 class="font-semibold text-[#1F2933] mb-3">Legal Entities</h4>
<ul class="space-y-2">
<li class="flex items-start gap-2 text-sm text-[#667085]"><svg class="h-4 w-4 text-[#667085] mt-0.5 flex-shrink-0" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;CheckCircle2&quot;)"></use></svg>Limited Liability Company (LLC) </li>
<li class="flex items-start gap-2 text-sm text-[#667085]"><svg class="h-4 w-4 text-[#667085] mt-0.5 flex-shrink-0" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;CheckCircle2&quot;)"></use></svg>Joint Stock Company (JSC) </li>
<li class="flex items-start gap-2 text-sm text-[#667085]"><svg class="h-4 w-4 text-[#667085] mt-0.5 flex-shrink-0" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;CheckCircle2&quot;)"></use></svg>Branch of foreign company </li>
<li class="flex items-start gap-2 text-sm text-[#667085]"><svg class="h-4 w-4 text-[#667085] mt-0.5 flex-shrink-0" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;CheckCircle2&quot;)"></use></svg>Representative office </li></ul></div></div></div>
<div id="land" class="bg-white rounded-sm  p-8 border border-gray-100">
<div class="flex items-center gap-3 mb-6"><svg class="h-8 w-8 text-[#123A63]" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Landmark&quot;)"></use></svg>
<h2 class="text-3xl font-bold text-[#1F2933]">Land Allocation</h2></div><p class="text-[#667085] mb-6">Panjakent offers designated land plots for investment projects with transparent allocation procedures. </p>
<div class="space-y-4">
<div class="p-6 border-l-4 border-[#667085] bg-[#0F8A5F]/5">
<h4 class="font-semibold text-[#1F2933] mb-2">Lease Terms</h4><p class="text-sm text-[#667085]">Land lease periods range from 10 to 50 years with renewal options. Lease rates vary by location and purpose, starting from $2,000/hectare annually. </p></div>
<div class="p-6 border-l-4 border-[#123A63] bg-[#123A63]/5">
<h4 class="font-semibold text-[#1F2933] mb-2">Application Process</h4><p class="text-sm text-[#667085]">Submit land allocation request through the investment portal. Review typically takes 2-3 weeks. Site visits can be arranged upon request. </p></div></div></div>
<div id="permits" class="bg-white rounded-sm  p-8 border border-gray-100">
<div class="flex items-center gap-3 mb-6"><svg class="h-8 w-8 text-[#123A63]" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;FileCheck&quot;)"></use></svg>
<h2 class="text-3xl font-bold text-[#1F2933]">Permits and Licenses</h2></div><p class="text-[#667085] mb-6">Depending on your sector and activity, you may need specific permits and licenses. </p>
<div class="grid md:grid-cols-3 gap-4">
<div class="p-4 bg-[#F6F8FA] rounded-sm">
<h4 class="font-semibold text-[#1F2933] mb-2 text-sm">Tourism</h4><p class="text-[13px] text-[#667085]">Tourism operator license, accommodation permit</p></div>
<div class="p-4 bg-[#F6F8FA] rounded-sm">
<h4 class="font-semibold text-[#1F2933] mb-2 text-sm">Food Processing</h4><p class="text-[13px] text-[#667085]">Food safety certificate, sanitary permit</p></div>
<div class="p-4 bg-[#F6F8FA] rounded-sm">
<h4 class="font-semibold text-[#1F2933] mb-2 text-sm">Construction</h4><p class="text-[13px] text-[#667085]">Building permit, environmental assessment</p></div></div></div>
<div id="taxes" class="bg-white rounded-sm  p-8 border border-gray-100">
<div class="flex items-center gap-3 mb-6"><svg class="h-8 w-8 text-[#123A63]" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;DollarSign&quot;)"></use></svg>
<h2 class="text-3xl font-bold text-[#1F2933]">Taxes and Incentives</h2></div><p class="text-[#667085] mb-6">Competitive tax regime with special incentives for priority sectors and investment projects. </p>
<div class="grid md:grid-cols-2 gap-6">
<div>
<h4 class="font-semibold text-[#1F2933] mb-4">Standard Tax Rates</h4>
<div class="space-y-3">
<div class="flex justify-between p-3 bg-[#F6F8FA] rounded-sm"><span class="text-sm text-[#667085]">Corporate Income Tax</span><span class="font-semibold text-[#1F2933]">13%</span></div>
<div class="flex justify-between p-3 bg-[#F6F8FA] rounded-sm"><span class="text-sm text-[#667085]">VAT</span><span class="font-semibold text-[#1F2933]">18%</span></div>
<div class="flex justify-between p-3 bg-[#F6F8FA] rounded-sm"><span class="text-sm text-[#667085]">Social Tax</span><span class="font-semibold text-[#1F2933]">25%</span></div></div></div>
<div>
<h4 class="font-semibold text-[#1F2933] mb-4">Available Incentives</h4>
<ul class="space-y-2">
<li class="flex items-start gap-2 text-sm text-[#667085]"><svg class="h-4 w-4 text-[#667085] mt-0.5 flex-shrink-0" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;CheckCircle2&quot;)"></use></svg>Reduced corporate tax (0-6%) for tourism projects </li>
<li class="flex items-start gap-2 text-sm text-[#667085]"><svg class="h-4 w-4 text-[#667085] mt-0.5 flex-shrink-0" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;CheckCircle2&quot;)"></use></svg>VAT exemption on imported equipment </li>
<li class="flex items-start gap-2 text-sm text-[#667085]"><svg class="h-4 w-4 text-[#667085] mt-0.5 flex-shrink-0" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;CheckCircle2&quot;)"></use></svg>Property tax holiday up to 3 years </li>
<li class="flex items-start gap-2 text-sm text-[#667085]"><svg class="h-4 w-4 text-[#667085] mt-0.5 flex-shrink-0" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;CheckCircle2&quot;)"></use></svg>Customs duty exemption for priority sectors </li></ul></div></div></div>
<div id="labor" class="bg-white rounded-sm  p-8 border border-gray-100">
<div class="flex items-center gap-3 mb-6"><svg class="h-8 w-8 text-[#123A63]" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Users&quot;)"></use></svg>
<h2 class="text-3xl font-bold text-[#1F2933]">Labor Market</h2></div><p class="text-[#667085] mb-6">Access to skilled and motivated workforce with competitive labor costs. </p>
<div class="grid md:grid-cols-3 gap-6">
<div class="text-center p-6 bg-[#F6F8FA] rounded-sm">
<div class="text-3xl font-bold text-[#123A63] mb-2">110,000</div>
<div class="text-sm text-[#667085]">Available Workforce</div></div>
<div class="text-center p-6 bg-[#F6F8FA] rounded-sm">
<div class="text-3xl font-bold text-[#123A63] mb-2">99.5%</div>
<div class="text-sm text-[#667085]">Literacy Rate</div></div>
<div class="text-center p-6 bg-[#F6F8FA] rounded-sm">
<div class="text-3xl font-bold text-[#123A63] mb-2">$250</div>
<div class="text-sm text-[#667085]">Average Monthly Wage</div></div></div></div>
<div id="banking" class="bg-white rounded-sm  p-8 border border-gray-100">
<div class="flex items-center gap-3 mb-6"><svg class="h-8 w-8 text-[#123A63]" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Briefcase&quot;)"></use></svg>
<h2 class="text-3xl font-bold text-[#1F2933]">Banking and Finance</h2></div><p class="text-[#667085] mb-6">Access to local and international banking services with support for foreign currency accounts. </p>
<div class="space-y-4">
<div class="p-4 bg-[#F6F8FA] rounded-sm">
<h4 class="font-semibold text-[#1F2933] mb-2">Bank Account Opening</h4><p class="text-sm text-[#667085]">Both domestic and foreign currency accounts available. Required documents: business registration certificate, company charter, passport of authorized signatories. </p></div>
<div class="p-4 bg-[#F6F8FA] rounded-sm">
<h4 class="font-semibold text-[#1F2933] mb-2">Currency Exchange</h4><p class="text-sm text-[#667085]">Free currency exchange at commercial banks. International transfers supported through SWIFT network. </p></div></div></div>
<div id="legal" class="bg-white rounded-sm  p-8 border border-gray-100">
<div class="flex items-center gap-3 mb-6"><svg class="h-8 w-8 text-[#123A63]" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Gavel&quot;)"></use></svg>
<h2 class="text-3xl font-bold text-[#1F2933]">Legal Protection</h2></div><p class="text-[#667085] mb-6">Comprehensive legal framework protecting investor rights and property. </p>
<div class="grid md:grid-cols-2 gap-6">
<div class="p-6 border-2 border-[#667085] rounded-sm"><svg class="h-8 w-8 text-[#667085] mb-3" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Shield&quot;)"></use></svg>
<h4 class="font-semibold text-[#1F2933] mb-2">Investment Guarantees</h4><p class="text-sm text-[#667085]">Protection against nationalization, expropriation, and unfair treatment. Guaranteed profit repatriation rights. </p></div>
<div class="p-6 border-2 border-[#123A63] rounded-sm"><svg class="h-8 w-8 text-[#123A63] mb-3" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;FileText&quot;)"></use></svg>
<h4 class="font-semibold text-[#1F2933] mb-2">Dispute Resolution</h4><p class="text-sm text-[#667085]">Access to local courts and international arbitration. Tajikistan is party to bilateral investment treaties. </p></div></div></div>
<div id="faq" class="bg-white rounded-sm  p-8 border border-gray-100">
<div class="flex items-center gap-3 mb-6"><svg class="h-8 w-8 text-[#123A63]" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;HelpCircle&quot;)"></use></svg>
<h2 class="text-3xl font-bold text-[#1F2933]">Frequently Asked Questions</h2></div>
<div class="space-y-4">
<template x-for="(faq, index) in faqs">
<div class="p-6 bg-[#F6F8FA] rounded-sm">
<h4 class="font-semibold text-[#1F2933] mb-2"><span x-text="faq.question"></span></h4><p class="text-sm text-[#667085]"><span x-text="faq.answer"></span></p></div></template></div></div>
<div class="atlas-band rounded-sm  p-8 text-white">
<h3 class="text-2xl font-bold mb-4">Need Personalized Guidance?</h3><p class="text-white/90 mb-6">Our investment facilitation team is ready to answer your specific questions and guide you through the process. </p>
<div class="flex flex-col sm:flex-row gap-3"><button class="px-6 py-3 bg-white text-[#123A63] rounded-sm hover:bg-white/90 transition-colors inline-flex items-center justify-center gap-2"><svg class="h-5 w-5" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;HeadphonesIcon&quot;)"></use></svg>Contact Support Team </button><button class="px-6 py-3 border-2 border-white text-white rounded-sm hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2"><svg class="h-5 w-5" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use :href="'#icon-' + (&quot;Download&quot;)"></use></svg>Download Full Guide </button></div></div></div></div></div></section></div>
</div>
@endsection
