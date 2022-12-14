import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getReviewsByCategory } from "../apis";

export default function Categories () {

    const [categoryList, setCategoryList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [err, setErr] = useState(null);
    const {category} = useParams();

    useEffect(() => {
        setErr(false);
        setIsLoading(true);
        getReviewsByCategory(category).then(({data}) => {
            setCategoryList(data.reviews)
            setIsLoading(false);
        }).catch(() => {
            setErr(true);
            setIsLoading(false)
        });
    }, [category]);

    if (isLoading) return <p className="loading-errors">Loading Reviews...</p>
    if (err) return <p className="loading-errors">Review category not found, please try again</p>
    
    return (
        <>
            <h2 className="category-title">All {category} reviews</h2>
            {categoryList.map((review) => {
                return <li key={review.review_id} className="review">
                <h3 className="review-title">{review.title}</h3>
                <p className="category-tag">Category: {review.category}</p>
                <p className="comment-count">Comments: {review.comment_count}</p>
                <img className="review-img" src={review.review_img_url} alt={review.title}></img>
                <p className="author-info">Written by {review.owner}</p>
                <Link to={`/review/${review.review_id}`} className="see-more">See More</Link>
                </li>
            })}
        </>
    );
};
