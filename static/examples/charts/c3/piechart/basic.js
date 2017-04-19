// Create data
var sales = {
  "header" : [ "Name", "Sales" ],
  "data" : [["Bob", 120], ["Bill", 34], ["Suzie", 232]]
};

// Configure and render the chart.
dex.charts.c3.PieChart({
  "parent" : "#PieChart",
  "csv" : sales
}).render();