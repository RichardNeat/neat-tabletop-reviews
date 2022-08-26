import { useContext } from "react";
import { UserContext } from "../contexts/current-user";

export default function Admin () {

    // eslint-disable-next-line
    const {currUser, setCurrUser} = useContext(UserContext);

    const handleClick = () => {
        setCurrUser('admin');
        };

    return <button onClick={handleClick}>Log in as admin</button>
};