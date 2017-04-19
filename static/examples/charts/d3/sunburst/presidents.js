d3.json("/data/presidents.json", function(error, data) {
  // Configure and render the chart.
  dex.charts.d3.Sunburst({
    "parent": "#Sunburst",
    "csv": dex.csv.columnSlice(data, [1, 2, 3])
  }).render();
});