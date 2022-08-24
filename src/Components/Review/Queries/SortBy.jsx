export default function SortBy ({setSortBy}) {

    const apiSortBys = ["None", "category", "created_at", "designer", "comment_count", "owner", "title", "votes"];
    const sortBys = ["None", "Category", "Date Created", "Designer", "Number of Comments", "Owner", "Title", "Votes"]

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
            <select onChange={handleSortChange}>
                {apiSortBys.map((option, index) => {
                    return <option value={option} key={option} >{sortBys[index]}</option>
                })}
            </select> {}
        </>
    )
}