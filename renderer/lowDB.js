import low from 'lowdb'
import storage from 'lowdb/lib/file-sync'
import applicationConfigPath from 'application-config-path'
import path from 'path'
import cuid from 'cuid'
import { moveSync, existsSync, removeSync } from 'fs-plus'
import { SHORTCUT } from '../constants'
import { version } from '../package.json'

const cfgPath = applicationConfigPath('Todoo')
const settingsPath = path.join(cfgPath, 'settings.json')

function migrations () {
  settings = low(settingsPath, { storage })
  // from 1.1.0
  if (!settings.get('settings').value()) {
    if (existsSync(path.join(cfgPath, 'todos.json'))) {
      try {
        console.log('moving old todos.json file to new format')
        moveSync(path.join(cfgPath, 'todos.json'), path.join(cfgPath, 'todoo.json'))
      } catch (e) {
        console.error(e)
      }
    }
    try {
      console.log('removing old settings.json file')
      removeSync(path.join(cfgPath, 'settings.json'))
    } catch (e) {
      console.error(e)
    }
  }
}

const defaults = [{
  id: cuid(),
  text: 'This is an example todo 👻 ',
  createdAt: new Date(),
  completed: false
}, {
  id: cuid(),
  text: 'This is done 👍 ',
  createdAt: new Date(),
  completed: true
}]

let settings = null
let todos = null

export function bootDatabase () {
  migrations()
  // load settings
  settings = low(settingsPath, { storage })
  settings.defaults({
    settings: {
      shortcut: SHORTCUT
    }
  }).value()

  const currentSettings = selectAllSettings()

  let todosDir = currentSettings.todooJsonDir
    ? currentSettings.todooJsonDir
    : cfgPath

  let todosPath = path.join(todosDir, 'todoo.json')

  if (!currentSettings.todooJsonDir) {
    updateSett({todooJsonDir: todosDir})
  }

  updateSett({version})

  todos = low(todosPath, { storage })
  todos.defaults({todos: defaults}).value()
}

export function selectAll () {
  return todos.get('todos').value()
}

export function selectAllSettings () {
  return settings.get('settings').value()
}

export function create (text) {
  return todos.get('todos')
  .push({
    id: cuid(),
    text,
    completed: false,
    createdAt: new Date()
  })
  .value()
}

export function update (todo) {
  todos.get('todos')
  .find({id: todo.id})
  .assign(todo)
  .value()
  return selectAll()
}

export function updateSett (newSettings) {
  settings
  .get('settings')
  .assign(newSettings)
  .value()

  const currentSettings = selectAllSettings()
  let todosDir = currentSettings.todooJsonDir
  let todosPath = path.join(todosDir, 'todoo.json')
  todos = low(todosPath, { storage })
  return currentSettings
}

export function del (todo) {
  todos.get('todos')
  .remove(todo)
  .value()
  return selectAll()
}
