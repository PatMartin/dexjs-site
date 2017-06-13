var csv = {
  'header': ["Angle", "Value", "Series" ],
  'data': []
};

dex.range(0, 360).forEach(function (angle) {
  var radians = angle / 180 * Math.PI;
  csv.data.push([ angle, Math.sin(radians), "sin" ]);
  csv.data.push([angle, Math.cos(radians), "cos" ]);
});

var chart = dex.charts.echarts.PolarPlot({
  parent: '#PolarPlot',
  csv: csv,
  angleIndex: "Angle",
  seriesIndex: "Series",
  valueIndex: "Value",
  "series.showSymbol": false,
  "series.type": "line"
});
chart.render();