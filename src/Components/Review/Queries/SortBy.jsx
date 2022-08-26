export default function SortBy ({sortBy, setSortBy}) {

    const apiSortBys = ["None", "category", "created_at", "designer", "comment_count", "owner", "title", "votes"];
    const sortBys = ["None", "Category", "Date Created", "Designer", "Number of Comments", "Owner", "Title", "Score"]

    const handleSortChange = (event) => {
        const value = event.target.value;
        if (value !== 'None') {
            setSortBy(value);
        } else {
            setSortBy('created_at');
        };
    };

    return (
        <>
            Sort by: {}
            <select value={sortBy} onChange={handleSortChange}>
                {apiSortBys.map((option, index) => {
                    return <option value={option} key={option} >{sortBys[index]}</option>
                })}
            </select> {}
        </>
    )
}