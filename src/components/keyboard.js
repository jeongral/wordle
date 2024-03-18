export default function Keyboard({solution, history}) {
    let keyboard = [["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
                    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
                    ["z", "x", "c", "v", "b", "n", "m"]];
    
    const guesses = () => {
        return history.join("").split("");
    };

    const correctGuesses = () => {
        return solution.split("").filter((char, i) => {
            return history.map((word) => word[i]).includes(char);
        })
    };

    const partialGuesses = () => {
        return solution.split("").filter((char) => {
            return guesses().includes(char);
        })
    };

    return (
        <div className="keyboard">
            {keyboard.map((keys, i) => (
                <div className="key-list" key={i}>
                {keys.map((k) => { 
                    const bgColor = correctGuesses().includes(k)
                        ? "var(--green)"
                        : partialGuesses().includes(k)
                        ? "var(--gold)"
                        : guesses().includes(k)
                        ? "var(--gray)"
                        : "var(--dark-gray)";
                    const color = !(correctGuesses().includes(k) || partialGuesses().includes(k)) && guesses().includes(k)
                        ? "var(--dark-gray)"
                        : "var(--white)";
                    return (<button className="key" style={{backgroundColor: `${bgColor}`, color: `${color}`}}
                                    key={k}><h2>{k}</h2></button>);
                })}
                </div>
            ))}
        </div>
    )
}