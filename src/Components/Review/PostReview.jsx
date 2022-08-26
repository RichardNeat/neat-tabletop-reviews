export default function PostReview () {
    return (
        <section className="post-review-link">   
            <h3>New Review</h3>
            <h4>User</h4>
            <form className="post-comment">
                <label htmlFor="title">Title:</label>
                <input id="title"></input>
                <label htmlFor="review-body">Review Text:</label>
                <textarea id="review-body"></textarea>
                <label htmlFor="designer">Designer:</label>
                <input id="designer"></input>
                <select name="category">
                    <option value="stategy">stategy</option>
                    <option>etc</option>
                </select>
            </form>
        </section>
    );
};