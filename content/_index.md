+++
title = "dex.js : javascript data visualization"
date = "2016-12-29T03:56:37-05:00"

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

# dex.js

dex.js is a visualization framework built for the modern web.  dex.js provides
a common reusable framework for achieving effective interactive data
visualizations using a simple and consistent interface.

dex.js unifies a number of charts from other frameworks and offers a few
unique variants of it's own and allows them to safely interoperate within
a single web page.

dex.js is a foundation project for [Dex](https://dexvis.net).  Dex is a ETL and Data
Visualization application which allows users to produce sophisticated analytics
and visualizations without the need for programming.

## Examples

[![Data Visualization Examples](/images/home/blocks.png)](https://bl.ocks.org/PatMartin)

# Design Goals

## Easy to use

Charts should be easy to use.  This is best achieved through simplicity
and consistency.

### Consistent Usage

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

### Consistent Data Representation

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

## Interactive

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

## Flexible

dex.js exposes the underlying configuration of charts in a number of ways:

  1. Through named configuration parameters.
  2. Though a dynamic programmable styling.  All elements under the parent
  container are exposed for configuration and styling.
  3. Through traditional CSS styling.

## Designed to be Embedded

One unique feature of dex.js charts is that they are designed to be
embedded into other tools; making it an ideal framework for data
visualization for my Java based data visualization tool
[Dex](https://dexvis.net).  This is actually **why** dex.js was written
in the first place.

### GUI Specification

Each chart is capable of communicating it's configuration interface as a
JSON object via:

```javascript
chart.getGuiDefinition();
```

This definition communicates the aspects of the chart which are available
for configuration.  Information around how this GUI definition can be used
to drive GUIs in other language can be found the blog article
["Data Driven UI"](https://dexvis.net/posts/DataDrivenUI.html)

### Chart Configuration

The attr function is available for manipulating these
settings:

```javascript
chart.attr("height", 400); // Set chart height to 400 pixels
var height = chart.attr("height"); // Get current chart height
var config = chart.attr(); // Get chart configuration
```

### Chart Persistence

A chart may save it's configuration to a DOM element within the page:

```javascript
chart.save();
```

Behind the scenes, a div element named "dexjs-config" is created with
hidden visibility.  The configuration is dumped into this structure.

A chart may load it's configuration from the page via:

```javascript
chart.load();
```

This routine will load the contents of "dexjs-config" into the chart's
configuration.