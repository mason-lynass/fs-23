import OneTeam from "./OneTeam"

function DesktopResultsContainer({ goodTeams, rikishi }) {
    return (
        <div className='resultsContainer'>
            <div className='teamsTop'>
                <h2 className="teamName">team name</h2>
                <p className="smallerColumn">sanyaku</p>
                <p className="smallerColumn">M1-M4</p>
                <p className="smallerColumn">M5-M8</p>
                <p className="smallerColumn">M9-M12</p>
                <p className="smallerColumn">M13-M17</p>
                <p className="smallerColumn">extra</p>
                <p className="smallerColumn">juryo</p>
                <h3 className="total">Total:</h3>
            </div>
            <div id="teamsContainer">
                {goodTeams.map((team) => {
                    return (
                        <OneTeam team={team} key={team.id} rikishi={rikishi} />
                    )
                })}
            </div>
        </div>
    )
}

export default DesktopResultsContainer