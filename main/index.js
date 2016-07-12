console.time('init')

const menubar = require('./menubar')
const { Menu, shell, dialog, globalShortcut } = require('electron')
const updater = require('./updater')
const createMenuTemplate = require('./menuTemplate')
const bindIpcMain = require('./ipc')
const log = require('./log')

function registerGlobalShortcut (accelerator, mb) {
  globalShortcut.unregisterAll()
  globalShortcut.register(accelerator, () => {
    mb.window.isVisible() ? mb.hideWindow() : mb.showWindow()
  })
}

function checkForUpdates () {
  updater((err, newVersion) => {
    if (err) return
    const confirm = dialog.showMessageBox({
      type: 'info',
      title: 'Update available',
      message: `A new version (${newVersion}) of Todoo is available.`,
      detail: 'Do you want to download it now?',
      buttons: ['Yes', 'No']
    })
    if (confirm === 0) {
      shell.openExternal('https://github.com/vesparny/todoo/releases')
    }
  })
}

process.on('uncaughtException', function (err) {
  dialog.showErrorBox('Uncaught Exception: ' + err.message, err.stack || '')
  menubar.app.quit()
})

menubar.app.ipcReady = false

bindIpcMain()

menubar.on('ready', () => {
  log('App is ready')
  const menu = Menu.buildFromTemplate(createMenuTemplate(menubar, shell))
  Menu.setApplicationMenu(menu)
  checkForUpdates()
  registerGlobalShortcut('control+shift+space')
  menubar.showWindow()
})

menubar.app.on('will-quit', function () {
  globalShortcut.unregisterAll()
})

menubar.app.on('activate', function () {
  menubar.showWindow()
})

menubar.app.on('browser-window-focus', function () {
  menubar.showWindow()
})

menubar.app.once('ipcReady', function () {
  log('ipcReady event received from renderer process')
  console.timeEnd('init')
})
