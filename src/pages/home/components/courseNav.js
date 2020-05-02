import React from "react"
import { List } from 'semantic-ui-react'
import PropTypes from "prop-types"

const CourseNav = () => {
  return (
    <List link>
    <List.Item active><strong>Divide and Conquer, Sorting and Searching, and Randomized Algorithms</strong></List.Item>
      <List.Item as='a'>About</List.Item>
      <List.Item as='a'>Jobs</List.Item>
      <List.Item as='a'>Team</List.Item>
      <List.Item active><strong>II. ASYMPTOTIC ANALYSIS</strong></List.Item>
      <List.Item as='a'>About</List.Item>
      <List.Item as='a'>Jobs</List.Item>
      <List.Item as='a'>Team</List.Item>
    </List>
  )
}

export default CourseNav