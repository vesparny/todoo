const menubar = require('menubar')
const { INDEX_PATH, TRAY_ICON_PATH } = require('../constants')

const mb = menubar({
  'preloadWindow': true,
  index: INDEX_PATH,
  width: 600,
  height: 700,
  icon: TRAY_ICON_PATH,
  'showDockIcon': false
})

module.exports = mb
