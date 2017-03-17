+++

date = "2016-12-28T02:38:25-05:00"
title = "dex.js Introduction"

[menu.main]
  identifier = "docs"
  
+++

# Introduction

dex.js is a javascript framework for data visualization which incorporates
a diverse set of visualizations from a diverse set of HTML5 technologies
such as D3 and WebGL and wraps them in a simple and consistent interface.

# Creating A Chart

## Step 1: Boilerplate

Include the necessary scripts and stylesheets into your HTML page.  This is pretty much boilerplate.

<pre><code class="language-html">&lt;link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.css"&gt;
&lt;link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.4/jquery-ui.theme.min.css"&gt;
&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"&gt;&lt;/script&gt;
&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"&gt;&lt;/script&gt;
&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js"&gt;&lt;/script&gt;
&lt;script src="https://dexjs.net/js/dex.min.js"&gt;&lt;/script&gt;</code></pre>

Dex requires jquery, jquery-ui, underscore and D3 at a minimum.

## Step 2: Define Parent Containers

Provide a div container for the chart somewhere within the body of the html document.
This div will be used as the parent container for the chart.  Give the div a name via
the id attribute so that the dex chart can easily find it.

<pre><code class="language-html">&lt;div id="ChordDiagram"&gt;&lt;/div&gt;</code></pre>

## Step 3: Acquire Some Data

Next, provide some data.  The simplest way is to define it within the page, however,
you can also load the json any way you like.

### Defining Inline

<pre><code class="language-javascript">&lt;script&gt;
  var csv = {
    header : [ 'Name', 'Gender' ],
    data   : [
      ['Todd', 'Male'],
      ['Mike', 'Male'],
      ['Jennifer', 'Female'],
      ['Patrick', 'Male']
    ]
  };
  // Script continues here...</code></pre>

Regardless of the visual, all dex.js components expect data in csv format.
dex.js also provides convenience functions for manipulating and generating
csv data.  More on this later.

### Loading via d3.json()

```javascript
  d3.json("my_data.json", function(error, csv) {
    // Use csv here...
  });
```

Where my_data.json contains our data:

```json
{
    "header" : [ "Name", "Gender" ],
    "data"   : [
      ["Todd", "Male"],
      ["Mike", "Male"],
      ["Jennifer", "Female"],
      ["Patrick", "Male"]
    ]
  }
```

### Loading via jquery get

```javascript
  $.get("my_data.json", function(csv) {
    // Use csv here...
  });
```

## Step 4: Configure the chart

Most charts can be sufficiently configured with a very minimalistic set of options.

```javascript
  var chord = new dex.charts.d3.Chord({
    'parent' : '#ChordDiagram',
    'csv'    : csv
  });
```

## Step 5: Render the Chart

Render the chart.

```javascript
  chord.render();
```

## Final Result

You should see something like the following when you are through:

<div id="ChordDiagram" height="500" width="500"></div>

<div class="alert alert-info" role="alert">
Now if we really wanted to be succinct, we could have combined the last 3
steps into the command:
</div>

```javascript
  var chord = new dex.charts.d3.Chord({
    'parent' : '#ChordDiagram',
    'csv'    : {
      "header" : [ "Name", "Gender" ],
      "data"   : [
        ["Todd", "Male"],
        ["Mike", "Male"],
        ["Jennifer", "Female"],
        ["Patrick", "Male"]
      ]}}).render();
```

# Creating Charts from Charts

In dex.js you can construct new charts from existing charts.  This is useful
when you wish to construct a number of related charts; for instance when
providing some sort of chart multiples visualization.

Ok, let's get started.  Let's create a new chord diagram from our old one.

## Step 1: Boilerplate

```html
<!-- CSS -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.4/jquery-ui.theme.min.css">

<!-- Code --->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js"></script>
<script src="https://dexjs.net/js/dex.min.js"></script>
```

## Step 2: Create Parent Container

First, let's give it a container somewhere in our HTML document.

<pre><code class="language-html">&lt;svg id="ChordDiagram2" height="300" width="300"&gt;&lt;/svg&gt;</code></pre>

## Step 3: Create a Copy

Then lets make a verbatim copy of the chart into chord2.

```javascript
  var chord2 = dex.charts.d3.Chord(chord);
```

## Step 4: Configure the New Chart

Next, let's associate this chart with a distinct parent svg container and give
the chart it's own personality.

```javascript
chord2.attr("parent", "#ChordDiagram2")
  .attr("tick.stroke.color", "red")
  .attr("tick.stroke.width", "15")
  .attr("links.mouseout.fill.fillOpacity", .1)
  .attr("links.mouseover.stroke.dasharray", "2 2")
  .attr("links.mouseover.stroke.color", "blue")
  .attr("links.mouseover.stroke.width", "3")
  .attr("color", d3.scale.category10());
```

## Step 5: Render the New Chart
Now that it's configured properly, let's render it.

```javascript
chord2.render();
```

## Final Result

We should see something like this:

<svg id="ChordDiagram2" height="300" width="300"></svg>

<div class="alert alert-info" role="alert">
Again, we could have used chaining which is implicit in all dex
components to achieve this in a single line of code.
</div>

```javascript
var chord2 = dex.charts.d3.Chord(chord)
  .attr("parent", "#ChordDiagram2")
  .attr("tick.stroke.color", "red")
  .attr("tick.stroke.width", "15")
  .attr("links.mouseout.fill.fillOpacity", .1)
  .attr("links.mouseover.stroke.dasharray", "2 2")
  .attr("links.mouseover.stroke.color", "blue")
  .attr("links.mouseover.stroke.width", "3")
  .attr("color", d3.scale.category10())
  .render();
```

# Creating Charts From Data

Our last way to create charts is via JSON data itself.

## Step 1: Boilerplate

Ensure the boilerplate links/scripts are included.

```html
<!-- CSS -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.4/jquery-ui.theme.min.css">

<!-- Code --->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js"></script>
<script src="https://dexjs.net/js/dex.min.js"></script>
```

## Step 2: Define Parent Containers

```html
<div id="ParallelCoordinatesParent"></div>
<div id="ChordParent"></div>
```

## Step 3: Acquire Some Data

```javascript
  var csv = {} // define or load some data into csv.
```

## Step 4: Create the Chart Definition

Next we define the charts and desired interactions in JSON.

```javascript
var chartSpec = {
  "components": [
    {
      "name": "PC",
      "class": "dex.charts.d3.ParallelCoordinates",
      "config": {
        "parent": "#ParallelCoordinatesParent",
        "margin": {"top": 40, "bottom": 30, "left": 50, "right": 50},
        "csv": csv
      }
    },
    {
      "name": "Chord",
      "class": "dex.charts.d3.Chord",
      "config": {
        "parent": "#ChordParent",
        "margin": {"top": 100, "bottom": 100, "left": 100, "right": 100},
        "csv": csv
      }
    }
  ],
  "interactions": [{
    "sources": ["PC"],
    "destinations": ["Chord"],
    "event": "select",
    "action": "setSelected"
  }]
};
```

## Step 4: Render the Charts

```javascript
var charts = dex.render(chartSpec);
```

<div class="alert alert-info" role="alert">
We don't have to save the charts into an array of charts like we are doing in the
above code, but it's good practice.  You might need them later on.
</div>

## Final Result

From the above code we should see something like:

<div id="FromDataPCParent" style="display: inline;"></div>
<div id="FromDataChordParent" style="display: inline;"></div>

# Chart Communication

Charts in isolation are of limited interest, when charts communicate with one
another, they become much more interesting.

## Step 1: Boilerplate

```html
<!-- CSS -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.4/jquery-ui.theme.min.css">

<!-- Code --->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js"></script>
<script src="https://dexjs.net/js/dex.min.js"></script>
```

## Step 2: Define Parent Containers

Providing containers for two charts.

```html
<svg id="ChartTalk1" height=500 width=400 horiz-align="left"></svg>
<svg id="ChartTalk2" height=500 width=400 horiz-align="right"></svg>
```

## Step 3: Acquire Some Data

For brevity, I'll assume you mastered the various ways of acquiring data described
in the previous steps.

## Step 4: Configure the Charts

Configure and render the charts.  We'll pick a parallel coordinates chart
for the first one and a dendrogram for the second one.

We will also use a csv containing U.S. President names with Party and state affiliations.

```javascript
var pc1 = new dex.charts.d3.ParallelCoordinates({
  'parent' : "#ChartTalk1",
  'csv'    : presidents
});

var dendrogram = new dex.charts.d3.Dendrogram({
  'parent' : "#ChartTalk2",
  'csv'    : presidents,
  'node.expanded.label.font.size' : 8,
  'connection.length' : 100
});
```

## Step 5: Render the Charts

```javascript
pc1.render();
dendrogram.render();
```

## Step 6: Define the Interaction

Lastly, we will configure the dendrogram to listen or subscribe to
to brush selection events on the parallel coordinates visual.
The dendrogram sets it's data to only the selected subset of the
parallel coordinates.

```javascript
dendrogram.subscribe(pc1, "select", function (msg) {
  dendrogram.attr('csv', msg.selected).update();
});
```

## Final Result

When done, you should see something like:

<svg id="ChartTalk1" height=500 width=400 horiz-align="left"></svg>
<svg id="ChartTalk2" height=500 width=400 horiz-align="right"></svg>

# Final Thoughts

With a design where consistency, reusability and interoperability are first
class design concerns, I believe that it becomes easier to write
single-purpose chart components which gain the ability to interoperate
with other single-purpose charts.  I also believe that compositions of these
types of charts will also be superior.

<script>
  var csv = {
    header : [ 'Name', 'Gender' ],
    data   : [
      ['Todd', 'Male'],
      ['Mike', 'Male'],
      ['Jennifer', 'Female'],
      ['Patrick', 'Male']
    ]
  };
  
  var chord = new dex.charts.d3.Chord({
    'parent' : '#ChordDiagram',
    'csv'    : csv,
    'height' : 300,
    'width' : 300,
    'resizable' : false}).render();
  
  var chord2 = new dex.charts.d3.Chord(chord)
    .attr("parent", "#ChordDiagram2")
    .attr("tick.stroke.color", "red")
    .attr("tick.stroke.width", "15")
    .attr("links.mouseout.fill.fillOpacity", .1)
    .attr("links.mouseover.stroke.dasharray", "2 2")
    .attr("links.mouseover.stroke.color", "blue")
    .attr("links.mouseover.stroke.width", "3")
    .attr("color", d3.scale.category10())
    .render();
  
  d3.json("/data/presidents.json", function(error, presidentData) {
    var presidents = dex.csv.columnSlice(presidentData, [2, 3, 1]);
      
    var pc1 = new dex.charts.d3.ParallelCoordinates({
      'parent' : "#ChartTalk1",
      'csv'    : presidents
    }).render();
  
    var dendrogram = dex.charts.d3.Dendrogram({
      'parent' : "#ChartTalk2",
      'csv'    : presidents,
      'node.expanded.label.font.size' : 8,
      'connection.length' : 100
    });
    dendrogram.render();
  
    dendrogram.subscribe(pc1, "select", function (msg) {
      dendrogram.attr('csv', msg.selected).update();
    });
    
    var components = dex.render({
          "components": [
            {
              "name": "PC",
              "class": "dex.charts.d3.ParallelCoordinates",
              "config": {
                "width" : 400,
                "height" : 400,
                "resizable" : false,
                "parent": "#FromDataPCParent",
                "margin": {"top": 40, "bottom": 30, "left": 50, "right": 50},
                "csv": presidents
              }
            },
            {
              "name": "Chord",
              "class": "dex.charts.d3.Chord",
              "config": {
                "width" : 400,
                "height" : 400,
                "resizable" : false,
                "parent": "#FromDataChordParent",
                'margin': {'top': 100, 'bottom': 100, 'left': 100, 'right': 100},
                "csv": presidents
              }
            }
          ],
          "interactions": [{
            "sources": ["PC"],
            "destinations": ["Chord"],
            "event": "select",
            "action": "setSelected"
          }]
        });
  });
</script>