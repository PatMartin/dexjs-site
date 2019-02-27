var csv = new dex.csv({
  "header": ["Name", "Gender", "Vehicle"],
  "data": [
    ["Bob", "Male", "Truck"],
    ["Jennifer", "Female", "Car"],
    ["Pat", "Male", "Car"]
  ]
});

dex.charts.d3.OrbitalLayout({
  "parent": "#OrbitalLayout",
  "csv": csv
}).render();
