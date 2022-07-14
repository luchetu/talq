
import { call, put, takeEvery, select } from "redux-saga/effects";
import { fetchPosts } from "../../api/fetchPosts";
import actionTypes from "../reducers/posts/actionTypes";
import {
    fetchPostListError,
    fetchPostListSuccess
} from "../reducers/posts/actions";

function* triggerFetchPostList() {

    try {
        const { data } = yield call(
            fetchPosts()
        );

        yield put(fetchPostListSuccess(data));

    } catch (error) {
        yield put(fetchPostListError("Failed to fetch posts"));
    }
}

export default function* rootSaga() {
    yield takeEvery(
        actionTypes.FETCH_POST_LIST_REQUEST,
        triggerFetchPostList
    )
}
