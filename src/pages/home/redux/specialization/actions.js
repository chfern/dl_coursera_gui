export const UPDATE_SELECTED_LESSON = "UPDATE_SELECTED_LESSON"

export const updateSelectedLesson = (courseId, moduleId, lessonId) => {
  return { type: UPDATE_SELECTED_LESSON, courseId, moduleId, lessonId }
}