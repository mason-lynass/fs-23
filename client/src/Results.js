import "./CSS/results.css"
import { useEffect, useMemo, useState } from "react"
import RikishiResults from "./components/RikishiResults"
import Hello from "./components/Hello"
import MobileResultsContainer from "./components/MobileResultsContainer"
import DesktopResultsContainer from "./components/DesktopResultsContainer"

function Results({ rikishi, newTeams, teamsLoaded, user }) {
    const [rikishiLoaded, setRikishiLoaded] = useState(false)
    const [resultsRikishi, setResultsRikishi] = useState([])
    const [viewState, setViewState] = useState(true)

    useEffect(() => {
        setResultsRikishi(rikishi)
        if (rikishi.length > 0) {
            setRikishiLoaded(true)
        }
    }, [rikishi])

    const teamsHiToLo = useMemo(() => {
        return newTeams.map((team) => {
            const scoreSum = [team.r1, team.r2, team.r3, team.r4, team.r5, team.r6, team.r7]
                .reduce((sum, r) => sum + r.fs_current, 0)
            return { ...team, scoreSum }
        }).sort((a, b) => b.scoreSum - a.scoreSum)
    }, [newTeams])

    function changeViewState() {
        setViewState(!viewState)
    }

    function renderTeams() {
        if (teamsLoaded === false) {
            return <h2 style={{ textAlign: 'center' }}>Loading...</h2>
        }

        const isMobile = window.matchMedia("(max-width: 600px)").matches
        const ResultsContainer = isMobile ? MobileResultsContainer : DesktopResultsContainer

        return (
            <div>
                <Hello />
                <div id='resultsNav'>
                    <button id='resultsButton' onClick={changeViewState}>
                        {viewState === true ? "rikishi results" : "team results"}
                    </button>
                </div>
                {viewState === true ?
                    <ResultsContainer goodTeams={teamsHiToLo} user={user} />
                    :
                    <RikishiResults rikishi={resultsRikishi} rikishiLoaded={rikishiLoaded} teams={newTeams} teamsLoaded={teamsLoaded} />
                }
            </div>
        )
    }

    return (
        rikishiLoaded === false ?
            <h2 style={{ textAlign: 'center' }}>Loading...</h2>
            :
            renderTeams()
    )
}

export default Results
