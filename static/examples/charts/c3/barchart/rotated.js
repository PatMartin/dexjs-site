// Create data
var sincos = new dex.csv([ "angle", "sin", "cos" ]);

for (var angle = -360; angle<=360; angle += 10) {
  sincos.data.push([angle, Math.sin(angle * (Math.PI/180)).toFixed(2),
  Math.cos(angle * (Math.PI/180)).toFixed(2)]);
}

// Configure and render the chart.
chart = dex.charts.c3.BarChart({
  "parent" : "#Chart",
  "csv" : sincos,
  "options.subchart.show" : true,
  "options.axis.rotated" : true
}).render();

var configPane = dex.ui.ConfigurationPane({
  parent: "#ConfigurationPane",
  csv: sincos,
  components: [ chart ]
}).render();