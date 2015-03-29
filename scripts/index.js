'use strict';

import TranspiledPane from './transpiled-pane';
import OutputPane from './output-pane';
import Editor from './editor';

let output = new OutputPane('output');
let errors = new OutputPane('errors');
let transpiled = new TranspiledPane('transpiled');
new Editor(output, errors, transpiled);
