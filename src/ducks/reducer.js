import { combineReducers } from "redux"
import {
  UPDATE_COURSE_CRAWL_DATA
} from '../shared/redux/actions/course'

// Global reducers
import courseReducer from "../shared/redux/reducers/course"
import errorReducer from "../shared/redux/reducers/error"
// Home page reducers
import homeSpecializationReducer from '../pages/home/redux/specialization/reducer'

/**
 * Combinator
 */
const allReducers = combineReducers({
  // Global reducers
  course: courseReducer,
  error: errorReducer,

  // Page specific reducers
  homeSpecializationPage: homeSpecializationReducer
});


/**
 * Reducer processor
 */
const rootReducer = (state, action) => {
  // when user select different course, clear all states
  if (action.type === UPDATE_COURSE_CRAWL_DATA) {
    state = undefined;
  }
  return allReducers(state, action);
};

export default rootReducer;