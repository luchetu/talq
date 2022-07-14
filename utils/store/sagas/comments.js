
import { call, put, takeEvery, select } from "redux-saga/effects";
import { fetchComments } from "../../api/fetchComments";
import actionTypes from "../reducers/comments/actionTypes";
import {
    fetchCommentListError,
    fetchCommentListSuccess
} from "../reducers/comments/actions";

function* triggerFetchCommentList(action) {

    try {
        const { data } = yield call(
            fetchComments(action.id)
        );

        yield put(fetchCommentListSuccess(data));

    } catch (error) {
        yield put(fetchCommentListError("Failed to fetch posts"));
    }
}

export default function* rootSaga() {
    yield takeEvery(
        actionTypes.FETCH_COMMENT_LIST_REQUEST,
        triggerFetchCommentList
    )
}
