d3.csv("/data/universities.csv", function (error, data) {

  var schools = {};
  schools.header = Object.keys(data[0]);
  schools.data = data.map(function (row) {
    return schools.header.map(function (h) {
      return row[h];
    });
  });

  var rankings = dex.csv.getRankedCsv(schools, "university_name",
    "year", "world_rank");

  dex.charts.d3.BumpChart({
    "parent": "#BumpChart",
    "csv": rankings,
    'color': d3.scale.category10(),
    "key": {"category": "university_name", "sequence": "year", "rank": "rank"},
    "apply": [
      {"select": ".tick text", styles: {"fill": "red"}},
      {"select": ".key text", styles: {"fill": "purple"}}]
  }).render();
});