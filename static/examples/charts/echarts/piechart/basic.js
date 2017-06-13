var csv = {
  header: ["series", "name", "value"],
  data: []
};

["Q1", "Q2", "Q3", "Q4"].forEach(function (series) {
  ["Bob", "Jim", "Alice", "Mike", "Pam", "Pat"].forEach(function (name) {
    csv.data.push([series, name, Math.floor(Math.random() * 51 + 50)]);
  });
});

var chart = dex.charts.echarts.PieChart({
  parent: '#PieChart',
  csv: csv
}).render();