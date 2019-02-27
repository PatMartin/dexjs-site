
function createEditor(options) {
  var editorParent = options.parent || "ace-editor";
  var errorParent = options.errorParent || "ace-error";
  var infoParent = options.infoParent || "example-info";

  var theme = options.theme || "ace/theme/monokai";
  var mode = options.mode || "ace/mode/javascript";
  var contentDir = options.contentDir || "/examples";

  var editor = ace.edit(editorParent);
  var error = document.getElementById(errorParent);
  var info = document.getElementById(infoParent);

  editor.setTheme(theme);
  editor.getSession().setMode(mode);

  // Load documentation if available
  if (options.initialInfo) {
    $.get(options.initialInfo, function(data) {
      info.innerHTML = data;
    });
  }

  // Load basic example by default
  if (options.initialContent) {
    $.get(options.initialContent, function (data) {
      editor.session.setValue(data);
      editor.update();
    });
  }

  // Respond to editor changes every 3 seconds.
  editor.update = _.debounce(function() {
    try {
      if (typeof(prepareUpdate) === "function") {
        prepareUpdate();
      }
      eval(editor.getValue());
    }
    catch (e) {
      error.innerHTML = "<div class='bs-callout bs-callout-danger'><h4>Error:</h4>"  + e + "</div>";
    }
  }, 1000);

  editor.on("change", function (e) {
      editor.update();
      error.innerHTML = '';
  });

  $('#ex-dropdown a').on('click', function (evt) {
    // Set the editor content
    $.get(contentDir + "/" + evt.currentTarget.id + ".js",
      function (data) {
        editor.session.setValue(data);
        editor.update();
        $(".btn:first-child").text(evt.currentTarget.innerHTML);
        $(".btn:first-child").val(evt.currentTarget.innerHTML);
      });

    // Set the documentation that goes with the example
    $.get(contentDir + "/" + evt.currentTarget.id + ".html",
      function (data) {
        info.innerHTML = data;
      });
  });

  return editor;
}