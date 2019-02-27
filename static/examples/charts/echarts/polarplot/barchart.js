var csv = new dex.csv(["Series", "Angle", "Value" ]);

dex.range(0, 360).forEach(function (angle) {
  var radians = angle / 180 * Math.PI;
  csv.data.push([ "sin", angle, Math.sin(radians) ]);
  csv.data.push([ "cos", angle, Math.cos(radians) ]);
});

chart = dex.charts.echarts.PolarPlot({
  parent: '#Chart',
  csv: csv,
  'series.type': "bar",
  refreshType: "render"
}).render();

var configPane = dex.ui.ConfigurationPane({
  parent: "#ConfigurationPane",
  csv: csv,
  components: [ chart ]
}).render();