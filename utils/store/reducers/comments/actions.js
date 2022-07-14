import actionTypes from "./actionTypes";

export const fetchCommentListRequest = (id) => ({
  type: actionTypes.FETCH_COMMENT_LIST_REQUEST,
  id,
});

export const fetchCommentListSuccess = (data) => ({
  type: actionTypes.FETCH_COMMENT_LIST_SUCCESS,
  data,
});

export const fetchCommentListError = (message) => ({
  type: actionTypes.FETCH_COMMENT_LIST_ERROR,
  message,
});
