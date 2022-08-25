import { Link } from "react-router-dom";

export default function Header () {
    return (
        <section className="title">
            <h1>Neat Tabletop Reviews</h1>
            <h4>User: happyamy2016</h4>
            <p><Link to={'/users'}>Change User</Link></p>
            <Link to={'/'}>Home</Link>
        </section>
    );
};