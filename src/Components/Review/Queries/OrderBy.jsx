export default function OrderBy ({setOrderBy}) {

    const handleOrderChange = (event) => {
        setOrderBy(event.target.value);
    };

    return (
        <>
            Order: {}
            <select onChange={handleOrderChange}>
                <option value="DESC">Descending</option>
                <option value="ASC">Ascending</option>
            </select><br></br>     
        </>
    )
}