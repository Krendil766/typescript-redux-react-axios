import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import {rootReducer} from "./reducers/index";
import reduxLogger from 'redux-logger';

const composeEnhancers =
  typeof window === 'object' &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
);

export const store = createStore(
  rootReducer,
  enhancer
);

// export const store = createStore(
//   rootReducer,
//   applyMiddleware(thunk, reduxLogger)
// );