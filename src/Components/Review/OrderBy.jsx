import { useState } from "react";
import { getReviews } from "../../apis";

export default function OrderBy ({setReviews, sortBy, orderBy, setSortBy, setOrderBy}) {

    // const sortBys = ["None", "Category", "Date Created", "Designer", "Number of Comments", "Owner", "Title", "Votes"]
    // Look at using these for the options text

    const apiSortBys = ["None", "category", "created_at", "designer", "comment_count", "owner", "title", "votes"];

    const handleSortChange = (event) => {
        const value = event.target.value;
        if (value !== 'None') {
            setSortBy(value);
        } else {
            setSortBy('created_at');
        };
    };

    const handleOrderChange = (event) => {
        setOrderBy(event.target.value);
    };

    return (
        <>
        Sort by: {}
            <select onChange={handleSortChange}>
                {apiSortBys.map((option) => {
                    return <option value={option} key={option} >{option}</option>
                })}
            </select> {}
            Order: {}
            <select onChange={handleOrderChange}>
                <option value="DESC">Descending</option>
                <option value="ASC">Ascending</option>
            </select>
        </>
    );
};