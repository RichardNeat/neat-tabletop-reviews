export default function Limit ({limit, setLimit, setPage}) {

    // set page to 1 if limit is changed to avoid issues?

    const handleLimitChange = (event) => {
        setLimit(event.target.value);
    };

    return (
        <>
            <label htmlFor="limit">Show Results: </label>
            <input value={limit} onChange={handleLimitChange} id="limit"></input>
        </>
    );
};