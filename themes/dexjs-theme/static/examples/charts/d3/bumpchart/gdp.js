d3.json("/data/gdp.json", function(error, gdp) {
  // Creates a new csv with an added ranking field based on GDP Per Capita.
  var rankings = dex.csv.getRankedCsv(gdp, "Country", "Year", "GDP Per Capita", {"descending" : true });

  dex.charts.d3.BumpChart({
    "parent": "#BumpChart",
    "csv": rankings,
    'color': dex.color.getColormap("crayola120"),
    'line.stroke.width': 2,
    'circle.r': 3,
    'circle.stroke.width': 2,
    'categoryLabel.font.size': 8,
    'sequenceLabel.font.size' : 18,
    'margin.top': 15,
    'margin.left': 40,
    'margin.right': 170,
    'chartLabel.text': 'GDP Ranking Per Capita / Year',
    "key" : { "category" : "Country", "sequence" : "Year", "rank" : "rank" }
  }).render();
});