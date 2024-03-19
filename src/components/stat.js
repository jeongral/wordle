export default function Stat({stat}) {
    const winrate = stat.played !== 0 ? Math.round(stat.win / stat.played * 100) : 0;
    return (<div className="modal-wrapper">
                <h2>Statistics:</h2>
                <div>
                    <div style={{display: "flex",  gap: "15px"}}>
                        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                            <h2>{stat.played}</h2>
                            <h3>Played</h3>
                        </div>
                        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                            <h2>{winrate}</h2>
                            <h3>Win %</h3>
                        </div>
                        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                            <h2>{stat.streak}</h2>
                            <h3>Current</h3>
                            <h3>Streak</h3>
                        </div>
                        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                            <h2>{stat.max_streak}</h2>
                            <h3>Max</h3>
                            <h3>Streak</h3>
                        </div>
                    </div>
                </div>
                <h2>Guess Distribution</h2>
                <div className="chart">
                    {Object.keys(stat.distribution).map((key) =>
                                        (<div className="chart-content">
                                            <div className="chart-label"><h3>{key}</h3></div>
                                            <div className="bar"><h3>{stat.distribution[key]}</h3></div>
                                        </div>))}
                </div>
            </div>);
}