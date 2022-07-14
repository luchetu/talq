import actionTypes from "./actionTypes";

export const fetchPostListRequest = (data) => ({
  type: actionTypes.FETCH_POST_LIST_REQUEST,
  data,
});

export const fetchPostListSuccess = (data) => ({
  type: actionTypes.FETCH_POST_LIST_SUCCESS,
  data,
});

export const fetchPostListError = (message) => ({
  type: actionTypes.FETCH_POST_LIST_ERROR,
  message,
});
