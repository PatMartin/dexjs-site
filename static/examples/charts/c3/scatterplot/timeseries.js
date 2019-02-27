// Create categorical data
var sales = new dex.csv({
  "header": ["Month", "Bob", "Mike", "Jenny", "Susan"],
  "data": [
    ["2016-01-01", 123000, 200000, 124342, 450000],
    ["2016-02-01", 223000, 120000, 224342, 330000],
    ["2016-03-01", 29000, 120000, 324342, 410000],
    ["2016-04-01", 191000, 90000, 534342, 550000],
    ["2016-05-01", 223000, 230000, 324342, 50000],
    ["2016-06-01", 523000, 160000, 124342, 350000],
    ["2016-07-01", 39000, 220000, 224342, 470000],
    ["2016-08-01", 291000, 190000, 234342, 250000],
    ["2016-09-01", 223000, 400000, 424342, 250000],
    ["2016-10-01", 123000, 220000, 124342, 230000],
    ["2016-11-01", 99000, 170000, 324342, 250000],
    ["2016-12-01", 291000, 120000, 434342, 360000],
  ]
});

// Configure and render the chart.
chart = dex.charts.c3.ScatterPlot({
  "parent": "#Chart",
  "csv": sales,
  "options.axis.y.tick.format": d3.format("$,"),
  "options.padding.left": 70,
  "options.subchart.show": true
}).render();

var configPane = dex.ui.ConfigurationPane({
  parent: "#ConfigurationPane",
  csv: sales,
  components: [chart]
}).render();