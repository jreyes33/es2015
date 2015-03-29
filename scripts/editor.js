import ace from 'brace';
import 'babel/polyfill';
import * as babel from 'babel';
import 'brace/mode/javascript';
import 'brace/theme/monokai';
import 'brace/keybinding/vim';
import examples from './examples/all';

export default class Editor {
  constructor(output, errors, transpiled) {
    this.output = output;
    this.errors = errors;
    this.transpiled = transpiled;
    this.aceEditor = ace.edit('editor');
    this.aceEditor.getSession().setMode('ace/mode/javascript');
    this.aceEditor.getSession().setTabSize(2);
    this.aceEditor.setKeyboardHandler('ace/keyboard/vim');
    this.aceEditor.setTheme('ace/theme/monokai');
    this.exampleIndex = 0;
    this.loadExample(this.exampleIndex);
    this.aceEditor.commands.addCommands([{
      name: 'run',
      bindKey: 'ctrl+enter',
      readOnly: true,
      exec: this.run.bind(this)
    }]);
    document.getElementById('run').onclick = this.run.bind(this);
    document.getElementById('next').onclick = () => this.loadExample(++this.exampleIndex);
    document.getElementById('prev').onclick = () => this.loadExample(--this.exampleIndex);
  }

  loadExample(index) {
    let exampleNames = Object.keys(examples);
    let exampleIndex = index % exampleNames.length;
    exampleIndex = exampleIndex < 0 ? exampleNames.length + exampleIndex : exampleIndex;
    let exampleName = exampleNames[exampleIndex];
    this.aceEditor.setValue(examples[exampleName]);
    this.aceEditor.clearSelection();
    this.aceEditor.focus();
    this.errors.hide();
    this.output.empty();
    this.output.show();
    this.transpiled.empty();
  }

  // http://stackoverflow.com/a/20256786
  evaluate(code) {
    let oldConsoleLog = window.console.log;
    window.console.log = function (message) {
      let content = typeof message === 'object' ? window.JSON.stringify(message) : message;
      this.output.append(content + '<br>');
    }.bind(this);
    /* jshint evil: true */
    eval(code);
    window.console.log = oldConsoleLog;
  }

  run() {
    try {
      let transpiledCode = babel.transform(this.aceEditor.getValue(), {experimental: true}).code;
      this.errors.hide();
      this.output.show();
      this.transpiled.setContent(transpiledCode);
      this.output.empty();
      this.evaluate(transpiledCode);
    } catch (err) {
      this.output.hide();
      this.errors.show();
      this.errors.setContent(err);
      this.transpiled.empty();
    }
  }
}
