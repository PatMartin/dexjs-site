d3.json("/data/presidents.json", function(error, data) {
  var presidents = new dex.csv(data);
  chart = dex.charts.d3.Chord({
    "parent": "#Chart",
    "csv": presidents
  }).render();

  var configPane = dex.ui.ConfigurationPane({
    parent: "#ConfigurationPane",
    csv: presidents,
    components: [ chart ]
  }).render();
});