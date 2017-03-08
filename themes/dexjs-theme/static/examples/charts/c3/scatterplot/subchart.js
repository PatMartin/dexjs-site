// Create data
var sincos = {
  "header" : [ "angle", "sin", "cos" ],
  "data" : []
};

for (var angle = -360; angle<=360; angle += 45) {
  sincos.data.push([angle, Math.sin(angle * (Math.PI/180)).toFixed(2),
  Math.cos(angle * (Math.PI/180)).toFixed(2)]);
}

// Configure and render the chart.
dex.charts.c3.ScatterPlot({
  "parent" : "#ScatterPlot",
  "csv" : sincos,
  "options.subchart.show" : true
}).render();