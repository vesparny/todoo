import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Todos from './Todos'
import Settings from './Settings'
import Header from '../components/Header'

const pages = {
  home: <Todos key='home' currentPage='home' />,
  settings: <Settings key='settings' currentPage='settings' />
}

class App extends Component {
  constructor (props) {
    super(props)
    this.renderPage = this.renderPage.bind(this)
  }

  renderPage () {
    const { currentPage } = this.props
    return pages[currentPage] || pages.home
  }

  render () {
    const { currentPage, dispatch } = this.props
    return (
      <div className='h-100 center w-100 pt3 pr3 pl3 overflow-hidden'>
        <ReactCSSTransitionGroup transitionName='move' transitionEnterTimeout={300} transitionLeaveTimeout={300}>
          <Header currentPage={currentPage} dispatch={dispatch} />
          {this.renderPage()}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

const selector = ({ currentPage }) => {
  return {
    currentPage
  }
}

export default connect(selector)(App)
