+++
date = "2016-12-28T02:38:25-05:00"
title = "dex.js ECharts Heat Map Examples"
[menu.main]
  identifier = "examples"

[params]
  scripts = [
    "https://cdnjs.cloudflare.com/ajax/libs/echarts/3.6.2/echarts.js",
    "https://cdnjs.cloudflare.com/ajax/libs/ace/1.2.6/ace.js",
    "https://cdnjs.cloudflare.com/ajax/libs/ace/1.2.6/mode-javascript.js",
    "https://cdnjs.cloudflare.com/ajax/libs/Faker/3.1.0/faker.min.js",
    "/js/ace-example.js"
  ]
  css = [ "/css/ace-example.css" ]
+++

<style>
  #Chart {
    display: inline-block !important;
    max-height: 100% !important;
    max-width: 100% !important;
    width: 100% !important;
    height: 100% !important;
  }
</style>

# ECharts Heat Map

Select from the interactive examples below:
<div class="btn-group">
  <button type="button" class="btn btn-default dropdown-toggle"
  data-toggle="dropdown" aria-haspopup="true"
  aria-expanded="false">Select Example <span class="caret"></span>
  </button>
  <ul id="ex-dropdown" class="dropdown-menu">
    <li><a id="basic" href="#">Basic Example</a></li>
    <li><a id="equations" href="#">Equations</a></li>
    <li><a id="alt_colormap" href="#">Alternate Colormaps</a></li>
  </ul>
</div>

<div id="example-info"></div>
<div id="layout-container" class="WideChart">
  <div class="ui-layout-center">
    <div id="Chart"></div>
  </div>
  <div class="ui-layout-west">
    <div id="ConfigurationPane"></div>
  </div>
</div>

<div id="ace-editor"></div>
<div id="ace-error"></div>

<script>
  var chart;

  var editor = createEditor({
    "parent"        : "ace-editor",
    "errorParent"   : "ace-error",
    "theme"         : "ace/theme/monokai",
    "mode"          : "ace/mode/javascript",
    "contentDir"    : "/examples/charts/echarts/heatmap",
    "initialContent": "/examples/charts/echarts/heatmap/basic.js",
    "initialInfo"   : "/examples/charts/echarts/heatmap/basic.html"
  });

  $(document).ready(function () {
    $('#layout-container').layout({
      applyDemoStyles: false,
      west: {
        size: 335
      },
      onresize: function () {
        chart.render();
      }
    });
  });
</script>