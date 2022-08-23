export default function PostComment ({categories}) {
    return (
        <section className="post-comment">
            <h3>Post a new comment</h3>
            <form>
                {/* generalise this when user is added to auto fill this information */}
                <label htmlFor="author">User: </label>
                <input id="author"></input> <br></br>
                <label htmlFor="comment-body">New Comment: </label>
                <input id="comment-body"></input>
            </form>
        </section>
    )
}