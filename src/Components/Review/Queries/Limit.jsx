export default function Limit ({limit, setLimit}) {

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