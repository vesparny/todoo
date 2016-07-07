const menubar = require('menubar')
const { Menu, shell, dialog } = require('electron')
const { INDEX_PATH, TRAY_ICON_PATH } = require('./constants')
const updater = require('./updater')

const mb = menubar({
  'preload-window': true,
  index: INDEX_PATH,
  width: 600,
  height: 700,
  icon: TRAY_ICON_PATH,
  'show-dock-icon': true
})

const template = [{
  label: 'Todoo',
  submenu: [{
    label: 'About Todoo',
    role: 'about'
  }, {
    type: 'separator'
  }, {
    label: 'Reload',
    accelerator: 'CmdOrCtrl+R',
    click: (item, focusedWindow) => {
      if (focusedWindow) focusedWindow.reload()
    }
  }, {
    label: 'Preferences...',
    accelerator: 'Command+,',
    click: () => {
      mb.window.webContents.send('open-preferences')
    }
  }, {
    label: 'Quit App',
    accelerator: 'Command+Q',
    selector: 'terminate:'
  }, {
    label: 'Toggle DevTools',
    accelerator: 'Alt+Command+I',
    click: () => {
      mb.window.toggleDevTools()
    }
  }]
}, {
  label: 'Edit',
  submenu: [{
    label: 'Undo',
    accelerator: 'CmdOrCtrl+Z',
    role: 'undo'
  }, {
    label: 'Redo',
    accelerator: 'Shift+CmdOrCtrl+Z',
    role: 'redo'
  }, {
    type: 'separator'
  }, {
    label: 'Cut',
    accelerator: 'CmdOrCtrl+X',
    role: 'cut'
  }, {
    label: 'Copy',
    accelerator: 'CmdOrCtrl+C',
    role: 'copy'
  }, {
    label: 'Paste',
    accelerator: 'CmdOrCtrl+V',
    role: 'paste'
  }, {
    label: 'Select All',
    accelerator: 'CmdOrCtrl+A',
    role: 'selectall'
  }]
}, {
  label: 'Help',
  role: 'help',
  submenu: [{
    label: 'Learn More',
    click: () => {
      shell.openExternal('https://github.com/vesparny/todoo#readme')
    }
  }, {
    label: 'Report Issue',
    click: () => {
      shell.openExternal('https://github.com/vesparny/todoo/issues')
    }
  }, {
    label: 'Source Code on GitHub',
    click: () => {
      shell.openExternal('https://github.com/vesparny/todoo')
    }
  }, {
    label: 'Changelog',
    click: () => {
      shell.openExternal('https://github.com/vesparny/todoo/blob/master/CHANGELOG.md')
    }
  }, {
    type: 'separator'
  }, {
    label: 'Follow @vesparny on Twitter',
    click: () => {
      shell.openExternal('https://twitter.com/vesparny')
    }
  }]
}]

mb.on('ready', () => {
  console.log('app is ready')
  const menu = Menu.buildFromTemplate(template)
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
