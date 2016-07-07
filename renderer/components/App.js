import React from 'react'
import Filters from './Filters'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div style={{
    maxWidth: '700px'
  }}
    className='center w-100 pa4'
  >
    <AddTodo />
    <Filters />
    <VisibleTodoList />
  </div>
)

export default App
