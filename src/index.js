/**
 * React
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home/index';
import * as serviceWorker from './serviceWorker';

/**
 * Redux
 */
import {
  updateCourseCrawlData
} from "./shared/redux/actions/course"
import store from "./ducks/store"
import { Provider } from 'react-redux';

/**
 * Electron & Electron listeners
 */
const { ipcRenderer, remote } = window.require('electron');
const log = remote.require("electron-log");

ipcRenderer.on('course-root-dir', (evt, courseRootDir) => {
  store.dispatch(updateCourseCrawlData(courseRootDir))
})

// mock data
store.dispatch(updateCourseCrawlData('/Users/fernandochristyanto/Temp/dl_coursera/algorithms-specialization'))

/**
 * React renderer
 */
ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('root')
);

/**
 * Service Worker
 */
serviceWorker.unregister();
