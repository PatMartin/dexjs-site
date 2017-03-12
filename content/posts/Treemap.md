+++
date = "2017-01-08T03:17:34-05:00"
title = "Introducing the new Treemap"
type = "post"
[menu.main]
  identifier = "posts"
[params]
  css = ["/css/Treemap.css"]
+++

# Treemaps

[Treemaps](http://www.datavizcatalogue.com/methods/treemap.html) are a very useful visualization which allows a view into
hierarchical data such as filesystem data.  Below is an image of WinDirStat; a
tool I use to clean out unwanted files on my harddrive.

![Example image](/images/blog/WinDirStat_Treemap.png)

The treemap implementation in dex.js up to this point was terrible and needed to
be rewritten.  So, I present to you today a draft implementation based upon
Mike Bostocks's [Zoomable Treemap](https://bost.ocks.org/mike/treemap/) example.

## Presidents
Here's a treemap which shows the hieararchy of
```Polictical Party -> Home State -> President```

Since there are no numerical values to size on within this data, the
partitions are sized by relative frequency.  The numbers within the
title bar at the top represent frequency counts in this case.

<svg id="PresTreemap" class="WideChart"></svg>
<pre><code class="language-javascript">var presTreemap = dex.charts.d3.Treemap({
  'parent' : '#PresTreemap',
  'csv'    : presidents
}).render();</code></pre>

## Crime Data
Next, we see that we can scale quite a bit with this visualization.
Here we are revisiting our crime data which has a hierarchy of:
```State -> Year -> Type of Crime -> Crime```
The sizing is done versus the count of crimes within the data.

<svg id="CrimeTreemap" class="WideChart"></svg>
<pre><code class="language-javascript">var crimeTreemap = dex.charts.d3.Treemap({
  'parent' : '#CrimeTreemap',
  'csv'    : crimes
}).render();</code></pre>

## Cars Treemap
Car data, insert Tim the toolman Taylor grunt here...aaaaaroooh?
```Manufacturer -> Make -> Model -> # Cylinders```

<svg id="CarsTreemap" class="WideChart"></svg>
<pre><code class="language-javascript">var carsTreemap = dex.charts.d3.Treemap({
  'parent' : '#CarTreemap',
  'csv'    : cars
}).render();</code></pre>

## Deep Nesting
Don't believe what they might of told you.  They were lying. Bigger is
always better. In this example, we are looking at an artificially
generated dataset consisting of 10 columns x 10,000 rows.  This
demonstrates viability for deep nesting.

<svg id="DeepNesting" class="WideChart"></svg>
<pre><code class="language-javascript">var nestedTreemap = dex.charts.d3.Treemap({
  'parent' : '#NestedTreemap',
  'csv'    : {
               'header' : [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J' ],
               'data'   : dex.datagen.randomIntegerMatrix({
               'rows'    : 10000,
               'columns' : 10,
               'min'     : 1,
               'max'     : 10
             }
}).render();</code></pre>

## Shader Examples
Lets alter the presidents treemap to have a steeper gradient.

Here we go darker:

<svg id="Shady1" class="WideChart"></svg>
<pre><code class="language-javascript">var shadyTreemap1 = dex.charts.d3.Treemap(presTreemap)
  .attr('shader', { 'type' : 'darken', 'increment' : .2 })
  .attr('parent', '#Shady1').render();
</code></pre>
      
Here we shade lighter:

<svg id="Shady2" class="WideChart"></svg>
<pre><code class="language-javascript">var shadyTreemap2 = dex.charts.d3.Treemap(presTreemap)
  .attr('shader', { 'type' : 'lighten', 'increment' : .2 })
  .attr('parent', '#Shady2').render();
</code></pre>

# Final Thoughts

As usual, this is just a starting point.  Hope you like what you see.

And last but not least, the exact code backing this entire blog post.

<pre><code class="language-javascript">&lt;script&gt;

  d3.csv("/data/presidents.csv", function(error, data) {
    var presidents = {};
    presidents.header = Object.keys(data[0]);
    presidents.data = data.slice(1).map(function (row) {
      return presidents.header.map(function (h) { return row[h]; });
    });

    var presTreemap = dex.charts.d3.Treemap({
      'parent' : '#PresTreemap',
      'csv'    : dex.csv.columnSlice(presidents, [ 2, 3, 1 ])
    }).render();
    
    var shadyTreemap1 = dex.charts.d3.Treemap(presTreemap)
      .attr('shader', { 'type' : 'darken', 'increment' : .2 })
      .attr('parent', '#Shady1').render();
      
    var shadyTreemap2 = dex.charts.d3.Treemap(presTreemap)
      .attr('shader', { 'type' : 'lighten', 'increment' : .2 })
      .attr('parent', '#Shady2').render();
  });
  
  d3.csv("/data/crime2000.csv", function(error, data) {
    var crime = {};
    crime.header = Object.keys(data[0]);
    crime.data = data.slice(1).map(function (row) {
      return crime.header.map(function (h) { return row[h]; });
    });
    
    var crimeTreemap = dex.charts.d3.Treemap({
      'parent' : '#CrimeTreemap',
      'csv'    : dex.csv.columnSlice(crime, [ 0, 3, 2, 1, 4 ]),
      'manualSizing' : true
    });
    crimeTreemap.render();
  });

  d3.csv("/data/cars.csv", function(error, data) {
    var cars = {};
    cars.header = Object.keys(data[0]);
    cars.data = data.slice(1).map(function (row) {
      return cars.header.map(function (h) { return row[h]; });
    });
    
    var carsTreemap = dex.charts.d3.Treemap({
      'parent' : '#CarsTreemap',
      //'csv' : cars,
      'csv'    : dex.csv.columnSlice(cars, [ 1, 9, 3, 11 ]),
      'manualSizing' : false
    });
    carsTreemap.render();
    
  });
    
  var treemap4 = dex.charts.d3.Treemap({
    'parent' : '#DeepNesting',
    'csv'    : {
                 'header' : [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J' ],
                 'data'   : dex.datagen.randomIntegerMatrix({
                   'rows'    : 10000,
                   'columns' : 10,
                   'min'     : 1,
                   'max'     : 10
                 })
               }
  });
  treemap4.render();
&lt;/script&gt;</code></pre>

<script>

  d3.csv("/data/presidents.csv", function(error, data) {
    var presidents = {};
    presidents.header = Object.keys(data[0]);
    presidents.data = data.slice(1).map(function (row) {
      return presidents.header.map(function (h) { return row[h]; });
    });

    var presTreemap = dex.charts.d3.Treemap({
      'parent' : '#PresTreemap',
      'csv'    : dex.csv.columnSlice(presidents, [ 2, 3, 1 ])
    }).render();
    
    var shadyTreemap1 = dex.charts.d3.Treemap(presTreemap)
      .attr('shader', { 'type' : 'darken', 'increment' : .2 })
      .attr('parent', '#Shady1').render();
      
    var shadyTreemap2 = dex.charts.d3.Treemap(presTreemap)
      .attr('shader', { 'type' : 'lighten', 'increment' : .2 })
      .attr('parent', '#Shady2').render();
  });
  
  d3.csv("/data/crime2000.csv", function(error, data) {
    var crime = {};
    crime.header = Object.keys(data[0]);
    crime.data = data.slice(1).map(function (row) {
      return crime.header.map(function (h) { return row[h]; });
    });
    
    var crimeTreemap = dex.charts.d3.Treemap({
      'parent' : '#CrimeTreemap',
      'csv'    : dex.csv.columnSlice(crime, [ 0, 3, 2, 1, 4 ]),
      'manualSizing' : true
    });
    crimeTreemap.render();
  });

  d3.csv("/data/cars.csv", function(error, data) {
    var cars = {};
    cars.header = Object.keys(data[0]);
    cars.data = data.slice(1).map(function (row) {
      return cars.header.map(function (h) { return row[h]; });
    });
    
    var carsTreemap = dex.charts.d3.Treemap({
      'parent' : '#CarsTreemap',
      //'csv' : cars,
      'csv'    : dex.csv.columnSlice(cars, [ 1, 9, 3, 11 ]),
      'manualSizing' : false
    });
    carsTreemap.render();
    
  });
  
  /*
  d3.csv("/data/drwho.csv", function(error, data) {
    var drwho = {};
    drwho.header = Object.keys(data[0]);
    drwho.data = data.slice(1).map(function (row) {
      return drwho.header.map(function (h) { return row[h]; });
    });
      
    var drwhoTreemap = dex.charts.d3.Treemap({
      'parent' : '#DrWhoTreemap',
      'csv'    : dex.csv.columnSlice(drwho, [5, 9, 6]),
      'manualSizing' : true
    });
    drwhoTreemap.render();
    
  });
*/
  
  var treemap4 = dex.charts.d3.Treemap({
    'parent' : '#DeepNesting',
    'csv'    : {
                 'header' : [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J' ],
                 'data'   : dex.datagen.randomIntegerMatrix({
                   'rows'    : 10000,
                   'columns' : 10,
                   'min'     : 1,
                   'max'     : 10
                 })
               }
  });
  treemap4.render();
</script>