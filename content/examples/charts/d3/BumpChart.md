+++
date = "2016-12-28T02:38:25-05:00"
title = "dex.js D3 Bump Chart Examples"
[menu.main]
  identifier = "examples"

[params]
  scripts = [
    "https://cdnjs.cloudflare.com/ajax/libs/c3/0.4.10/c3.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/ace/1.2.6/ace.js",
    "https://cdnjs.cloudflare.com/ajax/libs/ace/1.2.6/mode-javascript.js",
    "/js/ace-example.js"
  ]
  css = [ "/css/ace-example.css" ]
+++

# D3 Bump Chart

Select from the interactive examples below:
<div class="btn-group">
  <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Select Example <span class="caret"></span>
  </button>
  <ul id="ex-dropdown" class="dropdown-menu">
    <li><a id="basic" href="#">Basic Example</a></li>
  </ul>
</div>

<div id="BumpChart"></div>
<div class="alert alert-danger" role="alert" id="ace-error"></div>
<div id="ace-editor"></div>

<script>
  var editor = createEditor({
    "parent"        : "ace-editor",
    "errorParent"   : "ace-error",
    "theme"         : "ace/theme/monokai",
    "mode"          : "ace/mode/javascript",
    "contentDir"    : "/examples/charts/d3/bumpchart",
    "initialContent": "/examples/charts/d3/bumpchart/basic.js"
  });
</script>

## Overview

A Bump Chart is used to compare two discrete and distinct dimensions against
each other.  For example, they are useful for exploring the rank of a value
over a time dimension such as team ranking over the weeks of a season.

Bump Charts are similar to Parallel Coordinates.

## Options

| OPTION    | DEFAULT VALUE | DESCRIPTION |
|-----------|---------------|-------------|
| parent    | #BumpChartParent | A selector pointing to the div container of the chart. |
| id        | BumpChartId | The identifier for this chart. |
| class     | BumpChartClass | The class for this chart. |
| height    | 100% | The height, expressed in absolute pixels, or as a percentage of the parent container. |
| width     | 100% | The width, expressed in absolute pixels, or as a percentage of the parent container. |
| resizable | true | When true, the chart will resize itself to fit the parent container.  When false, it will remain at the specified height and width. |
| csv       |      | The CSV data for this chart.  The chart expects a CSV consisting of a category, a sequence and a ranking column. |
| margin    |      | The margins for this chart. |
| margin.left | 140 | The left margin for this chart. |
| margin.right | 160 | The right margin for this chart. |
| margin.top | 50 | The top margin for this chart. |
| margin.bottom | 50 | The bottom margin for this chart. |
| transform | | An SVG transform to be applied to this chart. |
| color | d3.scale.category10() | A color scheme for this chart. |
| format | d3.format("d") | A format to be applied to the tick labels. |
| xAxisLabel | | The configuration for the x-axis label. |
| xAxisLabel.text | "X AxisTitle" | The title of the x axis. |
| xAxisLabel.x | | The x location of the X axis label. |
| xAxisLabel.y | | The y location of the X axis label. |
| xAxisLabel.font.size | 32px | The size of the X axis label. |
| xAxis |