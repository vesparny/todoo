const { app, ipcMain } = require('electron')

function bindIpcMain () {
  ipcMain.once('ipcReady', function (e) {
    app.ipcReady = true
    app.emit('ipcReady')
  })
}

module.exports = bindIpcMain
