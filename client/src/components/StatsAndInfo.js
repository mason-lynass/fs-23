import SIAllRikishi from "./SIAllRikishi";
import { useState, useEffect } from "react";

function StatsAndInfo({ dbRikishi }) {

    const [sortState, setSortState] = useState("default")
    const [searchOne, setSearchOne] = useState("")
    const [searchTwo, setSearchTwo] = useState("")
    const [newRikishi, setNewRikishi] = useState([])
    const [retiredState, setRetiredState] = useState(true)

    useEffect(() => {
        if (dbRikishi.length > 0) {
            setNewRikishi(dbRikishi)
        }
    }, [dbRikishi])

    useEffect(() => {
        // console.log('this')
        let result = dbRikishi
        result = filterBySearch(result)
        setNewRikishi(result)
    }, [searchOne, searchTwo])

    function handleRetired() {
        if (retiredState === true) {
            setNewRikishi(newRikishi.filter((r) => r.retired === false))
            setRetiredState(!retiredState)
        } else if (retiredState === false) {
            setNewRikishi(filterBySearch(dbRikishi))
            setRetiredState(!retiredState)
        }
    }

    function handleSearchOne(e) {
        setSearchOne(e.target.value)
    }
    function handleSearchTwo(e) {
        setSearchTwo(e.target.value)
    }

    const filterBySearch = (r) => {
        return dbRikishi.filter((rik) => {
            if (searchOne !== '' && searchTwo !== '') {
                const one = rik.shikona.toLowerCase().includes(searchOne.toLowerCase())
                const two = rik.shikona.toLowerCase().includes(searchTwo.toLowerCase())
                // console.log(one, two, rik)
                if (one === true || two === true) {
                    return rik
                }
            }
            else if (searchOne !== '') {
                return rik.shikona.toLowerCase().includes(searchOne.toLowerCase())
            }
            else if (searchTwo !== '') {
                return rik.shikona.toLowerCase().includes(searchTwo.toLowerCase())
            }
            else return rik
        })
    }

    function calculate_age(dob) {
        const birthdate = new Date(dob)
        const diff_ms = Date.now() - birthdate.getTime();
        const age_dt = new Date(diff_ms)
        return Math.abs(age_dt.getUTCFullYear() - 1970)
    }

    function calculate_age_order(dob) {
        const birthdate = new Date(dob)
        const diff_ms = Date.now() - birthdate.getTime();
        const age_dt = new Date(diff_ms)
        return age_dt
    }

    function setHighlight(target) {
        const columns = document.querySelectorAll(".DBCol")
        columns.forEach((col) => {
            if (col.classList.contains("DBStatsActive")) {
                col.classList.remove("DBStatsActive")
            }
        })
        target.classList.add("DBStatsActive")
    }

    function handleSortState(e) {
        setSortState(e.target.id)
        const target = document.getElementById(`${e.target.id}`)
        setHighlight(target)
    }

    const rankOrder = ["Y", "O", "S", "K", "M1", "M2", "M3", "M4", "M5", "M6", "M7", "M8", "M9", "M10", "M11", "M12", "M13", "M14", "M15", "M16", "M17", "J", "MS", "i"]

    // default is sort by age, then kinboshi, then yusho, then highest rank, then current rank
    // so that by default, retired rikishi show up on the bottom, and they're sorted by highest rank, then yusho, then kinboshi, then age
    const defaultSort = [...newRikishi].sort((a, b) => calculate_age_order(b.birthdate) - calculate_age_order(a.birthdate)).sort((a, b) => b.kinboshi - a.kinboshi).sort((a, b) => b.yusho - a.yusho).sort((a, b) => {
        const aRank = rankOrder.indexOf(a.highest_rank)
        const bRank = rankOrder.indexOf(b.highest_rank)
        return aRank - bRank
    }).sort((a, b) => {
        const aRank = rankOrder.indexOf(a.current_rank)
        const bRank = rankOrder.indexOf(b.current_rank)
        return aRank - bRank
    })

    const shikonaSort = [...newRikishi].sort((a, b) => a.shikona.localeCompare(b.shikona))
    const highestSort = [...newRikishi].sort((a, b) => {
        const aRank = rankOrder.indexOf(a.highest_rank)
        const bRank = rankOrder.indexOf(b.highest_rank)
        return aRank - bRank
    })
    const currentSort = [...newRikishi].sort((a, b) => {
        const aRank = rankOrder.indexOf(a.current_rank)
        const bRank = rankOrder.indexOf(b.current_rank)
        return aRank - bRank
    })
    const heyaSort = [...newRikishi].sort((a, b) => a.heya.localeCompare(b.heya))
    const ageSort = [...newRikishi].sort((a, b) => calculate_age_order(b.birthdate) - calculate_age_order(a.birthdate))
    const heightSort = [...newRikishi].sort((a, b) => b.height - a.height)
    const weightSort = [...newRikishi].sort((a, b) => b.weight - a.weight)
    const yushoSort = [...newRikishi].sort((a, b) => b.yusho - a.yusho)
    const kinboshiSort = [...newRikishi].sort((a, b) => b.kinboshi - a.kinboshi)
    const ssSort = [...newRikishi].sort((a, b) => b.shukun_sho - a.shukun_sho)
    const ksSort = [...newRikishi].sort((a, b) => b.kanto_sho - a.kanto_sho)
    const gsSort = [...newRikishi].sort((a, b) => b.gino_sho - a.gino_sho)

    // this switch returns all the rikishi, changing the rikishi sent to the component based on the sortState
    function SIRikishiSwitch() {
        if (sortState === "default") {
            return <SIAllRikishi calculate_age={calculate_age} rikishi={defaultSort} />
        } else if (sortState === "current") {
            return <SIAllRikishi calculate_age={calculate_age} rikishi={currentSort} />
        } else if (sortState === "shikona") {
            return <SIAllRikishi calculate_age={calculate_age} rikishi={shikonaSort} />
        } else if (sortState === "highest") {
            return <SIAllRikishi calculate_age={calculate_age} rikishi={highestSort} />
        } else if (sortState === "heya") {
            return <SIAllRikishi calculate_age={calculate_age} rikishi={heyaSort} />
        } else if (sortState === "age") {
            return <SIAllRikishi calculate_age={calculate_age} rikishi={ageSort} />
        } else if (sortState === "height") {
            return <SIAllRikishi calculate_age={calculate_age} rikishi={heightSort} />
        } else if (sortState === "weight") {
            return <SIAllRikishi calculate_age={calculate_age} rikishi={weightSort} />
        } else if (sortState === "yusho") {
            return <SIAllRikishi calculate_age={calculate_age} rikishi={yushoSort} />
        } else if (sortState === "kinboshi") {
            return <SIAllRikishi calculate_age={calculate_age} rikishi={kinboshiSort} />
        } else if (sortState === "ss") {
            return <SIAllRikishi calculate_age={calculate_age} rikishi={ssSort} />
        } else if (sortState === "ks") {
            return <SIAllRikishi calculate_age={calculate_age} rikishi={ksSort} />
        } else if (sortState === "gs") {
            return <SIAllRikishi calculate_age={calculate_age} rikishi={gsSort} />
        }
    }

    return (
        <main>
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
            <div id="DBTable">
                <div id="DBTableColumns">
                    <p className='DBImage DBCol' id="reset"></p>
                    <p className='DBCurrent DBCol' id="current" onClick={handleSortState}>current rank</p>
                    <p className='DBShikona DBCol' id="shikona" onClick={handleSortState}>shikona</p>
                    <p className='DBHighest DBCol' id="highest" onClick={handleSortState}>highest rank</p>
                    <p className='DBHeya DBCol' id="heya" onClick={handleSortState}>heya</p>
                    <p className='DBAge DBCol' id="age" onClick={handleSortState}>age</p>
                    <p className='DBHeight DBCol' id="height" onClick={handleSortState}>height (in cm)</p>
                    <p className='DBWeight DBCol' id="weight" onClick={handleSortState}>weight (in kg)</p>
                    <p className='DBYusho DBCol' id="yusho" onClick={handleSortState}>Yusho</p>
                    <p className='DBKinboshi DBCol' id="kinboshi" onClick={handleSortState}>Kinboshi</p>
                    <p className='DBSansho DBCol' id="ss" onClick={handleSortState}>Shukun-sho</p>
                    <p className='DBSansho DBCol' id="ks" onClick={handleSortState}>Kanto-sho</p>
                    <p className='DBSansho DBCol' id="gs" onClick={handleSortState}>Gino-sho</p>
                </div>
                <div id="DBAllRikishi">
                    {SIRikishiSwitch()}
                </div>
            </div>
        </main>
    )
}

export default StatsAndInfo