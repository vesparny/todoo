const { app, ipcMain } = require('electron')

function bindIpcMain () {
  ipcMain.once('ipcReady', (e) => {
    app.ipcReady = true
    app.emit('ipcReady')
  })

  ipcMain.on('quit', (e) => {
    app.quit()
  })
}

module.exports = bindIpcMain
