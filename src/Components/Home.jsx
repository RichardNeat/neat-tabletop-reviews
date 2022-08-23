import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getReviews } from "../apis";
import OrderBy from "./Review/OrderBy";

export default function Home () {

    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [err, setErr] = useState(null);
    const [sortBy, setSortBy] = useState('created_at');
    const [orderBy, setOrderBy] = useState('DESC');
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);

    useEffect(() => {
        getReviews(sortBy, orderBy, page, limit).then(({data}) => {
            setReviews(data.reviews);
            setIsLoading(false)
        }).catch(() => {
            setErr(true);
            setIsLoading(false)
        });
    },[sortBy, orderBy, page, limit]);

    if (isLoading) return <p>Loading Reviews...</p>
    if (err) return <p>Sorry there has been a problem, please try again</p>

    return (
        <section>
            <OrderBy setReviews = {setReviews} sortBy={sortBy} orderBy={orderBy} setSortBy={setSortBy} setOrderBy={setOrderBy} page={page} setPage={setPage} limit={limit} setLimit={setLimit}/>
            <ul className='review-list'>
                {reviews.map((review) => {
                    return <li key={review.review_id} className="review">
                        <h3 className="review-title">{review.title}</h3>
                        <p className="category-tag">Category: {review.category}</p>
                        <p className="comment-count">Comments: {review.comment_count} Votes: {review.votes}</p>
                        <p className="designer">Designer: {review.designer}</p>
                        <img className="review-img" src={review.review_img_url} alt={review.title}></img>
                        <p className="author-info">Written by {review.owner}</p>
                        <p className="created-at">Date: {review.created_at}</p>
                        <Link to={`/review/${review.review_id}`} className="see-more">See More</Link>
                        </li>
                })}
            </ul>
        </section>
    );
};