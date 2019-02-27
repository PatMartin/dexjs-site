var csv = new dex.csv({
  "header": ["name", "gender", "vehicle", "marital status"],
  "data": [
    ["Joe", "Male", "Truck", "Married"],
    ["Jim", "Male", "Car", "Single"],
    ["Mary", "Female", "Car", "Single"],
    ["Brooke", "Female", "Truck", "Single"],
    ["Bobby", "Male", "Truck", "Married"]
  ]
}).include([1, 2, 3]);

// Configure and render the chart.
dex.charts.d3.Treemap({
  "parent": "#Treemap",
  "csv": csv
}).render();
