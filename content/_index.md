+++
title = "_index"
date = "2016-12-29T03:56:37-05:00"
  
d3plus = true
c3 = true
dygraph = false
visjs = true

[params]
  scripts = [
    "https://cdnjs.cloudflare.com/ajax/libs/nvd3/1.8.5/nv.d3.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/vis/4.17.0/vis.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/d3plus/1.9.8/d3plus.full.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/c3/0.4.10/c3.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/topojson/1.6.19/topojson.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/Faker/3.1.0/faker.min.js"
  ]
  css = [
    "https://cdnjs.cloudflare.com/ajax/libs/nvd3/1.8.5/nv.d3.min.css",
    "/css/Treemap.css"
  ]

[menu.main]
  identifier = "home"
+++

# Overview

dex.js is a visualization framework built for the modern web.  dex.js provides
a common reusable framework for achieving effective interactive data
visualizations using a simple and consistent interface.

dex.js unifies a number of charts from other frameworks and offers a few
unique variants of it's own and allows them to safely interoperate within
a single web page.

## Design Principles

dex.js is designed with the following goals in mind.

### Ease of Use

Charts should be easy to use.  This is best achieved through simplicity
and consistency.

#### Consistent Usage

Creating a parallel coordinates chart can be done via:

```javascript
var pcChart = dex.charts.d3.ParallelCoordinates({
  "parent": "#PCParent",
  "csv"   : csvData });
```

Where the parent points to a div container named PCParent and the chart
data is contained in csvData.

A chord diagram might be defined like:

```javascript
var chordChart = dex.charts.d3.Chord({
  "parent": "#ChordParent",
  "csv"   : csvData });
```

Though they are very different chart types, the basic usage is identical.

Once you master creating one chart type, you pretty much know how to
create them all.

#### Consistent Data Representation

Data input is also consistent.  It's always a CSV in JSON form.  Here is
an example:

```javascript
var csv = {
  "header" : [ "Name", "Age", "Gender" ],
  "data"   : [
    [ "Bob", 53, "Male" ],
    [ "Alice", 22, "Female" ]
  ]
};
```

### Interactive

Charts are interactive and can talk to one another because seldom does a
single view tell you everything you wish to know about a dataset.

The charts employ a publish/subscribe model where one chart subscribes to
the events published by another.

Here's how we tell the chord chart that when a user selects data in the
parallel coordinates chart, update the chord diagram with that data.

```javascript
chordChart.subscribe(pcChart, "select", function (msg) {
    chord.attr('csv', msg.selected).update();
  });
```

### Powerful

Though the basic usage is simple I aim to expose the underlying power of
each visualization available for configuration.

Virtually every aspect of dex.js charts can be styled from the configuration
options.

For example, let's look at a small subset of default configuration for
a chord chart:

```json
{
  "parent": "#ChordParent",
  "id": "ChordId",
  "class": "ChordClass",
  "resizable": true,
  "width": "100%",
  "height": "100%",
  "margin": {
    "left": 20,
    "right": 20,
    "top": 50,
    "bottom": 50
  },
  "transform": "",
  "padding": 0.05
  // Lots more configuration...
}
```

These are the default options.  A user can override these defaults at any
time in the chart's existence.

At construction time, we can set the height and width of the chart to
400x400 via:

```javascript
var chord = dex.charts.d3.Chord({"height" : 400, "width" : 400});
```

or we can set options later.  Here we change the margins:

```javascript
chord.attr("margin", { "left" : 0, "right" : 0, "top" : 0, "bottom" : 0 });
```

Or change a single margin setting using dot notation.  Here we're only
changing the top margin:

```javascript
chord.attr("margin.top", 0);
```

We can also chain the attr calls:

```javascript
chort.attr("margin.top", 0).attr("margin.bottom", 0);
```

From this small subset of options, we control of the container, the chart's id and classname.

The user guide goes deeper into this.  For now, let"s move on to some
examples.

## Examples

### C3 Line Chart

Line charts are used to display quantitative values over a
continuous interval such as a time span.  It's frequently
used to show trends and relationships over this interval.

<div id="C3LineChart" class="WideChart"></div>

### C3 Area Chart

Area charts are simply line charts with their encompassed
areas filled in by a color or texture.  In some cases, this
allows differences and similarities to become more pronounced.

<div id="C3AreaChart" class="WideChart"></div>

### C3 Bar Chart

The bar chart uses rectangles or bars to show discrete numerical
comparisons across categories.

<div id="C3BarChart" class="WideChart"></div>

### C3 Stacked Area Chart

A stacked area chart is, as its name implies, an area chart where the
series are stacked on top of one another.

Stacked area charts are useful for showing relative proportions of series
comprised of whole numbers.

<div id="C3StackedAreaChart" class="WideChart"></div>

### C3 Stacked Bar Chart
A stacked bar chart is a bar chart where the series are stacked on top of
one another.

Stacked bar charts are most useful for showing relative proporitions of
series comprised of whole numbers.

<div id="C3StackedBarChart" class="WideChart"></div>

### C3 Pie Chart

<div id="C3PieChartParent" class="WideChart"></div>

### C3 Donut Chart

<div id="C3DonutChartParent" class="WideChart"></div>

### C3 Scatterplot

<div id="C3ScatterPlotParent" class="WideChart"></div>

### NVD3 Bubble Chart

<div id="Nvd3_BubbleChartParent" class="WideChart"></div>

### NVD3 Stacked Area Chart

<div id="Nvd3_StackedAreaChartParent" class="WideChart"></div>

### Network Diagrams
Network diagrams are useful for depicting relationships within data.
In this implementation, nodes are sized by the number of relationships
they have.  Larger nodes have more connections while smaller ones have
fewer connections.

The network can be panned, zoomed and supports direct interaction.

<div id="VisNetwork" class="WideChart"></div>

### Chord
The Chord is used for visualizing inter-relationships between entities.
Nodes are arranged in a circle and relationhips between the nodes are
represented as connected arcs between them.

<div id="D3Chord" class="WideChart"></div>

### Sankey
A Sankey diagram is similar to a chord diagram, however, the nodes within
each series are laid out linearly and the relationships are connected via
arcs between them.

<div id="D3Sankey" class="WideChart"></div>

### Bump Chart
Bump charts are sometimes called slope charts.  They are an effective
way of displaying discrete ranks between entities over an interval, typically
time.  Put simply, it's a great way to visualize how a group of entities
compare to one other.

This example visualizes the GDP ranking among a subset of countries over
time.

<div id="BumpChart" class="WideChart"></div>

### Parallel Coordinates

The parallel coordinates plot is used for plotting data with many numeric or
categorical dimensions and useful for comparing the relationships between
them.

This variant allows for the brushing of axis so that one may focus on interesting
facets of the data.

<div id="D3ParCoord" class="WideChart"></div>

### Dendrogram

The dendogram or tree diagram is useful for depicting hierarchical relationships.

<div id="D3Dendrogram" class="WideChart"></div>

### Clustered Force

The clustered force visualization lays out nodes into groups.  Nodes are colored
by group and nodes within the same group are attracted to one another.  Nodes of
different groups repel one another.  This produces the clustering effect for which
the visualization is named.  Nodes are sized either by a sizing configurable size
parameter.

2005 Crime statistics for all states colored by type of crime and sized
by the number of crimes committed.

<div id="D3ClusteredForce" class="WideChart"></div>

### Treemap
Treemaps are another way of visualizing hierarchical structures.  Treemaps divide each
portion of the hierarchy into rectangular areas which are sized proportionally to
an associated size parameter.  An additional grouping parameter is used to color
similarly grouped nodes.

Treemaps are also great at comparing the proportions between categories via their size.

<div id="D3Treemap" class="TreemapClass WideChart"></div>

### Sunburst
The Sunburst diagram is another way of viewing hierarchy.  Nodes are laid out into
concentric rings and sized proportional to an associated sizing parameter.

<div id="D3Sunburst" class="WideChart"></div>

### Treemap Bar Chart
The Treemap Bar Chart, as its name implies, is a hybrid of both a Treemap and a
Bar Chart.  The Treemap Bar Chart lays out bars along a horizontal axis defined
by a category.  The groupings of each bar are colored via a secondary category.
Within the colored groupings, there are partitions which indicate another
categorical division sized relative to a user configurable sizing parameter.

When the user clicks upon a partion, the visual will zoom into the category
defined by the division on which the user clicked.  Another click returns the
user to the original view.

This visualization is great for visualizing data with 4 categorical dimensions
versus a quantity dimension.

<div id="TreemapBarChart" class="WideChart"></div>

### Ring Network
The Ring Network is useful for displaying relationships between nodes in a way
which does not overwhelm the user.  While Network diagrams typically depict all
of the nodal relations at once, the Ring diagram depicts only 2 layers at a time.
As the user clicks the node of interest, the chart will update using that node
as the root focal point.

This visual is useful for visualizing complex network relationships which would
otherwise be overwhelming when displayed all at once.

<div id="D3PlusRingNetwork" class="WideChart"></div>

### Motion Bar Charts

### Orbital Layout

### ECharts Bubble Chart

### 3D Scatter Plot

<script>

  var ncsv = {
    'header' : [ 'A', 'B', 'C', 'D' ],
    'data'   : dex.datagen.randomIntegerMatrix({
      'rows'    : 20,
      'columns' : 4,
      'min'     : 1,
      'max'     : 100
    })};

  var sincos = {
    'header' : [ 'angle', 'sin', 'cos' ],
    'data' : []
  };

  for (var angle = -360; angle<=360; angle += 10) {
    sincos.data.push([angle, Math.sin(angle * (Math.PI/180)),
      Math.cos(angle * (Math.PI/180))]);
  }

  var grades = {
    'header' : [ "NAME", "SUBJECT", "GRADE" ],
    'data'   : [
      [ "Joe", "Math", "A" ],
      [ "Joe", "English", "B" ],
      [ "Sally", "Math", "A" ],
      [ "Sally", "English", "C" ],
      [ "Mike", "Math", "B" ],
      [ "Mike", "English", "C" ],
      [ "Karen", "Math", "B" ],
      [ "Karen", "Math", "C" ]
    ]
  };

  var c3AreaChart = new dex.charts.c3.AreaChart({
    'parent' : '#C3AreaChart',
    'csv'    : sincos});
  c3AreaChart.render();

  var c3BarChart = new dex.charts.c3.BarChart({
    'parent' : '#C3BarChart',
    'csv'    : sincos});
  c3BarChart.render();

  var c3LineChart = new dex.charts.c3.LineChart({
    'parent' : '#C3LineChart',
    'csv'    : sincos}).render();

  var c3StackedAreaChart = new dex.charts.c3.StackedAreaChart({
    'parent' : '#C3StackedAreaChart',
    'csv'    : sincos}).render();

  var c3StackedBarChart = new dex.charts.c3.StackedBarChart({
    'parent' : '#C3StackedBarChart',
    'csv'    : sincos}).render();

  var salesData = {
    'header' : ["NAME", "SALE", ],
    'data'   : [
      ["Bob", Math.random() * 1000],
      ["Sue", Math.random() * 1000],
      ["Pat", Math.random() * 1000],
      ["Jimmy", Math.random() * 1000],
      ["Mike", Math.random() * 1000],
      ["Janet", Math.random() * 1000],
      ["Rodney", Math.random() * 1000],
      ["Willie", Math.random() * 1000]
    ]
  };

  var piechart = new dex.charts.c3.PieChart({
            'parent'      : '#C3PieChartParent',
            'csv'         : salesData
          }
  ).render();

  var donutChart = new dex.charts.c3.DonutChart({
            'parent'      : '#C3DonutChartParent',
            'csv'         : salesData,
            'type'        : "donut"
          }
  ).render();

  var scatterplot = dex.charts.c3.ScatterPlot({
            'parent'  : '#C3ScatterPlotParent',
            'csv' : sincos
  }).render();

  d3.json("/data/gdp.json", function(error, bumpChartData) {
    var bumpChart = dex.charts.d3.BumpChart({
      'parent' : '#BumpChart',
      'color': dex.color.getColormap("crayola120"),
      'csv' : bumpChartData}).render();
  });
  
  d3.json("/data/presidents.json", function(error, presidents) {
    var network = dex.charts.vis.Network({
      'parent'      : '#VisNetwork',
      'csv'         : dex.csv.columnSlice(presidents, [2, 3, 1])
    }).render();
  
    var chord = dex.charts.d3.Chord({
      'parent'      : '#D3Chord',
      'csv'         : dex.csv.columnSlice(presidents, [2, 3])
    }).render();

    var sankey = dex.charts.d3.Sankey({
      'parent'      : '#D3Sankey',
      'csv'         : dex.csv.columnSlice(presidents, [1, 2, 3])
    }).render();
  
    var parCoord = dex.charts.d3.ParallelCoordinates({
      'parent'      : '#D3ParCoord',
      'csv'         : dex.csv.columnSlice(presidents, [1, 2, 3])
    }).render();
  
    var dendrogram = dex.charts.d3.Dendrogram({
      'parent'      : '#D3Dendrogram',
      'csv'         : dex.csv.columnSlice(presidents, [2, 3, 1])
    }).render();
    
    var ringNetwork = dex.charts.d3plus.RingNetwork({
      'parent': '#D3PlusRingNetwork',
      'connect': 'first',
      'edges' : {'arrows' : true},
      'csv': dex.csv.columnSlice(presidents, [2, 3, 1])
    }).render();
  });

  d3.json("/data/crime.json", function(error, crime) {
    var cforce = dex.charts.d3.ClusteredForce({
      'parent'      : '#D3ClusteredForce',
      'csv'         : dex.csv.selectRows(crime, function(row) {
        return row[3] == "2005"; }),
      'groups'      : [{category: 1, label: 0, value: 4 }]
    }).render();
    
    var treemap = dex.charts.d3.Treemap({
      'parent'       : '#D3Treemap',
      'class'        : 'Treemap',
      'csv'          : dex.csv.columnSlice(crime, [0, 3, 2, 1, 4]),
      'color'        : d3.scale.category20(),
      'shader'       : { 'type' : 'darken', 'increment' : .1 },
      'manualSizing' : true
    }).render();
    
    var treemapBarChart = new dex.charts.d3.TreemapBarChart({
      'parent'           : '#TreemapBarChart',
      'categoryLabel.font.size' : 8,
      'csv'              : crime
    }).render();
    d3 = dex.charts.d3.d3v3;
  });
    
  var sunburst = dex.charts.d3.Sunburst({
    'parent'      : '#D3Sunburst',
    'csv'         : dex.csv.columnSlice(grades, [1, 2, 0]),
    'label.font.fill.fillColor' : 'red'
  });
  sunburst.render();

  // NVD3
  var salesData = {
    'header': ['Name', 'Date', 'Units Sold', 'Profit'],
    'data': []
  };
  
  for (var nameIndex = 0; nameIndex < 5; nameIndex++) {
    var name = faker.name.firstName();
    for (var year = 2015; year < 2017; year++) {
      for (var month = 0; month < 12; month++) {
        salesData.data.push([name, new Date(year, month, 1),
          faker.random.number({'min': 0, 'max': 50}),
          faker.random.number({'min': 1, 'max': 1000}
          )])
      }
    }
  }
  
  d3 = dex.charts.d3.d3v3;
  var nvdBubbleChart = dex.charts.nvd3.BubbleChart({
      'parent': '#Nvd3_BubbleChartParent',
      'csv': salesData
    }
  );
  nvdBubbleChart.render();

  var nvdStackedAreaChart = new dex.charts.nvd3.StackedAreaChart({
      'parent': '#Nvd3_StackedAreaChartParent',
      'csv': salesData
    }
  ).render();
  
</script>