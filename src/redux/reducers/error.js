import {
  UPDATE_ERROR
} from '../actions/types'

const INITIAL_STATE = {
  errorMessage: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_ERROR:
      return { ...state, errorMessage: action.errorMessage }
    default:
      return state;
  }
}