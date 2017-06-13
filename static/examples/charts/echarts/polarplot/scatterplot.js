var csv = {
  'header': ["Angle", "Value", "Series" ],
  'data': []
};

_.range(-360, 360, 15).forEach(function (angle) {
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
  'series.type': "scatter"
});
chart.render();