d3.json("/data/presidents.json", function(error, data) {
  dex.charts.d3plus.RingNetwork({
    "parent": "#RingNetwork",
    "csv": dex.csv.columnSlice(data, [2, 3, 1])
  }).render();
});