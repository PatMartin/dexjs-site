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
    'line.stroke.dasharray' : "10 25",
    'line.stroke.width': 20,
    'line.stroke.lineCap': "round",
    'line.stroke.lineJoin': "round",
    'circle.r': 0,
    'circle.stroke.width': 0,
    'margin.top': 25,
    'margin.left': 40,
    'margin.right': 300,
    'margin.bottom' : 120,
    'sequenceLabel.font.size' : 24,
    'sequenceLabel.fill.fillColor' : 'purple',
    'chartLabel.text': 'Top University Rankings Over Time',
    "chartLabel.font.size" : 30,
    'categoryLabel.font.size' : 20,
    'categoryLabel.transform' : "translate(0 10) rotate(10)",
    "key": {"category": "university_name", "sequence": "year", "rank": "rank"}
  }).render();
});