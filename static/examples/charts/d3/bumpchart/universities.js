d3.csv("/data/universities.csv", function (error, data) {

  var rankings = new dex.csv(data)
    .getRankedCsv("university_name", "year", "world_rank")
    .include([1, 10, 11]);

  dex.console.log("RANKINGS", rankings);

  chart = dex.charts.d3.BumpChart({
    "parent": "#Chart",
    "csv": rankings,
    'color': d3.scale.category10(),
    'line.stroke.width': 4,
    'line.stroke.dasharray': "5 5",
    'circle.r': 0,
    'circle.stroke.width': 5,
    'label.font.size': 8,
    'margin.top': 25,
    'margin.left': 40,
    'margin.right': 300,
    'margin.bottom': 100,
    'sequenceLabel.font.size': 24,
    'sequenceLabel.fill.fillColor': 'red',
    'chartLabel.text': 'Universities That Would Never Accept Me',
    "chartLabel.font.size": 20,
    'categoryLabel.font.size': 14,
    'categoryLabel.transform': "translate(0 10) rotate(10)",
    "key": {"category": "university_name", "sequence": "year", "rank": "rank"}
  }).render();

  var configPane = dex.ui.ConfigurationPane({
    parent: "#ConfigurationPane",
    csv: rankings,
    components: [chart]
  }).render();
});