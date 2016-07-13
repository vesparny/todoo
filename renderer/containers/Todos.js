import React from 'react'
import { connect } from 'react-redux'
import Filters from './Filters'
import Header from '../components/Header'
import AddTodo from './AddTodo'
import VisibleTodoList from './VisibleTodoList'

let Todos = ({dispatch, currentPage}) => {
  return (
    <div className='mw7 center'>
      <Header currentPage={currentPage} dispatch={dispatch} />
      <AddTodo />
      <Filters />
      <VisibleTodoList />
    </div>
  )
}
Todos = connect()(Todos)

export default Todos
