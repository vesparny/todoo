import low from 'lowdb'
import storage from 'lowdb/lib/file-sync'
import applicationConfigPath from 'application-config-path'
import path from 'path'
import cuid from 'cuid'

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

export function init () {
  let todosPath = path.join(cfgPath, 'todos.json')
  settings = low(settingsPath, { storage })
  if (!settings.get('todosPath').value) {
    todosPath = settings.set('todosPath', todosPath).value()
  }
  todos = low(todosPath, { storage })
  todos.defaults({todos: defaults}).value()
}

export function selectAll () {
  return todos.get('todos').value()
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

export function del (todo) {
  todos.get('todos')
  .remove(todo)
  .value()
  return selectAll()
}
