d3.json("/data/presidents.json", function(error, data) {
  // Configure and render the chart.
  dex.charts.d3.Treemap({
    "parent": "#Treemap",
    "csv": dex.csv.columnSlice(data, [2, 3, 1])
  }).render();
});