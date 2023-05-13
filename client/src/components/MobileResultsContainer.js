import OneTeamMobile from "./OneTeamMobile"

function MobileResultsContainer({ goodTeams, rikishi }) {
    return (
        <div className='resultsContainer'>
            <div className='teamsTop'>
                <h2 className="teamName">team name</h2>
                <p className="smallerColumn">1</p>
                <p className="smallerColumn">2</p>
                <p className="smallerColumn">3</p>
                <p className="smallerColumn">4</p>
                <p className="smallerColumn">5</p>
                <p className="smallerColumn">6</p>
                <p className="smallerColumn">7</p>
                <h3 className="total">Total:</h3>
            </div>
            <div id="teamsContainer">
                {goodTeams.map((team) => {
                    return (
                        <OneTeamMobile team={team} key={team.id} rikishi={rikishi} />
                    )
                })}
            </div>
        </div>
    )
}

export default MobileResultsContainer