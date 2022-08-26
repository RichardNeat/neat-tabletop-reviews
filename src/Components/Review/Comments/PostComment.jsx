import { useState } from "react"
import { Link } from "react-router-dom";
import { postComment } from "../../../apis";
import { useContext } from "react";
import { UserContext } from "../../../contexts/current-user";

export default function PostComment ({id, setDeleted, success, setSuccess}) {

    // eslint-disable-next-line
    const {currUser, setCurrUser} = useContext(UserContext);

    const [body, setBody] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [err, setErr] = useState(false);
    const [isBodyEmpty, setIsBodyEmpty] = useState(false)
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (event) => {
        if (currUser === 'guest') setSubmitted(true);
        setBody(event.target.value)
        setDeleted(false);
    };

    const handleSubmit = (event) => {
        setSuccess(false);
        setIsLoading(true);
        event.preventDefault();
        if (body.length > 0) {
            setSubmitted(true);
            postComment(id, currUser, body).then(() => {
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
            if (currUser === 'guest') setIsBodyEmpty(false);
            setErr(null);
            setIsLoading(false);
        };
    }; 

    return (
        <section className="post-comment">
            <h3>Post a new comment</h3>
            <form onSubmit={handleSubmit}>
                <h4>Logged in as {currUser}</h4>
                <label htmlFor="comment-body">New Comment: </label>
                <textarea value={body} onChange={handleChange} type="text" id={body.length === 0 ? "comment-body": "comment-body-green"}></textarea>
                <button disabled={submitted ? true: false}>Submit</button> <br></br>
                {err ? <p>Sorry something went wrong, please try again.</p>: null}
                {success ? <p>Your comment has been added!</p>: null}
                {isBodyEmpty ? <p>Please enter some text!</p>: null}
                {isLoading ? <p>Posting...</p>: null}
                {currUser === "guest" ? <p>You must be logged in to add a comment</p>: null}
                {currUser === "guest" ? <Link to={'/users'}>Login here!</Link>: null}
            </form>
        </section>
    )
}