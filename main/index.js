const menubar = require('menubar')
const { Menu, shell, dialog } = require('electron')
const { INDEX_PATH, TRAY_ICON_PATH } = require('./constants')
const updater = require('./updater')
const createMenuTemplate = require('./menuTemplate')

const mb = menubar({
  'preload-window': true,
  index: INDEX_PATH,
  width: 600,
  height: 700,
  icon: TRAY_ICON_PATH,
  'show-dock-icon': false
})

mb.on('ready', () => {
  console.log('app is ready')
  const menu = Menu.buildFromTemplate(createMenuTemplate(mb, shell))
  Menu.setApplicationMenu(menu)

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
})
