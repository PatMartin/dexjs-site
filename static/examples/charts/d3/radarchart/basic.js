// Create data
var sales = new dex.csv({
  'header': ["Salesman", "Q1 Sales", "Q2 Sales", "Q3 Sales", "Q4 Sales"],
  'data': [
    ["Bob Sleezy", 1000, 2000, 3000, 4000],
    ["Honest Jim", 4100, 500, 2500, 3000]
  ]
});

// Configure and render the chart.
dex.charts.d3.RadarChart({
  "parent": "#RadarChart",
  "csv": sales,
  "margin.top": 0
}).render();