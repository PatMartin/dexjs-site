var csv = new dex.csv({
  header: ["Name", "Gender", "Marital Status"],
  data: [
    ["Bob", "Male", "Single"],
    ["Jim", "Male", "Married"],
    ["Jill", "Female", "Married"],
    ["Jack", "Male", "Married"]
  ]
});

chart = dex.charts.echarts.Network({
  parent: '#Chart',
  csv: csv,
  refreshType: "render"
}).render();

var configPane = dex.ui.ConfigurationPane({
  parent: "#ConfigurationPane",
  csv: csv,
  components: [ chart ]
}).render();