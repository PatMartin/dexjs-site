//["Divider", "Color", "Category", "X", "Value"],
//["State","Crime","Type of Crime","Year","Count"]
d3.json("/data/crime.json", function(error, crime) {
  // Configure and render the chart.
  dex.charts.d3.Treemap({
    "parent": "#Treemap",
    'csv': csv,
    'color': d3.scale.category20(),
    'shader': {'type': 'darken', 'increment': .05},
    'manualSizing': true
  }).render();
});