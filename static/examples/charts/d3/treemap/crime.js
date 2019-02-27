d3.json("/data/crime.json", function (error, data) {
  // Configure and render the chart.
  dex.charts.d3.Treemap({
    "parent": "#Treemap",
    'csv': new dex.csv(data).include([3, 0, 2, 1, 4]),
    'color': d3.scale.category20(),
    'shader': {'type': 'darken', 'increment': .05},
    'manualSizing': true
  }).render();
});
