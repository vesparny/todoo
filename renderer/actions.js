import { create, update, selectAll, del } from './lowDB'

function todosLoaded (todos) {
  return {
    type: 'TODOS_LOADED',
    payload: todos
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

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const setCurrentPage = (currentPage) => {
  return {
    type: 'SET_CURRENT_PAGE',
    payload: {
      currentPage
    }
  }
}
