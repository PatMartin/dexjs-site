// Create categorical data
var sales = {
  "header" : [ "Salesman", "Q1", "Q2", "Q3", "Q4" ],
  "data" : [
    [ "Bob", 123000, 200000, 124342, 450000 ],
    [ "Mike", 223000, 120000, 224342, 330000 ],
    [ "Jenny", 29000, 120000, 324342, 410000 ],
    [ "Susan", 191000, 90000, 534342, 550000 ],
]};

// Configure and render the chart.
dex.charts.c3.AreaChart({
  "parent" : "#AreaChart",
  "csv" : sales,
  "options.axis.y.tick.format" : d3.format("$,"),
  "options.padding.left" : 70,
  "stack" : true
}).render();