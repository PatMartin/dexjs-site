d3.csv("/data/universities.csv", function (error, data) {

  var schools = {};
  schools.header = Object.keys(data[0]);
  schools.data = data.map(function (row) {
    return schools.header.map(function (h) {
      return row[h];
    });
  });

  // world_rank,university_name,national_rank,total_score,
  // alumni,award,hici,ns,pub,pcp,year

  var rankings = dex.csv.getRankedCsv(schools, "university_name",
    "year", "world_rank");

  //dex.console.log("DATA", data, "SCHOOLS", schools, "RANKINGS", rankings);

  dex.charts.d3.BumpChart({
    "parent": "#BumpChart",
    "csv": rankings,
    'color': d3.scale.category10(),
    'line.stroke.width': 10,
    'circle.r': 5,
    'circle.stroke.width': 5,
    'label.font.size': 8,
    'margin.top': 25,
    'margin.left': 40,
    'margin.right': 300,
    'margin.bottom' : 100,
    'sequenceLabel.font.size' : 24,
    'sequenceLabel.fill.fillColor' : 'purple',
    'chartLabel.text': 'Top University Rankings Over Time',
    "chartLabel.font.size" : 30,
    'categoryLabel.font.size' : 20,
    'categoryLabel.transform' : "translate(0 10) rotate(10)",
    "key": {"category": "university_name", "sequence": "year", "rank": "rank"}
  }).render();
});