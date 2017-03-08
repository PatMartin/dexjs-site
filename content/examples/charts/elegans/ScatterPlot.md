+++
date = "2016-12-28T02:38:25-05:00"
title = "dex.js Elegans ScatterPlot Examples"
[menu.main]
  identifier = "examples"

[params]
  scripts = [
    "https://cdnjs.cloudflare.com/ajax/libs/three.js/r71/three.min.js",
    "/js/elegans.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/ace/1.2.6/ace.js",
    "https://cdnjs.cloudflare.com/ajax/libs/ace/1.2.6/mode-javascript.js",
    "/js/ace-example.js"
  ]
  css = [ "/css/ace-example.css"]
+++

# Elegans ScatterPlot

Select from the interactive examples below:
<div class="btn-group">
  <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Select Example <span class="caret"></span>
  </button>
  <ul id="ex-dropdown" class="dropdown-menu">
    <li><a id="basic" href="#">Basic Example</a></li>
    <li><a id="splom" href="#">SPLOM</a></li>
  </ul>
</div>

<div id="ScatterPlot" class="WideChart"></div>
<div class="alert alert-danger" role="alert" id="ace-error"></div>

<div id="ace-editor"></div>

<script>
  var editor = createEditor({
    "parent"        : "ace-editor",
    "errorParent"   : "ace-error",
    "theme"         : "ace/theme/monokai",
    "mode"          : "ace/mode/javascript",
    "contentDir"    : "/examples/charts/elegans/scatterplot",
    "initialContent": "/examples/charts/elegans/scatterplot/basic.js"
  });
</script>