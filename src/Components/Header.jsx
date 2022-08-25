import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext, LoggedInContext } from "../contexts/current-user";

export default function Header () {
    
    const {isLoggedIn, setIsLoggedIn} = useContext(LoggedInContext);
    const {currUser, setCurrUser} = useContext(UserContext);

    const handleClick = () => {
        setCurrUser('guest');
        setIsLoggedIn(false);
    };

    return (
        <section className="title">
            <h1>Neat Tabletop Reviews</h1>
            <h4>User: {currUser}</h4>
            {isLoggedIn ? <button onClick={handleClick}>Log Out</button>: null}
            {!isLoggedIn ? <p><Link to={'/users'}>Login Here</Link></p>: null}
            <Link to={'/'}> | Home</Link>
        </section>
    );
};