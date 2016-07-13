import React, { Component } from 'react'
import { connect } from 'react-redux'
import Filters from './Filters'
import AddTodo from './AddTodo'
import TodoList from '../components/TodoList'
import { getVisibleTodos } from '../reducers'
import { loadTodos } from '../actions'

class Todos extends Component {
  componentDidMount () {
    this.props.dispatch(loadTodos())
  }
  render () {
    const {dispatch, todos} = this.props
    return (
      <div className='mw7 center'>
        <AddTodo />
        <Filters />
        <TodoList todos={todos} dispatch={dispatch} />
      </div>
    )
  }
}

const selector = (state) => {
  return {
    todos: getVisibleTodos(state)
  }
}

export default connect(selector)(Todos)
