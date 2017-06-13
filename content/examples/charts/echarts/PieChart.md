+++
date = "2016-12-28T02:38:25-05:00"
title = "dex.js ECharts Pie Chart Examples"
[menu.main]
  identifier = "examples"

[params]
  scripts = [
    "https://cdnjs.cloudflare.com/ajax/libs/echarts/3.6.1/echarts.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/ace/1.2.6/ace.js",
    "https://cdnjs.cloudflare.com/ajax/libs/ace/1.2.6/mode-javascript.js",
    "/js/ace-example.js",
  ]
  css = [ "/css/ace-example.css" ]
+++

# ECharts Pie Chart

Select from the interactive examples below:
<div class="btn-group">
  <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Select Example <span class="caret"></span>
  </button>
  <ul id="ex-dropdown" class="dropdown-menu">
    <li><a id="basic" href="#">Basic Example</a></li>
  </ul>
</div>

<div id="example-info"></div>
<div id="PieChart" class="WideChart"></div>
<div id="ace-editor"></div>
<div id="ace-error"></div>

<script>
  var editor = createEditor({
    "parent"        : "ace-editor",
    "errorParent"   : "ace-error",
    "theme"         : "ace/theme/monokai",
    "mode"          : "ace/mode/javascript",
    "contentDir"    : "/examples/charts/echarts/piechart",
    "initialContent": "/examples/charts/echarts/piechart/basic.js",
    "initialInfo"   : "/examples/charts/echarts/piechart/basic.html"
  });
</script>