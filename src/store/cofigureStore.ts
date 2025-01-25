import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { thunk } from "redux-thunk";
import { logger } from "redux-logger";
import { ApplicationState, reducers } from "@store/index";

export default function configureStore(initialState?: ApplicationState) {
  const rootReducer = combineReducers({
    ...reducers,
  });

  const enhancers: any[] = [];
  const windowIfDefined =
    typeof window === "undefined" ? null : (window as any);
  if (windowIfDefined && windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__) {
    enhancers.push(windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__());
  }

  const middleware: any[] = [thunk, logger];

  return createStore(
    rootReducer,
    initialState,
    compose<any>(applyMiddleware(...middleware), ...enhancers)
  );
}
