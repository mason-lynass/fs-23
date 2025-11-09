import "./CSS/results.css"
import { useEffect, useState } from "react"
import RikishiResults from "./components/RikishiResults"
import Hello from "./components/Hello"
import MobileResultsContainer from "./components/MobileResultsContainer"
import DesktopResultsContainer from "./components/DesktopResultsContainer"

function Results({ rikishi, newTeams, teamsLoaded, rankSort, user }) {

    const [rikishiLoaded, setRikishiLoaded] = useState(false)
    const [resultsRikishi, setResultsRikishi] = useState([])
    const [viewState, setViewState] = useState(true)

    useEffect(() => {
        setResultsRikishi(rikishi)
        if (rikishi.length > 0) {
            rankSort(rikishi)
            setRikishiLoaded(true)
        }
    }, [rikishi, rankSort])

    function changeViewState() {
        setViewState(!viewState)
    }

    function renderTeamsNormal() {

        const allTeamsAsObjects = newTeams.map((team) => {
            const teamRikishi = ([
                team.r1,
                team.r2,
                team.r3,
                team.r4,
                team.r5,
                team.r6,
                team.r7])

            let scoreSum = 0
            for (const item of teamRikishi) { scoreSum += item.fs_current }

            const teamWTotal = { ...team, scoreSum: scoreSum }

            return (teamWTotal)
        })

        const teamsHiToLo = [...allTeamsAsObjects].sort((a, b) => b.scoreSum - a.scoreSum)

        return (
            (teamsLoaded === false) ?
                <h2 style={{ textAlign: 'center'}}>Loading...</h2>
                :
                <div>
                    <Hello />
                    <div id='resultsNav'>
                        <button id='resultsButton' onClick={changeViewState}>{viewState === true ? "rikishi results" : "team results"}</button>
                    </div>
                    {viewState === true ? 
                    <DesktopResultsContainer goodTeams={teamsHiToLo} user={user} />
                     :
                    <RikishiResults rikishi={resultsRikishi} rikishiLoaded={rikishiLoaded} teams={newTeams} teamsLoaded={teamsLoaded}/>
                    }
                </div>
        )
    }

    function renderTeamsMobile() {

        const allTeamsAsObjects = newTeams.map((team) => {
            const teamRikishi = ([
                team.r1,
                team.r2,
                team.r3,
                team.r4,
                team.r5,
                team.r6,
                team.r7])

                let scoreSum = 0
                for (const item of teamRikishi) { scoreSum += item.fs_current }
    
                const teamWTotal = { ...team, scoreSum: scoreSum }
    
                return (teamWTotal)
        })

        const teamsHiToLo = [...allTeamsAsObjects].sort((a, b) => b.scoreSum - a.scoreSum)

        return (
            (teamsLoaded === false) ?
                <h2 style={{ textAlign: 'center'}}>Loading...</h2>
                :
                <div>
                    <Hello />
                    <div id='resultsNav'>
                        <button id='resultsButton' onClick={changeViewState}>{viewState === true ? "rikishi results" : "team results"}</button>
                    </div>
                    {viewState === true ? 
                    <MobileResultsContainer goodTeams={teamsHiToLo} user={user} />
                     :
                    <RikishiResults rikishi={resultsRikishi} teams={newTeams} teamsLoaded={teamsLoaded} rikishiLoaded={rikishiLoaded}/>
                    }
                </div>
        )
    }

    const mobileScreen = window.matchMedia("(max-width: 600px)")

    function renderTeams() {
        if (mobileScreen.matches) {
            return renderTeamsMobile()
        }
        else return renderTeamsNormal()
    }

    return (
        (rikishiLoaded === false) ?
            <h2 style={{ textAlign: 'center'}}>Loading...</h2>
            :
            renderTeams()
    )
}

export default Results
