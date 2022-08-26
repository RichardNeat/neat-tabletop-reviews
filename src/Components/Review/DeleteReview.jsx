import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteReview } from "../../apis";

export default function DeleteReview ({id}) {

    const navigate = useNavigate();
    const [secondCheck, setSecondCheck] = useState(false);
    const [err, setErr] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = () => {
        setErr(false);
        setSecondCheck(true);
    };

    const handleYesClick = () => {
        setIsLoading(true);
        deleteReview(id).then(() => {
            setIsLoading(false);
            navigate(-1);
        }).catch(() => {
            setIsLoading(false);
            setErr(true);
        });
    };

    const handleNoClick = () => {
        setSecondCheck(false);
    };

    return (
        <>
            <button className="delete-review" onClick={handleClick}>Delete Review</button>
            {secondCheck ? <p>Are you sure? <button className="delete-review" onClick={handleYesClick}>Yes!</button><button className="do-not-delete" onClick={handleNoClick}>No!</button></p>: null}
            {isLoading ? <p>Deleting...</p>: null}
            {err ? <p> Something went wrong, please try again</p>: null}
        </>
    );
};