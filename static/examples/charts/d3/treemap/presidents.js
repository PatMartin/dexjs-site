d3.json("/data/presidents.json", function(error, data) {
  // Configure and render the chart.
  dex.charts.d3.Treemap({
    "parent": "#Treemap",
    "csv": new dex.csv(data).include([2, 3, 1])
  }).render();
});