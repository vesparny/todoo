import React, { PropTypes } from 'react'
import cx from 'classnames'

const Link = ({ active, children, onClick }) => {
  return (
    <a href='#'
      className={cx({active: active})}
      onClick={(e) => {
        e.preventDefault()
        onClick()
      }}
    >
      {children}
    </a>
    )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
