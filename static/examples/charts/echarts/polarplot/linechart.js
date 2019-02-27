var csv = new dex.csv(["Series", "Angle", "Values" ]);

dex.range(0, 360).forEach(function (angle) {
  var radians = angle / 180 * Math.PI;
  csv.data.push([ "sin", Math.sin(radians), angle ]);
  csv.data.push([ "cos", Math.cos(radians), angle ]);
});

var chart = dex.charts.echarts.PolarPlot({
  parent: '#Chart',
  csv: csv,
  "series.showSymbol": false,
  "series.type": "line",
  refreshType: "render"
}).render();

var configPane = dex.ui.ConfigurationPane({
  parent: "#ConfigurationPane",
  csv: csv,
  components: [ chart ]
}).render();