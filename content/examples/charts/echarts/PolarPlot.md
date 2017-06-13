+++
date = "2016-12-28T02:38:25-05:00"
title = "dex.js ECharts Polar Plot Examples"
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
    <li><a id="linechart" href="#">Line Chart</a></li>
    <li><a id="barchart" href="#">Bar Chart</a></li>
    <li><a id="scatterplot" href="#">Scatter Plot</a></li>
    <li><a id="cat_scatterplot" href="#">Categorical Scatter Plot</a></li>
  </ul>
</div>

<div id="example-info"></div>
<div id="PolarPlot" class="WideChart"></div>
<div id="ace-editor"></div>
<div id="ace-error"></div>

<script>
  var editor = createEditor({
    "parent"        : "ace-editor",
    "errorParent"   : "ace-error",
    "theme"         : "ace/theme/monokai",
    "mode"          : "ace/mode/javascript",
    "contentDir"    : "/examples/charts/echarts/polarplot",
    "initialContent": "/examples/charts/echarts/polarplot/basic.js",
    "initialInfo"   : "/examples/charts/echarts/polarplot/basic.html"
  });
</script>