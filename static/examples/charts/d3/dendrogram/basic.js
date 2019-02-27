var csv = new dex.csv({
  "header": ["Name", "Gender", "Vehicle"],
  "data": [
    ["Bob", "Male", "Truck"],
    ["Jennifer", "Female", "Car"],
    ["Pat", "Male", "Car"]
  ]
});

chart = dex.charts.d3.Dendrogram({
  "parent": "#Chart",
  "csv": csv
}).render();

var configPane = dex.ui.ConfigurationPane({
  parent: "#ConfigurationPane",
  csv: csv,
  components: [chart]
}).render();