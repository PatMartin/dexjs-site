var csv = new dex.csv({
  'header': ['x', 'y', 'a', 'b', 'c', 'd'],
  'data': dex.datagen.randomMatrix({
    rows: 100, columns: 6, min: 0, max: 1000
  })
});

var scatterplot = dex.charts.elegans.ScatterPlot({
    'parent': '#ScatterPlot',
    'color': d3.scale.category10(),
    'csv': csv,
    'series': [
      {
        'name': 'series-a',
        'coordinates': {'x': 'x', 'y': 'y', 'z': 'a'},
        'shape': 'circle',
        'size': 1
      },
      {
        'name': 'series-b',
        'coordinates': {'x': 'x', 'y': 'y', 'z': 'b'},
        'shape': 'rect',
        'size': 1
      },
      {
        'name': 'series-c',
        'coordinates': {'x': 'x', 'y': 'y', 'z': 'c'},
        'shape': 'cross',
        'size': 1
      },
      {
        'name': 'series-d',
        'coordinates': {'x': 'x', 'y': 'y', 'z': 'd'},
        'shape': 'diamond',
        'size': 1
      }
    ]
  }
).render();
