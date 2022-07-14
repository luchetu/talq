import actionTypes from "./actionTypes";

const initialState = {
    postList: null,
    fetchingPostList: false,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_POST_LIST_REQUEST:
            return { ...state, fetchingPostList: true };

        case actionTypes.FETCH_POST_LIST_SUCCESS:
            return {
                ...state,
                fetchingPostList: false,
                postList: action.data,
            };

        case actionTypes.FETCH_POST_LIST_ERROR:
            return { ...state, fetchingPostList: false };
        default:
            return state;
    }
}
