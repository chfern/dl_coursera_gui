import { combineReducers, createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import courseReducer from "./reducers/course"
import errorReducer from "./reducers/error"

const store = createStore(
  combineReducers({
    courseReducer,
    errorReducer
  }),
  {},
  applyMiddleware(thunk)
);

export default store;