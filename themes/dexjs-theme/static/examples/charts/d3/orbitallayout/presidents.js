d3.json("/data/presidents.json", function(error, data) {
  dex.charts.d3.OrbitalLayout({
    "parent": "#OrbitalLayout",
    "csv": dex.csv.columnSlice(data, [2, 3, 1])
  }).render();
});