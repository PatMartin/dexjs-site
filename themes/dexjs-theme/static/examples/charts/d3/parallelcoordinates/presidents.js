d3.json("/data/presidents.json", function(error, data) {
  dex.charts.d3.ParallelCoordinates({
    "parent": "#ParallelCoordinates",
    "csv": dex.csv.columnSlice(data, [2, 3, 1]),
    "margin.top" : 50
  }).render();
});