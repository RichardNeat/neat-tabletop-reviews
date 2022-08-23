import { useState } from "react"
import { postComment } from "../../apis";

export default function PostComment ({id}) {

    const [author, setAuthor] = useState("happyamy2016");
    const [body, setBody] = useState('');
    const [success, setSuccess] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (event) => {
        setBody(event.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (body.length > 0) {
            setSubmitted(true);
            postComment(id, author, body).then(() => {
                setSuccess(true);
            });
        };
    }; 

    return (
        <section className="post-comment">
            <h3>Post a new comment</h3>
            <form onSubmit={handleSubmit}>
                {/* generalise this when user is added to auto fill this information */}
                <h4>User: {author}</h4>
                <label htmlFor="comment-body">New Comment: </label>
                <textarea value={body} onChange={handleChange} type="text" id={body.length === 0 ? "comment-body-red": "comment-body-green"}></textarea>
                <button disabled={submitted ? true: false}>Submit</button> <br></br>
                {success ? <p>Your comment has been added!</p>: null}
            </form>
        </section>
    )
}