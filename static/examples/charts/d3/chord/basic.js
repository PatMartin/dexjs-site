var csv = new dex.csv(
  ["Name", "Gender", "Vehicle"],
  [["Bob", "Male", "Truck"],
    ["Jennifer", "Female", "Car"],
    ["Pat", "Male", "Car"]
  ]);

chart = dex.charts.d3.Chord({
  "parent": "#Chart",
  "csv": csv
}).render();

var configPane = dex.ui.ConfigurationPane({
  parent: "#ConfigurationPane",
  csv: csv,
  components: [chart]
}).render();