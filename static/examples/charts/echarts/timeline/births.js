d3.json("/data/WorldBirthsAndDeaths.json", function (error, world) {
  var csv = new dex.csv(world).include([1, 2, 3, 4, 5]);

  chart = dex.charts.echarts.Timeline({
    parent: '#Chart',
    csv: csv
  }).render();

  var configPane = dex.ui.ConfigurationPane({
    parent: "#ConfigurationPane",
    csv: csv,
    components: [ chart ]
  }).render();
});