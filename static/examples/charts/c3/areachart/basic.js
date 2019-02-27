// Create data
var sincos = new dex.csv([ "angle", "sin", "cos" ]);

for (var angle = -360; angle<=360; angle += 45) {
  sincos.data.push([angle, Math.sin(angle * (Math.PI/180)).toFixed(2),
  Math.cos(angle * (Math.PI/180)).toFixed(2)]);
}

// Configure and render the chart.
chart = dex.charts.c3.AreaChart({
  "parent" : "#Chart",
  "csv" : sincos
}).render();

var configPane = dex.ui.ConfigurationPane({
  parent: "#ConfigurationPane",
  csv: sincos,
  components: [ chart ]
}).render();