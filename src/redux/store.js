import { combineReducers, createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import courseReducer from "./reducers/course"

const store = createStore(
  combineReducers({
    courseReducer
  }),
  {},
  applyMiddleware(thunk)
);

export default store;