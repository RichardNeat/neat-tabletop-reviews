import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewById } from "../../apis";
import Votes from "./Votes";
import Comments from "./Comments";

export default function ReviewById () {

    const {review_id} = useParams();
    const [review, setReview] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [err, setErr] = useState(false);

    useEffect(() => {
        setErr(false);
        setIsLoading(true);
        getReviewById(review_id).then(({data}) => {
            setReview(data.review);
            setIsLoading(false);
        })
        .catch(() => {
            setErr(true);
            setIsLoading(false)
        });
    }, [review_id]);

    if (isLoading) return <p>Loading Review...</p>
    if (err) return <p>Review not found, please try again</p>

    return (
            <section className="single-review">
                <img className="review-img" src={review.review_img_url} alt={review.title}></img>
                <h3 className="single-review-title">{review.title}</h3>
                <p className="author-info"><strong>Written by </strong>{review.owner}</p>
                <p className="category-tag"><strong>Category: </strong>{review.category}</p>
                <p className="review-body">{review.review_body}</p>
                <Votes id = {review.review_id} votes = {review.votes}/>
                <Comments id = {review.review_id} comment_count = {review.comment_count}/>
            </section>
    );
};