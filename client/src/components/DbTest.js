import "../CSS/database.css"

function DbTest({ fsHistories, rikishi }) {

    console.log(fsHistories)
    // console.log(rikishi)

    function displayOneRikishi(history) {

        const justTheHistoryEntries = Object.fromEntries(Object.entries(history).filter(([key]) => key.includes('b')))
        // console.log(justTheHistoryEntries)
        const justTheHistoryValues = Object.values(justTheHistoryEntries).reverse()
        // console.log(justTheHistoryValues)

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

    function AllBashoRows() {
        if (fsHistories.length > 0) {
            let rows = []
            for (let i = 1; i < Object.keys(fsHistories[0]).length; i++) {
                rows.push(i)
            }
            const reverseOrder = rows.reverse()
            console.log(reverseOrder)

            let bashoRowsArray = []
            for (const basho of reverseOrder) {
                let year = 2023

                if (basho >= 142) {
                    year = year - Math.floor((reverseOrder.length - (basho - 4))/6)
                    console.log(basho, year)
                    switch (basho % 6) {
                        case 1: {
                            bashoRowsArray.push(year + '.01')
                            break
                        }
                        case 2: {
                            bashoRowsArray.push(year + '.03') 
                            break
                        } 
                        case 3: {
                            bashoRowsArray.push(year + '.05')
                            break 
                        } 
                        case 4: {
                            bashoRowsArray.push(year + '.07') 
                            break
                        } 
                        case 5: {
                            bashoRowsArray.push(year + '.09')
                            break 
                        } 
                        case 0: {
                            bashoRowsArray.push(year + '.11')
                            break 
                        }
                    }
                }

                if (basho < 142 && basho > 87) {
                    year = year - Math.floor((reverseOrder.length - (basho - 5))/6)

                    switch (basho % 6) {
                        case 2: {
                            console.log(basho, year)
                            bashoRowsArray.push(year + '.01')
                            break
                        }
                        case 3: {
                            console.log(basho, year)
                            bashoRowsArray.push(year + '.03') 
                            break
                        } 
                        case 4: {
                            console.log(basho, year)
                            bashoRowsArray.push(year + '.05')
                            break 
                        } 
                        case 5: {
                            console.log(basho, year)
                            bashoRowsArray.push(year + '.07') 
                            break
                        } 
                        case 0: {
                            console.log(basho, year)
                            bashoRowsArray.push(year + '.09')
                            break 
                        } 
                        case 1: {
                            console.log(basho, year)
                            bashoRowsArray.push(year + '.11')
                            break 
                        }
                    }
                }

                if (basho > 0 && basho <= 87 ) {
                    year = year - Math.floor((reverseOrder.length - (basho - 6))/6)

                    switch (basho % 6) {
                        case 3: {
                            console.log(basho, year)
                            bashoRowsArray.push(year + '.01')
                            break
                        }
                        case 4: {
                            console.log(basho, year)
                            bashoRowsArray.push(year + '.03') 
                            break
                        } 
                        case 5: {
                            console.log(basho, year)
                            bashoRowsArray.push(year + '.05')
                            break 
                        } 
                        case 0: {
                            console.log(basho, year)
                            bashoRowsArray.push(year + '.07') 
                            break
                        } 
                        case 1: {
                            console.log(basho, year)
                            bashoRowsArray.push(year + '.09')
                            break 
                        } 
                        case 2: {
                            console.log(basho, year)
                            bashoRowsArray.push(year + '.11')
                            break 
                        }
                    }
                }
            }
            return bashoRowsArray.map((x) => {
                return <p className="dbtest-basho">{x}</p>
            })
        }

    }

    return (
        <div>
            <h2>hello</h2>
            <div id='dbtest-full-table'>
                <div id='dbtest-basho-row'>
                    <h4 className="dbtest-rikishi-name">basho</h4>
                    {AllBashoRows()}
                </div>
                <div id='dbtest-all-histories'>
                    {AllHistories()}
                </div>
            </div>

        </div>
    )
}

export default DbTest