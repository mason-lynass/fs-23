import { useState, useEffect } from "react"
import "../CSS/database.css"

function DbTest({ fsHistories, rikishi }) {

    const [viewState, setViewState] = useState('default')
    const [scoreCells, setScoreCells] = useState([])
    const [searchOne, setSearchOne] = useState("")
    const [searchTwo, setSearchTwo] = useState("")
    const [newRikishi, setNewRikishi] = useState([])
    const [retiredState, setRetiredState] = useState(true)

    // one fsHistories are loaded, update newRikishi and scoreCells
    useEffect(() => {
        if (fsHistories.length > 0) {
            setScoreCells(document.querySelectorAll('td'))
            setNewRikishi(fsHistories)
        }
    }, [fsHistories])

    // search functionality, running fsHistories through filterBySearch
    useEffect(() => {
        let result = fsHistories
        result = filterBySearch(result)
        setNewRikishi(result)
    }, [searchOne, searchTwo])

    // if a score cell doesn't have a number, give it more padding
    scoreCells.forEach((cell) => {
        if (cell.innerHTML === ' ') cell.classList.add('more-padding')
    })

    // switch for the retired checkbox
    function handleRetired() {
        if (retiredState === true) {
            setNewRikishi(newRikishi.filter((r) => r.rikishi.retired === false))
            setRetiredState(!retiredState)
        } else if (retiredState === false) {
            setNewRikishi(filterBySearch(fsHistories))
            setRetiredState(!retiredState)
        }
    }

    // search functions
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
               // if both searches are in use, return a rikishi history that matches either search
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

    // fsHistories sort definitions
    const averageSort = [...newRikishi].sort((a, b) => b.avg_fs_score - a.avg_fs_score)
    const shikonaSort = [...newRikishi].sort((a, b) => a.rikishi.shikona.localeCompare(b.rikishi.shikona))
    const totalSort = [...newRikishi].sort((a, b) => {
        function getTotalPoints (x) {
            const notNullBashos = Object.entries(x).filter((entry) => entry[0].includes('b')).filter((entry) => entry[1] !== null)

            let scores = []
            notNullBashos.forEach((score) => scores.push(score[1]))
            const totalPoints = scores.reduce((a, b) => a + b, 0)
            return totalPoints
        }
        return getTotalPoints(b) - getTotalPoints(a)
    })

    function xSort(x) {
        return [...newRikishi].sort((a, b) => b[x] - a[x])
    }

    // adding and removing classes to highlight a clicked column header
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

    // returns fsHistories sorted in a certain way, based on value of viewState
    function FSRikishiSwitch() {
        switch (viewState) {
            case 'default': {
                return AllHistories(shikonaSort)
            }
            case 'average': {
                return AllHistories(averageSort)
            }
            case 'total': {
                return AllHistories(totalSort)
            }
            default: {
                return AllHistories(xSort(viewState))
            }
        }
    }

    // shows the score values for each fsHistory
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

    // shows all fsHistories, with sections for info & total & average, then all the individual scores
    function AllHistories(sorted) {
        return (
            sorted.map((history) => {
                let image = history.rikishi.image_url
                // if there's no image_url definted, use a placeholder image
                if (image.charAt(0) !== 'h') image = 'https://sumo.or.jp/img/sumo_data/rikishi/60x60/kanto_no_image.jpg'

                const notNullBashos = Object.entries(history).filter((entry) => entry[0].includes('b')).filter((entry) => entry[1] !== null)
                let scores = []
                notNullBashos.forEach((score) => scores.push(score[1]))
                const totalPoints = scores.reduce((a, b) => a + b, 0)

                return (
                    <div className="dbtest-one-rikishi">
                        <th className='dbtest-one-rikishi-header'>
                            <img className="dbtest-rikishi-image" src={image} alt={'picture of' + history.rikishi.shikona}></img>
                            <h4 className="dbtest-rikishi-name">{history.rikishi.shikona}</h4>
                            <p className="dbtest-rikishi-total">{totalPoints}</p>
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

    // logic to show the basho in the correct format "2023.11" from one fsHistory
    function AllBashoRows() {
        if (fsHistories.length > 0) {
            // populate rows with integers for each basho key in fsHistory, then reverse 
            let rows = []
            for (let i = 1; i < Object.keys(fsHistories[0]).length - 1; i++) {
                rows.push(i)
            }
            const reverseOrder = rows.reverse()

            // basically converting the integers in reverseOrder to the correct format
            let bashoRowsArray = []
            for (const basho of reverseOrder) {
                let year = 2023

                if (basho >= 142) {
                    year = year - Math.floor((reverseOrder.length - (basho)) / 6)
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

                // i think this had to be offset by one because there was no tournament due to COVID?
                if (basho < 142 && basho > 87) {
                    year = year - Math.floor((reverseOrder.length - (basho - 1)) / 6)

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

                // another offset for that time that they cancelled the basho to investigate match fixing
                if (basho > 0 && basho <= 87) {
                    year = year - Math.floor((reverseOrder.length - (basho - 2)) / 6)

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

    // defined so that mobile users see the 'sorry' message
    const mobileScreen = window.matchMedia("(max-width: 600px)")

    return (
        <main>
            {mobileScreen.matches ?
                <h4 id='sorry'>sorry, this database looks a lot better on a computer!</h4>
                :
                ""
            }
            <div id='dbtest-all-filters'>
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
                <div id='retired-checkbox'>
                    <input type='checkbox' id='retiredCheckbox' name='retired-checkbox' value={retiredState} onClick={handleRetired}></input>
                    <label htmlFor='retiredCheckbox'>Hide Retired Rikishi</label>
                </div>
            </div>
            <table id='dbtest-full-table'>
                <thead id='dbtest-basho-row'>
                    <div id='dbtest-basho-sticky'>
                        <th className="dbtest-basho-image highlight" id='default' onClick={handleViewState}>reset</th>
                        <th className="dbtest-rikishi-name highlight" id='shikona' onClick={handleViewState}></th>
                        <th className="dbtest-basho-total highlight" id='total' onClick={handleViewState}>total FS points</th>
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