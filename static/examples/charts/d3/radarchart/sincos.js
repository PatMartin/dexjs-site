// Create data
var sincos = {
  "header" : [ "angle" ],
  "data" : [["sin"], ["cos"]]
};

for (var angle = -360; angle<=360; angle += 20) {
  sincos.header.push(angle);
  sincos.data[0].push(Math.sin(angle * (Math.PI/180)).toFixed(2));
  sincos.data[1].push(Math.cos(angle * (Math.PI/180)).toFixed(2));
}
dex.console.log(sincos);
// Configure and render the chart.
dex.charts.d3.RadarChart({
  "parent" : "#RadarChart",
  "csv" : sincos,
  "margin.top" : 0
}).render();