function HowMany({ teams, teamsLoaded, basho }) {

    const currentTeams = teams.filter((team) => team.basho === basho)

    let mRikishiArray = []
    let jRikishiArray = []

    // if all of the teams are loaded, push each rikishi on each team to the appropriate RikishiArray. should have many multiples of many rikishi at this point
    if (teamsLoaded === true) {
        currentTeams.forEach((team) => {
            const teamValues = Object.entries(team)
            const mStrings = teamValues.filter(val => {
                return (
                    val[0] === 'r1' || val[0] === 'r2' || val[0] === 'r3' ||
                    val[0] === 'r4' || val[0] === 'r5' || val[0] === 'r6'
                )
            })
            mStrings.forEach((string) => mRikishiArray.push(string[1]))
            const jStrings = teamValues.filter(val => val[0] === 'r7')
            jStrings.forEach((string) => jRikishiArray.push(string[1]))
        })
    }

    function oneDivision(wrestlers) {
        // basically using a hash table to go through all of the wrestlers passed as an argument, see if their name already exists as a key, adds one to their count or  makes a new key with their name
        // once all wrestlers have been counted, sort by frequency
        let freqObject = {}
        for (let i = 0; i < wrestlers.length; i++) {
            if (Object.keys(freqObject).includes(wrestlers[i])) {
                freqObject[wrestlers[i]] = (freqObject[wrestlers[i]] + 1)
            }
            else freqObject[wrestlers[i]] = 1
        }
        let freqArray = Object.entries(freqObject).sort((a,b) => b[1] - a[1])

        return (
            freqArray.map((rikishi) => {
                return (
                    <div className="HowManyOne">
                        <p>{rikishi[0]}</p>
                        <p>{rikishi[1]}</p>
                    </div>
                )
            })
        )
    }

    function allRikishi() {
        return (
            <>
                <div id='HowManyM'>
                    <h3>Makuuchi wrestler count</h3>
                    {oneDivision(mRikishiArray)}
                </div>
                <div id='HowManyJ'>
                    <h3>Juryo wrestler count</h3>
                    {oneDivision(jRikishiArray)}
                </div>
            </>
        )
    }

    return (
        <div id='HowManyMain'>
            {allRikishi()}
        </div>
    )
}

export default HowMany