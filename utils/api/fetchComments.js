import { https } from ".";

export function fetchComments(id) {
    return () =>
        https.get("comments?id=" + id);
}