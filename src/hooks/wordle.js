import { useState } from "react";
import db from "../data/db.json";

const useWordle = () => {
    const [solution, setSolution] = useState(db[Math.round(Math.random() * db.length)]);
    const [turn, setTurn] = useState(0);
    const [guesses, setGuesses] = useState([""]);
    const [history, setHistory] = useState([]);
    const [isCorrect, setIsCorrect] = useState(false);
    const [message, setMessage] = useState("");
    const [showModal, setShowModal] = useState(false);
    
    const init = () => {
        setSolution(db[Math.round(Math.random() * db.length)]);
        setTurn(0);
        setGuesses([""]);
        setHistory([]);
        setIsCorrect(false);
    }
    
    const handleKeyup = ({key}) => {
        if (!isCorrect) {
            // Submit the guess
            if (key === "Enter") {
                // If word is already used
                if (history.includes(guesses[turn])) {
                    setMessage("You've already tried that word!");
                    setShowModal(true);
                    return;
                }
                // If word is not 5 character long
                if (guesses[turn].length !== 5) {
                    setMessage("Word must be 5 character long!");
                    setShowModal(true);
                    return;
                }
                // If word is not in word list
                if(!db.includes(guesses[turn])) {
                    setMessage("Word is not in word list!");
                    setShowModal(true);
                    return;
                }
                // If word is valid
                setHistory([...history, guesses[turn]]);
                setGuesses((prevGuesses) => {
                    return [...prevGuesses, ""];
                })
                setTurn(prev => prev + 1);
                if (guesses[turn] === solution) {
                    setIsCorrect(true);
                }
            }
            // Remove the character
            if (key === "Backspace") {
                setGuesses((prevGuesses) => {
                    const tempGuesses = [...prevGuesses];
                    tempGuesses[turn] = tempGuesses[turn].slice(0, -1);
                    return tempGuesses;
                })
                return;
            }
            // Add the character
            if (/^[A-Za-z]$/.test(key)) {
                setGuesses((prevGuesses) => {
                    const tempGuesses = [...prevGuesses];
                    if (tempGuesses[turn].length < 5) {
                        tempGuesses[turn] = tempGuesses[turn] + key;
                    }
                    return tempGuesses;
                })
                return;
            }
        }
    }

    return {solution, turn, guesses, history, isCorrect,
        message, setMessage, showModal, setShowModal, init, handleKeyup};
}

export default useWordle;