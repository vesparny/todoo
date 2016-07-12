console.time('init')

const menubar = require('menubar')
const { Menu, shell, dialog, globalShortcut } = require('electron')
const { INDEX_PATH, TRAY_ICON_PATH } = require('./constants')
const updater = require('./updater')
const createMenuTemplate = require('./menuTemplate')

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
  mb.app.quit()
})

const mb = menubar({
  'preloadWindow': true,
  index: INDEX_PATH,
  width: 600,
  height: 700,
  icon: TRAY_ICON_PATH,
  'showDockIcon': true
})

mb.on('ready', () => {
  console.log('app is ready')
  const menu = Menu.buildFromTemplate(createMenuTemplate(mb, shell))
  Menu.setApplicationMenu(menu)
  checkForUpdates()
  registerGlobalShortcut('control+shift+space')
  mb.showWindow()
  console.timeEnd('init')
})

mb.app.on('will-quit', function () {
  globalShortcut.unregisterAll()
})

mb.app.on('activate', function () {
  mb.showWindow()
})

mb.app.on('browser-window-focus', function () {
  mb.showWindow()
})
