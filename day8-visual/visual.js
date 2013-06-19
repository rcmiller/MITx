var data = [0, 4, 8, 15, 160, 40, 42];

// var chart = $("<div></div>").addClass("chart");
// $(".chart-container").append(chart);

// data.forEach(function(d) { chart.append($("<div></div>").addClass("bar").css("width", d+"em").text(d)); })


var chart = d3.select(".chart-container")
              .append("svg")
              .attr("class", "chart");
var xScale = d3.scale.linear().domain([0, d3.max(data)+5]).range(["0%","100%"]);
var chartHeight = 140; // pixels
var yScale = d3.scale.ordinal().domain(d3.keys(data)).rangeBands([0, chartHeight]);

chart.selectAll("rect").data(data)
  .enter().append('rect')
  .attr('width', xScale)
  .attr('y', function (d, i) { return yScale(i); })
  .attr('height', "20px");

chart.selectAll("text").data(data)
  .enter().append("text")
  .attr('x', xScale)
  .attr('y', function (d, i) { return yScale(i) + yScale.rangeBand()/2;})
  .attr('dx', -3)
  .attr('dy', "0.35em")
  .attr('text-anchor', 'end')
  .text(function(d) { return d; })