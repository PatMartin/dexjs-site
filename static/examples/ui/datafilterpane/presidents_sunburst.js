d3.json("/data/presidents.json", function(error, data) {
  var presidents = new dex.csv(data).include([2,3,1,0]);

  chart = dex.charts.d3.Sunburst({
    "parent": "#Chart",
    "csv": presidents
  }).render();

  var dataFilterPane = dex.ui.DataFilterPane({
    "parent": "#DataFilterPane",
    "csv": presidents
  }).render();

  chart.subscribe(dataFilterPane, "select", function(msg) {
    chart.attr("csv", msg.selected).refresh();
  });
});