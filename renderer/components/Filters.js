import React from 'react'
import FilterLink from '../containers/FilterLink'

const Filters = () => (
  <ul className='task-filters cf'>
    <li>
      <FilterLink filter='SHOW_ALL'>
        View All
      </FilterLink>
    </li>
    <li>
      <FilterLink filter='SHOW_ACTIVE'>
        Active
      </FilterLink>
    </li>
    <li>
      <FilterLink filter='SHOW_COMPLETED'>
        Completed
      </FilterLink>
    </li>
  </ul>
)

export default Filters
