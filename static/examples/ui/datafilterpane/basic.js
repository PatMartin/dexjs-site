d3.json("/data/iris.json", function (error, data) {
  var iris = new dex.csv(data);

  chart = dex.charts.d3.ParallelCoordinates({
    "parent": "#Chart",
    "csv": iris,
    "margin.top": 40
  }).render();

  var dataFilterPane = dex.ui.DataFilterPane({
    "parent": "#DataFilterPane",
    "csv": iris
  }).render();

  chart.subscribe(dataFilterPane, "select", function (msg) {
    chart.attr("csv", msg.selected).refresh();
  });
});