export default function OrderBy ({orderBy, setOrderBy}) {

    const handleOrderChange = (event) => {
        setOrderBy(event.target.value);

    };

    return (
        <>
            Order: {}
            <select value={orderBy} onChange={handleOrderChange}>
                <option value="DESC">Descending</option>
                <option value="ASC">Ascending</option>
            </select><br></br>     
        </>
    )
}