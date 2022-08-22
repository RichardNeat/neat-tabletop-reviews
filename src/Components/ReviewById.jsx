import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewById } from "../apis";

export default function ReviewById () {

    const {review_id} = useParams();
    const [review, setReview] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [err, setErr] = useState(null);

    useEffect(() => {
        getReviewById(review_id).then(({data}) => {
            setReview(data.review);
            setIsLoading(false);
        })
        .catch(() => {
            console.log("here")
            setErr(true);
            setIsLoading(false)
        });
    }, [review_id]);

    if (isLoading) return <p>Loading Review...</p>
    if (err) return <p>Sorry that review has not been found, please try another</p>

    return (
        <section className="single-review">
            <img className="review-img" src={review.review_img_url} alt={review.title}></img>
            <h3 className="single-review-title">{review.title}</h3>
            <p className="author-info">Written by {review.owner}</p>
            <p className="category-tag">Category: {review.category}</p>
            <p className="review-body">{review.review_body}</p>
            <p className="review-votes">Likes: {review.votes}</p>
        </section>
    );
};