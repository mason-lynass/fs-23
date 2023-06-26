function PreviousTeams({ user, rikishi, teams, fsHistories, basho }) {

    const userTeams = user.teams
    const oldTeams = userTeams.filter((team) => team.basho !== basho).sort((a, b) => b.basho - a.basho)

    function oneOldTeam(team) {

        // shikona are the only strings in the object, so filter all strings to get only the wrestler names
        function isString(value) { return typeof value === "string" }
        const OTRikishiStrings = Object.values(team).filter((isString))
        let actualTeam = []
        for (let i = 0; i < 7; i++) {
            let target = [...rikishi].filter((r) => r.shikona === OTRikishiStrings[i])
            actualTeam.push(target)
        }

        const teamScores = {
            r1: 0,
            r2: 0,
            r3: 0,
            r4: 0,
            r5: 0,
            r6: 0,
            r7: 0
        }

        // temp should equal the last row of fsHistories, not including avg_score and rikishi
        let temp = (Object.values(fsHistories[0]).length - 1)
        let otherTeams = []

        // after the splice, this array will only be the values of scores
        let fsHistoriesArray = Object.values(fsHistories[0])
        fsHistoriesArray.splice(fsHistoriesArray.length - 2, 2)

        // console.log(fsHistoriesArray)

        if (team.basho === 2023.1) {
            temp = temp - 3
            otherTeams = [...teams].filter((team) => team.basho === 2023.1)
        }
        else if (team.basho === 2023.3) {
            temp = temp - 2
            otherTeams = [...teams].filter((team) => team.basho === 2023.3)
        }
        else if (team.basho === 2023.5) {
            temp = temp - 1
            otherTeams = [...teams].filter((team) => team.basho === 2023.3)
        }

        // use this to access fsHistories at the appropriate tournament
        temp = `b${temp}`

        teamScores.r1 = actualTeam[0][0].fsHistories[0][temp]
        teamScores.r2 = actualTeam[1][0].fsHistories[0][temp]
        teamScores.r3 = actualTeam[2][0].fsHistories[0][temp]
        teamScores.r4 = actualTeam[3][0].fsHistories[0][temp]
        teamScores.r5 = actualTeam[4][0].fsHistories[0][temp]
        teamScores.r6 = actualTeam[5][0].fsHistories[0][temp]
        teamScores.r7 = team.final_score - teamScores.r1 - teamScores.r2 - teamScores.r3 - teamScores.r4 - teamScores.r5 - teamScores.r6

        const sortedOtherTeams = otherTeams.sort((a, b) => b.final_score - a.final_score)
        const teamPosition = sortedOtherTeams.findIndex((team) => team.user.username === user.username) + 1

        return (
            <div id='fullOneTeam'>
                <div>
                    <h3>{team.basho}</h3>
                    <div id="oneTeamRank">
                        <h2>{team.final_score} points</h2>
                        <hr></hr>
                        <h2>#{teamPosition} out of</h2>
                        <h2>{otherTeams.length} teams</h2>
                    </div>
                </div>
                <div id='oneTeam'>
                    <div>
                        <p>{team.r1}</p>
                        <p>{teamScores.r1}</p>
                    </div>
                    <div>
                        <p>{team.r2}</p>
                        <p>{teamScores.r2}</p>
                    </div>
                    <div>
                        <p>{team.r3}</p>
                        <p>{teamScores.r3}</p>
                    </div>
                    <div>
                        <p>{team.r4}</p>
                        <p>{teamScores.r4}</p>
                    </div>
                    <div>
                        <p>{team.r5}</p>
                        <p>{teamScores.r5}</p>
                    </div>
                    <div>
                        <p>{team.r6}</p>
                        <p>{teamScores.r6}</p>
                    </div>
                    <div>
                        <p>{team.r7}</p>
                        <p>{teamScores.r7}</p>
                    </div>
                </div>
            </div>
        )
    }

    function allPrevTeams() {
        return (
            oldTeams.map((team) => {
                return (
                    <>
                        {oneOldTeam(team)}
                    </>

                )
            })
        )
    }

    return (
        <div>
            <hr></hr>
            <h3>Check out your previous teams:</h3>
            <div>
                {allPrevTeams()}
            </div>
        </div>
    )
}

export default PreviousTeams