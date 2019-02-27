var csv = new dex.csv(["X", "Y", "sin(X) * cos(Y)", "X*Y"], []);

for (x = 0; x < 360; x += 5) {
  var radx = x * Math.PI / 180;
  for (y = 0; y < 360; y += 5) {
    var rady = y * Math.PI / 180;
    csv.data.push([x, y, Math.sin(radx) * Math.cos(rady), x*y]);
  }
}

chart = dex.charts.echarts.HeatMap({
  parent: '#Chart',
  csv: csv
}).render();

var configPane = dex.ui.ConfigurationPane({
  parent: "#ConfigurationPane",
  csv: csv,
  components: [ chart ]
}).render();