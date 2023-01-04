import { useEffect, useState } from "react"
import OneTeam from "./components/OneTeam"

function Results({ rikishi }) {

    const [teams, setTeams] = useState([])
    const [teamsLoaded, setTeamsLoaded] = useState(false)
    const [rikishiLoaded, setRikishiLoaded] = useState(false)
    const [resultsRikishi, setResultsRikishi] = useState([])

    useEffect(() => {
        fetch("/teams")
            .then(r => r.json())
            .then(teams => {
                setTeams(teams)
                // console.log(teams)
                setTeamsLoaded(true)
            })
    }, [])

    useEffect(() => {
        setResultsRikishi(rikishi)
        if (rikishi.length > 0) {
            setRikishiLoaded(true)
            // console.log("did it")
        }
    }, [rikishi])

    function renderTeams() {

        const allTeamsAsObjects = teams.map((team) => {
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

            const ROScores = newRikishiObjects.map((r) => r.FS_20226)

            let scoreSum = 0
            for (const item of ROScores) { scoreSum += item }

            const teamWTotal = { ...newRikishiObjects, scoreSum: scoreSum, user: team.user, id: team.id }

            return (teamWTotal)
        })

        console.log(allTeamsAsObjects)

        // const teamsHiToLo = allTeamsAsObjects.sort((a, b) => b.scoreSum - a.scoreSum)

        // function somethingElse() {
        //     return (
        //         <h2>hi</h2>
        //         // <OneTeam team={teamWTotal} key={teamWTotal.id} rikishi={rikishi} />
        //     )
        // }

        return (
            (teamsLoaded === false) ?
                <h2>Loading...</h2>
                :

                <div>
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
                            {allTeamsAsObjects.map((team) => {
                                return (
                                    <OneTeam team={team} key={team.id} rikishi={rikishi} />
                                )
                            })}
                        </div>
                    </div>
                </div>

        )
    }


    // function something() {
    //     const teamsByScore = teams.sort(function (a, b) { return b.id - a.id })
    // }





    return (
        (rikishiLoaded === false) ?
            <h2>Loading...</h2>
            :
            renderTeams()
    )
}

export default Results