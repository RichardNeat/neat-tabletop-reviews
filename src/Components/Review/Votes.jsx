import { useState } from "react";
import { addVote } from "../../apis"

export default function Votes ({id, votes}) {

    const [voteTally, setVoteTally] = useState(votes);
    const [err, setErr] = useState(null);

    const handleUpClick = () => {
        setVoteTally((currVoteTally) => {
            return currVoteTally + 1;
        });
        addVote(id, 1).catch(() => {
            setVoteTally((currVoteTally) => {
                return currVoteTally - 1;
            });
            setErr('Something went wrong, please try again');
        });
    };

    const handleDownClick = () => {
        setVoteTally((currVoteTally) => {
            return currVoteTally - 1;
        });
        addVote(id, -1).catch(() => {
            setVoteTally((currVoteTally) => {
                return currVoteTally + 1;
            });
            setErr('Something went wrong, please try again');
        });
    };

    if (err) return <p>{err}</p>
    
    return (
        <>
            <p className="review-votes">
            Votes: {voteTally}
            <button onClick={handleUpClick} className="vote-button"><strong>⬆</strong></button>
            <button onClick={handleDownClick} className="downVote-button"><strong>⬇</strong></button>
            </p>
        </>
    )
}