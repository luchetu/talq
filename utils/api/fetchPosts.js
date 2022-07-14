import { https } from ".";

export function fetchPosts() {
    return () =>
        https.get("posts");
}