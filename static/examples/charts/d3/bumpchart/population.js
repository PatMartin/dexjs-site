d3.json("/data/WorldBirthsAndDeaths.json", function (error, data) {
  // Creates a new csv with an added ranking field based on GDP Per Capita.
  var rankings = new dex.csv(data).getRankedCsv("Country", "Year", "Population");

  chart = dex.charts.d3.BumpChart({
    "parent": "#Chart",
    "csv": rankings,
    'color': dex.color.getColormap("crayola120"),
    'line.stroke.width': 2,
    'circle.r': 3,
    'circle.stroke.width': 2,
    'label.font.size': 8,
    'margin.top': 15,
    'margin.left': 40,
    'margin.right': 170,
    'xAxisLabel.text': 'Country Population',
    "key": {"category": "Country", "sequence": "Year", "rank": "Population"}
  }).render();

  var configPane = dex.ui.ConfigurationPane({
    parent: "#ConfigurationPane",
    csv: rankings,
    components: [chart]
  }).render();
});