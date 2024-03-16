export default function Modal({solution, turn, isCorrect, message, setMessage, init}) {
    return (
        <div>
            {isCorrect || turn > 5
                ? (
                    <div className="modal">
                        <div className="modal-content">
                            <div className="title">{message}</div>
                            <div>
                                <p>The hidden word was: {solution}</p>
                                {isCorrect && (
                                    <p>You gussed the Wordle in {turn}
                                        {turn < 2 ? (<span> try!</span>) : (<span> tries!</span>)}
                                    </p>
                                )}
                            </div>
                            <button onClick={() => {
                                setMessage("");
                                init();
                                document.querySelector(".header").style.display = "block";
                                }}>Play again!
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="modal-message" onAnimationEnd={() => setMessage("")}>
                        <p>{message}</p>
                    </div>
                )
            }
        </div>
    )
}