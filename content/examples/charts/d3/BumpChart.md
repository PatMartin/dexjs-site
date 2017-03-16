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
    <li><a id="gdp" href="#">GDP Rankings</a></li>
    <li><a id="universities" href="#">Universities</a></li>
    <li><a id="loud" href="#">Loud and Proud</a></li>
  </ul>
</div>

<div id="BumpChart" class="WideChart"></div>
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

  * [BumpChart Reference](/docs/chart_reference.html#bumpchart)

A Bump Chart is used to compare two discrete and distinct dimensions against
each other.  For example, they are useful for exploring the rank of a value
over a time dimension such as team ranking over the weeks of a season.

Bump Charts are similar to Parallel Coordinates only that they are a more
constrained interpretation.  The initial y-axis
locations of the categorical elements (For example, NFL teams) are ordered typically by descending
rank as one moves from the top to bottom axis vertically.  As the path
of the category moves from left to right through a typically ascending
sequence (typically time), the y-axis location changes according to the
rank of that categorical entry at that particular point in the sequence
(typically a point in time such as Week 1 of the NFL season).

If a category's line has a downward slope, that category is falling in rank
(ex: The NFL team moved down in the rankings).
If the category's line has an ascending slope, that category is increasing
in rank (The NFL team moved up in the rankings). If the category's line
is horizontal, that category is unchanging in rank (ie: the NFL team stayed
the same in the rankings).

Trust me, the bumpchart is easy to understand visually.  Technically correct
descriptions always make things sound more complex than they really are.
If you don't believe me, pick up any math textbook on the planet.
