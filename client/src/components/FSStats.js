import { useState } from "react"
import FSStatsRikishi from "./FSStatsRikishi"

function FSStats({ dbRikishi }) {

    const [fsRikishi, setFSRikishi] = useState(dbRikishi)
    const [viewState, setViewState] = useState('default')
    // const [loaded, setLoaded] = useState(true)

    function rFSByBasho(e) {
        const x = e.target.id
        setViewState('default')
        setFSRikishi(fsRikishi.sort((a, b) => b.FS_history[x] - a.FS_history[x]))
        const columns = document.querySelectorAll(".DBCol")
        columns.forEach((col) => {
            if (col.classList.contains("DBStatsActive")) {
                col.classList.remove("DBStatsActive")
            }
        })
        const target = document.getElementById(`${x}`)
        target.classList.add("DBStatsActive")
        setViewState('basho')
        // console.log(fsRikishi)
        // console.log(dbRikishi)
    }

    function rFSByAverageScore() {
        setFSRikishi(fsRikishi.sort((a, b) => b.avg_fs_score - a.avg_fs_score))
        const columns = document.querySelectorAll(".DBCol")
        columns.forEach((col) => {
            if (col.classList.contains("DBStatsActive")) {
                col.classList.remove("DBStatsActive")
            }
        })
        const target = document.querySelector("#average")
        target.classList.add("DBStatsActive")
        setViewState('average')
        // console.log(fsRikishi)
        // console.log(dbRikishi)
    }

    function rFSDefault() {
        setFSRikishi(fsRikishi.sort((a, b) => a.id - b.id))
        const columns = document.querySelectorAll(".DBCol")
        columns.forEach((col) => {
            if (col.classList.contains("DBStatsActive")) {
                col.classList.remove("DBStatsActive")
            }
        })
        const target = document.querySelector("#reset")
        target.classList.add("DBStatsActive")
        setViewState('default')
        // console.log(columns)
    }

    // function FSRikishi() {

    //     return (
    //         fsRikishi.map((r) => {
    //             return (
    //                 <div key={r.id} className='DBOneRikishi'>
    //                     <img className='DBImage' src={r.image_url} alt=""/>
    //                     <p className='DBCurrent'>{r.highest_rank}</p>
    //                     <p className='DBShikona'>{r.shikona}</p>
    //                     <p className="DBAvg">{r.avg_fs_score}</p>
    //                     {r.FS_history.map((basho) => {
    //                         return (<p className="DBBasho">{basho}</p>)
    //                     })}
    //                 </div>
    //             )
    //         })
    //     )
    // }

    function FSRikishiSwitch () {
        if (viewState === 'default') {
            return <FSStatsRikishi rikishi={fsRikishi}/>
        } else if (viewState === 'average') {
            return <FSStatsRikishi rikishi={fsRikishi}/>
        } else if (viewState === 'basho') {
            return <FSStatsRikishi rikishi={fsRikishi}/>
        }
    }



    return (
        <div id="DBTable">
            <div id="DBTableColumns">
                <p className='DBImage DBCol' id="reset" onClick={rFSDefault}>reset</p>
                <p className='DBCurrent DBCol'>highest rank</p>
                <p className='DBShikona DBCol'>shikona</p>
                <p className='DBAvg DBCol' id="average" onClick={rFSByAverageScore}>avg FS score</p>
                <p className='DBBasho DBCol' id="0" onClick={rFSByBasho}>2021.01</p>
                <p className='DBBasho DBCol' id="1" onClick={rFSByBasho}>2021.03</p>
                <p className='DBBasho DBCol' id="2" onClick={rFSByBasho}>2021.05</p>
                <p className='DBBasho DBCol' id="3" onClick={rFSByBasho}>2021.07</p>
                <p className='DBBasho DBCol' id="4" onClick={rFSByBasho}>2021.09</p>
                <p className='DBBasho DBCol' id="5" onClick={rFSByBasho}>2021.11</p>
                <p className='DBBasho DBCol' id="6" onClick={rFSByBasho}>2022.01</p>
                <p className='DBBasho DBCol' id="7" onClick={rFSByBasho}>2022.03</p>
                <p className='DBBasho DBCol' id="8" onClick={rFSByBasho}>2022.05</p>
                <p className='DBBasho DBCol' id="9" onClick={rFSByBasho}>2022.07</p>
                <p className='DBBasho DBCol' id="10" onClick={rFSByBasho}>2022.09</p>
                <p className='DBBasho DBCol' id="11" onClick={rFSByBasho}>2022.11</p>
            </div>
            <div id="DBAllRikishi">
                {FSRikishiSwitch()}
            </div>
        </div>
    )
}

export default FSStats