// Create categorical data
var sales = new dex.csv(["Salesman", "Q1", "Q2", "Q3", "Q4"], [
  ["Bob", 123000, 200000, 124342, 450000],
  ["Mike", 223000, 120000, 224342, 330000],
  ["Jenny", 29000, 120000, 324342, 410000],
  ["Susan", 191000, 90000, 534342, 550000]
]);

// Configure and render the chart.
chart = dex.charts.c3.BarChart({
  "parent": "#Chart",
  "csv": sales,
  "options.axis.y.tick.format": d3.format("$,"),
  "options.padding.left": 70
}).render();

var configPane = dex.ui.ConfigurationPane({
  parent: "#ConfigurationPane",
  csv: sales,
  components: [chart]
}).render();