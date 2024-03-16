export default function Modal({solution, turn, isCorrect, message, setShowModal, init}) {
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
                                setShowModal(false);
                                init();
                                document.querySelector(".header").style.display = "block";
                                }}>Play again!
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="modal-message" onAnimationEnd={() => setShowModal(false)}>
                        <p>{message}</p>
                    </div>
                )
            }
        </div>
    )
}