var sincos = { "header":[ "name", "angle", "value" ], "data":[]};

for (var angle = -360; angle<=360; angle += 5) {
  sincos.data.push(["sin", angle, Math.sin(angle * (Math.PI/180)).toFixed(2)]);
  sincos.data.push(["cos", angle, Math.cos(angle * (Math.PI/180)).toFixed(2)]);
}

var bubbleChart = dex.charts.nvd3.StackedAreaChart({
    'parent': '#StackedAreaChart',
    'csv': sincos
}).render();