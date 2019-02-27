d3.json("/data/presidents.json", function (error, data) {
  // Configure and render the chart.
  dex.charts.d3.Sankey({
    "parent": "#Sankey",
    "csv": new dex.csv(data).include([1, 2, 3])
  }).render();
});