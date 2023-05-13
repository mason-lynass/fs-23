function HowMany({ teams, teamsLoaded }) {

    console.log(teams)

    let allRikishiArray = []
    let freqObject = {}

    if (teamsLoaded === true) {
        teams.forEach((team) => {
            const teamValues = Object.values(team)
            // const teamStrings = teamValues.filter((val) => val.contains(''))
            const strings = teamValues.filter(val => {
                return val !== null && typeof val === 'string'
            })
            // console.log(strings)
            strings.forEach((string) => allRikishiArray.push(string))
        })
        // console.log(allRikishiArray)
    }

    console.log(allRikishiArray.sort((a, b) => a.localeCompare(b)))

    for (let i = 0; i < allRikishiArray.length; i++) {
        const fill = allRikishiArray[i]
        if (Object.keys(freqObject).includes(allRikishiArray[i])) {
            console.log("THIS")
            console.log(freqObject[allRikishiArray[i]])
            freqObject[allRikishiArray[i]] = (freqObject[allRikishiArray[i]] + 1)
        }
        else freqObject[allRikishiArray[i]] = 1
        // freqObject.set(allRikishiArray[i], 1)
        // if (`'${fill}'` in freqObject) { console.log('woohoo') }
    }

    console.log(freqObject)

    const freqArray = Object.entries(freqObject)
    console.log(freqArray.sort((a, b) => b[1] - a[1]))

    function allRikishi() {
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

    return (
        <div id='HowManyMain'>
            {allRikishi()}
        </div>
    )
}

export default HowMany