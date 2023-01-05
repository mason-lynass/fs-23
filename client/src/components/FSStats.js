import { useState } from "react"
import FSStatsRikishi from "./FSStatsRikishi"

function FSStats({ dbRikishi }) {
    
    const [viewState, setViewState] = useState('default')

    function setHighlight(target) {
        const columns = document.querySelectorAll(".DBCol")
        columns.forEach((col) => {
            if (col.classList.contains("DBStatsActive")) {
                col.classList.remove("DBStatsActive")
            }
        })
        target.classList.add("DBStatsActive")
    }

    function handleViewState(e) {
        setViewState(e.target.id)
        console.log(e.target.id)
        const target = document.getElementById(`${e.target.id}`)
        setHighlight(target)
    }

    const defaultSort = [...dbRikishi].sort((a, b) => a.id - b.id)
    const averageSort = [...dbRikishi].sort((a, b) => b.avg_fs_score - a.avg_fs_score)
    const sort0 = [...dbRikishi].sort((a, b) => b.FS_history[0] - a.FS_history[0])
    const sort1 = [...dbRikishi].sort((a, b) => b.FS_history[1] - a.FS_history[1])
    const sort2 = [...dbRikishi].sort((a, b) => b.FS_history[2] - a.FS_history[2])
    const sort3 = [...dbRikishi].sort((a, b) => b.FS_history[3] - a.FS_history[3])
    const sort4 = [...dbRikishi].sort((a, b) => b.FS_history[4] - a.FS_history[4])
    const sort5 = [...dbRikishi].sort((a, b) => b.FS_history[5] - a.FS_history[5])
    const sort6 = [...dbRikishi].sort((a, b) => b.FS_history[6] - a.FS_history[6])
    const sort7 = [...dbRikishi].sort((a, b) => b.FS_history[7] - a.FS_history[7])
    const sort8 = [...dbRikishi].sort((a, b) => b.FS_history[8] - a.FS_history[8])
    const sort9 = [...dbRikishi].sort((a, b) => b.FS_history[9] - a.FS_history[9])
    const sort10 = [...dbRikishi].sort((a, b) => b.FS_history[10] - a.FS_history[10])
    const sort11 = [...dbRikishi].sort((a, b) => b.FS_history[11] - a.FS_history[11])

    function FSRikishiSwitch() {
        if (viewState === 'default') {
            return <FSStatsRikishi rikishi={defaultSort} />
        } else if (viewState === 'average') {
            return <FSStatsRikishi rikishi={averageSort} />
        } else if (viewState === '0') {
            return <FSStatsRikishi rikishi={sort0} />
        } else if (viewState === '1') {
            return <FSStatsRikishi rikishi={sort1} />
        } else if (viewState === '2') {
            return <FSStatsRikishi rikishi={sort2} />
        } else if (viewState === '3') {
            return <FSStatsRikishi rikishi={sort3} />
        } else if (viewState === '4') {
            return <FSStatsRikishi rikishi={sort4} />
        } else if (viewState === '5') {
            return <FSStatsRikishi rikishi={sort5} />
        } else if (viewState === '6') {
            return <FSStatsRikishi rikishi={sort6} />
        } else if (viewState === '7') {
            return <FSStatsRikishi rikishi={sort7} />
        } else if (viewState === '8') {
            return <FSStatsRikishi rikishi={sort8} />
        } else if (viewState === '9') {
            return <FSStatsRikishi rikishi={sort9} />
        } else if (viewState === '10') {
            return <FSStatsRikishi rikishi={sort10} />
        } else if (viewState === '11') {
            return <FSStatsRikishi rikishi={sort11} />
        }
    }

    return (
        <div id="DBTable">
            <div id="DBTableColumns">
                <p className='DBImage DBCol' id="default" onClick={handleViewState}>(reset)</p>
                <p className='DBShikona DBCol'>shikona</p>
                <p className='DBAvg DBCol' id="average" onClick={handleViewState}>avg FS score</p>
                <p className='DBBasho DBCol' id="0" onClick={handleViewState}>2021.01</p>
                <p className='DBBasho DBCol' id="1" onClick={handleViewState}>2021.03</p>
                <p className='DBBasho DBCol' id="2" onClick={handleViewState}>2021.05</p>
                <p className='DBBasho DBCol' id="3" onClick={handleViewState}>2021.07</p>
                <p className='DBBasho DBCol' id="4" onClick={handleViewState}>2021.09</p>
                <p className='DBBasho DBCol' id="5" onClick={handleViewState}>2021.11</p>
                <p className='DBBasho DBCol' id="6" onClick={handleViewState}>2022.01</p>
                <p className='DBBasho DBCol' id="7" onClick={handleViewState}>2022.03</p>
                <p className='DBBasho DBCol' id="8" onClick={handleViewState}>2022.05</p>
                <p className='DBBasho DBCol' id="9" onClick={handleViewState}>2022.07</p>
                <p className='DBBasho DBCol' id="10" onClick={handleViewState}>2022.09</p>
                <p className='DBBasho DBCol' id="11" onClick={handleViewState}>2022.11</p>
            </div>
            <div id="DBAllRikishi">
                {FSRikishiSwitch()}
            </div>
        </div>
    )
}

export default FSStats