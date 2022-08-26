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

    const handleTitleChange = (event) => {
        setTitle(event.target.value)
    };

    const handleBodyChange = (event) => {
        setBody(event.target.value)
    };

    const handleDesignerChange = (event) => {
        setDesigner(event.target.value)
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        postReview(currUser, title, body, designer, category).then(({data}) => {
            navigate(`/review/${data.review.review_id}`);
        });
    };

    return (
        <section className="post-review-link">   
            <h3>New Review</h3>
            <h4>Posting as {currUser}</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title:</label>
                <input id="title" onChange={handleTitleChange}></input>
                <label htmlFor="review-body">Review Text:</label>
                <textarea id="review-body" onChange={handleBodyChange}></textarea>
                <label htmlFor="designer">Designer:</label>
                <input id="designer" onChange={handleDesignerChange}></input>
                <select name="category" onChange={handleCategoryChange}>
                    {categories.map((category) => {
                        return <option key={category} value={category.slug}>{category.slug}</option>
                    })}
                </select>
                <button>Submit</button>
            </form>
        </section>
    );
};