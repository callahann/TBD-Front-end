var data =[
1330044544	,
1147995904	,
303824640	,
237512352	,
196342592	,
172800048	,
153546896	,
146255312	,
140702096	,
127288416	,
]
var svg = d3.select('body').append('svg')
.attr('width', 400).attr('height',400).attr('fill','#e5e5e5');
var y = d3.scale.linear()
          .domain([0, d3.max(data,d=>d)])
          .range([0,400]);
var cols = svg.selectAll('rect').data(data)
          .enter()
          .append('rect')
          .attr('height', d=>y(d))
          .attr('width', 32)
          .attr('x', (d,i)=>i*38)
          .attr('y', d=>400-y(d))
          .attr('fill','#444').attr('stroke','#444')
          .on('mouseover', function(){d3.select(this).attr('fill','#cc0000')})
          .on('mouseout', function(){d3.select(this).attr('fill','#444')});