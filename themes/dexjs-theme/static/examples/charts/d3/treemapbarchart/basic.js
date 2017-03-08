d3.json("/data/crime.json", function(error, crime) {
  // Configure and render the chart.
  dex.charts.d3.TreemapBarChart({
    "parent": "#TreemapBarChart",
    'csv': dex.csv.columnSlice(crime, [3, 0, 2, 1, 4]),
    'color': d3.scale.category20(),
    'shader': {'type': 'darken', 'increment': .05},
    'manualSizing': true
  }).render();
});