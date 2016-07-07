import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import todoApp from './reducers'
import App from './components/App'
import { init } from './lowDB'
import { loadTodos } from './actions'

let store = createStore(
  todoApp,
  applyMiddleware(thunk)
)

init()
store.dispatch(loadTodos())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
