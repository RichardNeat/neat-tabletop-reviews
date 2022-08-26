import { useEffect, useState } from "react";
import { getUsers } from "../../apis";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext, LoggedInContext } from "../../contexts/current-user";
import DeleteUser from "./DeleteUser";

export default function Users () {

    // eslint-disable-next-line
    const {isLoggedIn, setIsLoggedIn} = useContext(LoggedInContext);
    const {currUser, setCurrUser} = useContext(UserContext);
    const [users, setUsers] = useState([]);
    const [err, setErr] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        setErr(false);
        getUsers().then(({data}) => {
            setUsers(data.users);
            setIsLoading(false);
        })
        .catch(() => {
            setErr(true);
            setIsLoading(false);
        });
    }, [users]);

    const changeUser = (event) => {
        setCurrUser(event.target.value);
        setIsLoggedIn(true);
    };

    if (isLoading) return <p className="loading-errors">Loading Users...</p>
    if (err) return <p className="loading-errors">Something went wrong please try again</p>

    return (
        <section className="user-list">
            <h3 className="post-review-link">Current User: {currUser}</h3> <br></br>
            <Link className="post-review-link" to='/new-user'>Create a new account</Link>
            <ul>
            {users.map((user) => {
                return (
                        <li key={user.username} className="user">
                            <h3>{user.username}</h3>
                            <img className="user-img" src={user.avatar_url} alt={user.username}></img>
                            <p><strong>Name: </strong>{user.name}</p>
                            <button value={user.username} onClick={changeUser}>Select User</button>
                            {currUser === user.username ? " Logged in!": null}
                            {currUser === user.username ? <DeleteUser username={user.username}/>: null}
                        </li>
                    )
                })}
            </ul>
        </section>
    );
};