import { ipcRenderer } from 'electron'

export default function bindIpcRenderer (store) {
  function dispatch (action) {
    store.dispatch({
      type: action.type,
      payload: action.payload
    })
  }

  ipcRenderer.on('log', (e, ...args) => console.log(...args))
  ipcRenderer.on('error', (e, ...args) => console.error(...args))

  ipcRenderer.on('dispatch', (e, action) => dispatch(action))

  ipcRenderer.send('ipcReady')
}
