d3.json("/data/presidents.json", function(error, data) {
  dex.charts.d3.Chord({
    "parent": "#Chord",
    "csv": dex.csv.columnSlice(data, [2, 3])
  }).render();
});