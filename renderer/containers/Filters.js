import React from 'react'
import { connect } from 'react-redux'
import FilterLink from '../containers/FilterLink'
import { getSizesByType } from '../reducers'

const Filters = ({all, active, completed}) => (
  <ul className='task-filters cf'>
    <li>
      <FilterLink filter='SHOW_ALL'>
        View All ({all})
      </FilterLink>
    </li>
    <li>
      <FilterLink filter='SHOW_ACTIVE'>
        Active ({active})
      </FilterLink>
    </li>
    <li>
      <FilterLink filter='SHOW_COMPLETED'>
        Completed ({completed})
      </FilterLink>
    </li>
  </ul>
)

export default connect(getSizesByType)(Filters)
