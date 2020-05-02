import {
  UPDATE_COURSE_CRAWL_DATA
} from '../actions/types'

const { remote } = window.require('electron');
const log = remote.require("electron-log");

const INITIAL_STATE = {
  courseCrawlData: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_COURSE_CRAWL_DATA:
      return { ...state, courseCrawlData: action.courseCrawlData }
    default:
      return state;
  }
}