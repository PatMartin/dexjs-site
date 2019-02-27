var csv = new dex.csv({
  header: ["Name", "Gender", "Marital Status"],
  data: [
    ["Bob", "Male", "Single"],
    ["Jim", "Male", "Married"],
    ["Jill", "Female", "Married"],
    ["Jack", "Male", "Married"]
  ]
});

var chart = dex.charts.vis.Network({
  parent: '#Network',
  csv: csv
}).render();