export default function Limit ({limit, setLimit, setPage}) {

    const handleLimitChange = (event) => {
        setPage(1);
        setLimit(event.target.value);
    };

    return (
        <>
            <label htmlFor="limit">{} Show Results: </label>
            <input value={limit} onChange={handleLimitChange} id="limit"></input>
        </>
    );
};