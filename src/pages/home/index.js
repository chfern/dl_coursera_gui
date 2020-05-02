import React, { Component } from "react"
import { connect } from "react-redux"
import { Divider, Grid } from 'semantic-ui-react'

/**
 * Components
 */
import CourseHeader from "./components/courseHeader"
import CourseNav from "./components/courseNav"
import CourseModules from "./components/courseModules"

const { remote } = window.require("electron");
const log = remote.require("electron-log");

class Home extends Component {
  constants() {
    return {
      VERTICAL_MARGIN: 15,
      DUMMY_SCROLLBAR_SIZE: 20
    }
  }

  constructor(props) {
    super(props)
    this.state = { maxContentWidth: null, maxContentHeight: null, maxChildContentHeight: null };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.courseHeaderRef = React.createRef();
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    log.info(`updateWindowDimensions, window.innerHeight ${window.innerHeight}`)
    const titleBarHeight = remote.getCurrentWindow().getSize()[1] - remote.getCurrentWindow().getContentSize()[1]
    const windowHeight = window.innerHeight - titleBarHeight
    const maxContentHeight = windowHeight - titleBarHeight - (this.constants().VERTICAL_MARGIN * 2);
    this.setState({
      maxContentWidth: window.innerWidth - this.constants().DUMMY_SCROLLBAR_SIZE,
      maxContentHeight: maxContentHeight,
      maxChildContentHeight: maxContentHeight - this.courseHeaderRef.offsetHeight
    });
  }

  componentDidUpdate(prevProps, prevState) {
    // Check if chosen course data has changed
    const { courseCrawlData: prevCourseCrawlData } = prevProps
    const { courseCrawlData: currCourseCrawlData } = this.props

    if (!(prevCourseCrawlData == null && currCourseCrawlData == null)) {
      if (prevCourseCrawlData == null && currCourseCrawlData != null) {
        this.updateWindowDimensions()
      } else if (prevCourseCrawlData.id != currCourseCrawlData.id) {
        this.updateWindowDimensions()
      }
    }
  }

  render() {
    const { courseCrawlData } = this.props
    const { maxContentWidth, maxContentHeight, maxChildContentHeight } = this.state
    return (
      <div style={{ margin: `${this.constants().VERTICAL_MARGIN}px 1rem`, height: `${maxContentHeight}px`, width: `${maxContentWidth}px`, position: 'fixed' }}>
        {
          courseCrawlData &&
          <React.Fragment>
            <div ref={(node) => this.courseHeaderRef = node}>
              <CourseHeader />
            </div>
            <Divider />
            {maxChildContentHeight &&
              <React.Fragment>
                <Grid divided>
                  <Grid.Column width={4}>
                    <CourseNav height={maxChildContentHeight} />
                  </Grid.Column>
                  <Grid.Column width={12}>
                    <CourseModules height={maxChildContentHeight} />
                  </Grid.Column>
                </Grid>
                <Divider />
              </React.Fragment>
            }
          </React.Fragment>
        }
      </div>
    )
  }
}

const mapStateToProps = ({ course }) => {
  const { courseCrawlData } = course
  return {
    courseCrawlData
  }
}

export default connect(mapStateToProps, null)(Home)