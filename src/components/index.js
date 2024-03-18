import { useEffect } from "react";
import { AiFillQuestionCircle } from "react-icons/ai";
import useWordle from "../hooks/wordle";
import Grid from "./grid";
import Keyboard from "./keyboard";
import Modal from "./modal";
import Popup from "./popup";

export default function Main() {
    const {solution, turn, guesses, history, message, setMessage, streak, handleKeyup} = useWordle();

    useEffect(() => {
        window.addEventListener("keyup", handleKeyup);
        return () => window.removeEventListener("keyup", handleKeyup);
    }, [handleKeyup]);

    return (
        <div>
            <div className="setting-icon" onClick={() => 
                setMessage({content: <div className="modal-content">
                                        <h2>How to play wordle</h2>
                                        <h3>Each guess must be a valid 5-letter word.</h3>
                                        <h3>The color of the tiles will change to show how close your guess was to the word.</h3>
                                        <h3><span style={{color: "var(--green)"}}>GREEN </span>
                                        incidates that the character is in the correct spot.</h3>
                                        <h3><span style={{color: "var(--gold)"}}>GOLD </span>
                                        incidates that the character is in the word but in the wrong spot.</h3>
                                        <h3><span style={{color: "var(--gray)"}}>GRAY </span>
                                        incidates that the character is not in the word.</h3>
                                        <h3>Enter a character to start the game.</h3>
                                        <button onClick={() => setMessage({})}>Close</button>
                                    </div>, modal: true})}>
                <AiFillQuestionCircle />
            </div>
            <div className="container">
                <div className="header">
                    <h1>Wordle!</h1>
                    <h3>Guess the Wordle in 6 tries.</h3>
                    <h3>Current streak: {streak}</h3>
                </div>
                <div className="grid">
                {guesses.map((guess, i) => (
                    <Grid solution={solution} guess={guess} isGuessed={i < turn} key={i}/>
                ))}
                </div>
                <Keyboard solution={solution} history={history}/>
            </div>
            {message.content && (
                message.modal ? (
                    <Modal message={message.content}/>
                ) : (
                <Popup message={message.content} setMessage={setMessage}/>
            ))}
        </div>
    );
}