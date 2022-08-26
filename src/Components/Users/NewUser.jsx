import { useState } from "react";
import { postUser } from "../../apis";
import { useNavigate } from "react-router-dom";

export default function NewUser () {

    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState(false);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleUrlChange = (event) => {
        setUrl(event.target.value);
    };

    const handleSubmit = (event) => {
        setErr(false);
        setIsLoading(true);
        event.preventDefault();
        postUser(username, name, url).then(() => {
            setIsLoading(false);
            navigate('/users')
        }).catch(() => {
            setErr(true);
            setIsLoading(false);
        });
    };

    return (
        <section className="post-review-link">
            <h2>Sign up for an account</h2>
            <form onSubmit={handleSubmit}>
                <section><label htmlFor="username">Username: </label>
                <input onChange={handleUsernameChange}></input></section> <br></br>
                <section><label htmlFor="name">Your Name: </label>
                <input onChange={handleNameChange}></input></section> <br></br>
                <section><label htmlFor="avatar_url">Avatar URL: </label>
                <input onChange={handleUrlChange}></input></section> <br></br>
                <button>Submit</button>
            </form>
            {err ? <p>Sorry there has been a problem, please try again</p>: null}
            {isLoading ? <p>Posting...</p>: null}
        </section>

    );
};