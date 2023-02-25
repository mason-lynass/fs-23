function PreviousTeams({ user, rikishi }) {

    const userTeams = user.teams
    const oldTeams = userTeams.filter((team) => team.basho !== 2023.3)
    const fs_history = rikishi[0].FS_history.length

    console.log(oldTeams)
    console.log(fs_history)

    function oneOldTeam(team) {
        function isString(value) { return typeof value === "string" }
        const OTRikishiStrings = Object.values(team).filter((isString))
        const actualTeam = rikishi.filter((r) => OTRikishiStrings.includes(r.shikona))

        console.log(actualTeam[0].FS_history[(fs_history.length - 2)])

        const teamScores = {
            r1: 0,
            r2: 0,
            r3: 0,
            r4: 0,
            r5: 0,
            r6: 0,
            r7: 0
        }

        let basho = fs_history - 1
        if (team.basho === 2023.1) {
            basho--
            teamScores.r1 = actualTeam[0].FS_history[basho]
            teamScores.r2 = actualTeam[1].FS_history[basho]
            teamScores.r3 = actualTeam[2].FS_history[basho]
            teamScores.r4 = actualTeam[3].FS_history[basho]
            teamScores.r5 = actualTeam[4].FS_history[basho]
            teamScores.r6 = actualTeam[5].FS_history[basho]
            teamScores.r7 = actualTeam[6].FS_history[basho]
        }

        console.log(teamScores)
        return (
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