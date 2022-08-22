import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getReviewsByCategory } from "../apis";

export default function Categories () {

    const [categoryList, setCategoryList] = useState([])
    const {category} = useParams();

    useEffect(() => {
        getReviewsByCategory(category).then(({data}) => {
            setCategoryList(data.reviews)
        })
    }, [category]);
    
    return (
        <>
            <h2>All {category} reviews</h2>
            {categoryList.map((review) => {
                return <li key={review.review_id} className="review">
                <h3 className="review-title">{review.title}</h3>
                <section className="category-tag">Category: {review.category}</section>
                <section className="comment-count">Comments: {review.comment_count}</section>
                <img className="review-img" src={review.review_img_url} alt={review.title}></img>
                <section className="author-info">Written by {review.owner}</section>
                </li>
            })}
        </>
    );
};
