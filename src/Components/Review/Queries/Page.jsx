export default function Page ({page, setPage, totalPages}) {

    const handlePageChange = (event) => {
        setPage(event.target.value);
    };

    return (
        <>
            Page: {}
            <select value={page} onChange={handlePageChange}>
                {Array.from(Array(totalPages).keys()).map((e) => {
                    return <option key={e + 1}>{e + 1}</option>
                })}
            </select>
        </>
    );
};