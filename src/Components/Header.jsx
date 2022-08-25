import { Link } from "react-router-dom";

export default function Header ({user, setCurrUser}) {

    return (
        <section className="title">
            <h1>Neat Tabletop Reviews</h1>
            <h4>User: {user}</h4>
            <p><Link to={'/users'}>Change User</Link></p>
            <Link to={'/'}>Home</Link>
        </section>
    );
};