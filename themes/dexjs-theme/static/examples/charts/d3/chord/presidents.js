d3.json("/data/presidents.json", function(error, data) {
  dex.charts.d3.Chord({
    "parent": "#Chord",
    "csv": dex.csv.columnSlice(data, [2, 3]),
    "margin" : { "top" : 200, "bottom" : 200 },
    "outerRadius" : 150,
    "innerRadius" : 140
  }).render();
});