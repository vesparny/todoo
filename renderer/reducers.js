import { combineReducers } from 'redux'
import { createSelector } from 'reselect'

const todos = (state = [], action) => {
  switch (action.type) {
    case 'TODOS_LOADED':
      return action.payload.slice()
    default:
      return state
  }
}

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

const currentPage = (state = 'home', action) => {
  switch (action.type) {
    case 'SET_CURRENT_PAGE':
      return action.payload.currentPage
    default:
      return state
  }
}

const reducer = combineReducers({
  todos,
  visibilityFilter,
  currentPage
})

// selectors

const getVisibilityFilter = (state) => state.visibilityFilter
const getTodos = (state) => state.todos

export default reducer

export const getVisibleTodos = createSelector(
  [getTodos, getVisibilityFilter],
  (todos, filter) => {
    switch (filter) {
      case 'SHOW_ALL':
        return [...todos].reverse()
      case 'SHOW_COMPLETED':
        return todos.filter(t => t.completed).reverse()
      case 'SHOW_ACTIVE':
        return todos.filter(t => !t.completed).reverse()
    }
  }
)
