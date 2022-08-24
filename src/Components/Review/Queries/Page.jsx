export default function Page ({setPage, totalPages}) {

    const handlePageChange = (event) => {
        setPage(event.target.value);
    };

    console.log(Array.from(Array(totalPages).keys()))

    return (
        <>
            Page: {}
            <select onChange={handlePageChange}>
                {Array.from(Array(totalPages).keys()).map((page, index) => {
                    return <option>{index + 1}</option>
                })}
            </select>
        </>
    );
};