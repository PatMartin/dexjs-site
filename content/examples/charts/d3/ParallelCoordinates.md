+++
date = "2016-12-28T02:38:25-05:00"
title = "dex.js D3 Parallel Coordinates Examples"
[menu.main]
  identifier = "examples"

[params]
  scripts = [
    "https://cdnjs.cloudflare.com/ajax/libs/ace/1.2.6/ace.js",
    "https://cdnjs.cloudflare.com/ajax/libs/ace/1.2.6/mode-javascript.js",
    "/js/ace-example.js"
  ]
  css = [ "/css/ace-example.css" ]
+++

# D3 Parallel Coordinates

Select from the interactive examples below:
<div class="btn-group">
  <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Select Example <span class="caret"></span>
  </button>
  <ul id="ex-dropdown" class="dropdown-menu">
    <li><a id="basic" href="#">Basic Example</a></li>
    <li><a id="presidents" href="#">Presidents</a></li>
    <li><a id="marital-status" href="#">Marital Status</a></li>
  </ul>
</div>

<div id="example-info"></div>
<div id="ParallelCoordinates" class="WideChart"></div>
<div id="ace-editor"></div>
<div id="ace-error"></div>

<script>
  var editor = createEditor({
    "parent"        : "ace-editor",
    "errorParent"   : "ace-error",
    "theme"         : "ace/theme/monokai",
    "mode"          : "ace/mode/javascript",
    "contentDir"    : "/examples/charts/d3/parallelcoordinates",
    "initialContent": "/examples/charts/d3/parallelcoordinates/basic.js",
    "initialInfo"   : "/examples/charts/d3/parallelcoordinates/basic.html"
  });
</script>