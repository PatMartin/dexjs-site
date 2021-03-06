+++
date = "2016-12-28T02:38:25-05:00"
title = "dex.js Configuration Pane Examples"
[menu.main]
  identifier = "examples"

[params]
  scripts = [
    "https://cdnjs.cloudflare.com/ajax/libs/c3/0.4.10/c3.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/echarts/3.6.1/echarts.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/ace/1.2.6/ace.js",
    "https://cdnjs.cloudflare.com/ajax/libs/ace/1.2.6/mode-javascript.js",
    "/js/ace-example.js"
  ]
  css = [ "/css/ace-example.css",
          "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" ]
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

# Configuration Pane

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

  $(document).ready(function () {

    $('#layout-container').layout({
      applyDemoStyles: false,
      west: {
        size: 360
      },
      onresize: function () {
        chart.resize();
      }
    });

    var editor = createEditor({
      "parent"        : "ace-editor",
      "errorParent"   : "ace-error",
      "theme"         : "ace/theme/monokai",
      "mode"          : "ace/mode/javascript",
      "contentDir"    : "/examples/ui/configpane",
      "initialContent": "/examples/ui/configpane/basic.js",
      "initialInfo"   : "/examples/ui/configpane/basic.html"
    });
  });
</script>