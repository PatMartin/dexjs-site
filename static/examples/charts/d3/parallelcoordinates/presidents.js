d3.json("/data/presidents.json", function (error, data) {
  dex.charts.d3.ParallelCoordinates({
    "parent": "#ParallelCoordinates",
    "csv": new dex.csv(data).include([2, 3, 1]),
    "margin.top": 50
  }).render();
});