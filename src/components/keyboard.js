export default function Keyboard({solution, history}) {
    let keyboard = [["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
                    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
                    ["z", "x", "c", "v", "b", "n", "m"]];
    
    const allGuesses = () => {
        return history.join("").split("");
    };

    const exactGuesses = () => {
        return solution.split("").filter((letter, i) => {
            return history.map((word) => word[i]).includes(letter);
        })
    };

    const inexactGuesses = () => {
        return solution.split("").filter((letter) => {
            return allGuesses().includes(letter);
        })
    };

    return (
        <div className="keyboard">
            {keyboard.map((keys, i) => (
                <div className="key-list" key={i}>
                {keys.map((k) => { 
                    const bgColor = exactGuesses().includes(k)
                        ? "var(--green)"
                        : inexactGuesses().includes(k)
                        ? "var(--gold)"
                        : allGuesses().includes(k)
                        ? "var(--red)"
                        : "var(--dark-gray)";
                    return (<button className="key" style={{backgroundColor: `${bgColor}`}}key={k}>{k}</button>);
                })}
                </div>
            ))}
        </div>
    )
}