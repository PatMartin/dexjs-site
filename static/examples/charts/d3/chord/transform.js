var csv = new dex.csv({
  "header": ["Name", "Gender", "Vehicle"],
  "data": [
    ["Bob", "Male", "Truck"],
    ["Jennifer", "Female", "Car"],
    ["Pat", "Male", "Car"]
  ]
});

chart = dex.charts.d3.Chord({
  "parent": "#Chart",
  "csv": csv,
  "transform": "skewY(30)",
  "draggable": true
}).render();

var configPane = dex.ui.ConfigurationPane({
  parent: "#ConfigurationPane",
  csv: colors,
  components: [chart]
}).render();