import React, { Component } from "react"
import { Divider, Grid } from 'semantic-ui-react'

/**
 * Components
 */
import CourseHeader from "./components/courseHeader"
import CourseNav from "./components/courseNav"
import CourseModules from "./components/courseModules"

const { remote } = window.require("electron");
const log = remote.require("electron-log");

export default class Home extends Component {
  constants() {
    return {
      VERTICAL_MARGIN: 15,
      DUMMY_SCROLLBAR_SIZE: 20
    }
  }

  constructor(props) {
    super(props)
    this.state = { width: 0, height: 0, contentHeight: null };
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
    this.setState({ width: window.innerWidth, height: window.innerHeight }, () => {
      this.setState({ ...this.state, contentHeight: this.getMaxWindowHeightPx() - this.courseHeaderRef.offsetHeight })
    });
  }

  getMaxWindowHeightPx() {
    const { height } = this.state
    const titleBarHeight = remote.getCurrentWindow().getSize()[1] - remote.getCurrentWindow().getContentSize()[1]
    return height - titleBarHeight - (this.constants().VERTICAL_MARGIN * 2);
  }

  // getWindowScrollbarWidthPx() {
  //   const { width } = this.state
  //   const windowWidth = remote.getCurrentWindow().getBounds().width;
  //   log.info(`windowWidth: ${windowWidth}`)
  //   log.info(`width: ${width}`)
  //   const scrollBarWidth = windowWidth - width;
  //   return scrollBarWidth
  // }

  render() {
    const { contentHeight, width } = this.state
    return (
      <div style={{ margin: `${this.constants().VERTICAL_MARGIN}px 1rem`, height: `${this.getMaxWindowHeightPx()}px`, width: `${width - this.constants().DUMMY_SCROLLBAR_SIZE}px`, position: 'fixed' }}>
        <div ref={(node) => this.courseHeaderRef = node}>
          <CourseHeader
            title="Algorithms and Data Structure"
            type="Spec"
          />
        </div>
        <Divider />
        {contentHeight &&
          <React.Fragment>
            <Grid divided>
              <Grid.Column width={4}>
                <CourseNav />
              </Grid.Column>
              <Grid.Column width={12}>
                <CourseModules
                  height={contentHeight}
                />
              </Grid.Column>
            </Grid>
            <Divider />
          </React.Fragment>
        }
      </div>
    )
  }
}