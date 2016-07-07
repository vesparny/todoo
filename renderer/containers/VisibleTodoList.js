import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { getVisibleTodos } from '../reducers'

const selector = (state) => {
  return {
    todos: getVisibleTodos(state)
  }
}

const VisibleTodoList = connect(selector)(TodoList)

export default VisibleTodoList
