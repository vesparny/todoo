import React, { PropTypes } from 'react'
import Todo from './Todo'
import { editTodo, deleteTodo } from '../actions'

const TodoList = ({ todos, dispatch }) => {
  if (!todos || todos.length === 0) {
    return (
      <div className='task-list-empty'>
        <div>Nothing to show here 👌</div>
      </div>
    )
  }
  return (
    <div className='task-list overflow-scroll'>
      {todos.map(todo =>
        <Todo
          key={todo.id}
          {...todo}
          onToggle={() => dispatch(editTodo({...todo, ...{completed: !todo.completed}}))}
          onEdit={(text) => dispatch(editTodo({...todo, ...{text}}))}
          onDelete={() => dispatch(deleteTodo(todo))}
        />
      )}
    </div>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  dispatch: PropTypes.func.isRequired
}

export default TodoList
