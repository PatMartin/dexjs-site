// Create data
var sincos = {
  "header" : [ "angle", "sin", "cos" ],
  "data" : []
};

for (var angle = -360; angle<=360; angle += 10) {
  sincos.data.push([angle, Math.sin(angle * (Math.PI/180)).toFixed(2),
  Math.cos(angle * (Math.PI/180)).toFixed(2)]);
}

// Configure and render the chart.
dex.charts.c3.BarChart({
  "parent" : "#BarChart",
  "csv" : sincos,
  "options.subchart.show" : true,
  "options.axis.rotated" : true
}).render();