import actionTypes from "./actionTypes";

const initialState = {
    commentList: null,
    fetchingCommentList: false,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_COMMENT_LIST_REQUEST:
            return { ...state, fetchingCommentList: true };

        case actionTypes.FETCH_COMMENT_LIST_SUCCESS:
            return {
                ...state,
                fetchingCommentList: false,
                commentList: action.data,
            };

        case actionTypes.FETCH_COMMENT_LIST_ERROR:
            return { ...state, fetchingCommentList: false };
        default:
            return state;
    }
}
