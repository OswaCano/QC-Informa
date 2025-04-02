import {useEffect} from "react";
import {getPosts} from "../../api/posts.js";

function PostList() {

    useEffect(() => {
        getPosts().then((data) => {

        })
    }, [])

    return (
        <div className="posts"> PostList</div>
    )
}

export default PostList;