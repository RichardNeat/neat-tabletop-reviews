import { useState, useEffect } from "react";
import { getCommentsById } from "../../apis";
import PostComment from "./PostComment";
import DeleteComment from "./Queries/DeleteComment";

export default function Comments ({id, comment_count}) {

    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [err, setErr] = useState(null);
    const [deleted, setDeleted] = useState(false);
    const [success, setSuccess] = useState(false);
    const [author, setAuthor] = useState("happyamy2016");

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
            <PostComment id={id} success={success} setSuccess={setSuccess} setDeleted={setDeleted} author={author}/>
            {isLoading && !err ? <p>Loading Comments...</p>: null}
            {err ? <p>{err}</p>: null}
            {deleted ? <p>Comment Deleted!</p>: null}
            {comments.length === 0 && !err ? "No comments yet!": null}
            <ul>
                {comments.map((comment) => {
                    return <li key={comment.comment_id} className="comment">
                            <strong>Written by </strong>{comment.author} <br></br>
                            Created At: {comment.created_at} <br></br>
                            {comment.body} <br></br>
                            <strong>Votes: </strong>{comment.votes} <br></br>
                            {comment.author === author ? <DeleteComment id={comment.comment_id} setDeleted={setDeleted} setSuccess={setSuccess}/>: null}
                            </li>
                    })}
            </ul>
        </section>
    );
};