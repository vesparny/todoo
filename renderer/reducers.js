import { combineReducers } from 'redux'

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

const todoApp = combineReducers({
  todos,
  visibilityFilter
})

export default todoApp
