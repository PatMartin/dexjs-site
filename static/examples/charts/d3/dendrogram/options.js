d3.json("/data/presidents.json", function(error, data) {
  var presidents = new dex.csv(data);

  chart = dex.charts.d3.Dendrogram({
    "parent": "#Chart",
    "csv": presidents,
    "connectionType" : "elbow",
    "root.name" : "Presidents",
    "link.stroke.color" : "red",
    "link.stroke.width" : 3,
    "link.stroke.dasharray" : "10 5",
    "node.expanded.circle.r" : 3,
    "node.expanded.circle.fill.fillColor" : "green"
  }).render();

  var configPane = dex.ui.ConfigurationPane({
    parent: "#ConfigurationPane",
    csv: presidents,
    components: [ chart ]
  }).render();
});