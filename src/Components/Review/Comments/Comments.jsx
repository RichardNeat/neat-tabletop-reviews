import { useState, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../../../contexts/current-user";
import { getCommentsById } from "../../../apis";
import PostComment from "./PostComment";
import DeleteComment from "./DeleteComment";
import Moment from 'moment';
import Votes from "../Votes";
import Page from "../Queries/Page";


export default function Comments ({id, comment_count}) {

    // eslint-disable-next-line
    const {currUser, setCurrUser} = useContext(UserContext);
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [err, setErr] = useState(null);
    const [deleted, setDeleted] = useState(false);
    const [success, setSuccess] = useState(false);
    const [commentCount, setCommentCount] = useState(comment_count);
    const [page, setPage] = useState(1);

    useEffect(() => {
        getCommentsById(id, page).then(({data}) => {
            setComments(data.comments);
            setIsLoading(false);
            setErr(null);
        }).catch(() => {
            setErr('Something went wrong, please try again');
        });
    }, [id, page]);

    return (
        <section className="comments-list">
            <PostComment id={id} success={success} setSuccess={setSuccess} setDeleted={setDeleted} setCommentCount={setCommentCount}/>
            {isLoading && !err ? <p>Loading Comments...</p>: null}
            {err ? <p>{err}</p>: null}
            {deleted ? <p>Comment Deleted!</p>: null}
            {comments.length === 0 && !err ? "No comments yet!": null}
            <h3>Comments: ({commentCount})</h3>
            <Page page={page} setPage={setPage} totalPages={Math.ceil(commentCount/10)}/>
            <ul>
                {comments.map((comment) => {
                    return <li key={comment.comment_id} className="comment">
                            <strong>Written by </strong>{comment.author} <br></br>
                            Created: {Moment(comment.created_at).format("Do MMM YYYY")} <br></br>
                            <p className="comment-body">{comment.body}</p>
                            {comment.author === currUser ? <DeleteComment id={comment.comment_id} setDeleted={setDeleted} setSuccess={setSuccess}/>: null}
                            <Votes comment_id = {comment.comment_id} comment_votes = {comment.votes}/>
                            </li>
                    })}
            </ul>
        </section>
    );
};