function HowMany({ teams, teamsLoaded }) {

    const currentTeams = teams.filter((team) => team.basho === 2023.5)

    let mRikishiArray = []
    let jRikishiArray = []

    if (teamsLoaded === true) {
        currentTeams.forEach((team) => {
            const teamValues = Object.entries(team)
            // console.log(teamValues)
            // const teamStrings = teamValues.filter((val) => val.contains(''))
            const mStrings = teamValues.filter(val => {
                return (
                    val[0] === 'r1' || val[0] === 'r2' || val[0] === 'r3' ||
                    val[0] === 'r4' || val[0] === 'r5' || val[0] === 'r6'
                )
            })
            // console.log(strings)
            mStrings.forEach((string) => mRikishiArray.push(string[1]))
            const jStrings = teamValues.filter(val => val[0] === 'r7')
            jStrings.forEach((string) => jRikishiArray.push(string[1]))
        })
        // console.log(allRikishiArray)
    }

    // console.log(allRikishiArray.sort((a, b) => a.localeCompare(b)))

    // function Makuuchi() {

    //     for (let i = 0; i < mRikishiArray.length; i++) {
    //         const fill = mRikishiArray[i]
    //         if (Object.keys(freqObject).includes(mRikishiArray[i])) {
    //             // console.log("THIS")
    //             // console.log(freqObject[allRikishiArray[i]])
    //             freqObject[mRikishiArray[i]] = (freqObject[mRikishiArray[i]] + 1)
    //         }
    //         else freqObject[mRikishiArray[i]] = 1
    //         // freqObject.set(allRikishiArray[i], 1)
    //         // if (`'${fill}'` in freqObject) { console.log('woohoo') }
    //     }
    // }

    // function Juryo() {
    //     for (let i = 0; i < jRikishiArray.length; i++) {

    //         const fill = jRikishiArray[i]
    //         console.log(fill)
    //         if (Object.keys(freqObject).includes(jRikishiArray[i])) {
    //             // console.log("THIS")
    //             // console.log(freqObject[allRikishiArray[i]])
    //             freqObject[jRikishiArray[i]] = (freqObject[jRikishiArray[i]] + 1)
    //         }
    //         else freqObject[jRikishiArray[i]] = 1
    //         // freqObject.set(allRikishiArray[i], 1)
    //         // if (`'${fill}'` in freqObject) { console.log('woohoo') }
    //     }
    // }

    function oneDivision(wrestlers) {
        let freqObject = {}
        for (let i = 0; i < wrestlers.length; i++) {
            // const fill = wrestlers[i]
            if (Object.keys(freqObject).includes(wrestlers[i])) {
                // console.log("THIS")
                // console.log(freqObject[allRikishiArray[i]])
                freqObject[wrestlers[i]] = (freqObject[wrestlers[i]] + 1)
            }
            else freqObject[wrestlers[i]] = 1
            // freqObject.set(allRikishiArray[i], 1)
            // if (`'${fill}'` in freqObject) { console.log('woohoo') }
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
                    <h3>Makuuchi wrestler count:</h3>
                    {oneDivision(mRikishiArray)}
                </div>
                <div id='HowManyJ'>
                    <h3>Juryo wrestler count:</h3>
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