import "./CSS/results.css"
import { useEffect, useState } from "react"
import OneTeam from "./components/OneTeam"
import RikishiResults from "./components/RikishiResults"

function Results({ rikishi, teams, teamsLoaded }) {

    const [rikishiLoaded, setRikishiLoaded] = useState(false)
    const [resultsRikishi, setResultsRikishi] = useState([])
    
    // change this every basho
    const currentTeams = teams.filter((team) => team.basho === 2023.1)

    useEffect(() => {
        setResultsRikishi(rikishi)
        if (rikishi.length > 0) {
            setRikishiLoaded(true)
        }
    }, [rikishi])

    function renderTeams() {

        const allTeamsAsObjects = currentTeams.map((team) => {
            const teamRikishi = ([
                team.r1,
                team.r2,
                team.r3,
                team.r4,
                team.r5,
                team.r6,
                team.r7])

            const newRikishiObjects = teamRikishi.map((tR) => {
                return resultsRikishi.filter((r) => r.shikona === tR)[0]
            })

            // change this every basho
            const ROScores = newRikishiObjects.map((r) => r.FS_history[12])

            let scoreSum = 0
            for (const item of ROScores) { scoreSum += item }

            const teamWTotal = { ...newRikishiObjects, scoreSum: scoreSum, user: team.user, id: team.id }

            return (teamWTotal)
        })

        const teamsHiToLo = [...allTeamsAsObjects].sort((a, b) => b.scoreSum - a.scoreSum)

        return (
            (teamsLoaded === false) ?
                <h2>Loading...</h2>
                :

                <div>
                    <div id="hello">
                        <p>Congratulations to <h2>heavenhouse666</h2> for your win in the Hatsu 2023 Fantasy Sumo Tournament!</p>
                        <p>All scores on the Results page are final,<br></br> and they'll be available until the next draft is live.</p>
                        <p>The banzuke for the next tournament will be published on February 27th, and the Draft page will be up soon after. The next tournament begins on March 12th, so make sure you draft before then!</p>
                    </div>
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
                            {teamsHiToLo.map((team) => {
                                return (
                                    <OneTeam team={team} key={team.id} rikishi={rikishi} />
                                )
                            })}
                        </div>
                    </div>
                    <RikishiResults rikishi={rikishi} />
                </div>

        )
    }

    return (
        (rikishiLoaded === false) ?
            <h2>Loading...</h2>
            :
            renderTeams()
    )
}

export default Results