import { useState } from "react";
import { addVote } from "../../apis"

export default function Votes ({id, votes}) {

    const [voteTally, setVoteTally] = useState(votes);
    const [err, setErr] = useState(null);

    const handleClick = () => {
        setVoteTally((currVoteTally) => {
            return currVoteTally + 1;
        });
        addVote(id).catch(() => {
            setVoteTally((currVoteTally) => {
                return currVoteTally - 1;
            });
            setErr('Something went wrong, please try again');
        });
    };

    if (err) return <p>{err}</p>
    
    return (
        <>
            <p className="review-votes">
            Votes: {voteTally}
            <button onClick={handleClick} className="vote-button"><strong>^</strong></button>
            </p>
        </>
    )
}