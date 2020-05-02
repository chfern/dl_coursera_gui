/**
 * Todo: Update comment
 * Shows tree view of:
 * Courses -> Weeks -> Lessons
 */
import './specializationNav.css';

import React, { Component } from "react"
import { List } from 'semantic-ui-react'
import PropTypes from "prop-types"
import { connect } from "react-redux"
import NormalPrimaryColoredText from '../../../../shared/components/literature/NormalPrimaryColoredText';
import NormalDarkColoredText from '../../../../shared/components/literature/NormalDarkColoredText';

const { remote } = window.require("electron");
const log = remote.require("electron-log");

class SpecializationNav extends Component {
  constructor(props) {
    super(props)
  }

  mapCoursesToListItems(courses) {
    const mapWeeksToListItems = (modules) => {
      const mapLessonsToListItems = (lessons) => {
        /**
         * Lessons mapper
         */
        return lessons.map(({ name, id }) => {
          return (
            <List.Item key={`${id}__listitem`} className="nav-item">{name}</List.Item>
          )
        })
      }

      return modules.map(({ name, id, lessons }) => {
        /**
         * Modules mapper (for every week in the course)
         */
        return (
          [
            <List.Item key={`${id}__listitem`}><NormalDarkColoredText><strong>{name}</strong></NormalDarkColoredText>
              <List.List>
                {mapLessonsToListItems(lessons)}
              </List.List>
            </List.Item>
          ]
        )
      })
    }

    // Constructing tree for course navigation
    return courses.map(({ id, name, modules }) => {
      return (
        [
          <List.Item active key={id}>
            <strong><NormalPrimaryColoredText>{name}</NormalPrimaryColoredText></strong>
            <List.Item>
              {mapWeeksToListItems(modules)}
            </List.Item>
          </List.Item>
        ]
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
          </List>
        }
      </React.Fragment>
    )
  }
}

SpecializationNav.propTypes = {
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
export default connect(mapStateToProps, null)(SpecializationNav)