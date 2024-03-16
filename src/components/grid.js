
export default function Grid({ solution, guess, isGuessed }) {
    return (
        <div className="row">
            {guess.split("").map((char, i) => {
                const bgColor = !isGuessed
                                ? "var(--dark-gray)"
                                : solution[i] === guess[i]
                                ? "var(--green)"
                                : solution.includes(char)
                                ? "var(--gold)"
                                : "var(--red)";
                return (<div className="character" style={{backgroundColor: `${bgColor}`}} key={i}><h2>{char}</h2></div>)
            })}
        </div>
    )
}