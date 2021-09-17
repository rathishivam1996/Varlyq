import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./reducers/rootReducer";

// const reducer = combineReducers({
//   dataReducer,
// });

export default createStore(rootReducer, applyMiddleware(thunk, logger));
