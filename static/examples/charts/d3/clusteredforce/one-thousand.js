var numCategories = 20;
var numLabels = 50;
var minValue = 1;
var maxValue = 100;

var csv = {header: ["category", "label", "value"], data: []};

for (var ci = 1; ci <= numCategories; ci++) {
  for (var li = 1; li <= numLabels; li++) {
    csv.data.push(["CATEGORY-" + ci, "LABEL-" + li,
      Math.floor((Math.random() * maxValue)) + minValue]);
  }
}

dex.charts.d3.ClusteredForce({
  "parent": "#ClusteredForce",
  "csv": csv,
  "groups": [{"label": "label", "value": "value", "category": "category"}]
}).render();
