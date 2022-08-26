import { useState, useContext } from "react";
import { postReview } from "../../apis";
import { UserContext } from "../../contexts/current-user";
import { useNavigate } from "react-router-dom";

export default function PostReview ({categories}) {

    const navigate = useNavigate();

    // eslint-disable-next-line
    const {currUser, setCurrUser} = useContext(UserContext);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [designer, setDesigner] = useState('');
    const [category, setCategory] = useState('strategy');
    const [err, setErr] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [empty, setEmpty] = useState(false);

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleBodyChange = (event) => {
        setBody(event.target.value);
    };

    const handleDesignerChange = (event) => {
        setDesigner(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (title.length > 0 && body.length > 0 && designer.length > 0) {
            setIsLoading(true);
            setErr(false);
            postReview(currUser, title, body, designer, category).then(({data}) => {
                setIsLoading(false);
                navigate(`/review/${data.review.review_id}`);
            }).catch(() => {
                setIsLoading(false);
                setErr(true);
            });
        } else {
            setEmpty(true);
        };
    };

    return (
        <section className="post-review-link">   
            <h3>New Review</h3>
            <h4>Logged in as {currUser}</h4>
            <form onSubmit={handleSubmit}>
                <h4><label htmlFor=".post-review-input">Review Title: </label>
                <input id={title.length < 1 ? "post-review-input": "post-review-input-green"} onChange={handleTitleChange}></input></h4>
                <section><label htmlFor="review-body"></label></section>
                <section><textarea id={body.length === 0 ? "comment-body": "comment-body-green"} onChange={handleBodyChange} placeholder="Review here..."></textarea></section>
                <section><label htmlFor="post-review-input">Designer: </label>
                <input id={designer.length < 1 ? "post-review-input": "post-review-input-green"} onChange={handleDesignerChange} placeholder="Game Designer?"></input></section><br></br>
                <section><label htmlFor="post-review-category">Category: </label><select id="post-review-category" name="category" onChange={handleCategoryChange}>
                    {categories.map((category) => {
                        return <option key={category} value={category.slug}>{category.slug}</option>
                    })}
                </select></section><br></br>
                <section><button>Submit</button></section>
                {empty ? <p>Please fill in all the above fields</p>: null}
                {isLoading ? <p>Posting review...</p>: null}
                {err ? <p>Something went wrong, please try again</p>: null}
            </form>
        </section>
    );
};