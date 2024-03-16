export default function Modal({solution, turn, isCorrect, message, setMessage, init}) {
    return (
        <div>
            {isCorrect || turn > 5
                ? (
                    <div className="modal">
                        <div className="modal-content">
                            <h1 className="title">{message}</h1>
                            <div>
                                <h3>The hidden Wordle was: {solution}</h3>
                                {isCorrect && (
                                    <h3>You gussed the Wordle in {turn}
                                        {turn < 2 ? (<span> try!</span>) : (<span> tries!</span>)}
                                    </h3>
                                )}
                            </div>
                            <button onClick={() => {
                                setMessage("");
                                init();
                                document.querySelector(".header").style.display = "block";
                                }}><h3>Play again!</h3>
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="modal-message" onAnimationEnd={() => setMessage("")}>
                        <h3>{message}</h3>
                    </div>
                )
            }
        </div>
    )
}