import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { ipcRenderer } from 'electron'
import { setCurrentPage } from '../actions'

function renderRightButton (currentPage, dispatch) {
  if (currentPage === 'settings') {
    return (
      <button onClick={() => dispatch(setCurrentPage('home'))} className='task-item__button' type='button' key='bs'>
        <svg className='icon' fill='#000000' height='24' viewBox='0 0 24 24' width='24'>
          <path d='M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z' />
        </svg>
      </button>
    )
  }
  if (currentPage === 'home') {
    return (
      <button onClick={() => dispatch(setCurrentPage('settings'))} className='task-item__button' type='button'>
        <svg className='icon' fill='#000000' height='24' viewBox='0 0 24 24' width='24'>
          <path d='M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z' />
        </svg>
      </button>
    )
  }
  return <div>ciao</div>
}

function quit () {
  ipcRenderer.send('quit')
}

let Header = ({ dispatch, currentPage }) => {
  return (
    <div style={{height: '3rem'}}>
      <ReactCSSTransitionGroup transitionName='move' transitionEnterTimeout={300} transitionLeaveTimeout={300}>
        <div key='bh' className='df'>
          {renderRightButton(currentPage, dispatch)}
          <div style={{flex: '1 1 auto'}}></div>
          <button onClick={quit} className='task-item__button' type='button'>
            <svg className='icon' fill='#000000' height='24' viewBox='0 0 24 24' width='24'>
              <path d='M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z' />
            </svg>
          </button>
        </div>
      </ReactCSSTransitionGroup>
    </div>
  )
}
export default Header
