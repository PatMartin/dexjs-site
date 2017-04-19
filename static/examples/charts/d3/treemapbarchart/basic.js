var csv = {
  'header': ["Divider", "Color", "Category", "X", "Value"],
  'data': [
    ["Divider 1", "Color 1", "Category 1", "Time 1", "100"],
    ["Divider 2", "Color 2", "Category 1", "Time 1", "100"],
    ["Divider 3", "Color 3", "Category 2", "Time 1", "100"],
    ["Divider 4", "Color 3", "Category 2", "Time 1", "100"],
    ["Divider 1", "Color 1", "Category 1", "Time 2", "200"],
    ["Divider 2", "Color 2", "Category 1", "Time 2", "50"],
    ["Divider 3", "Color 3", "Category 2", "Time 2", "10"],
    ["Divider 4", "Color 3", "Category 2", "Time 2", "80"],
    ["Divider 1", "Color 1", "Category 1", "Time 3", "90"],
    ["Divider 2", "Color 2", "Category 1", "Time 3", "10"],
    ["Divider 3", "Color 3", "Category 2", "Time 3", "60"],
    ["Divider 4", "Color 3", "Category 2", "Time 3", "70"],
  ]
};

dex.charts.d3.TreemapBarChart({
  "parent": "#TreemapBarChart",
  'csv': csv
}).render();