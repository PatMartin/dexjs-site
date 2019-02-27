var csv = new dex.csv(["series", "name", "value"]);

["Q1", "Q2", "Q3", "Q4"].forEach(function (series) {
  ["Bob", "Jim", "Alice", "Mike", "Pam", "Pat"].forEach(function (name) {
    csv.data.push([series, name, Math.floor(Math.random() * 51 + 50)]);
  });
});

chart = dex.charts.echarts.PieChart({
  parent: '#Chart',
  csv: csv
}).render();

var configPane = dex.ui.ConfigurationPane({
  parent: "#ConfigurationPane",
  csv: csv,
  components: [ chart ]
}).render();