d3.csv("/data/marital-status.csv", function (error, data) {
  var maritalStatus = {};
  maritalStatus.header = Object.keys(data[0]);
  maritalStatus.data = data.slice(1).map(function (row) {
    return maritalStatus.header.map(function (h) {
      return row[h];
    });
  });

  dex.charts.d3.ParallelCoordinates({
    "parent": "#ParallelCoordinates",
    "csv": maritalStatus,
    "margin.top" : 50
  }).render();
});
