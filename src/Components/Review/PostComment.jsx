import { useState } from "react"
import { Link } from "react-router-dom";
import { postComment } from "../../apis";

export default function PostComment ({id, setDeleted, success, setSuccess, user}) {

    const [body, setBody] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [err, setErr] = useState(false);
    const [isBodyEmpty, setIsBodyEmpty] = useState(false)
    const [isLoading, setIsLoading] = useState(false);
    const [guest, setGuest] = useState(false);

    const handleChange = (event) => {
        if (user === 'guest') {
            setGuest(true);
        };
        setBody(event.target.value)
        setDeleted(false);
    };

    const handleSubmit = (event) => {
        if (user === 'guest') {
            setGuest(true);
        };
        setSuccess(false);
        setIsLoading(true);
        event.preventDefault();
        if (body.length > 0) {
            setSubmitted(true);
            postComment(id, user, body).then(() => {
                setSuccess(true);
                setErr(false);
                setIsBodyEmpty(false);
                setIsLoading(false);
                setBody('');
                setSubmitted(false);
            }).catch(() => {
                setErr(true);
                setIsLoading(false);
                setIsBodyEmpty(false);
                setSubmitted(false);
            });
        } else {
            setIsBodyEmpty(true);
            setErr(null);
            setIsLoading(false);
        };
    }; 

    return (
        <section className="post-comment">
            <h3>Post a new comment</h3>
            <form onSubmit={handleSubmit}>
                <h4>User: {user}</h4>
                <label htmlFor="comment-body">New Comment: </label>
                <textarea value={body} onChange={handleChange} type="text" id={body.length === 0 ? "comment-body": "comment-body-green"}></textarea>
                <button disabled={submitted ? true: false}>Submit</button> <br></br>
                {err ? <p>Sorry something went wrong, please try again.</p>: null}
                {success ? <p>Your comment has been added!</p>: null}
                {isBodyEmpty ? <p>Please enter some text!</p>: null}
                {isLoading ? <p>Posting...</p>: null}
                {guest ? <p>You must be logged in to add a comment</p>: null}
                {guest ? <Link to={'/users'}>Login here!</Link>: null}
            </form>
        </section>
    )
}