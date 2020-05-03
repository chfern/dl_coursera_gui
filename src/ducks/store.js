import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import combinedReducers from './reducer'

const reduxDevToolsComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combinedReducers,
  {},
  reduxDevToolsComposer(applyMiddleware(thunk))
);

export default store;