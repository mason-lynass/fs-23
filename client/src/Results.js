import "./CSS/results.css"
import { useEffect, useState } from "react"
import OneTeam from "./components/OneTeam"
import RikishiResults from "./components/RikishiResults"

function Results({ rikishi, teams, teamsLoaded, rankSort }) {

    const [rikishiLoaded, setRikishiLoaded] = useState(false)
    const [resultsRikishi, setResultsRikishi] = useState([])

    // change this every basho
    const currentTeams = teams.filter((team) => team.basho === 2023.3)

    useEffect(() => {
        setResultsRikishi(rikishi)
        if (rikishi.length > 0) {
            rankSort(rikishi)
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
            const ROScores = newRikishiObjects.map((r) => r.FS_20233)

            let scoreSum = 0
            for (const item of ROScores) { scoreSum += item }

            const teamWTotal = { ...newRikishiObjects, scoreSum: scoreSum, user: team.user, id: team.id }

            return (teamWTotal)
        })

        const teamsHiToLo = [...allTeamsAsObjects].sort((a, b) => b.scoreSum - a.scoreSum)

        // update this with valid users
        const goodTeamNames = ['mason', 'acorn', 'Seitos', 'Tetsuba', 'nemalie', 'jlynass', 'Yamashiro', 'Bunbukuchagama', 'emplexus', 'Kanashisasu', 'Dreiden', 'blackroseyagami', 'Kohakuho', 'Hami', 'Terunozuna', 'BeskarBeast', 'Nondescriptusername', 'sumo-api', 'Gaijingai', 'N00bonicplague', 'maysteve21@gmail.com', 'Yoshinochin']
        const goodTeams = teamsHiToLo.filter((team) => goodTeamNames.includes(team.user.username))
        // console.log(teamsHiToLo)
        // console.log(goodTeams)

        return (
            (teamsLoaded === false) ?
                <h2>Loading...</h2>
                :

                <div>
                    <div id="hello">
                        <p>The draft is live! The rankings were updated on February 27th.</p>
                        <p>The next tournament begins on March 12th, so make sure you draft before then!</p>
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
                            {goodTeams.map((team) => {
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