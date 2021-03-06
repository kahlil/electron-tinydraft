require('electron-debug')({showDevTools: true});
const ipc = require('electron').ipcMain;
const electron = require('electron');
const fromEvent = require('xstream/extra/fromEvent').default;
const createWindow = require('./app/util/create-window');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;
// Module to control application life.
const app = electron.app;
// Creat an xstream from ipc events on the 'reply'-channel.
const ipcReplyStream = fromEvent(ipc, 'reply');

const windowConfig = {
  width: 500,
  height: 600,
  titleBarStyle: 'hidden',
  // resizable: false,
};

// Send the ipc message from the editor window
// to the renderer process of mainWindow.
ipcReplyStream
  .map(m => m[1])
  .addListener({
    next: m => {
      mainWindow.webContents.send('messageFromMain', m);
    },
    error: err => console.log(err),
    complete: () => console.log('ipcReplyStream completed'),
  });

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', openWindow);
// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    openWindow();
  }
});

function openWindow() {
  mainWindow = createWindow(windowConfig);
  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
}
