console.time('init')

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import todoApp from './reducers'
import App from './containers/App'
import { bootDatabase } from './lowDB'
import { loadSettings } from './actions'
import bindIpcRenderer from './ipc'

let store = createStore(
  todoApp,
  applyMiddleware(thunk, createLogger())
)

bootDatabase()
store.dispatch(loadSettings())

bindIpcRenderer(store)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

console.timeEnd('init')
