import { useState } from "react";
import { postUser } from "../apis";

export default function NewUser () {

    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');

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
        event.preventDefault();
        postUser(username, name, url).then((res) => {
            console.log(res);
        });
    };

    console.log(username, name, url);

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
        </section>

    );
};