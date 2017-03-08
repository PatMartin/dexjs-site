d3.json("/data/presidents.json", function(error, data) {
  // Configure and render the chart.
  dex.charts.d3.RadialTree({
    "parent": "#RadialTree",
    "csv": dex.csv.columnSlice(data, [3, 2])
  }).render();
});