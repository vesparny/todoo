const path = require('path')

module.exports.INDEX_PATH = 'file://' + path.join(__dirname, '../renderer', 'index.html')
module.exports.TRAY_ICON_PATH = path.join(__dirname, '../static', 'tray-icon.png')
