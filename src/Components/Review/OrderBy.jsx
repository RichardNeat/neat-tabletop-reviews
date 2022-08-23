import { useState } from "react";

export default function OrderBy ({setReviews, sortBy, orderBy, setSortBy, setOrderBy, page, setPage, limit, setLimit}) {

    // const sortBys = ["None", "Category", "Date Created", "Designer", "Number of Comments", "Owner", "Title", "Votes"]
    // Look at using these for the options text

    const apiSortBys = ["None", "category", "created_at", "designer", "comment_count", "owner", "title", "votes"];
    const [currLimit, setCurrLimit] = useState(10);

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

    const handlePageChange = (event) => {
        setPage(event.target.value);
    };

    const handleLimitChange = (event) => {
        console.log(event.target.value);
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
            </select><br></br>
            <form>
                <label htmlFor="limit">Show Results: </label>
                <input value={currLimit} onChange={handleLimitChange} id="limit"></input>
                <button>Submit</button>
            </form>
            Page: {}
            <select onChange={handlePageChange}>
                {/* need to generalise this to auto fill how many pages is required */}
                <option>1</option>
                <option>2</option>
                <option>3</option>
            </select>
        </>
    );
};