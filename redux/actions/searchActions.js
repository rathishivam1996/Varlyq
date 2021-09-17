export const SEARCH_ACTIONS = {
  SET_SEARCH_TERM: "SET_SEARCH_TERM",
};

export const dispatchSetSearchTerm = (searchTerm) => {
  return {
    type: SEARCH_ACTIONS.SET_SEARCH_TERM,
    payload: searchTerm,
  };
};
