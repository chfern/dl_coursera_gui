import {
  UPDATE_COURSE_ROOT_DIR
} from '../actions/types'

const INITIAL_STATE = {
  crawlData: null
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case UPDATE_COURSE_ROOT_DIR:
      return null
  }
}