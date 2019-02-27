d3.json("/data/iris.json", function (error, data) {
  var iris = new dex.csv(data);

  chart = dex.charts.d3.ParallelCoordinates({
    "parent": "#Chart",
    "csv": iris,
    "margin.top": 40
  }).render();

  var guiPane = dex.ui.ConfigurationPane({
    parent: "#ConfigurationPane",
    csv: iris,
    components: [chart]
  }).render();
});