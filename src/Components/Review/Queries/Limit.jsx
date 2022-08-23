// import { useState } from "react";

export default function Limit ({setLimit}) {

    // const [currLimit, setCurrLimit] = useState(10);

    const handleLimitChange = (event) => {
        // console.log(event.target.value);
    };

    return (
        <>
            <form>
                <label htmlFor="limit">Show Results: </label>
                <input value="10" onChange={handleLimitChange} id="limit"></input>
                <button>Submit</button>
            </form>  
        </>
    );
};