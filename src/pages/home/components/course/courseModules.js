import React, { Component } from "react"
import { List } from 'semantic-ui-react'
import PropTypes from "prop-types"
import { connect } from "react-redux"

const { remote } = window.require("electron");
const log = remote.require("electron-log");

class CourseModules extends Component {
  constructor(props) {
    super(props)
  }

  mapCoursesToListItems(courses) {
    
  }

  render() {
    const { height, courses } = this.props
    return (
      <List link style={{ overflowY: 'scroll', maxHeight: `${height}px`, minHeight: `${height}px` }}>
        <List.Item active><strong>Divide and Conquer, Sorting and Searching, and Randomized Algorithms</strong></List.Item>
        <List.Item as='a'>About</List.Item>
        <List.Item as='a'>Jobs</List.Item>
        <List.Item as='a'>Team</List.Item>
        <List.Item active><strong>II. ASYMPTOTIC ANALYSIS</strong></List.Item>
        <List.Item as='a'>About</List.Item>
        <List.Item as='a'>Jobs</List.Item>
        <List.Item as='a'>Team</List.Item>
        <List.Item active><strong>II. ASYMPTOTIC ANALYSIS</strong></List.Item>
        <List.Item as='a'>About</List.Item>
        <List.Item as='a'>Jobs</List.Item>
        <List.Item as='a'>Team</List.Item>
        <List.Item active><strong>II. ASYMPTOTIC ANALYSIS</strong></List.Item>
        <List.Item as='a'>About</List.Item>
        <List.Item as='a'>Jobs</List.Item>
        <List.Item as='a'>Team</List.Item>
        <List.Item active><strong>II. ASYMPTOTIC ANALYSIS</strong></List.Item>
        <List.Item as='a'>About</List.Item>
        <List.Item as='a'>Jobs</List.Item>
        <List.Item as='a'>Team</List.Item>
        <List.Item active><strong>II. ASYMPTOTIC ANALYSIS</strong></List.Item>
        <List.Item as='a'>About</List.Item>
        <List.Item as='a'>Jobs</List.Item>
        <List.Item as='a'>Team</List.Item><List.Item active><strong>II. ASYMPTOTIC ANALYSIS</strong></List.Item>
        <List.Item as='a'>About</List.Item>
        <List.Item as='a'>Jobs</List.Item>
        <List.Item as='a'>Team</List.Item><List.Item active><strong>II. ASYMPTOTIC ANALYSIS</strong></List.Item>
        <List.Item as='a'>About</List.Item>
        <List.Item as='a'>Jobs</List.Item>
        <List.Item as='a'>Team</List.Item>
        <List.Item active><strong>II. ASYMPTOTIC ANALYSIS</strong></List.Item>
        <List.Item as='a'>About</List.Item>
        <List.Item as='a'>Jobs</List.Item>
        <List.Item as='a'>Team</List.Item>
        <List.Item active><strong>II. ASYMPTOTIC ANALYSIS</strong></List.Item>
        <List.Item as='a'>About</List.Item>
        <List.Item as='a'>Jobs</List.Item>
        <List.Item as='a'>Team</List.Item>
        <List.Item active><strong>II. ASYMPTOTIC ANALYSIS</strong></List.Item>
        <List.Item as='a'>About</List.Item>
        <List.Item as='a'>Jobs</List.Item>
        <List.Item as='a'>Team</List.Item>
        <List.Item active><strong>II. ASYMPTOTIC ANALYSIS</strong></List.Item>
        <List.Item as='a'>About</List.Item>
        <List.Item as='a'>Jobs</List.Item>
        <List.Item as='a'>Team</List.Item><List.Item active><strong>II. ASYMPTOTIC ANALYSIS</strong></List.Item>
        <List.Item as='a'>About</List.Item>
        <List.Item as='a'>Jobs</List.Item>
        <List.Item as='a'>Team</List.Item>
        <List.Item active><strong>II. ASYMPTOTIC ANALYSIS</strong></List.Item>
        <List.Item as='a'>About</List.Item>
        <List.Item as='a'>Jobs</List.Item>
        <List.Item as='a'>Team</List.Item><List.Item active><strong>II. ASYMPTOTIC ANALYSIS</strong></List.Item>
        <List.Item as='a'>About</List.Item>
        <List.Item as='a'>Jobs</List.Item>
        <List.Item as='a'>Team</List.Item><List.Item active><strong>II. ASYMPTOTIC ANALYSIS</strong></List.Item>
        <List.Item as='a'>About</List.Item>
        <List.Item as='a'>Jobs</List.Item>
        <List.Item as='a'>Team</List.Item><List.Item active><strong>II. ASYMPTOTIC ANALYSIS</strong></List.Item>
        <List.Item as='a'>About</List.Item>
        <List.Item as='a'>Jobs</List.Item>
        <List.Item as='a'>Team</List.Item><List.Item active><strong>II. ASYMPTOTIC ANALYSIS</strong></List.Item>
        <List.Item as='a'>About</List.Item>
        <List.Item as='a'>Jobs</List.Item>
        <List.Item as='a'>Team</List.Item><List.Item active><strong>II. ASYMPTOTIC ANALYSIS</strong></List.Item>
        <List.Item as='a'>About</List.Item>
        <List.Item as='a'>Jobs</List.Item>
        <List.Item as='a'>Team</List.Item><List.Item active><strong>II. ASYMPTOTIC ANALYSIS</strong></List.Item>
        <List.Item as='a'>About</List.Item>
        <List.Item as='a'>Jobs</List.Item>
        <List.Item as='a'>Team</List.Item>
      </List>
    )
  }
}

CourseModules.propTypes = {
  height: PropTypes.number.isRequired
}

const mapStateToProps = ({ course }) => {
  const { courseCrawlData } = course;
  const { courses } = courseCrawlData
  return {
    courses
  }
}

export default connect(mapStateToProps, null)(CourseModules)