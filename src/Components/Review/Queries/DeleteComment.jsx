import { useState } from "react";
import { deleteComment } from "../../../apis";

export default function DeleteComment ({id}) {

    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState(false);
    const [deleted, setDeleted] = useState(false);

    const handleClick = () => {
        setIsLoading(true);
        deleteComment(id)
        setIsLoading(false)
        .catch(() => {
            setIsLoading(false);
            setErr(true);
        });
    };

    return (
        <>
            <button onClick={handleClick}>Delete</button>
            {isLoading ? <p>Deleting...</p>: null}
            {err ? <p>Something went wrong please try again</p>: null}
        </>
    );
};