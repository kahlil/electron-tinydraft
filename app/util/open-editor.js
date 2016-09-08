const BrowserWindow = require('electron').remote.BrowserWindow;

module.exports = function openEditor(file, payload) {
  let win = new BrowserWindow({width: 400, height: 275});
  win.webContents.on('did-finish-load', () => win.webContents.send('message', payload));
  win.on('close', () => {
    win = null;
  });
  win.loadURL(file);
  win.show();
};
