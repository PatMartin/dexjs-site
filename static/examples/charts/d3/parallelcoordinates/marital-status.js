d3.csv("/data/marital-status.csv", function (error, data) {
  var maritalStatus = new dex.csv(data);

  dex.charts.d3.ParallelCoordinates({
    "parent": "#ParallelCoordinates",
    "csv": maritalStatus,
    "margin.top": 50
  }).render();
});
