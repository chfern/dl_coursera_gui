/**
 * Shows tree view of:
 * Courses -> Weeks -> Lessons
 */
import React, { Component } from "react"
import { List } from 'semantic-ui-react'
import PropTypes from "prop-types"
import { connect } from "react-redux"

const { remote } = window.require("electron");
const log = remote.require("electron-log");

class CourseNav extends Component {
  constructor(props) {
    super(props)
  }

  mapCoursesToListItems(courses) {
    return courses.map(course => {
      const { id, name } = course
      log.info(name)
      return (
        <List.Item active key={id}><strong>{name}</strong></List.Item>
      )
    })
  }

  render() {
    const { height, courses } = this.props
    log.info(courses)
    return (
      <React.Fragment>
        {courses &&
          <List link style={{ overflowY: 'scroll', maxHeight: `${height}px`, minHeight: `${height}px` }}>
            {this.mapCoursesToListItems(courses)}
            {/* <List.Item active><strong>Divide and Conquer, Sorting and Searching, and Randomized Algorithms</strong></List.Item>
        <List.Item as='a'>About</List.Item>
        <List.Item as='a'>Jobs</List.Item>
        <List.Item as='a'>Team</List.Item>
        <List.Item active><strong>II. ASYMPTOTIC ANALYSIS</strong></List.Item>
        <List.Item as='a'>About</List.Item>
        <List.Item as='a'>Jobs</List.Item>
        <List.Item as='a'>Team</List.Item> */}
          </List>
        }
      </React.Fragment>
    )
  }
}

CourseNav.propTypes = {
  height: PropTypes.number.isRequired
}

const mapStateToProps = ({ course }) => {
  const { courseCrawlData } = course
  const { courses } = courseCrawlData
  log.info(courseCrawlData)
  return {
    courses
  }
}
export default connect(mapStateToProps, null)(CourseNav)