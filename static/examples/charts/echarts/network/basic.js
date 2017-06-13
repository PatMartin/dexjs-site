var csv = {
  header: ["Name", "Gender", "Marital Status"],
  data: [
    ["Bob", "Male", "Single"],
    ["Jim", "Male", "Married"],
    ["Jill", "Female", "Married"],
    ["Jack", "Male", "Married"]
  ]
};

var chart = dex.charts.echarts.Network({
  parent: '#Network',
  csv: csv
}).render();