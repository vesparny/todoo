import React, { PropTypes } from 'react'
import cx from 'classnames'
import { setVisibilityFilter } from '../actions'

const Link = ({ active, filter, children, dispatch }) => {
  return (
    <a href='#'
      className={cx({active: active})}
      onClick={(e) => {
        e.preventDefault()
        dispatch(setVisibilityFilter(filter))
      }}
    >
      {children}
    </a>
    )
}

Link.propTypes = {
  dispatch: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  filter: PropTypes.string.isRequired
}

export default Link
