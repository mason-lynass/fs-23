import "./CSS/results.css"
import { useEffect, useState } from "react"
import RikishiResults from "./components/RikishiResults"
// import Hello from "./components/Hello"
// import ResultsNav from './components/ResultsNav'
import MobileResultsContainer from "./components/MobileResultsContainer"
import DesktopResultsContainer from "./components/DesktopResultsContainer"

function Results({ rikishi, teams, teamsLoaded, rankSort, goodTeamNames }) {

    const [rikishiLoaded, setRikishiLoaded] = useState(false)
    const [resultsRikishi, setResultsRikishi] = useState([])
    const [viewState, setViewState] = useState(true)

    // change this every basho
    const currentTeams = teams.filter((team) => team.basho === 2023.5)

    useEffect(() => {
        setResultsRikishi(rikishi)
        if (rikishi.length > 0) {
            rankSort(rikishi)
            setRikishiLoaded(true)
        }
    }, [rikishi])

    function changeViewState() {
        setViewState(!viewState)
    }

    function renderTeamsNormal() {

        const allTeamsAsObjects = currentTeams.map((team) => {
            const teamRikishi = ([
                team.r1,
                team.r2,
                team.r3,
                team.r4,
                team.r5,
                team.r6,
                team.r7])

            const newRikishiObjects = teamRikishi.map((tR) => {
                return resultsRikishi.filter((r) => r.shikona === tR)[0]
            })

            // change this every basho (maybe not now?)
            const ROScores = newRikishiObjects.map((r) => r.fs_current)

            let scoreSum = 0
            for (const item of ROScores) { scoreSum += item }

            const teamWTotal = { ...newRikishiObjects, scoreSum: scoreSum, user: team.user, id: team.id }

            return (teamWTotal)
        })

        const teamsHiToLo = [...allTeamsAsObjects].sort((a, b) => b.scoreSum - a.scoreSum)

        // uses "goodTeamNames" from App.js
        const goodTeams = teamsHiToLo.filter((team) => goodTeamNames.includes(team.user.username))
        // console.log(teamsHiToLo)
        // console.log(goodTeams)

        return (
            (teamsLoaded === false) ?
                <h2>Loading...</h2>
                :
                <div>
                    {/* <Hello /> */}
                    <div id='resultsNav'>
                        <button id='resultsButton' onClick={changeViewState}>{viewState === true ? "rikishi results" : "team results"}</button>
                    </div>
                    {viewState === true ? 
                    <DesktopResultsContainer goodTeams={goodTeams} rikishi={rikishi} />
                     :
                    <RikishiResults rikishi={rikishi} teams={teams} teamsLoaded={teamsLoaded}/>
                    }
                </div>
        )
    }

    function renderTeamsMobile() {

        const allTeamsAsObjects = currentTeams.map((team) => {
            const teamRikishi = ([
                team.r1,
                team.r2,
                team.r3,
                team.r4,
                team.r5,
                team.r6,
                team.r7])

            const newRikishiObjects = teamRikishi.map((tR) => {
                return resultsRikishi.filter((r) => r.shikona === tR)[0]
            })

            // change this every basho (maybe not now?)
            const ROScores = newRikishiObjects.map((r) => r.fs_current)

            let scoreSum = 0
            for (const item of ROScores) { scoreSum += item }

            const teamWTotal = { ...newRikishiObjects, scoreSum: scoreSum, user: team.user, id: team.id }

            return (teamWTotal)
        })

        const teamsHiToLo = [...allTeamsAsObjects].sort((a, b) => b.scoreSum - a.scoreSum)

        // uses "goodTeamNames" from App.js
        const goodTeams = teamsHiToLo.filter((team) => goodTeamNames.includes(team.user.username))
        // console.log(teamsHiToLo)
        // console.log(goodTeams)

        return (
            (teamsLoaded === false) ?
                <h2>Loading...</h2>
                :
                <div>
                    {/* <Hello /> */}
                    <div id='resultsNav'>
                        <button id='resultsButton' onClick={changeViewState}>{viewState === true ? "rikishi results" : "team results"}</button>
                    </div>
                    {viewState === true ? 
                    <MobileResultsContainer goodTeams={goodTeams} rikishi={rikishi} />
                     :
                    <RikishiResults rikishi={rikishi} teams={teams} teamsLoaded={teamsLoaded}/>
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
            <h2>Loading...</h2>
            :
            renderTeams()
    )
}

export default Results