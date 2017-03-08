+++
date = "2016-12-28T02:38:25-05:00"
title = "dex.js NVD3 Bubble Chart Examples"
[menu.main]
  identifier = "examples"

[params]
  scripts = [
    "https://cdnjs.cloudflare.com/ajax/libs/Faker/3.1.0/faker.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/nvd3/1.8.5/nv.d3.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/ace/1.2.6/ace.js",
    "https://cdnjs.cloudflare.com/ajax/libs/ace/1.2.6/mode-javascript.js",
    "/js/ace-example.js"
  ]
  css = [ "/css/ace-example.css", "https://cdnjs.cloudflare.com/ajax/libs/nvd3/1.8.5/nv.d3.min.css"]
+++

# NVD3 Bubble Chart

Select from the interactive examples below:
<div class="btn-group">
  <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Select Example <span class="caret"></span>
  </button>
  <ul id="ex-dropdown" class="dropdown-menu">
    <li><a id="basic" href="#">Basic Example</a></li>
    <li><a id="sales" href="#">Sales Data</a></li>
    <li><a id="sincos" href="#">Sin/Cos Data</a></li>
  </ul>
</div>

<div class="alert alert-danger" role="alert" id="ace-error"></div>

<div id="BubbleChart" class="WideChart"></div>
<div id="ace-editor"></div>

<script>
  var editor = createEditor({
    "parent"        : "ace-editor",
    "errorParent"   : "ace-error",
    "theme"         : "ace/theme/monokai",
    "mode"          : "ace/mode/javascript",
    "contentDir"    : "/examples/charts/nvd3/bubblechart",
    "initialContent": "/examples/charts/nvd3/bubblechart/basic.js"
  });
</script>