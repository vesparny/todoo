import low from 'lowdb'
import storage from 'lowdb/lib/file-sync'
import applicationConfigPath from 'application-config-path'
import path from 'path'
import cuid from 'cuid'
import { SHORTCUT } from '../constants'

const cfgPath = applicationConfigPath('Todoo')
const settingsPath = path.join(cfgPath, 'settings.json')

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
  // load settings
  settings = low(settingsPath, { storage })
  settings.defaults({shortcut: SHORTCUT}).value()

  const currentSettings = selectAllSettings()

  let todosDir = currentSettings.todooJsonDir
    ? currentSettings.todooJsonDir
    : cfgPath

  let todosPath = path.join(todosDir, 'todoo.json')

  if (!currentSettings.todooJsonDir) {
    settings.set('todooJsonDir', todosDir).value()
  }

  todos = low(todosPath, { storage })
  todos.defaults({todos: defaults}).value()
}

export function selectAll () {
  return todos.get('todos').value()
}

export function selectAllSettings () {
  return settings.value()
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
  .assign(newSettings)
  .value()
  // ensure we reload the files
  bootDatabase()
  return selectAllSettings()
}

export function del (todo) {
  todos.get('todos')
  .remove(todo)
  .value()
  return selectAll()
}
