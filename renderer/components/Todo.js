import React, { Component, PropTypes } from 'react'
import cx from 'classnames'

class Todo extends Component {
  constructor (props) {
    super(props)
    this.state = {editing: false}
    this.onEdit = this.onEdit.bind(this)
    this.onKeyUp = this.onKeyUp.bind(this)
    this.persist = this.persist.bind(this)
  }

  onEdit () {
    this.setState({editing: true})
  }

  persist (event) {
    const text = event.target.value.trim()
    if (text) {
      this.props.onEdit(text)
    }
    this.setState({editing: false})
  }

  onKeyUp (event) {
    if (event.keyCode === 13) {
      this.persist(event)
    } else if (event.keyCode === 27) {
      this.setState({editing: false})
    }
  }

  renderNotEditable (text) {
    return (
      <div
        className='task-item__title  w-100'
        tabIndex='0'
        onDoubleClick={this.onEdit}
      >
        {text}
      </div>
    )
  }

  renderEditable (text) {
    return (
      <input
        autoComplete='off'
        autoFocus
        className='task-item__input'
        defaultValue={text}
        onBlur={this.persist}
        onKeyUp={this.onKeyUp}
        type='text'
      />
    )
  }

  render () {
    const { onToggle, onDelete, completed, text } = this.props
    const { editing } = this.state
    return (
      <div
        className={cx('task-item', { 'task-item--completed': completed, 'task-item--editing': editing })}
      >
        <div className='cell'>
          <button onClick={onToggle} className={cx({'dn': editing, 'task-item__button': true})} type='button'>
            <svg className={cx('icon', { 'icon--active': completed })} viewBox='0 0 24 24'>
              <path d='M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z' />
            </svg>
          </button>
        </div>
        <div className='cell'>
          {editing ? this.renderEditable(text) : this.renderNotEditable(text)}
        </div>
        <div className='cell'>
          <button onClick={this.onEdit} className={cx({'task-item__button': true, 'dn': editing})} type='button'>
            <svg className='icon' viewBox='0 0 24 24'>
              <path d='M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z' />
            </svg>
          </button>
          <button onClick={onDelete} aria-hidden='true' className='task-item__button' type='button'>
            <svg className={cx('icon')} viewBox='0 0 24 24'>
              <path d='M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z' />
            </svg>
          </button>
        </div>
      </div>
    )
  }
}

Todo.propTypes = {
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
