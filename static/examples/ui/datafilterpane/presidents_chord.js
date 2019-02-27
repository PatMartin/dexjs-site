d3.json("/data/presidents.json", function(error, data) {
  var presidents = new dex.csv(data);

  chart = dex.charts.d3.Chord({
    "parent": "#Chart",
    "csv": presidents,
    "margin.top": 60
  }).render();

  var dataFilterPane = dex.ui.DataFilterPane({
    "parent": "#DataFilterPane",
    "csv": presidents
  }).render();

  chart.subscribe(dataFilterPane, "select", function(msg) {
    chart.attr("csv", msg.selected).refresh();
  });
});