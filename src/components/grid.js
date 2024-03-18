
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
                                : "var(--gray)";
                const color = !isGuessed || solution.includes(char)
                                ? "var(--white)"
                                : "var(--dark-gray)";
                return (<div className="character" style={{backgroundColor: `${bgColor}`, color: `${color}`}}
                            key={i}><h2>{char}</h2></div>)
            })}
        </div>
    )
}