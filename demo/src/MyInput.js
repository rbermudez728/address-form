import React, { Component } from 'react'
import PropTypes from 'prop-types'

class MyInput extends Component {
  render() {
    const { field, address } = this.props
    const loading = !!address[field.name].loading

    return (
      <div className={loading ? 'loading' : ''}>
        {field.name}
        <input type="text" />
      </div>
    )
  }
}

MyInput.propTypes = {
  field: PropTypes.object,
  address: PropTypes.object,
}

export default MyInput
