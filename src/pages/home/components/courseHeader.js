import React from "react"
import { Header, Label } from 'semantic-ui-react'
import PropTypes from "prop-types"
import { connect } from 'react-redux';

function createTypeLabel(type) {
  return (
    <Label color='blue'>
      {type}
    </Label>
  )
}

const CourseHeader = ({ name, type }) => {
  return (
    <React.Fragment>
      <Header as="h1">{name}</Header>
      {createTypeLabel(type)}
    </React.Fragment>
  )
}

CourseHeader.propTypes = {
}

const mapStateToProps = ({ course }) => {
  const { courseCrawlData } = course
  const { name, type } = courseCrawlData
  return {
    name, type
  }
}

export default connect(mapStateToProps, null)(CourseHeader)