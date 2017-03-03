+++

date = "2017-01-02T13:09:16-05:00"
title = "Introducing the Treemap Bar Chart"
type = "post"

[params]
  css = ["css/TreemapBarChart.css"]

[menu.main]
  identifier = "posts"
+++

# Overview

Barcharts are one of the fundamental visualizations for making numerical
comparisons and discovering patterns in data while Treemaps are also
useful for making comparisons; particularly a with respect to a part's
magnitude relative to the whole.

The TreemapBarChart visualization synthesizes these two distinct visualizations
into one.

This article will cover the dex.js implementation of a Treemap BarChart
using the excellent [Zoomable Treemap Bar Chart](https://bl.ocks.org/cmgiven/4541f6de7b6fbef482aaa43f3a71f8d4)
written by Chris Given as an starting base.

## How it works

The TreemapBarChart provides draws a stacked bar chart based upon a matrix
with 5 dimensions.

These dimensions are:

Name     | Purpose
---------|--------
Color    | Used to color the rectangles within the stacked bar chart.
X        | A numerical quantity such as year which defines the outer most horizontal grouping along the x axis.
Category | A categorical dimension which defines a sub-grouping along the x axis.
Divider  | A categorical dimension used to further categorize and separate data within the matching Color, X, and Category dimensions.
Value    | The numerical value of the data.

When a rectangle delineated by the Color, X, Category and Divider dimensions is
selected via a mouse-click, the chart will filter out all rectangles not matching
the divider dimension across all the other dimensions.  In essesnse, it zooms into
a view of just the data which matches the selected divider dimension.

Here is an excerpt from a dataset of US crime data:

```javascript
var csv = {
  'header' : ["State","Crime","Type of Crime","Year","Count"],
  'data' : [
    ["Alabama","Murder and nonnegligent Manslaughter","Violent Crime","2000","329"],
    ["Alabama","Murder and nonnegligent Manslaughter","Violent Crime","2001","379"],
    ["Alabama","Murder and nonnegligent Manslaughter","Violent Crime","2002","303"],
    ["Alabama","Murder and nonnegligent Manslaughter","Violent Crime","2003","299"],
    ["Alabama","Murder and nonnegligent Manslaughter","Violent Crime","2004","254"],
    ["Alabama","Murder and nonnegligent Manslaughter","Violent Crime","2005","374"],
    ["Alabama","Forcible rape","Violent Crime","2000","1482"],
    ["Alabama","Forcible rape","Violent Crime","2001","1369"],
    ["Alabama","Forcible rape","Violent Crime","2002","1664"],
    // It goes on for miles...
    ["Wyoming","Motor vehicle theft","Property Crime","2000","573"],
    ["Wyoming","Motor vehicle theft","Property Crime","2001","696"],
    ["Wyoming","Motor vehicle theft","Property Crime","2002","743"],
    ["Wyoming","Motor vehicle theft","Property Crime","2003","798"],
    ["Wyoming","Motor vehicle theft","Property Crime","2004","799"],
    ["Wyoming","Motor vehicle theft","Property Crime","2005","739"]
  ]
};
```

By default, the chart assumes that the data comes in the order of:

DIMENSION | COLUMN
----------|-------
Divider   | 0
Color     | 1
Category  | 2
X         | 3
Value     | 4

However, this is user configurable as we will see later.

# Basic Usages

## A simple example

In this example, we're using:

DIMENSION | COLUMN | DATA
----------|--------|-----
Divider   | 0 | State
Color     | 1 | Crime
Category  | 2 | Type of Crime
X         | 3 | Year
Value     | 4 | Count

<svg id="TreemapBarChart" class="WideChart"></svg>

And the code:

<pre><code class="language-javascript">&lt;script&gt;
  var csv = // large crime csv here...
  var treemapBarChart = new dex.charts.d3.TreemapBarChart({
    'parent'      : '#TreemapBarChart',
    'csv' : csv
  });
  treemapBarChart.render();
&lt;/script&gt;</code></pre>

## Shuffling data

In this example, we'll shift some parameters to create an entirely different
view using:

DIMENSION | COLUMN | DATA
----------|--------|-----
Divider   | 1 | Crime
Color     | 0 | State
Category  | 2 | Type of Crime
X         | 3 | Year
Value     | 4 | Count

<svg id="ShuffledTreemapBarChart" class="WideChart"></svg>

Here's the code:

<pre><code class="language-javascript">&lt;script&gt;
  var shuffledTreemapBarChart = new dex.charts.d3.TreemapBarChart({
    'parent'      : '#ShuffledTreemapBarChart',
    'csv' : csv,
    'index.divider': 1,
    'index.color': 0
  });
  shuffledTreemapBarChart.render();
&lt;/script&gt;</code></pre>

## Styling

In this example we shuffle the data around again to create yet another
view into the same data.  This time we will have a categorical axis
with every state spread across each year.  In order to acommodate this
in limited horizontal space, we filter on years 2000, 2001, shrink the
font to 6 and lay the category labels out from top to bottom.

DIMENSION | COLUMN | DATA
----------|--------|-----
Divider   | 1 | Crime
Color     | 2 | Type of Crime
Category  | 0 | State
X         | 3 | Year
Value     | 4 | Count

<svg id="StyledTreemapBarChart" class="WideChart"></svg>

And the code:

<pre><code class="language-javascript">&lt;script&gt;
  var styledTreemapbarChart = new dex.charts.d3.TreemapBarChart({
      'parent'      : '#StyledTreemapBarChart',
      'csv' : dex.csv.selectRows(csv,
        function(row) { return row[3] == "2000" || row[3] == "2001" }),
      'categoryLabel.font.size' : 6,
      'categoryLabel.writingMode' : 'tb',
      'categoryLabel.anchor' : 'start',
      'categoryLabel.y' : 1,
      'index.divider': 1,
      'index.color': 2,
      'index.category': 0
    });
  styledTreemapbarChart.render();
&lt;/script&gt;</code></pre>

# Advanced Usage

As I often state, charts which operate in isolation are are limited
interest.

## Chart communication

In this example, as the name suggests, TalkingChart will talk and
ListeningChart will listen to it talk.  When the user clicks on
one of the rectangles of the top "talking" chart, the bottom "listening"
chart alters its dataset such that it only contains Crime data of the
selected type.

<svg id="TalkingChart" class="ShortWideChart"></svg>
<svg id="ListeningChart" class="ShortWideChart"></svg>

Here's the code behind it:

<pre><code class="language-javascript">&lt;script&gt;
  var talkingChart = new dex.charts.d3.TreemapBarChart({
    'parent'                  : '#TalkingChart',
    'categoryLabel.font.size' : 8,
    'categoryLabel.writingMode' : 'tb',
    'categoryLabel.anchor' : 'start',
    'xLabel.writingMode' : 'tb',
    'xLabel.anchor' : 'start',
    'margin.bottom' : 100,
    'csv'                     : csv
  });
  talkingChart.render();

  var listeningChart = new dex.charts.d3.TreemapBarChart({
    'parent'                  : '#ListeningChart',
    'categoryLabel.font.size' : 6,
    'categoryLabel.writingMode' : 'tb',
    'categoryLabel.anchor' : 'start',
    'categoryLabel.y' : 1,
    'index.divider': 0,
    'index.color': 0,
    'index.category': 1,
    'csv'               : csv
  });
  listeningChart.render();
  
  listeningChart.subscribe(talkingChart, "click", function (msg) {
    dex.console.log("listening chart", msg);
    listeningChart.attr('csv', dex.csv.selectRows(csv, function(row) {
    return row[1] == msg.selected.data.Crime;
    })).update();
  });
&lt;/script&gt;</code></pre>

# Caveats

Currently, TreemapBarChart is the first D3 v4 based dex.js charting component.
For now, due to the fact that you can't include both D3 v3 and D3 v4 in the
same page, it can't be combined on a page with the other charts.

However, this is temporary as I am working to port everything over to D3 v4
consistently.

# Conclusion

The Treemap Bar Chart is a powerful new way to visualize numerical
values across multiple categorical dimensions.  This is just the
beginning.  I will be evolving this component and your input is
greatly appreciated.

<script>

d3.json("/data/crime.json", function(error, csv) {

  var treemapBarChart = new dex.charts.d3.TreemapBarChart({
    'parent'           : '#TreemapBarChart',
    'categoryLabel.font.size' : 8,
    'csv'              : csv
  });
  treemapBarChart.render();

  var shuffledTreemapBarChart = new dex.charts.d3.TreemapBarChart({
    'parent'      : '#ShuffledTreemapBarChart',
    'csv' : csv,
    'categoryLabel.font.size' : 8,
    'index.divider': 1,
    'index.color': 0
  });
  shuffledTreemapBarChart.render();
  
  var styledTreemapbarChart = new dex.charts.d3.TreemapBarChart({
      'parent'      : '#StyledTreemapBarChart',
      'csv' : dex.csv.selectRows(csv,
        function(row) { return row[3] == "2000" || row[3] == "2001" }),
      'categoryLabel.font.size' : 6,
      'categoryLabel.writingMode' : 'tb',
      'categoryLabel.anchor' : 'start',
      'categoryLabel.y' : 1,
      'index.divider': 1,
      'index.color': 2,
      'index.category': 0
    });
  styledTreemapbarChart.render();
  
  var talkingChart = new dex.charts.d3.TreemapBarChart({
    'parent'                  : '#TalkingChart',
    'categoryLabel.font.size' : 8,
    'categoryLabel.writingMode' : 'tb',
    'categoryLabel.anchor' : 'start',
    'xLabel.writingMode' : 'tb',
    'xLabel.anchor' : 'start',
    'margin.bottom' : 100,
    'csv'                     : csv
  });
  talkingChart.render();

  var listeningChart = new dex.charts.d3.TreemapBarChart({
    'parent'                  : '#ListeningChart',
    'categoryLabel.font.size' : 6,
    'categoryLabel.writingMode' : 'tb',
    'categoryLabel.anchor' : 'start',
    'categoryLabel.y' : 1,
    'index.divider': 0,
    'index.color': 0,
    'index.category': 1,
    'csv'               : csv
  });
  listeningChart.render();
  
  listeningChart.subscribe(talkingChart, "click", function (msg) {
    dex.console.log("listening chart", msg);
    listeningChart.attr('csv', dex.csv.selectRows(csv, function(row) {
    return row[1] == msg.selected.data.Crime;
    })).update();
  });
});
</script>