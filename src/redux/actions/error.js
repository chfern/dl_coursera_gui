import {
  UPDATE_ERROR
} from './types'

const { remote } = window.require('electron');
const log = remote.require("electron-log");

export const updateError = errorMessage => {
  log.debug(`[redux.actions.error.updateError] errorMessage: ${errorMessage}`)
  return { type: UPDATE_ERROR, errorMesage: errorMessage };
}