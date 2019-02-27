d3.json("/data/presidents.json", function(error, data) {
  var csv = new dex.csv(data).include([2, 3, 1]);

  chart = dex.charts.d3.Dendrogram({
    "parent": "#Chart",
    "csv": csv,
    "apply" : [
      {
        "select" : "text",
        "styles" : {
          "fill" : "red"
        }
      },
      {
        "select" : "path",
        "styles" : {
          "stroke-width" : 4,
          "stroke" : "grey"
        }
      }
    ]
  }).render();

  var configPane = dex.ui.ConfigurationPane({
    parent: "#ConfigurationPane",
    csv: csv,
    components: [ chart ]
  }).render();
});