var csv = new dex.csv(
  ["Name", "Gender", "Marital Status"],
  [
    ["Bob", "Male", "Single"],
    ["Jim", "Male", "Married"],
    ["Jill", "Female", "Married"],
    ["Jack", "Male", "Married"]
  ]);

var chart = dex.charts.echarts.Network({
  parent: '#Chart',
  csv: csv,
  refreshType: "render",
  "series.layout": "circular"
}).render();

var configPane = dex.ui.ConfigurationPane({
  parent: "#ConfigurationPane",
  csv: csv,
  components: [ chart ]
}).render();