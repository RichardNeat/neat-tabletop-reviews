import { useState } from "react";
import { deleteComment } from "../../../apis";

export default function DeleteComment ({id, setDeleted, setSuccess}) {

    // implement functionality where user can only delete their own comment once users has been added

    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(false);

    const handleClick = () => {
        setButtonDisabled(true);
        setSuccess(false);
        setDeleted(false);
        setIsLoading(true);
        deleteComment(id).then(() => {
            setIsLoading(false);
            setDeleted(true);
        })
        .catch(() => {
            setIsLoading(false);
            setErr(true);
            setButtonDisabled(false);
        });
    };

    return (
        <>
            <button disabled={buttonDisabled ? true: false} onClick={handleClick}>Delete</button>
            {isLoading ? <p>Deleting...</p>: null}
            {err ? <p>Something went wrong please try again</p>: null}
        </>
    );
};