import { useEffect } from "react";
import useWordle from "../hooks/wordle";
import Grid from "./grid";
import Keyboard from "./keyboard";
import Modal from "./modal";

export default function Main() {
    const {solution, turn, guesses, history, isCorrect,
        message, setMessage, showModal, setShowModal, init, handleKeyup} = useWordle();

    useEffect(() => {
        window.addEventListener("keyup", handleKeyup);
        // Win condition
        if (isCorrect) {
            setMessage("You won!");
            setTimeout(() => setShowModal(true), 1000);
            window.removeEventListener('keyup', handleKeyup);
        } else {
            // Lose condition
            if (turn > 5) {
                setMessage("You lost!");
                setTimeout(() => setShowModal(true), 1000);
                window.removeEventListener('keyup', handleKeyup);
            }
        }
        return () => window.removeEventListener("keyup", handleKeyup);
    }, [handleKeyup, isCorrect, turn]);

    return (
        <div>
            <div className="container">
                <div className="header">
                    <div className="title">Wordle!</div>
                    <div>Guess the Wordle in 6 tries.</div>
                </div>
                <div className="grid">
                {guesses.map((guess, i) => (
                    <Grid solution={solution} guess={guess} isGuessed={i < turn} key={i} />
                ))}
                </div>
                <Keyboard solution={solution} history={history}/>
            </div>
            {showModal &&
                <Modal solution={solution} turn={turn} isCorrect={isCorrect} message={message}
                    setShowModal={setShowModal} init={init}/>
            }
        </div>
    );
}