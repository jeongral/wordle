import { useState, useEffect } from "react";
import db from "../data/db.json";

const useWordle = () => {
    /*
        Essential game content variables:
            solution: String
                initalized to a random String word from the word database
                (would be great if this could be a user typed custom word)
            turn: int
                initialized to 0
                (working as an index for guesses and history array)
            guesses: String array
                initialized to an empty String array
                (contains all the guesses including the current one)
            history: String array
                initialized to an empty array 
                (contains all the guesses as character; used to keep track of the word correctness)
            isCorrect: boolean
                initialized to false
                (will become true only if the current guess is equal to the solution)
            message: String
                initialized to an empty string
                (used as a message for modal page)
            streak: int
                initialized to 0
                (will be updated whenever the game gets over; +1 if user wins, resets if user loses)
    */
   
    const [solution, setSolution] = useState(db[Math.round(Math.random() * db.length)]);
    const [turn, setTurn] = useState(0);
    const [guesses, setGuesses] = useState([""]);
    const [history, setHistory] = useState([]);
    const [isCorrect, setIsCorrect] = useState(false);
    const [message, setMessage] = useState({});
    const [stat, setStat] = useState({
        played: 0,
        win: 0,
        lose: 0,
        streak: 0,
        max_streak: 0,
        distribution: {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0}
    });
    
    const init = () => {
        document.querySelector(".container").style.backgroundColor = "var(--black)";
        setSolution(db[Math.round(Math.random() * db.length)]);
        setTurn(0);
        setGuesses([""]);
        setHistory([]);
        setIsCorrect(false);
        setMessage({});
    }

    const handleKeyup = ({key}) => {
        if (!isCorrect && !isGameOver()) {
            // Submit the guess
            if (key === "Enter") {
                // If word is already used
                if (history.includes(guesses[turn])) {
                    setMessage({content: "You've already tried that word!", modal: false});
                    return;
                }
                // If word is not 5 character long
                if (guesses[turn].length !== 5) {
                    setMessage({content: "Word must be 5 character long!", modal: false});
                    return;
                }
                // If word is not in word list
                if(!db.includes(guesses[turn])) {
                    setMessage({content: "Word is not in word list!", modal: false});
                    return;
                }
                // If word is valid
                setHistory([...history, guesses[turn]]);
                setGuesses((prevGuesses) => {
                    return [...prevGuesses, ""];
                })
                setTurn(prev => prev + 1);
                // If the current guess is same as the solution
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
                if (guesses[turn].length === 5) {
                    setMessage({content: "Word must be 5 character long!", modal: false});
                    return;
                }
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
        // Win condition
        if (isCorrect) {
            setMessage({content: <div className="modal-wrapper">
                            <h2 className="title">You won!</h2>
                            <h3>The hidden Wordle was: {solution}</h3>
                            <h3>You gussed the Wordle in {turn}
                            {turn < 2 ? (<span> try!</span>) : (<span> tries!</span>)}
                            </h3>
                            <button onClick={() => {init();}}><h3>Play again!</h3></button>
                        </div>, modal: true});
            setStat((prev) => {
                const newStreak = prev.streak++;
                const newMaxStreak = newStreak > prev.max_streak ? newStreak : prev.max_streak;
                return ({
                    ...stat, 
                    played: prev.played++,
                    win: prev.win++,
                    streak: newStreak,
                    max_streak: newMaxStreak,
                    distribution: {...prev.distribution , [turn]: prev.distribution[turn]++}
                })})
            document.querySelector(".container").style.backgroundColor = "var(--green)";
            window.removeEventListener('keyup', handleKeyup);
        } else {
            // Lose condition
            if (turn > 5) {
                setMessage({content: <div className="modal-wrapper">
                            <h2 className="title">You lost!</h2>
                            <h3>The hidden Wordle was: {solution}</h3>
                            <button onClick={() => {init();}}><h3>Play again!</h3></button>
                        </div>, modal: true});
                setStat((prev) => {
                    return ({
                        ...stat, 
                        played: prev.played++,
                        lose: prev.lose++,
                        streak: 0,
                    })})
                document.querySelector(".container").style.backgroundColor = "var(--red)";
                window.removeEventListener('keyup', handleKeyup);
                return true;
            }
            return false;
        }
    };

    // Checks isCorrect and turn everytime and if those get updated, check if it's game over
    useEffect(() => {
        isGameOver();
    }, [isCorrect, turn]);

    return {solution, turn, guesses, history, isCorrect, message, setMessage, stat,
        init, handleKeyup};
}

export default useWordle;