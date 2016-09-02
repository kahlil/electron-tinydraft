// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

// require('./app-build');

const BrowserWindow = require('electron').remote.BrowserWindow
const path = require('path')

const manageWindowBtn = document.getElementById('manage-window')

manageWindowBtn.addEventListener('click', function (event) {
  const modalPath = path.join('file://', __dirname, 'editor.html')
  let win = new BrowserWindow({ width: 400, height: 275 })

  win.on('resize', updateReply)
  win.on('move', updateReply)
  win.on('close', function () { win = null })
  win.loadURL(modalPath)
  win.show()

  function updateReply () {
    const manageWindowReply = document.getElementById('manage-window-reply')
    const message = `Size: ${win.getSize()} Position: ${win.getPosition()}`

    manageWindowReply.innerText = message
  }
})
