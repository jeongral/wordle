import { useEffect } from "react";
import useWordle from "../hooks/wordle";
import Grid from "./grid";
import Keyboard from "./keyboard";
import Modal from "./modal";

export default function Main() {
    const {solution, turn, guesses, history, isCorrect, message, setMessage, streak,
        init, handleKeyup} = useWordle();

    useEffect(() => {
        window.addEventListener("keyup", handleKeyup);
        return () => window.removeEventListener("keyup", handleKeyup);
    }, [handleKeyup]);

    return (
        <div>
            <div className="container">
                <div className="header">
                    <h1>Wordle!</h1>
                    <h3>Guess the Wordle in 6 tries.</h3>
                    <h3>Current streak: {streak}</h3>
                </div>
                <div className="grid">
                {guesses.map((guess, i) => (
                    <Grid solution={solution} guess={guess} isGuessed={i < turn} key={i} />
                ))}
                </div>
                <Keyboard solution={solution} history={history}/>
            </div>
            {message &&
                <Modal solution={solution} turn={turn} isCorrect={isCorrect} message={message}
                    setMessage={setMessage} init={init}/>
            }
        </div>
    );
}