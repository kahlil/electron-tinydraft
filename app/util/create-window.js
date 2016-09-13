const path = require('path');
const BrowserWindow = require('electron').BrowserWindow;

// The createWindow callback used above to open the main window.
module.exports = function createWindow(config) {
  // Create the browser window.
  const bWindow = new BrowserWindow(config);
  const filePath = path.join('file://', process.cwd(), 'index.html');
  // and load the index.html of the app.
  bWindow.loadURL(filePath);
  // Open the DevTools.
  bWindow.webContents.openDevTools();

  return bWindow;
};
