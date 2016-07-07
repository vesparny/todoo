import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import TodoList from '../components/TodoList'

const getVisibilityFilter = (state) => state.visibilityFilter
const getTodos = (state) => state.todos

const getVisibleTodos = createSelector(
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
const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state)
  }
}

const VisibleTodoList = connect(
  mapStateToProps
)(TodoList)

export default VisibleTodoList
