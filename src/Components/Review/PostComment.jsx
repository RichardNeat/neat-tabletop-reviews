import { useState } from "react"
import { postComment } from "../../apis";

export default function PostComment ({id}) {

    const [author, setAuthor] = useState("happyamy2016");
    const [body, setBody] = useState('');
    const [success, setSuccess] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [err, setErr] = useState(false);
    const [isBodyEmpty, setIsBodyEmpty] = useState(false)
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (event) => {
        setBody(event.target.value)
    };

    const handleSubmit = (event) => {
        setIsLoading(true);
        event.preventDefault();
        if (body.length > 0) {
            postComment(id, author, body).then(() => {
                setSuccess(true);
                setSubmitted(true);
                setErr(false);
                setIsBodyEmpty(false);
                setIsLoading(false);
                setBody('');
            }).catch(() => {
                setErr(true);
                setIsLoading(false);
                setIsBodyEmpty(false);
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
                {/* generalise this when user is added to auto fill this information */}
                <h4>User: {author}</h4>
                <label htmlFor="comment-body">New Comment: </label>
                <textarea value={body} onChange={handleChange} type="text" id={body.length === 0 ? "comment-body": "comment-body-green"}></textarea>
                <button disabled={submitted ? true: false}>Submit</button> <br></br>
                {err ? <p>Sorry something went wrong, please try again.</p>: null}
                {success ? <p>Your comment has been added!</p>: null}
                {isBodyEmpty ? <p>Please enter some text!</p>: null}
                {isLoading ? <p>Posting...</p>: null}
            </form>
        </section>
    )
}