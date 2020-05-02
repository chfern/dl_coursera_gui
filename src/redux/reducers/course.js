import {
  UPDATE_COURSE_CRAWL_DATA,
  UPDATE_COURSE_ROOT_DIR
} from '../actions/types'

const { remote } = window.require('electron');
const log = remote.require("electron-log");

const INITIAL_STATE = {
  courseCrawlData: null,
  courseRootDir: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_COURSE_CRAWL_DATA:
      return { ...state, courseCrawlData: action.courseCrawlData }
    case UPDATE_COURSE_ROOT_DIR:
      return { ...state, courseRootDir: action.courseRootDir }
    default:
      return state;
  }
}