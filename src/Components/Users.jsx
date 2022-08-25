import { useEffect, useState } from "react";
import { getUsers } from "../apis";

export default function Users () {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(({data}) => {
            setUsers(data.users);
        });
    });

    return (
        <section className="users-list">
            <h2 className="title">Users</h2>
            <ul>
            {users.map((user) => {
                return (
                        <li key={user.username} className="user">
                            <h3>{user.username}</h3>
                            <img className="user-img" src={user.avatar_url} alt={user.username}></img>
                            <p><strong>Name: </strong>{user.name}</p>
                            <button>Select User</button>
                        </li>
                    )
                })}
            </ul>
        </section>
    );
};