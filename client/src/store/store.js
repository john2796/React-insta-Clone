import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer/index";
import { loadState, saveState } from "../localStorage/index";
const middleware = [thunk];
import throttle from "lodash/throttle";

const persistedState = loadState();

const store = createStore(
  rootReducer,
  persistedState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

store.subscribe(
  throttle(() => {
    //use throttle so it only update localstorage every 1000ms for performance issue because subsricbe setState is call all the time ensure doesn't get called evey 1000 ms
    saveState({
      instagram: store.getState().instagram
    });
  }, 1000)
);

export default store;
