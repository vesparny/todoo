const menubar = require('menubar')
const { INDEX_PATH, TRAY_ICON_PATH } = require('../constants')

const mb = menubar({
  'preload-window': true,
  index: INDEX_PATH,
  width: 650,
  height: 700,
  icon: TRAY_ICON_PATH
})

mb.on('ready', function ready () {
  console.log('app is ready')
  // mb.window.webContents.openDevTools()
})
