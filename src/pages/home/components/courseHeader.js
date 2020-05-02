import React, { Component } from "react"
import { Header, Label } from 'semantic-ui-react'
import PropTypes from "prop-types"

function createTypeLabel(type) {
  return (
    <Label color='blue'>
      {type}
    </Label>
  )
}

class CourseHeader extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {title, type} = this.props
    return (
      <React.Fragment>
        <Header as="h1">{title}</Header>
        {createTypeLabel(type)}
      </React.Fragment>
    )
  }
}

CourseHeader.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}

export default CourseHeader