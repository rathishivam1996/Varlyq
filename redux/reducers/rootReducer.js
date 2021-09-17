import { combineReducers } from "redux";

import dataReducer from "./dataReducer";
import searchReducer from "./searchReducer";

// export default function rootReducer(state = {}, action) {
//   return {
//     data: dataReducer(state.data, action),
//     search: searchReducer(state.searchTerm, action),
//   };
// }

const rootReducer = combineReducers({
  data: dataReducer,
  searchTerm: searchReducer,
});

export default rootReducer;
