import { useEffect, useState } from "react";
import { getUsers } from "../apis";
import { useContext } from "react";
import { UserContext } from "../contexts/current-user";

export default function Users () {

    const {currUser, setCurrUser} = useContext(UserContext);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(({data}) => {
            setUsers(data.users);
        });
    });

    const changeUser = (event) => {
        setCurrUser(event.target.value)
    };

    return (
        <section className="users-list">
            <h2 className="title">Current User: {currUser}</h2>
            <ul>
            {users.map((user) => {
                return (
                        <li key={user.username} className="user">
                            <h3>{user.username}</h3>
                            <img className="user-img" src={user.avatar_url} alt={user.username}></img>
                            <p><strong>Name: </strong>{user.name}</p>
                            <button value={user.username} onClick={changeUser}>Select User</button>
                        </li>
                    )
                })}
            </ul>
        </section>
    );
};