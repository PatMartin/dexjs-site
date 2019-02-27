// Create data
var sales = new dex.csv({
  "header": ["Name", "Sales"],
  "data": [["Bob", 120], ["Bill", 34], ["Suzie", 232]]
});

// Configure and render the chart.
chart = dex.charts.c3.DonutChart({
  "parent": "#Chart",
  "csv": sales,
  "options.donut.title": "Sales",
  "apply": [
    {
      "select": ".c3-chart-arc text",
      "styles": {"fill": "yellow", "font-size": 20}
    },
    {
      "select": ".c3-chart-arc path",
      "styles": {"stroke": "black", "stroke-width": 3, "stroke-dasharray": "25 15"}
    },
    {
      "select": ".c3-chart-arcs-title",
      "styles": {"fill": "red", "font-size": 40}
    }]
}).render();


var configPane = dex.ui.ConfigurationPane({
  parent: "#ConfigurationPane",
  csv: sales,
  components: [chart]
}).render();