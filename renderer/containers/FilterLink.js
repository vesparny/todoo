import { connect } from 'react-redux'
import Link from '../components/Link'

const selector = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const FilterLink = connect(selector)(Link)

export default FilterLink
