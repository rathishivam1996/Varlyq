import { SEARCH_ACTIONS } from "../actions/searchActions";

const initialState = {
  searchTerm: "",
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_ACTIONS.SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
