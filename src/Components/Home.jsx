import { useState, useEffect } from "react";
import { getReviews } from "../apis";

export default function Home () {

    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getReviews().then(({data}) => {
            setReviews(data.reviews);
            setIsLoading(false)
        });
    }, []);

    if (isLoading) return <p>Loading Reviews...</p>

    return (
        <ul className='review-list'>
            {reviews.map((review) => {
                return <li key={review.review_id} className="review">
                    <h3 className="review-title">{review.title}</h3>
                    <section className="category-tag">Category: {review.category}</section>
                    <section className="comment-count">Comments: {review.comment_count}</section>
                    <img className="review-img" src={review.review_img_url} alt={review.title}></img>
                    <section className="author-info">Written by {review.owner}</section>
                    </li>
            })}
        </ul>
    );
};