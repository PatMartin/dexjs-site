// ["State","Crime","Type of Crime","Year","Count"]
// ["Divider", "Color", "Category", "X", "Value"]
d3.json("/data/crime.json", function(error, crime) {
  // Configure and render the chart.
  dex.charts.d3.TreemapBarChart({
    "parent": "#TreemapBarChart",
    'csv': crime,
    'color': d3.scale.category10(),
    'margin.right' : 100,
    'shader': {'type': 'darken', 'increment': .05},
    'manualSizing': true
  }).render();
});