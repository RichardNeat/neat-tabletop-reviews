import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteReview } from "../../apis";

export default function DeleteReview ({id}) {

    const navigate = useNavigate();
    const [secondCheck, setSecondCheck] = useState(false);

    const handleClick = () => {
        setSecondCheck(true);
    };

    const handleYesClick = () => {
        deleteReview(id);
        navigate(-1);
    };

    const handleNoClick = () => {
        setSecondCheck(false);
    };

    return (
        <>
            <button className="delete-review" onClick={handleClick}>Delete Review</button>
            {secondCheck ? <p>Are you sure? <button className="delete-review" onClick={handleYesClick}>Yes!</button><button className="do-not-delete" onClick={handleNoClick}>No!</button></p>: null}
        </>
    );
};