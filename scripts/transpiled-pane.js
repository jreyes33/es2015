import ace from 'brace';
import 'brace/mode/javascript';
import 'brace/theme/solarized_light';

export default class TranspiledPane {
  constructor(id) {
    this.aceEditor = ace.edit(id);
    this.aceEditor.getSession().setMode('ace/mode/javascript');
    this.aceEditor.getSession().setOption('useWorker', false);
    this.aceEditor.getSession().setTabSize(2);
    this.aceEditor.setTheme('ace/theme/solarized_light');
    this.aceEditor.renderer.setShowGutter(false);
    this.aceEditor.setHighlightActiveLine(false);
    this.aceEditor.setHighlightGutterLine(false);
    this.aceEditor.setShowPrintMargin(false);
    this.aceEditor.setReadOnly(true);
  }

  setContent(content) {
    this.aceEditor.setValue(content);
    this.aceEditor.moveCursorToPosition({row: 0, col: 0});
  }

  empty() {
    this.setContent('');
  }
}
