import { useState, useEffect } from "react";
import { getCommentsById } from "../../apis";
import PostComment from "./PostComment";
import DeleteComment from "./Queries/DeleteComment";

export default function Comments ({id, comment_count}) {

    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [err, setErr] = useState(null);

    useEffect(() => {
        getCommentsById(id).then(({data}) => {
            setComments(data.comments);
            setIsLoading(false);
            setErr(null);
        }).catch(() => {
            setErr('Something went wrong, please try again');
        });
    }, [id, comments]);

    return (
        <section className="comments-list">
            <h3>Comments ({comment_count})</h3>
            <PostComment id={id}/>
            {isLoading && !err ? <p>Loading Comments...</p>: null}
            {err ? <p>{err}</p>: null}
            {comments.length === 0 && !err ? "No comments yet!": null}
            <ul>
                {comments.map((comment) => {
                    return <li key={comment.comment_id} className="comment">
                            <strong>Written by </strong>{comment.author} <br></br>
                            Created At: {comment.created_at} <br></br>
                            {comment.body} <br></br>
                            <strong>Votes: </strong>{comment.votes} <br></br>
                            <DeleteComment id={comment.comment_id}/>
                            </li>
                    })}
            </ul>
        </section>
    );
};