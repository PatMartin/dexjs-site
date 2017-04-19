d3.json("/data/presidents.json", function(error, data) {
  dex.charts.d3.Dendrogram({
    "parent": "#Dendrogram",
    "csv": dex.csv.columnSlice(data, [2, 3, 1])
  }).render();
});