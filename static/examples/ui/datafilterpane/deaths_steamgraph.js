d3.json("/data/WorldBirthsAndDeaths.json", function(error, data) {
  // Order the data in the format th steamgraph expects, the user may
  // reorder the data interactively from there.
  var csv = new dex.csv(data).include([0, 2, 3, 4, 5, 1]);

  chart = dex.charts.echarts.SteamGraph({
    "parent": "#Chart",
    "csv": csv
  }).render();

  var dataFilterPane = dex.ui.DataFilterPane({
    "parent": "#DataFilterPane",
    "csv": csv
  }).render();

  chart.subscribe(dataFilterPane, "select", function(msg) {
    chart.attr("csv", msg.selected).refresh();
  });
});