import React from 'react'
import { connect } from 'react-redux'
import { setCurrentPage } from '../actions'
import Header from '../components/Header'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

let Settings = ({dispatch}) => {
  return (
    <div className='mw7 center'>
      <Header>
        <ReactCSSTransitionGroup transitionName='move' transitionEnterTimeout={300} transitionLeaveTimeout={300}>
          <button onClick={() => dispatch(setCurrentPage('home'))} className='task-item__button' type='button' key='bs'>
            <svg className='icon' fill='#000000' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'>
              <path d='M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z' />
            </svg>
          </button>
        </ReactCSSTransitionGroup>
      </Header>
      <div className='task-list-empty'>
        <div> More to come here 👌</div>
      </div>
    </div>
  )
}
Settings = connect()(Settings)

export default Settings
