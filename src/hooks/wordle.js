import { useState, useEffect } from "react";
import db from "../data/db.json";

const useWordle = () => {
    const [solution, setSolution] = useState(db[Math.round(Math.random() * db.length)]);
    const [turn, setTurn] = useState(0);
    const [guesses, setGuesses] = useState([""]);
    const [history, setHistory] = useState([]);
    const [isCorrect, setIsCorrect] = useState(false);
    const [message, setMessage] = useState("");
    const [streak, setStreak] = useState(0);
    
    const init = () => {
        setSolution(db[Math.round(Math.random() * db.length)]);
        setTurn(0);
        setGuesses([""]);
        setHistory([]);
        setIsCorrect(false);
        setMessage("");
    }

    const handleKeyup = ({key}) => {
        if (!isCorrect && !isGameOver()) {
            // Submit the guess
            if (key === "Enter") {
                // If word is already used
                if (history.includes(guesses[turn])) {
                    setMessage("You've already tried that word!");
                    return;
                }
                // If word is not 5 character long
                if (guesses[turn].length !== 5) {
                    setMessage("Word must be 5 character long!");
                    return;
                }
                // If word is not in word list
                if(!db.includes(guesses[turn])) {
                    setMessage("Word is not in word list!");
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

    const isGameOver = () => {
        // win condition
        if (isCorrect) {
            setMessage("You won!");
            setStreak(prev => prev + 1);
            window.removeEventListener('keyup', handleKeyup);
        } else {
            // lose condition
            if (turn > 5) {
                setMessage("You lost!");
                setStreak(0);
                window.removeEventListener('keyup', handleKeyup);
                return true;
            }
            return false;
        }
    };

    useEffect(() => {
        isGameOver();
    }, [isCorrect, turn]);

    return {solution, turn, guesses, history, isCorrect, message, setMessage, streak,
        init, handleKeyup};
}

export default useWordle;