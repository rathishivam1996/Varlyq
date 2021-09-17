import { fetchData } from "../../api/client";

export const DATA_NAMES = {
  START_FETCH: "DATA_NAMES_START_FETCH",
  FAIL_FETCH: "DATA_NAMES_FAIL_FETCH",
  FINISH_FETCH: "DATA_NAME_FINISH_FETCH",
};

export const startFetchDataNames = () => ({
  type: DATA_NAMES.START_FETCH,
});

export const failFetchDataNames = (error) => ({
  type: DATA_NAMES.FAIL_FETCH,
  payload: error,
});

export const finishFetchDataNames = (data) => ({
  type: DATA_NAMES.FINISH_FETCH,
  payload: data,
});

export const fetchDataNames = (url) => async (dispatch) => {
  dispatch(startFetchDataNames());

  try {
    const data = await fetchData(url);
    dispatch(finishFetchDataNames(data));
  } catch (error) {
    dispatch(failFetchDataNames(error));
  }
};
