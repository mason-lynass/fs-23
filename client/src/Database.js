import "./CSS/database.css"
import { useEffect, useState } from 'react'
import StatsAndInfo from './components/StatsAndInfo'
// import FSStats from './components/FSStats'
import DbTest from "./components/DbTest"

function Database({ rikishi, fsHistories }) {

    const [viewState, setViewState] = useState(false)
    const [dbRikishi, setDBRikishi] = useState([])
    const [rikishiLoaded, setRikishiLoaded] = useState(false)

    useEffect(() => {
        setDBRikishi(rikishi)
        setRikishiLoaded(true)
    }, [rikishi])

    function changeViewState() {
        setViewState(!viewState)
    }

    return (
        (rikishiLoaded === true) ?
            <div id="DBContainer">
                <div id="DBTop">
                    <p id='DBTopSpace'> </p>
                    <h1 id="DBTitle">{viewState === false ? "Rikishi Stats & Info" : "Fantasy Sumo Stats"}</h1>
                    <button id="DBViewState" onClick={changeViewState}>{viewState === false ? "view FS Stats" : "view Rikishi Info"}</button>
                </div>
                <p id='howToSort'>Click on a column header (basho, average score, kinboshi, etc.) to sort by that column</p>
                {viewState === false && dbRikishi.length > 0 ?
                <StatsAndInfo dbRikishi={dbRikishi}/>
                 :
                <DbTest rikishi={rikishi} fsHistories={fsHistories}/>}
            </div>
            :
            <h2>loading...</h2>
    )
}

export default Database