d3.json("/data/presidents.json", function(error, data) {
  dex.charts.echarts.Network({
    "parent": "#Network",
    categories: 1,
    "csv": dex.csv.columnSlice(data, [2, 3, 1])
  }).render();
});