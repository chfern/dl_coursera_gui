/**
 * React
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';
import * as serviceWorker from './serviceWorker';

/**
 * Redux
 */
import {
  updateCourseCrawlData
} from "./redux/actions/course"
import store from "./redux/store"

/**
 * Electron & Electron listeners
 */
const {ipcRenderer, remote}  = window.require('electron');
const log = remote.require("electron-log");

ipcRenderer.on('course-root-dir', (evt, courseRootDir) => {
  store.dispatch(updateCourseCrawlData(courseRootDir))
})

/**
 * React renderer
 */
ReactDOM.render(
  <Home />,
  document.getElementById('root')
);

/**
 * Service Worker
 */
serviceWorker.unregister();
