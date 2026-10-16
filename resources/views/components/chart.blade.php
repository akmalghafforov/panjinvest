@php
$charts = require resource_path('fixtures/charts.php');
@endphp
<div x-data="{hover:null,chartWidth:600}" x-init="chartWidth=$el.clientWidth" @resize.window="chartWidth=$el.clientWidth" class="relative w-full" style="height:{{ $chartType === 'LineChart' ? 350 : 300 }}px">
<svg :viewBox="'0 0 '+chartWidth+' {{ $chartType === 'LineChart' ? 350 : 300 }}'" preserveAspectRatio="none" class="w-full h-full" role="img" aria-label="{{ $chartType === 'LineChart' ? 'Economic Growth Trends' : ($chartType === 'PieChart' ? 'Investment by Sector' : 'Tourism Visitors (2025)') }}">
@if($chartType === 'PieChart')
<g :transform="'translate('+(chartWidth/2-300)+',0)'">
@php
$start = 0;
@endphp
@foreach($charts['sectors'] as $sector)
@php
    $end = $start - $sector['value'] * M_PI / 50;
    $mid = ($start + $end) / 2;
    $slice = sprintf('M300,150 L%f,%f A100,100 0 0,0 %f,%f Z',300+100*cos($start),150+100*sin($start),300+100*cos($end),150+100*sin($end));
    $start = $end;
@endphp
<path d="{{ $slice }}" fill="{{ $sector['color'] }}" stroke="white" @mouseenter="hover={{ Illuminate\Support\Js::from($sector['name'].': '.$sector['value'].'%') }}" @mouseleave="hover=null"><title>{{ $sector['name'] }}: {{ $sector['value'] }}%</title></path>
<text x="{{ 300+120*cos($mid) }}" y="{{ 150+120*sin($mid) }}" text-anchor="{{ cos($mid)>0?'start':'end' }}" fill="{{ $sector['color'] }}" font-size="16">{{ $sector['name'] }} {{ $sector['value'] }}%</text>
@endforeach
</g>
@else
@foreach(range(0,4) as $tick)
<line x1="65" :x2="chartWidth-5" y1="{{ ($chartType === 'LineChart'?315:265)-$tick*($chartType === 'LineChart'?310:260)/4 }}" y2="{{ ($chartType === 'LineChart'?315:265)-$tick*($chartType === 'LineChart'?310:260)/4 }}" stroke="#E5E7EB" stroke-dasharray="3 3"></line>
<text x="57" y="{{ ($chartType === 'LineChart'?315:265)-$tick*($chartType === 'LineChart'?310:260)/4+4 }}" text-anchor="end" fill="#667085" font-size="16">{{ $tick*($chartType === 'LineChart'?30:4000) }}</text>
@endforeach
<line x1="65" y1="5" x2="65" y2="{{ $chartType === 'LineChart'?315:265 }}" stroke="#667085"></line><line x1="65" y1="{{ $chartType === 'LineChart'?315:265 }}" :x2="chartWidth-5" y2="{{ $chartType === 'LineChart'?315:265 }}" stroke="#667085"></line>
@if($chartType === 'LineChart')
@foreach([['gdp','#123A63','GDP'],['investment','#0F8A5F','FDI'],['exports','#D6A536','Exports']] as [$field,$color,$label])
<polyline :points="economicData.map((d,i)=>(65+i*(chartWidth-70)/5)+','+(315-d.{{ $field }}*310/120)).join(' ')" fill="none" stroke="{{ $color }}" stroke-width="3"></polyline>
@foreach($charts['economic'] as $i=>$d)
<circle :cx="65+{{ $i }}*(chartWidth-70)/5" cy="{{ 315-$d[$field]*310/120 }}" r="4" fill="{{ $color }}" stroke="white" @mouseenter="hover={{ Illuminate\Support\Js::from($d['year'].' · '.$label.': '.$d[$field]) }}" @mouseleave="hover=null"><title>{{ $d['year'] }} · {{ $label }}: {{ $d[$field] }}</title></circle>
@endforeach
@endforeach
@foreach($charts['economic'] as $i=>$d)
<text :x="65+{{ $i }}*(chartWidth-70)/5" y="338" text-anchor="middle" fill="#667085" font-size="16">{{ $d['year'] }}</text>
@endforeach
@else
@foreach($charts['visitors'] as $month=>$visitors)
@php
$i = array_search($month, array_keys($charts['visitors']));
@endphp
<rect :x="65+({{ $i }}+0.1)*(chartWidth-70)/12" y="{{ 265-$visitors*260/16000 }}" :width="(chartWidth-70)/12*0.8" height="{{ $visitors*260/16000 }}" fill="#3B82F6" @mouseenter="hover={{ Illuminate\Support\Js::from($month.' · visitors: '.$visitors) }}" @mouseleave="hover=null"><title>{{ $month }}: {{ $visitors }}</title></rect>
<text :x="65+({{ $i }}+0.5)*(chartWidth-70)/12" y="288" text-anchor="middle" fill="#667085" font-size="16">{{ $month }}</text>
@endforeach
@endif
@endif
</svg>
<div x-cloak x-show="hover" x-text="hover" class="absolute top-4 right-4 rounded-lg bg-white border border-gray-200 px-3 py-2 text-sm shadow-sm pointer-events-none"></div>
</div>
