import { useState, useEffect } from "react";
import { getReviews } from "../apis";

export default function Home () {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        getReviews().then(({data}) => {
            setReviews(data.reviews);
        });
    }, []);

    return (
        <ul className='review-list'>
            {reviews.map((review) => {
                return <li key={review.title} className="review">
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