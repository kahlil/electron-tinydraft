// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

// require('./app-build');

const path = require('path');
const ipc = require('electron').ipcRenderer;
const fromEvent = require('xstream/extra/fromEvent').default;
const R = require('ramda');
const openEditor = require('./app/util/open-editor');

const curriedOpenEditor = R.curry(openEditor);
const modalPath = path.join('file://', __dirname, 'editor.html');
const ipcMainStream = fromEvent(ipc, 'messageFromMain');
const openEditorClickStream = fromEvent(document.getElementById('manage-window'), 'click')
  .map(() => 'Open editor clicked.');

openEditorClickStream.addListener({
  next: curriedOpenEditor(modalPath),
  error: err => console.log(err),
  complete: () => console.log('Open editor click stream completed.'),
});

ipcMainStream
  .map(m => m[1])
  .addListener({
    next: e => console.log(e),
    error: err => console.log(err),
    complete: () => console.log('ipc main stream completed.'),
  });
