import { all, fork } from "redux-saga/effects";
import * as posts from "./posts";
import * as comments from "./comments";

export default function* rootSaga() {
    yield all(
        [
            ...Object.values(posts),
            ...Object.values(comments),
        ].map(fork)
    );
}
