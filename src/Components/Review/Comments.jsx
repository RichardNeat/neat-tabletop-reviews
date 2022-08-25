import { useState, useEffect } from "react";
import { getCommentsById } from "../../apis";
import PostComment from "./PostComment";
import DeleteComment from "./Queries/DeleteComment";
import Moment from 'moment';
import Votes from "./Votes";

export default function Comments ({id, comment_count, user}) {

    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [err, setErr] = useState(null);
    const [deleted, setDeleted] = useState(false);
    const [success, setSuccess] = useState(false);

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
            <PostComment id={id} success={success} setSuccess={setSuccess} setDeleted={setDeleted} user={user}/>
            {isLoading && !err ? <p>Loading Comments...</p>: null}
            {err ? <p>{err}</p>: null}
            {deleted ? <p>Comment Deleted!</p>: null}
            {comments.length === 0 && !err ? "No comments yet!": null}
            <h3>Comments: ({comment_count})</h3>
            <ul>
                {comments.map((comment) => {
                    return <li key={comment.comment_id} className="comment">
                            <strong>Written by </strong>{comment.author} <br></br>
                            Created: {Moment(comment.created_at).format("Do MMM YYYY")} <br></br>
                            <p className="comment-body">{comment.body}</p>
                            {comment.author === user ? <DeleteComment id={comment.comment_id} setDeleted={setDeleted} setSuccess={setSuccess}/>: null}
                            <Votes comment_id = {comment.comment_id} comment_votes = {comment.votes}/>
                            </li>
                    })}
            </ul>
        </section>
    );
};