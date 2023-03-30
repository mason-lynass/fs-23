import "../CSS/database.css"

function DbTest({ fsHistories, rikishi }) {

    console.log(fsHistories)
    console.log(rikishi)

    function displayOneRikishi(history) {

        const justTheHistoryEntries = Object.fromEntries(Object.entries(history).filter(([key]) => key.includes('b')))
        console.log(justTheHistoryEntries)
        const justTheHistoryValues = Object.values(justTheHistoryEntries).reverse()
        console.log(justTheHistoryValues)

        return (
            justTheHistoryValues.map((score) => {
                if (score === null) score = 'null'
                return (<p className="dbtest-one-score">{score}</p>)
            })
        )
    }

    function AllHistories() {
        return (
            fsHistories.map((history) => {
                return (
                    <div className="dbtest-one-rikishi">
                        <h4 className="dbtest-rikishi-name">{history.rikishi.shikona}</h4>
                        <div className="dbtest-one-rikishi-scores">
                            {displayOneRikishi(history)}
                        </div>

                    </div>

                )
            })
        )

    }

    return (
        <div>
            <h2>hello</h2>
            <div id='dbtest-all-histories'>
                {AllHistories()}
            </div>
        </div>
    )
}

export default DbTest