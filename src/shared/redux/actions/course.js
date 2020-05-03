// Types
export const UPDATE_COURSE_CRAWL_DATA = "UPDATE_COURSE_CRAWL_DATA"

const fs = window.require('fs');
const { remote } = window.require('electron');
const log = remote.require("electron-log");

export const updateCourseCrawlData = (courseRootDir) => dispatch => {
  fs.readdir(courseRootDir, (err, files) => {
    log.debug(`[redux.actions.course.updateCourseRootDir] found ${files.length} files`)
    files.forEach(file => {
      if (file.endsWith(".crawl.json")) {
        log.debug(`[redux.actions.course.updateCourseRootDir] found crawl json: ${file}`)
        const courseCrawlData = JSON.parse(fs.readFileSync(`${courseRootDir}/${file}`, 'utf8'));
        dispatch({ type: UPDATE_COURSE_CRAWL_DATA, courseRootDir: courseRootDir, courseCrawlData: courseCrawlData })
        log.debug(`[redux.actions.course.updateCourseRootDir] courseCrawlData dispatched!`)
      }
    });
  });
}