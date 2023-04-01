import { useState } from "react"
import "../CSS/database.css"

function DbTest({ fsHistories, rikishi }) {

    console.log(fsHistories)

    const [viewState, setViewState] = useState('default')
    // const [sorted, setSorted] = useState({})

    const averageSort = [...fsHistories].sort((a, b) => b.avg_fs_score - a.avg_fs_score)
    const shikonaSort = [...fsHistories].sort((a, b) => a.rikishi.shikona.localeCompare(b.rikishi.shikona))

    function xSort(x) {
        return [...fsHistories].sort((a, b) => b[x] - a[x])
    }

    function setHighlight(target) {
        if (fsHistories.length > 0) {
            const columns = document.querySelectorAll(".dbtest-basho" || ".dbtest-basho-image" || ".dbtest-rikishi-name" || ".dbtest-basho-avg")
            columns.forEach((col) => {
                if (col.classList.contains("DBStatsActive")) {
                    col.classList.remove("DBStatsActive")
                }
            })
            target.classList.add("DBStatsActive")
        }
    }

    function handleViewState(e) {
        setViewState(e.target.id)
        const target = document.getElementById(`${e.target.id}`)
        setHighlight(target)
    }

    function FSRikishiSwitch() {
        switch (viewState) {
            case 'default': {
                return AllHistories(shikonaSort)
            }
            case 'average': {
                return AllHistories(averageSort)
            }
            default: {
                return AllHistories(xSort(viewState))
            } 
        }
    }

    function displayOneRikishi(history) {

        const justTheHistoryEntries = Object.fromEntries(Object.entries(history).filter(([key]) => key.includes('b')))
        const justTheHistoryValues = Object.values(justTheHistoryEntries).reverse()

        return (
            justTheHistoryValues.map((score) => {
                if (score === null) score = ' '
                return (<p className="dbtest-one-score">{score}</p>)
            })
        )
    }

    function AllHistories(sorted) {
        
        return (
            sorted.map((history) => {
                return (
                    <div className="dbtest-one-rikishi">
                        <img className="dbtest-rikishi-image" src={history.rikishi.image_url} alt={'picture of' + history.rikishi.shikona}></img>
                        <h4 className="dbtest-rikishi-name">{history.rikishi.shikona}</h4>
                        <p className="dbtest-rikishi-avg">{history.avg_fs_score}</p>
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
            for (let i = 1; i < Object.keys(fsHistories[0]).length - 1; i++) {
                rows.push(i)
            }
            const reverseOrder = rows.reverse()

            let bashoRowsArray = []
            for (const basho of reverseOrder) {
                let year = 2023

                if (basho >= 142) {
                    year = year - Math.floor((reverseOrder.length - (basho - 4)) / 6)
                    switch (basho % 6) {
                        case 1: {
                            bashoRowsArray.push([basho, year + '.01'])
                            break
                        }
                        case 2: {
                            bashoRowsArray.push([basho, year + '.03'])
                            break
                        }
                        case 3: {
                            bashoRowsArray.push([basho, year + '.05'])
                            break
                        }
                        case 4: {
                            bashoRowsArray.push([basho, year + '.07'])
                            break
                        }
                        case 5: {
                            bashoRowsArray.push([basho, year + '.09'])
                            break
                        }
                        case 0: {
                            bashoRowsArray.push([basho, year + '.11'])
                            break
                        }
                    }
                }

                if (basho < 142 && basho > 87) {
                    year = year - Math.floor((reverseOrder.length - (basho - 5)) / 6)

                    switch (basho % 6) {
                        case 2: {
                            bashoRowsArray.push([basho, year + '.01'])
                            break
                        }
                        case 3: {
                            bashoRowsArray.push([basho, year + '.03'])
                            break
                        }
                        case 4: {
                            bashoRowsArray.push([basho, year + '.05'])
                            break
                        }
                        case 5: {
                            bashoRowsArray.push([basho, year + '.07'])
                            break
                        }
                        case 0: {
                            bashoRowsArray.push([basho, year + '.09'])
                            break
                        }
                        case 1: {
                            bashoRowsArray.push([basho, year + '.11'])
                            break
                        }
                    }
                }

                if (basho > 0 && basho <= 87) {
                    year = year - Math.floor((reverseOrder.length - (basho - 6)) / 6)

                    switch (basho % 6) {
                        case 3: {
                            bashoRowsArray.push([basho, year + '.01'])
                            break
                        }
                        case 4: {
                            bashoRowsArray.push([basho, year + '.03'])
                            break
                        }
                        case 5: {
                            bashoRowsArray.push([basho, year + '.05'])
                            break
                        }
                        case 0: {
                            bashoRowsArray.push([basho, year + '.07'])
                            break
                        }
                        case 1: {
                            bashoRowsArray.push([basho, year + '.09'])
                            break
                        }
                        case 2: {
                            bashoRowsArray.push([basho, year + '.11'])
                            break
                        }
                    }
                }
            }
            return bashoRowsArray.map((x) => {
                return <p id={'b' + x[0]} className="dbtest-basho" onClick={handleViewState}>{x[1]}</p>
            })
        }
    }


    return (
        <div>
            <h2>hello</h2>
            <div id='dbtest-full-table'>
                <div id='dbtest-basho-row'>
                    <h4 className="dbtest-basho-image" id='default' onClick={handleViewState}>reset</h4>
                    <h4 className="dbtest-rikishi-name" id='shikona' onClick={handleViewState}></h4>
                    <h4 className="dbtest-basho-avg" id='average' onClick={handleViewState}>average score</h4>
                    {AllBashoRows()}
                </div>
                <div id='dbtest-all-histories'>
                    {FSRikishiSwitch()}
                </div>
            </div>

        </div>
    )
}

export default DbTest