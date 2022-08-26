import { useState } from "react";
import { addVote } from "../../apis";
import { useContext } from "react";
import { UserContext } from "../../contexts/current-user";
import { Link } from "react-router-dom";

export default function Votes ({id, votes, comment_id, comment_votes}) {

    // eslint-disable-next-line
    const {currUser, setCurrUser} = useContext(UserContext);

    const [voteTally, setVoteTally] = useState(votes ? votes: comment_votes);
    const [err, setErr] = useState(null);
    const [upClicks, setUpClicks] = useState(0);
    const [downClicks, setDownClicks] = useState(0);
    const [upDisabled, setUpDisabled] = useState(false);
    const [downDisabled, setDownDisabled] = useState(false);
    const [guest, setGuest] = useState(false);

    const handleUpClick = () => {
        if (currUser !== 'guest') {
            if (upClicks === 0) {
                setVoteTally((currVoteTally) => {
                    return currVoteTally + 1;
                })
                setDownDisabled(true);
                setUpClicks(1);
                setErr(null);
                addVote(id, 1, comment_id).catch(() => {
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
                addVote(id, -1, comment_id).catch(() => {
                    setVoteTally((currVoteTally) => {
                        return currVoteTally - 1;
                    });
                    setErr('Something went wrong, please try again');
                });
            };
        } else {
            setGuest(true);
        };
    };

    const handleDownClick = () => {
        if (currUser !== 'guest') {
            if (downClicks === 0) {
                setVoteTally((currVoteTally) => {
                    return currVoteTally - 1;
                });
                setUpDisabled(true);
                setDownClicks(1);
                setErr(null);
                addVote(id, -1, comment_id).catch(() => {
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
                addVote(id, 1, comment_id).catch(() => {
                    setVoteTally((currVoteTally) => {
                        return currVoteTally - 1;
                    });
                    setErr('Something went wrong, please try again');
                });
            };
        } else {
            setGuest(true);
        };
    };
    
    return (
        <>
            <p className="review-votes">
            <strong>Score: </strong>{voteTally}
            <button disabled={upDisabled} onClick={handleUpClick} className="upVote-button"><strong>{upClicks ? "undo": "⬆"}</strong></button>
            <button disabled={downDisabled} onClick={handleDownClick} className="downVote-button"><strong>{downClicks ? "undo": "⬇"}</strong></button>
            {err ? <p>{err}</p>: null}
            {guest ? <p>You must be logged in to add vote!</p>: null}
            {guest ? <Link to={'/users'}>Login here!</Link>: null}
            </p>
        </>
    );
};