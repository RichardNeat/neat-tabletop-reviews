import { useState, useEffect } from "react";
import { getCommentsById } from "../../apis";

export default function Comments ({id}) {

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
    }, [id]);

    return (
        <section className="comments-list">
            <h3>Comments ({comments.length})</h3>
            {isLoading && !err ? <p>Loading Comments...</p>: null}
            {err ? <p>{err}</p>: null}
            {comments.length === 0 && !err ? "No comments yet!": null}
            <ul>
                {comments.map((comment) => {
                    return <li key={comment.comment_id} className="comment">
                            <strong>Written by </strong>{comment.author} <br></br>
                            {comment.body} <br></br>
                            <strong>Votes: </strong>{comment.votes}
                            </li>
                    })};
            </ul>
        </section>
    );
};