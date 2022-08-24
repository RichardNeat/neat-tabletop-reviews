import { useState } from "react";
import { deleteComment } from "../../../apis";

export default function DeleteComment ({id, setDeleted, setSuccess}) {

    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState(false);

    const handleClick = () => {
        setSuccess(false);
        setDeleted(false);
        setIsLoading(true);
        deleteComment(id).then(() => {
            setIsLoading(false)
            setDeleted(true)
        })
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