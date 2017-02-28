+++
title = "_index"
date = "2016-12-29T03:56:37-05:00"
  
d3plus = true
c3 = true
googlecharts = true
dygraph = false
visjs = true

[menu.main]
  identifier = "home"
+++

# Overview

dex.js is a visualization framework built for the modern web.  dex.js provides
a common reusable framework for achieving effective interactive data
visualizations using a simple and consistent interface.

## Examples

### Line Chart

Line charts are used to display quantitative values over a
continuous interval such as a time span.  It's frequently
used to show trends and relationships over this interval.

<div id="C3LineChart" class="WideChart"></div>

### Area Chart

Area charts are simply line charts with their encompassed
areas filled in by a color or texture.  In some cases, this
allows differences and similarities to become more pronounced.

<div id="C3AreaChart" class="WideChart"></div>

### Bar Chart

The bar chart uses rectangles or bars to show discrete numerical
comparisons across categories.

<div id="C3BarChart" class="WideChart"></div>

### Stacked Area Chart

A stacked area chart is, as its name implies, an area chart where the
series are stacked on top of one another.

Stacked area charts are useful for showing relative proportions of series
comprised of whole numbers.

<div id="C3StackedAreaChart" class="WideChart"></div>

### Stacked Bar Chart
A stacked bar chart is a bar chart where the series are stacked on top of
one another.

Stacked bar charts are most useful for showing relative proporitions of
series comprised of whole numbers.

<div id="C3StackedBarChart" class="WideChart"></div>

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

<div id="D3Treemap" class="WideChart"></div>

### Sunburst
The Sunburst diagram is another way of viewing hierarchy.  Nodes are laid out into
concentric rings and sized proportional to an associated sizing parameter.

<div id="D3Sunburst" class="WideChart"></div>

### Treemap Bar Chart
<div id="TreemapBarChart" class="WideChart"></div>

### Ring Network
<div id="D3PlusRingNetwork" class="WideChart"></div>

<script>

  var ncsv = {
    'header' : [ 'A', 'B', 'C', 'D' ],
    'data'   : dex.datagen.randomIntegerMatrix({
      'rows'    : 20,
      'columns' : 4,
      'min'     : 1,
      'max'     : 100
    })};

  var mathCsv = {
    'header' : [ 'angle', 'sin', 'cos' ],
    'data' : []
  };

  for (var angle = -360; angle<=360; angle += 10) {
    mathCsv.data.push([angle, Math.sin(angle * (Math.PI/180)),
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
    'csv'    : mathCsv});
  c3AreaChart.render();

  var c3BarChart = new dex.charts.c3.BarChart({
    'parent' : '#C3BarChart',
    'csv'    : mathCsv});
  c3BarChart.render();

  var c3LineChart = new dex.charts.c3.LineChart({
    'parent' : '#C3LineChart',
    'csv'    : mathCsv}).render();

  var c3StackedAreaChart = new dex.charts.c3.StackedAreaChart({
    'parent' : '#C3StackedAreaChart',
    'csv'    : mathCsv}).render();

  var c3StackedBarChart = new dex.charts.c3.StackedBarChart({
    'parent' : '#C3StackedBarChart',
    'csv'    : mathCsv}).render();

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

</script>