const mb = require('./menubar')

function log (...args) {
  if (mb.app.ipcReady) {
    mb.window.webContents.send('log', ...args)
  } else {
    mb.app.once('ipcReady', () => mb.window.webContents.send('log', ...args))
  }
}

function error (...args) {
  if (mb.app.ipcReady) {
    mb.window.webContents.send('error', ...args)
  } else {
    mb.app.once('ipcReady', () => mb.window.webContents.send('error', ...args))
  }
}

module.exports = log
module.exports.error = error
