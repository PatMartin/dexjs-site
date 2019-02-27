d3.json("/data/presidents.json", function(error, data) {
  var csv = new dex.csv(data);

  chart = dex.charts.echarts.Network({
    "parent": "#Chart",
    categories: 1,
    "csv": csv
  }).render();

  var configPane = dex.ui.ConfigurationPane({
    parent: "#ConfigurationPane",
    csv: csv,
    components: [ chart ]
  }).render();
});