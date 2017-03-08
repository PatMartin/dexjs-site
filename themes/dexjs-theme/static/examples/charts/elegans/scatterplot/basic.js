dex.charts.elegans.ScatterPlot({
  "parent": "#ScatterPlot",
  "csv": {
    "header": ["x", "y", "a", "b", "c", "d"],
    "data": dex.datagen.randomMatrix({
      rows: 100, columns: 6, min: 0, max: 1000
    })
  }
}).render();