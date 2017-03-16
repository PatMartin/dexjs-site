// Create data
d3.json("/data/universities.json", function (error, data) {

// Configure and render the chart.
  dex.charts.d3.BumpChart({
    "parent": "#BumpChart",
    "csv": data
  }).render();
});