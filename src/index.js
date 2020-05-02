import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';
import * as serviceWorker from './serviceWorker';

const electron = window.require('electron');
const fs = electron.remote.require('fs');
const {ipcRenderer, remote}  = electron
const log = remote.require("electron-log");
/**
 * Electron listeners
 */
ipcRenderer.on('course-root-dir', (evt, courseRootDir) => {
  log.error("asd")
  console.log("dispatch:", courseRootDir)
})

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
