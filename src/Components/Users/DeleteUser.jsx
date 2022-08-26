import { useContext, useState } from "react";
import { deleteUser } from "../../apis";
import { UserContext } from "../../contexts/current-user";

export default function DeleteUser ({username}) {

    // eslint-disable-next-line
    const {currUser, setCurrUser} = useContext(UserContext);
    const [secondCheck, setSecondCheck] = useState(false);
    const [err, setErr] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = () => {
        setErr(false);
        setSecondCheck(true);
    };

    const handleYesClick = () => {
        setIsLoading(true);
        deleteUser(username).then(() => {
            setIsLoading(false);
        }).catch(() => {
            setIsLoading(false);
            setErr(true);
        });
        setCurrUser("guest");
    };

    const handleNoClick = () => {
        setSecondCheck(false);
    };

    return (
        <section>
            <button onClick={handleClick} className="delete-review">Delete User</button>
            {secondCheck ? <p>Are you sure? <button className="delete-review" onClick={handleYesClick}>Yes!</button><button className="do-not-delete" onClick={handleNoClick}>No!</button></p>: null}
            {isLoading ? <p>Deleting...</p>: null}
            {err ? <p> Something went wrong, please try again</p>: null}
        </section>
    );
};