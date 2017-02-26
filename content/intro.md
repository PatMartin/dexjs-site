+++

date = "2016-12-28T02:38:25-05:00"
title = "dex.js Introduction"

d3plus = true
c3 = true
googlecharts = true
dygraph = true
visjs = true

[menu.main]
  identifier = "intro"
  
+++

## Introduction

dex.js is a javascript framework for data visualization which incorporates
a diverse set of visualizations from a diverse set of HTML5 technologies
such as D3 and WebGL and wraps them in a simple and consistent interface.

## Quick Start

### Creating A Chart

#### Step 1

Include the necessary scripts and stylesheets into your HTML page.  This is pretty much boilerplate.

<pre><code class="language-html">&lt;link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.css"&gt;
&lt;link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.4/jquery-ui.theme.min.css"&gt;
&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"&gt;&lt;/script&gt;
&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"&gt;&lt;/script&gt;
&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js"&gt;&lt;/script&gt;
&lt;script src="dex.js"&gt;&lt;/script&gt;</code></pre>

Dex requires jquery, jquery-ui, underscore and D3 at a minimum.

#### Step 2

Provide a container for the chart somewhere within the body of the html document; usually a div.

<pre><code class="language-html">&lt;div id="ChordDiagram"&gt;&lt;/div&gt;</code></pre>

#### Step 3

Next, provide some data.

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

#### Step 4

Configure the chart.

<pre><code class="language-javascript">  var chord = new dex.charts.d3.Chord({
    'parent' : '#ChordDiagram',
    'csv'    : csv
  });</code></pre>

#### Step 5

Render the chart.

<pre><code class="language-javascript">  chord.render();</code></pre>

You should see something like the following when you are through:

<div id="ChordDiagram" height="300" width="300"></div>

### Creating Charts from Charts

In dex.js you can construct new charts from existing charts.  This is useful
when you wish to construct a number of related charts; for instance when
providing some sort of chart-multiples visualization.

Ok, let's get started.  First, let's give it a container somewhere in our HTML document.

<pre><code class="language-html">&lt;svg id="ChordDiagram2" height="300" width="300"&gt;&lt;/svg&gt;</code></pre>

Then lets make a verbatim copy of the chart into chord2.

<pre><code class="language-javascript">var chord2 = new dex.charts.d3.Chord(chord);</code></pre>

Next, let's associate this chart with a distinct parent svg container and give
the chart it's own personality.

<pre><code class="language-javascript">chord2.attr("parent", "#ChordDiagram2")
  .attr("tick.stroke.color", "red")
  .attr("tick.stroke.width", "15")
  .attr("links.mouseout.fill.fillOpacity", .1)
  .attr("links.mouseover.stroke.dasharray", "2 2")
  .attr("links.mouseover.stroke.color", "blue")
  .attr("links.mouseover.stroke.width", "3")
  .attr("color", d3.scale.category10());</code></pre>

Now that it's configured properly, let's render it.

<pre><code class="language-javascript">chord2.render();</code></pre>

<svg id="ChordDiagram2" height="300" width="300"></svg>

alternately, we could have used chaining which is implicit in all dex
components to achieve this in a single line of code.

<pre><code class="language-javascript">var chord2 = new dex.charts.d3.Chord(chord)
  .attr("parent", "#ChordDiagram2")
  .attr("tick.stroke.color", "red")
  .attr("tick.stroke.width", "15")
  .attr("links.mouseout.fill.fillOpacity", .1)
  .attr("links.mouseover.stroke.dasharray", "2 2")
  .attr("links.mouseover.stroke.color", "blue")
  .attr("links.mouseover.stroke.width", "3")
  .attr("color", d3.scale.category10())
  .render();
</code></pre>

### Chart Communication

Charts in isolation are of limited interest, when charts communicate with one
another, they become much more interesting.

#### Step 1

Providing containers for two charts.

<pre><code class="language-html">&lt;svg id="ChartTalk1" height=500 width=400 horiz-align="left"&gt;&lt;/svg&gt;
&lt;svg id="ChartTalk2" height=500 width=400 horiz-align="right"&gt;&lt;/svg&gt;</pre></code>

### Step 2

Configure and render the charts.  We'll pick a parallel coordinates chart
for the first one and a dendrogram for the second one.

We will also use a csv containing U.S. President names with Party and state affiliations.

<pre><code class="language-javascript">var pc1 = new dex.charts.d3.ParallelCoordinates({
  'parent' : "#ChartTalk1",
  'csv'    : presidents
});
pc1.render();
  
var dendrogram = new dex.charts.d3.Dendrogram({
  'parent' : "#ChartTalk2",
  'csv'    : presidents,
  'node.expanded.label.font.size' : 8,
  'connection.length' : 100
});
dendrogram.render();</code></pre>

### Step 3

Lastly, we will configure the dendrogram to listen or subscribe to
to brush selection events on the parallel coordinates visual.
The dendrogram sets it's data to only the selected subset of the
parallel coordinates.

<pre><code class="language-javascript">dendrogram.subscribe(pc1, "select", function (msg) {
  dendrogram.attr('csv', msg.selected).update();
});</code></pre>

### Final Result

<svg id="ChartTalk1" height=500 width=400 horiz-align="left"></svg>
<svg id="ChartTalk2" height=500 width=400 horiz-align="right"></svg>

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
  
  var presidents = dex.csv.columnSlice({
      'header' : ["President", "Party", "Home State"],
      'data'   : [
        ["George Washington", "Independent", "Virginia"],
        ["John Adams", "Federalist", "Massachusetts"],
        ["Thomas Jefferson", "Dem-Rep", "Virginia"],
        ["James Madison", "Dem-Rep", "Virginia"],
        ["James Monroe", "Dem-Rep", "Virginia"],
        ["John Quincy Adams", "Dem-Rep/Nat-Rep", "Massachusetts"],
        ["Andrew Jackson", "Democratic", "Tennessee"],
        ["Martin Van Buren", "Democratic", "New York"],
        ["William Henry Harrison", "Whig", "Ohio"],
        ["John Tyler", "Whig", "Virginia"],
        ["James K. Polk", "Democratic", "Tennessee"],
        ["Zachary Taylor", "Whig", "Louisiana"],
        ["Millard Fillmore", "Whig", "New York"],
        ["Franklin Pierce", "Democratic", "New Hampshire"],
        ["James Buchanan", "Democratic", "Pennsylvania"],
        ["Abraham Lincoln", "Republican/Nat-Union", "Illinois"],
        ["Andrew Johnson", "Democratic/Nat-Union", "Tennessee"],
        ["Ulysses S. Grant", "Republican", "Ohio"],
        ["Rutherford B. Hayes", "Republican", "Ohio"],
        ["James A. Garfield", "Republican", "Ohio"],
        ["Chester A. Arthur", "Republican", "New York"],
        ["Grover Cleveland", "Democratic", "New York"],
        ["Benjamin Harrison", "Republican", "Indiana"],
        ["Grover Cleveland (2nd term)", "Democratic", "New York"],
        ["William McKinley", "Republican", "Ohio"],
        ["Theodore Roosevelt", "Republican", "New York"],
        ["William Howard Taft", "Republican", "Ohio"],
        ["Woodrow Wilson", "Democratic", "New Jersey"],
        ["Warren G. Harding", "Republican", "Ohio"],
        ["Calvin Coolidge", "Republican", "Massachusetts"],
        ["Herbert Hoover", "Republican", "Iowa"],
        ["Franklin D. Roosevelt", "Democratic", "New York"],
        ["Harry S. Truman", "Democratic", "Missouri"],
        ["Dwight D. Eisenhower", "Republican", "Texas"],
        ["John F. Kennedy", "Democratic", "Massachusetts"],
        ["Lyndon B. Johnson", "Democratic", "Texas"],
        ["Richard Nixon", "Republican", "California"],
        ["Gerald Ford", "Republican", "Michigan"],
        ["Jimmy Carter", "Democratic", "Georgia"],
        ["Ronald Reagan", "Republican", "California"],
        ["George H. W. Bush", "Republican", "Texas"],
        ["Bill Clinton", "Democratic", "Arkansas"],
        ["George W. Bush", "Republican", "Texas"],
        ["Barack Obama", "Democratic", "Illinois"]
      ]
    }, [1, 2, 0]);
  
  var chord = new dex.charts.d3.Chord({
    'parent' : '#ChordDiagram',
    'csv'    : csv});
  chord.render();
  
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
    
  var pc1 = new dex.charts.d3.ParallelCoordinates({
    'parent' : "#ChartTalk1",
    'csv'    : presidents
  });
  pc1.render();
  
  var dendrogram = new dex.charts.d3.Dendrogram({
    'parent' : "#ChartTalk2",
    'csv'    : presidents,
    'node.expanded.label.font.size' : 8,
    'connection.length' : 100
  });
  dendrogram.render();
  
  dendrogram.subscribe(pc1, "select", function (msg) {
      dendrogram.attr('csv', msg.selected).update();
  });
</script>

## Final Thoughts

With a design where consistency, reusability and interoperability are first
class design concerns; it becomes easier to write single-purpose chart
components which gain the ability to interoperate with other single-purpose
charts.

Here are a few example benefits of this approach:

  * Chart implementations no longer have to focus on things
   such as legend implementation.  Instead, legends can be
   first class components in their own right.  Legends, in turn
   become reusable.
  * Specialized chart implementations such as Motion Charts become
  unnecessary.  Instead, dex offers a data player which allows all
  charts to become motion charts with very little effort.