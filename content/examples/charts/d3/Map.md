+++
date = "2016-12-28T02:38:25-05:00"
title = "dex.js D3 Map"
[menu.main]
  identifier = "examples"

[params]
  scripts = [
    "https://cdnjs.cloudflare.com/ajax/libs/ace/1.2.6/ace.js",
    "https://cdnjs.cloudflare.com/ajax/libs/ace/1.2.6/mode-javascript.js",
    "/js/ace-example.js",
    "https://cdnjs.cloudflare.com/ajax/libs/topojson/1.6.19/topojson.min.js"
  ]
  css = [ "/css/ace-example.css" ]
+++

# D3 Maps

Select from the interactive examples below:
<div class="btn-group">
  <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Select Example <span class="caret"></span>
  </button>
  <ul id="ex-dropdown" class="dropdown-menu">
    <li><a id="us_states" href="#">US State Map</a></li>
    <li><a id="us_counties" href="#">US County Map</a></li>
  </ul>
</div>

<div id="example-info"></div>
<div id="Map" class="WideChart"></div>
<div id="ace-editor"></div>
<div id="ace-error"></div>

<script>
  var editor = createEditor({
    "parent"        : "ace-editor",
    "errorParent"   : "ace-error",
    "theme"         : "ace/theme/monokai",
    "mode"          : "ace/mode/javascript",
    "contentDir"    : "/examples/charts/d3/map",
    "initialContent": "/examples/charts/d3/map/us_states.js",
    "initialInfo"   : "/examples/charts/d3/map/us_states.html"
  });
</script>