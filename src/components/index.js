import { useEffect } from "react";
import { BsQuestionCircleFill,
    BsBarChartLineFill,
    BsDice5Fill }
from "react-icons/bs";
import useWordle from "../hooks/wordle";
import Grid from "./grid";
import Keyboard from "./keyboard";
import Modal from "./modal";
import Popup from "./popup";
import Help from "./help";
import Stat from "./stat";

export default function Main() {
    const {solution, turn, guesses, history, message, setMessage, stat, handleKeyup, init} = useWordle();

    useEffect(() => {
        window.addEventListener("keyup", handleKeyup);
        return () => window.removeEventListener("keyup", handleKeyup);
    }, [handleKeyup]);

    return (
        <div>
            <div className="icons">
                <div className="icon" onClick={() => 
                    setMessage({content: <Help /> , modal: true})}>
                    <BsQuestionCircleFill />
                </div>
                <div className="icon" onClick={() => 
                    setMessage({content: <Stat stat={stat} /> , modal: true})}>
                    <BsBarChartLineFill />
                </div>
                <div className="icon" onClick={() => 
                    init()}>
                    <BsDice5Fill />
                </div>
            </div>
            <div className="container">
                <div className="header">
                    <h1>Wordle!</h1>
                    <h3>Guess the Wordle in 6 tries.</h3>
                    <h3>{solution}</h3>
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
                    <Modal message={message.content} setMessage={setMessage}/>
                ) : (
                <Popup message={message.content} setMessage={setMessage}/>
            ))}
        </div>
    );
}