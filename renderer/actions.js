import { create, update, selectAll, del, updateSett, selectAllSettings } from './lowDB'

function todosLoaded (todos) {
  return {
    type: 'TODOS_LOADED',
    payload: todos
  }
}

function settingsLoaded (settings) {
  return {
    type: 'SETTINGS_LOADED',
    payload: settings
  }
}

export const addTodo = (text) => {
  return (dispatch) => {
    const todos = create(text)
    dispatch(todosLoaded(todos))
  }
}

export const editTodo = (changes) => {
  return (dispatch) => {
    const todos = update(changes)
    dispatch(todosLoaded(todos))
  }
}

export const deleteTodo = (todo) => {
  return (dispatch) => {
    const todos = del(todo)
    dispatch(todosLoaded(todos))
  }
}

export const loadTodos = () => {
  return (dispatch) => {
    const todos = selectAll()
    dispatch(todosLoaded(todos))
  }
}

export const loadSettings = () => {
  return (dispatch) => {
    const settings = selectAllSettings()
    dispatch(settingsLoaded(settings))
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const setCurrentPage = (currentPage) => {
  return {
    type: 'SET_CURRENT_PAGE',
    payload: currentPage
  }
}

export const updateSettings = (newSettings) => {
  return (dispatch) => {
    const settings = updateSett(newSettings)
    dispatch(settingsLoaded(settings))
  }
}
