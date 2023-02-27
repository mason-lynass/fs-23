function PreviousTeams({ user, rikishi, teams }) {

    const userTeams = user.teams
    const oldTeams = userTeams.filter((team) => team.basho !== 2023.3)
    const fs_history = rikishi[0].FS_history.length

    function oneOldTeam(team) {

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

        let temp = fs_history
        let otherTeams = []

        if (team.basho === 2023.1) {
            temp--
            teamScores.r1 = actualTeam[0][0].FS_history[temp]
            teamScores.r2 = actualTeam[1][0].FS_history[temp]
            teamScores.r3 = actualTeam[2][0].FS_history[temp]
            teamScores.r4 = actualTeam[3][0].FS_history[temp]
            teamScores.r5 = actualTeam[4][0].FS_history[temp]
            teamScores.r6 = actualTeam[5][0].FS_history[temp]
            teamScores.r7 = team.final_score - teamScores.r1 - teamScores.r2 - teamScores.r3 - teamScores.r4 - teamScores.r5 - teamScores.r6
            otherTeams = [...teams].filter((team) => team.basho === 2023.1)
        }

        const sortedOtherTeams = otherTeams.sort((a, b) => b.final_score - a.final_score)
        const teamPosition = sortedOtherTeams.findIndex((team) => team.user.username === user.username) + 1

        return (
            <div id='fullOneTeam'>
                <div >
                    <div>
                        <h3>{team.basho}</h3>
                        <div id="oneTeamRank">
                            <h2>{team.final_score} points</h2>
                            <hr></hr>
                            <h2>#{teamPosition} out of</h2>
                            <h2>{otherTeams.length} teams</h2>
                        </div>
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
                    <div>
                        {oneOldTeam(team)}
                    </div>

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