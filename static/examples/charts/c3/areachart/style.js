// Create data
var sincos = new dex.csv(["angle", "sin", "cos"]);

for (var angle = -360; angle <= 360; angle += 45) {
  sincos.data.push([angle, Math.sin(angle * (Math.PI / 180)).toFixed(2),
    Math.cos(angle * (Math.PI / 180)).toFixed(2)]);
}

// Configure and render the chart.
chart = dex.charts.c3.AreaChart({
  "parent": "#Chart",
  "csv": sincos,
  "apply": [
    {
      "select" : "circle",
      "styles" : { "r" : 6, "fill-opacity" : .5 }
    },
    {
      "select": ".c3-chart-lines",
      "styles": {"stroke-dasharray": "20 10"}
    },
    {
      "select": ".c3-axis-y text",
      "styles": {"font-size": 20, "fill": "blue" }
    },
    {
      "select": ".c3-axis-x text",
      "styles": {"font-size": 20, "fill": "green", "text-anchor" : "middle"}
    },
    {
      "select": ".c3-axis-x .tick line",
      "styles": {"stroke-width": 5, "stroke": "red"}
    },
    {
      "select": ".c3-axis-y .tick line",
      "styles": {"stroke-width": 5, "stroke": "blue"}
    },
    {
      "select": ".c3-legend-item text",
      "styles": {"font-size": 20, "text-anchor": "start"},
      "attributes": {"dx": 1, "dy": ".3em"}
    },
    {
      "select": ".c3-legend-item rect",
      "styles": {"width": 15, "height": 18},
      "attributes": {"dx": -100}
    }
  ]
}).render();

var configPane = dex.ui.ConfigurationPane({
  parent: "#ConfigurationPane",
  csv: sincos,
  components: [ chart ]
}).render();