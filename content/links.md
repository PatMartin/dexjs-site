+++
date = "2016-12-28T13:37:53-05:00"
title = "about"
[menu.main]
  identifier = "about"
+++

# About dex.js

dex.js was primarily developed to provide visualization support for
it's parent project [Dex](https://dexvis.net).  Dex is a much larger
 effort which provides a GUI for creating, transforming, outputting
 and visualizing data while dex.js provides some of the visualization
 capabilities and is a pretty solid offering in its own right.

## Design Philosophy

dex.js is designed to provide a framework for the unification of a wide
 variety of different other javascript visualization frameworks in a way
 that allows for consistent usage and reuse; in particular for other tools
 such as Dex which require easily consumable visualization capabilities.
 
While it is not possible to hide and abstract away all the differences of
the many disparate frameworks consumed by Dex, in general it does a pretty
good job.

### Consistency

All charts are expressed as consistently as possible.  Underlying differences 
are, in general, handled by the charting framework itself.

#### Consistent Data

Each an every dex.js visualization expects a JSON form of CSV.  This allows 
us to easily interchange charts and also allows them to communicate data
changes to each other in a very consistent fashion.

Here is an example JSON/CSV representation:

```json
var csv = {
  "header" : [ "NAME", "AGE", "GENDER"],
  "data" : [
    [ "Bob", 42, "Male"],
    [ "Alice", 25, "Female"]
  ]
};
```

##### Why CSV?

  * CSV is common and well understood.
  * CSV is succinct and generates a smaller memory footprint which is important for browser based visualization.
  * CSV is a great representation of tabular data stored in RDBMS.
  * It is generally simple to translate both to and from other opinionated data formats.

#### Configuration

The common aspects of charts are handled in a common way.  For example, here is
an example of two very different charts whose use is normalized when using dex.

```javascript
var barchart = dex.charts.c3.BarChart({
  "parent" : "#BarChartParent",
  "csv" : csv
});

var pcChart = dex.charts.d3.ParallelCoordinates({
  "parent" : "#PCChartParent",
  "csv" : csv
});
```

### Ease of use

Since all of the charts are expressed with a high degree of consistency,
 this translates into a much lower learning curve.

### Data Driven

All charts can be created from generic JSON data specifications.

### Embeddable

Charts are designed to be embeddable into other tools.  Dex, for instance
is a Java framework which is able to communicate back and forth with dex.js
components.

# Credits

This is my favorite part; giving credit to the myriad of folks who have
influenced and inspired me.

They deserve credit where credit is due.  Any omission is certainly
inadvertant.



  * [Mike Bostock](https://bost.ocks.org/mike/) - For opening my eyes
  into the untapped potential of data visualization.  I truly think
  Mike is a genius and his inspiration to me cannot be understated.
  Mike's contributions to data visualization are IMHO, as substantial
  as anyone on the planet.  You can see the ramifications of his work
  throughout the web and throughout so many of the visualization tools
  on the market today.  If I owe the folks in this list a or pitcher
  of beer for their efforts then I owe Mike at least a few kegs of the
  finest ale.
  * [Jeffery Heer](https://homes.cs.washington.edu/~jheer/) - For opening
  Mike's eyes into the untapped potential of data visualization and for
  his pioneering visualization frameworks such as Prefuse.
  * [Elijah Meeks](https://bl.ocks.org/emeeks) - For his many interesting
  examples and for [D3.js in Action](https://www.manning.com/books/d3-js-in-action).
  * [Micah Stubs](http://bl.ocks.org/micahstubbs/) - For his many examples, and
  for allowing me to use them.
  * [James Curley](http://jalapic.github.io/) - Author of the bump chart
  implementation I lifted.  James is a Psychology Professor who is also
  a really talented designer and coder of data visualizations.