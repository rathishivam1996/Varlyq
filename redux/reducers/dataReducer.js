import { DATA_NAMES } from "../actions/dataActions";

const initialState = {
  list: [],
  isFetching: false,
  error: null,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_NAMES.START_FETCH:
      return { ...state, isFetching: true };
    case DATA_NAMES.FINISH_FETCH:
      return { isFetching: false, list: action.payload, error: null };
    case DATA_NAMES.FAIL_FETCH:
      return { ...state, isFetching: false, error: action.payload };
    default:
      return state;
  }
};

export default dataReducer;
