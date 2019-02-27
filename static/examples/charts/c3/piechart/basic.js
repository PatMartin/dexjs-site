// Create data
var sales = new dex.csv({
  "header": ["Name", "Sales"],
  "data": [["Bob", 120], ["Bill", 34], ["Suzie", 232]]
});

// Configure and render the chart.
chart = dex.charts.c3.PieChart({
  "parent": "#Chart",
  "csv": sales
}).render();

var configPane = dex.ui.ConfigurationPane({
  parent: "#ConfigurationPane",
  csv: sales,
  components: [chart]
}).render();