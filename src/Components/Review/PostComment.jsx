import { useState } from "react"
import { postComment } from "../../apis";

export default function PostComment ({id}) {

    const [author, setAuthor] = useState("happyamy2016");
    const [body, setBody] = useState('');

    const handleChange = (event) => {
        setBody(event.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        postComment(id, author, body).then((res) => {
            console.log(res);
        });
    }; 

    return (
        <section className="post-comment">
            <h3>Post a new comment</h3>
            <form onSubmit={handleSubmit}>
                {/* generalise this when user is added to auto fill this information */}
                <h4>User: {author}</h4>
                <label htmlFor="comment-body">New Comment: </label>
                <textarea value={body} onChange={handleChange} type="text" id="comment-body"></textarea>
                <button>Submit</button>
            </form>
        </section>
    )
}