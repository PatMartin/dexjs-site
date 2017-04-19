// Create data
var sales = {
  "header": ["Name", "Sales"],
  "data": [["Bob", 120], ["Bill", 34], ["Suzie", 232]]
};

// Configure and render the chart.
dex.charts.c3.DonutChart({
  "parent": "#DonutChart",
  "csv": sales,
  "options.donut.title": "Sales",
  "apply": [
    {
      "select": ".c3-chart-arc text",
      "styles": {"fill": "yellow", "font-size": 20}
    },
    {
      "select": ".c3-chart-arc path",
      "styles": {"stroke": "black", "stroke-width" : 3, "stroke-dasharray": "25 15"}
    },
    {
      "select": ".c3-chart-arcs-title",
      "styles": {"fill": "red", "font-size": 40}
    }]
}).render();