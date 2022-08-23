export default function Page ({setPage}) {

    const handlePageChange = (event) => {
        setPage(event.target.value);
    };

    return (
        <>
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