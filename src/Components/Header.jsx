import { Link } from "react-router-dom";

export default function Header () {
    return (
        <section className="title">
            <h1>Neat Tabletop Reviews</h1>
            <Link to={'/'}>Home</Link>
        </section>
    );
};