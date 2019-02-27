d3.json("/data/crime.json", function(error, data) {
  var crime = new dex.csv(data);

  chart = dex.charts.d3.Treemap({
    "parent": "#Chart",
    "csv": crime,
    "margin.top": 60,
    manualSizing: true
  }).render();

  var dataFilterPane = dex.ui.DataFilterPane({
    "parent": "#DataFilterPane",
    "csv": crime
  }).render();

  chart.subscribe(dataFilterPane, "select", function(msg) {
    chart.attr("csv", msg.selected).refresh();
  });
});