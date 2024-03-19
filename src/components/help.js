import Grid from "./grid";

export default function Help() {
    return (<div className="modal-wrapper">
                <div>
                    <h2>How to play wordle:</h2>
                </div>
                <div>
                    <h3 style={{marginBottom: "15px"}}>Each guess must be a valid 5-letter word.</h3>
                    <h3>The color of the tiles will change</h3>
                    <h3>to show how close your guess was to the word.</h3>
                </div>
                <div>
                    <Grid solution={"woods"} guess={"weary"} isGuessed={true} />
                    <h3 style={{marginBottom: "15px"}}><b>W</b> is in the word in the correct spot.</h3>
                    <Grid solution={"roped"} guess={"pills"} isGuessed={true} />
                    <h3 style={{marginBottom: "15px"}}><b>I</b> is in the word but in the wrong spot.</h3>
                    <Grid solution={"vagie"} guess={"vague"} isGuessed={true} />
                    <h3><b>U</b> is not in the word in any spot.</h3>
                </div>
            </div>);
}