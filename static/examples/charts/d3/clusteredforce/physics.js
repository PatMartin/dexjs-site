var numCategories = 10;
var numLabels = 10;
var minValue = 1;
var maxValue = 100;

var csv = new dex.csv(["category", "label", "value"]);

for (var ci = 1; ci <= numCategories; ci++) {
  for (var li = 1; li <= numLabels; li++) {
    csv.data.push(["CATEGORY-" + ci, "LABEL-" + li,
      Math.floor((Math.random() * maxValue)) + minValue]);
  }
}

chart = dex.charts.d3.ClusteredForce({
  "parent": "#Chart",
  "csv": csv,
  "groups": [{"label": "label", "value": "value", "category": "category"}],
  "charge" : -2000,
  "gravity" : 5,
  "scaleColumns" : false,
  "sizingFunction" : function(d) { return d3.scale.linear(); },
  "minRadius" : 1,
  "maxRadius" : 40
}).render();

var configPane = dex.ui.ConfigurationPane({
  parent: "#ConfigurationPane",
  csv: csv,
  components: [ chart ]
}).render();