var data = [0, 4, 8, 15, 160, 40, 42];

var chartWidth = 300; // pixels
var chartHeight = 300; // pixels

var xScale = d3.scale.ordinal().domain(d3.keys(data)).rangeBands([0, chartWidth]);
var yScale = d3.scale.linear().domain([0, d3.max(data)]).range([0, chartHeight]);

var chart = d3.select(".chart-container")
              .append("svg")
              .attr("class", "chart")
              .attr("height", chartHeight)
              .attr("width", chartWidth);

chart.selectAll("rect").data(data)
  .enter().append('rect')
  .attr('x', function (d, i) { return xScale(i); })
  .attr('y', function(d) { return chartHeight - yScale(d); })
  .attr('width', xScale.rangeBand())
  .attr('height', yScale);

chart.selectAll("text").data(data)
  .enter().append("text")
  .attr('x', function(d,i) { return xScale(i) + xScale.rangeBand()/2; })
  .attr('y', function (d, i) { return chartHeight - yScale(d) + 3;})
  .attr('dy', '0.7em')
  .attr('text-anchor', 'middle')
  .text(function(d) { return d; })