import { useState } from "react";
import { addVote } from "../../apis"

export default function Votes ({id, votes}) {

    const [voteTally, setVoteTally] = useState(votes);
    const [err, setErr] = useState(null);
    const [upClicks, setUpClicks] = useState(0);
    const [downClicks, setDownClicks] = useState(0);
    const [upDisabled, setUpDisabled] = useState(false);
    const [downDisabled, setDownDisabled] = useState(false);

    const handleUpClick = () => {
        if (upClicks === 0) {
            setVoteTally((currVoteTally) => {
                return currVoteTally + 1;
            })
            setDownDisabled(true);
            setUpClicks(1);
            setErr(null);
            addVote(id, 1).catch(() => {
                setVoteTally((currVoteTally) => {
                    return currVoteTally - 1;
                });
                setErr('Something went wrong, please try again');
            });
        } else {
            setVoteTally((currVoteTally) => {
                return currVoteTally - 1;
            })
            setDownDisabled(false);
            setUpClicks(0);
            setErr(null);
            addVote(id, -1)
        };
    };

    const handleDownClick = () => {
        if (downClicks === 0) {
            setVoteTally((currVoteTally) => {
                return currVoteTally - 1;
            });
            setUpDisabled(true);
            setDownClicks(1);
            setErr(null);
            addVote(id, -1).catch(() => {
                setVoteTally((currVoteTally) => {
                    return currVoteTally + 1;
                });
                setErr('Something went wrong, please try again');
            });
        } else {
            setVoteTally((currVoteTally) => {
                return currVoteTally + 1;
            })
            setUpDisabled(false)
            setDownClicks(0);
            setErr(null);
            addVote(id, 1);
        };
    };
    
    return (
        <>
            <p className="review-votes">
            <strong>Score: </strong>{voteTally}
            <button disabled={upDisabled} onClick={handleUpClick} className="upVote-button"><strong>{upClicks ? "undo": "⬆"}</strong></button>
            <button disabled={downDisabled} onClick={handleDownClick} className="downVote-button"><strong>{downClicks ? "undo": "⬇"}</strong></button>
            {err ? <p>{err}</p>: null}
            </p>
        </>
    );
};