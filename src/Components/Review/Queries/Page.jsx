export default function Page ({setPage, totalPages}) {

    const handlePageChange = (event) => {
        setPage(event.target.value);
    };

    // console.log(Array(3))
    // console.log(Array.from(Array(3)))
    // console.log(Array(totalPages).keys())
    // console.log(Object.keys(Array.from(Array(3))))
    // console.log(Array.from(Array(totalPages).keys()))

    return (
        <>
            Page: {}
            <select onChange={handlePageChange}>
                {Array.from(Array(totalPages).keys()).map((e) => {
                    return <option key={e + 1}>{e + 1}</option>
                })}
            </select>
        </>
    );
};