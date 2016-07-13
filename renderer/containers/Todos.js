import React from 'react'
import { connect } from 'react-redux'
import Filters from './Filters'
import AddTodo from './AddTodo'
import VisibleTodoList from './VisibleTodoList'

let Todos = ({dispatch, currentPage}) => {
  return (
    <div className='mw7 center'>
      <AddTodo />
      <Filters />
      <VisibleTodoList />
    </div>
  )
}
Todos = connect()(Todos)

export default Todos
