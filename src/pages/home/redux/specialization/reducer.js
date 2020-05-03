import {
  UPDATE_SELECTED_LESSON
} from "./actions"

const INITIAL_STATE = {
  courseId: null,
  moduleId: null,
  lessonId: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_SELECTED_LESSON:
      return { ...state, courseId: action.courseId, moduleId: action.moduleId, lessonId: action.lessonId }
    default:
      return state
  }
}