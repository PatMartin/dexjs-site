d3.json("/data/WorldBirthsAndDeaths.json", function(error, data) {
  var csv = new dex.csv(data).include([1, 2, 3, 4, 5, 0]);

  chart = dex.charts.echarts.Timeline({
    "parent": "#Chart",
    "csv": csv
  }).render();

  var dataFilterPane = dex.ui.DataFilterPane({
    "parent": "#DataFilterPane",
    "csv": csv
  }).render();

  chart.subscribe(dataFilterPane, "select", function (msg) {
    chart.attr('csv', msg.selected).refresh();
  });
});