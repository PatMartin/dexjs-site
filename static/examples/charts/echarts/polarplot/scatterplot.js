var csv = new dex.csv(["Series", "Angle", "Value", "Size" ]);

_.range(-360, 360, 15).forEach(function (angle) {
  var radians = angle / 180 * Math.PI;
  csv.data.push([ "sin", angle, Math.sin(radians), Math.random() *100 ]);
  csv.data.push([ "cos", angle, Math.cos(radians), Math.random() * 100 ]);
});

var chart = dex.charts.echarts.PolarPlot({
  parent: '#Chart',
  csv: csv,
  'series.type': "scatter"
}).render();

var configPane = dex.ui.ConfigurationPane({
  parent: "#ConfigurationPane",
  csv: csv,
  components: [ chart ]
}).render();