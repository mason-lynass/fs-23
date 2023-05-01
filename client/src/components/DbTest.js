import { useState, useEffect } from "react"
import "../CSS/database.css"

function DbTest({ fsHistories, rikishi }) {

    const [viewState, setViewState] = useState('default')
    const [scoreCells, setScoreCells] = useState([])
    const [searchOne, setSearchOne] = useState("")
    const [searchTwo, setSearchTwo] = useState("")
    const [newRikishi, setNewRikishi] = useState([])

    useEffect(() => {
        if (fsHistories.length > 0) {
            setScoreCells(document.querySelectorAll('td'))
            setNewRikishi(fsHistories)
        }
    }, [fsHistories])

    useEffect(() => {
        // console.log('this')
        let result = fsHistories
        result = filterBySearch(result)
        setNewRikishi(result)
    }, [searchOne, searchTwo])

    scoreCells.forEach((cell) => {
        if (cell.innerHTML === ' ') cell.classList.add('more-padding')
    })

    function handleSearchOne(e) {
        setSearchOne(e.target.value)
    }
    function handleSearchTwo(e) {
        setSearchTwo(e.target.value)
    }

    const filterBySearch = (r) => {
        return fsHistories.filter((history) => {
            if (searchOne !== '' && searchTwo !== '') {
                const one = history.rikishi.shikona.toLowerCase().includes(searchOne.toLowerCase())
                const two = history.rikishi.shikona.toLowerCase().includes(searchTwo.toLowerCase())
                console.log(one, two, history)
                if (one === true || two === true) {
                    return history
                }
            }
            else if (searchOne !== '') {
                return history.rikishi.shikona.toLowerCase().includes(searchOne.toLowerCase())
            }
            else if (searchTwo !== '') {
                return history.rikishi.shikona.toLowerCase().includes(searchTwo.toLowerCase())
            } 
            else return history
        })
    }

    const averageSort = [...newRikishi].sort((a, b) => b.avg_fs_score - a.avg_fs_score)
    const shikonaSort = [...newRikishi].sort((a, b) => a.rikishi.shikona.localeCompare(b.rikishi.shikona))

    function xSort(x) {
        return [...newRikishi].sort((a, b) => b[x] - a[x])
    }

    function setHighlight(target) {
        console.log(target)
        if (fsHistories.length > 0) {
            // const columns = document.querySelectorAll(".dbtest-basho" && ".dbtest-basho-image" && ".dbtest-rikishi-name" && ".dbtest-basho-avg")
            const columns = document.querySelectorAll(".highlight")
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
                return (<td className="dbtest-one-score">{score}</td>)
            })
        )
    }

    function AllHistories(sorted) {

        return (
            sorted.map((history) => {
                return (
                    <div className="dbtest-one-rikishi">
                        <th className='dbtest-one-rikishi-header'>
                            <img className="dbtest-rikishi-image" src={history.rikishi.image_url} alt={'picture of' + history.rikishi.shikona}></img>
                            <h4 className="dbtest-rikishi-name">{history.rikishi.shikona}</h4>
                            <p className="dbtest-rikishi-avg">{history.avg_fs_score}</p>
                        </th>

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
                return <th key={x} id={'b' + x[0]} className="dbtest-basho highlight" onClick={handleViewState}>{x[1]}</th>
            })
        }
    }

    const mobileScreen = window.matchMedia("(max-width: 600px)")

    return (
        <main>
            { mobileScreen.matches ? 
             <h4 id='sorry'>sorry, this database looks a lot better on a computer!</h4>
             :
             ""
             }
            <div id='dbtest-filters'>
                <div>
                    <input placeholder='Asashoryu' onChange={handleSearchOne} value={searchOne} type="text" name="search"></input>
                    <label>rikishi search</label>
                </div>
                <div>
                <input placeholder='Kakuryu' onChange={handleSearchTwo} value={searchTwo} type="text" name="search"></input>
                <label>rikishi search</label>
                </div>
            </div>
            <table id='dbtest-full-table'>
                <thead id='dbtest-basho-row'>
                    <div id='dbtest-basho-sticky'>
                        <th className="dbtest-basho-image highlight" id='default' onClick={handleViewState}>reset</th>
                        <th className="dbtest-rikishi-name highlight" id='shikona' onClick={handleViewState}></th>
                        <th className="dbtest-basho-avg highlight" id='average' onClick={handleViewState}>average score</th>
                    </div>
                    {AllBashoRows()}
                </thead>
                <tbody id='dbtest-all-histories'>
                    {FSRikishiSwitch()}
                </tbody>
            </table>

        </main>
    )
}

export default DbTest