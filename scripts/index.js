(function () {
  'use strict';

  var babel = require('babel');
  var ace = require('brace');
  require('brace/mode/javascript');
  require('brace/theme/monokai');
  require('brace/keybinding/vim');
  require('brace/ext/settings_menu');

  var editor = ace.edit('editor');
  window.editor = editor;
  editor.getSession().setMode('ace/mode/javascript');
  editor.setTheme('ace/theme/monokai');
  editor.setKeyboardHandler('ace/keyboard/vim');
  editor.focus();

  editor.commands.addCommands([{
    name: 'execute',
    bindKey: 'ctrl+enter',
    exec: function (editor) {
      try {
        /* jshint evil: true */
        var transpiledCode = babel.transform(editor.getSession().getValue()).code;
        window.console.log(transpiledCode);
        eval(transpiledCode);
      } catch (e) {
        window.console.log(e);
      }
    },
    readOnly: true
  }]);
}());
