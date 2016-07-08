import React, { PropTypes, Component } from 'react'
import Todo from './Todo'
import { editTodo, deleteTodo } from '../actions'
import { AutoSizer, VirtualScroll } from 'react-virtualized'

class TodoList extends Component {
  constructor (props) {
    super(props)
    this._rowRenderer = this._rowRenderer.bind(this)
  }

  _rowRenderer ({index}) {
    const { todos, dispatch } = this.props
    const todo = todos[index]
    return (
      <Todo
        key={todo.id}
        {...todo}
        onToggle={() => dispatch(editTodo({...todo, ...{completed: !todo.completed}}))}
        onEdit={(text) => dispatch(editTodo({...todo, ...{text}}))}
        onDelete={() => dispatch(deleteTodo(todo))}
      />

    )
  }

  render () {
    const { todos } = this.props
    if (!todos || todos.length === 0) {
      return (
        <div className='task-list-empty'>
          <div>Nothing to show here 👌</div>
        </div>
      )
    }
    return (
      <div className='task-list overflow-scroll'>
        <AutoSizer>
          {({ width, height }) => (
            <VirtualScroll
              height={height}
              overscanRowCount={0}
              rowCount={todos.length}
              rowHeight={() => 60}
              rowRenderer={this._rowRenderer}
              width={width}
            />
          )}
        </AutoSizer>
      </div>
    )
  }

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
