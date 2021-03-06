var csv = new dex.csv({
  "header": ["name", "gender", "vehicle", "marital status"],
  "data": [
    ["Joe", "Male", "Truck", "Married"],
    ["Jim", "Male", "Car", "Single"],
    ["Mary", "Female", "Car", "Single"],
    ["Brooke", "Female", "Truck", "Single"],
    ["Bobby", "Male", "Truck", "Married"]
  ]
});

// Configure and render the chart.
dex.charts.d3.Sunburst({
  "parent": "#Sunburst",
  "csv": csv.include([1, 2, 3])
}).render();
