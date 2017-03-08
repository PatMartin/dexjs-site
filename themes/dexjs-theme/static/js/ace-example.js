
function createEditor(options) {
  var editorParent = options.parent || "ace-editor";
  var errorParent = options.errorParent || "ace-error";
  var theme = options.theme || "ace/theme/monokai";
  var mode = options.mode || "ace/mode/javascript";
  var contentDir = options.contentDir || "/examples";

  var editor = ace.edit(editorParent);
  error = document.getElementById(errorParent);
  editor.setTheme(theme);
  editor.getSession().setMode(mode);

  // Load basic example by default
  if (options.initialContent) {
    $.get(options.initialContent, function (data) {
      editor.session.setValue(data);
      eval(editor.getValue());
    });
  }

  editor.on("change", function (e) {
    try {
      eval(editor.getValue());
      error.innerHTML = '';
    }
    catch (e) {
      error.innerHTML = e;
    }
  });

  $('#ex-dropdown a').on('click', function (evt) {
    $.get(contentDir + "/" + evt.currentTarget.id + ".js",
      function (data) {
        editor.session.setValue(data);
        eval(editor.getValue());
        $(".btn:first-child").text(evt.currentTarget.innerHTML);
        $(".btn:first-child").val(evt.currentTarget.innerHTML);
      });
  });

  return editor;
}