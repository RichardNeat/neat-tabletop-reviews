import { Link } from "react-router-dom";

export default function Header () {
    return (
        <>
            <h1 className="title">Neat Tabletop Reviews</h1>
            <Link to={'/'}>Home</Link>
        </>
    );
};