import React, { Component } from 'react'
import { connect } from 'react-redux'
import { remote } from 'electron'
import { copyFileSync, removeSync, existsSync } from 'fs-plus'
import path from 'path'
import { updateSettings, loadTodos } from '../actions'
import Header from '../components/Header'

const dialog = remote.dialog

const dialogOptions = {
  title: 'Select todoo.json directory',
  properties: ['openDirectory']
}

const style = {
  aboutBlock: {
    lineHeight: '1.8rem'
  },
  block: {
    color: '#999'
  },
  link: {
    color: '#dcdcdc'
  },
  input: {
    outline: 'none',
    width: '90%',
    color: '#999',
    border: '1px solid #181a1f',
    backgroundColor: '#1b1d23'

  },
  label: {
    fontSize: '1.1rem',
    color: '#fff'
  }
}

class Settings extends Component {
  constructor (props) {
    super(props)
    this.openDialog = this.openDialog.bind(this)
  }

  openDialog () {
    dialog.showOpenDialog(remote.getCurrentWindow(), dialogOptions, (filenames) => {
      if (!Array.isArray(filenames)) return
      try {
        if (existsSync(path.resolve(filenames[0], 'todoo.json'))) {
          const confirm = dialog.showMessageBox({
            type: 'info',
            title: 'File already exists',
            message: 'todoo.json file already exists',
            detail: 'Do you want to overwrite it?',
            buttons: ['Yes', 'No']
          })
          if (confirm === 0) {
            console.log('overwriting existing file')
            copyFileSync(path.resolve(this.props.todooJsonDir, 'todoo.json'), path.resolve(filenames[0], 'todoo.json'))
            // removeSync(path.resolve(this.props.todooJsonDir, 'todoo.json'))
          } else {
            console.log('not overwriting existing file')
            // removeSync(path.resolve(this.props.todooJsonDir, 'todoo.json'))
          }
        } else {
          console.log('move the file to a new location')
          copyFileSync(path.resolve(this.props.todooJsonDir, 'todoo.json'), path.resolve(filenames[0], 'todoo.json'))
          // removeSync(path.resolve(this.props.todooJsonDir, 'todoo.json'))
        }
        this.props.dispatch(updateSettings({
          todooJsonDir: filenames[0]
        }))
        this.props.dispatch(loadTodos())
      } catch (e) {
        console.error(e)
        dialog.showErrorBox('Error', e.message || 'An error has occoured')
      }
    })
  }

  render () {
    const { todooJsonDir, version, currentPage, dispatch } = this.props
    return (
      <div className='mw7 center'>
        <Header currentPage={currentPage} dispatch={dispatch} />
        <div>
          <div className='pa2 pb3' style={style.block}>
            <label
              className='pr2 pt2 pb3 dib'
              htmlFor='todooJsonDir'
              style={style.label}
            >
              Relocate todoo.json in a different directory
            </label>
            <div className='df flx-aic'>
              <input
                className='db pa2'
                style={style.input}
                type='text'
                readOnly='readonly'
                id='todooJsonDir'
                onClick={this.openDialog}
                value={todooJsonDir} />
              <button onClick={this.openDialog} className='task-item__button' type='button' key='bs'>
                <svg className='icon' fill='#000000' height='24' viewBox='0 0 24 24' width='24'>
                  <path d='M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z' />
                </svg>
              </button>
            </div>
          </div>
          <div className='pa2 pb3' style={style.block}>
            <label
              className='pr2 pt2 pb3 dib'
              htmlFor='shortcut'
              style={style.label}
            >
              Global shortcut
            </label>
            <div className='df flx-aic'>
              <input
                className='db pa2'
                style={style.input}
                type='text'
                disabled='disabled'
                id='shortcut'
                value={this.props.shortcut} />
            </div>
          </div>
          <div className='pa2 pb3' style={style.block}>
            <label
              className='pr2 pt2 pb3 dib'
              style={style.label}
            >
              About
            </label>
            <div className='pt2'>
              <div style={style.aboutBlock}>
                Version {version}
              </div>
              <div style={style.aboutBlock}>
                MIT Licensed Copyright (c) 2016-present <a style={style.link} href='http://alessandro.arnodo.net/'>Alessandro Arnodo</a>
              </div>
              <div style={style.aboutBlock}>
                Follow me on twitter <a style={style.link} href='https://twitter.com/vesparny'>@vesparny</a>
              </div>
              <div style={style.aboutBlock}>
                Code available on <a style={style.link} href='https://github.com/vesparny/todoo'>GitHub</a>
              </div>
              <div style={style.aboutBlock}>
                Share on <a style={style.link} href='https://twitter.com/intent/tweet?original_referer=https%3A%2F%2Fpublish.twitter.com%2F&ref_src=twsrc%5Etfw&related=vesparny&text=Todoo%20-%20Open%20Source%20Todo%20app%20for%20introverts%20-%20Built%20with%20%40electronjs%20and%20%40reactjs%20%20&tw_p=tweetbutton&url=https%3A%2F%2Fgithub.com%2Fvesparny%2Ftodoo&via=vesparny'>Twitter</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const selector = (state) => state.settings

export default connect(selector)(Settings)
