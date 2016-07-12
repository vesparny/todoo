module.exports = function createMenuTemplate (mb, shell) {
  return [{
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
        mb.window.webContents.send('dispatch', {
          type: 'SET_CURRENT_PAGE',
          payload: 'settings'
        })
      }
    }, {
      label: 'Quit App',
      accelerator: 'Command+Q',
      selector: 'terminate:'
    }, {
      label: 'Toggle DevTools',
      accelerator: 'Alt+Command+I',
      click: () => {
        if (mb.window.webContents.isDevToolsOpened()) {
          mb.window.webContents.closeDevTools()
        } else {
          mb.window.webContents.openDevTools()
        }
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
}
