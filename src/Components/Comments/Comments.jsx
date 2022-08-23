import { useState, useEffect } from "react";
import { getCommentsById } from "../../apis";

export default function Comments ({id}) {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        getCommentsById(id).then(({data}) => {
            setComments(data.comments);
        });
    }, [id]);

    return (
        <section className="comments-list">
            <h3>Comments ({comments.length})</h3>
            {comments.length === 0 ? "No comments yet!": null}
            <ul>
                {comments.map((comment) => {
                    return <li key={comment.comment_id} className="comment">
                            <strong>Written by </strong>{comment.author} <br></br>
                            {comment.body} <br></br>
                            <strong>Votes: </strong>{comment.votes}
                            </li>
                    })}
            </ul>
        </section>
    );
};