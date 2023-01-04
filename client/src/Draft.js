import { useEffect, useState } from "react"
import DraftTeam from "./components/DraftTeam"
import RikishiList from "./components/RikishiList"
import RikishiLarge from "./components/RikishiLarge"
import LoginForm from "./components/LoginForm"
import SignupForm from "./components/SignupForm"
import { useNavigate } from "react-router-dom"


function Draft({ user, setUser, rikishi, tachiai, clap }) {

    // const [isLoaded, setIsLoaded] = useState(false)
    const navigate = useNavigate()
    const [rikishiLoaded, setRikishiLoaded] = useState(false)
    const [clickedRikishi, setClickedRikishi] = useState("")
    const [draftRikishi, setDraftRikishi] = useState(rikishi)
    const [MRikishi, setMRikishi] = useState(rikishi)
    const [search, setSearch] = useState("")
    const [userTeam, setUserTeam] = useState({
        r1: "",
        r2: "",
        r3: "",
        r4: "",
        r5: "",
        r6: "",
        r7: "",
        user_id: "",
        basho: 2023.1
    })

    useEffect(() => {
        setDraftRikishi(rikishi)
        setMRikishi(rikishi)
        if (rikishi.length > 0) {
            setRikishiLoaded(true)
        }
        // console.log("this")
    }, [rikishi])

    // console.log(MRikishi)

    function onRFilter(e) {
        if (e.target.value === "All") {
            const newRikishi = draftRikishi.filter(rikishi => rikishi.current_rank !== "J")
            setMRikishi(newRikishi)
        } else if (e.target.value === "S") {
            const newRikishi = rikishi.filter(rikishi => (rikishi.current_rank === "Y" || rikishi.current_rank === "O" || rikishi.current_rank === "S" || rikishi.current_rank === "K"))
            setMRikishi(newRikishi)
        } else if (e.target.value === "1") {
            const newRikishi = rikishi.filter(rikishi => (rikishi.current_rank === "M1" || rikishi.current_rank === "M2" || rikishi.current_rank === "M3" || rikishi.current_rank === "M4"))
            setMRikishi(newRikishi)
        } else if (e.target.value === "5") {
            const newRikishi = rikishi.filter(rikishi => (rikishi.current_rank === "M5" || rikishi.current_rank === "M6" || rikishi.current_rank === "M7" || rikishi.current_rank === "M8"))
            setMRikishi(newRikishi)
        } else if (e.target.value === "9") {
            const newRikishi = rikishi.filter(rikishi => (rikishi.current_rank === "M9" || rikishi.current_rank === "M10" || rikishi.current_rank === "M11" || rikishi.current_rank === "M12"))
            setMRikishi(newRikishi)
        } else if (e.target.value === "13") {
            const newRikishi = rikishi.filter(rikishi => (rikishi.current_rank === "M13" || rikishi.current_rank === "M14" || rikishi.current_rank === "M15" || rikishi.current_rank === "M16"))
            setMRikishi(newRikishi)
        }

    }

    function onSearch(e) {
        setSearch(e.target.value)
    }

    const filterBySearch = (r) => {
        return r.filter((r) => r.shikona.toLowerCase().includes(search.toLowerCase()))
    }

    useEffect(() => {
        let result = rikishi
        result = filterBySearch(result)
        setDraftRikishi(result)
        setMRikishi(result)
    }, [search])


    function handleCardClick(r) {
        setClickedRikishi(r)
    }

    // function handleLoginClick() {
    //     navigate("/login")
    // }

    function goToTeam() {
        tachiai()
        navigate("/account")
    }

    // this is where you filter out rikishi if anyone is injured or absent before the tournament
    const MakuuchiRikishi = MRikishi.filter(rikishi => rikishi.current_rank !== "J" && rikishi.shikona !== "Ichinojo")
    const JuryoRikishi = draftRikishi.filter(rikishi => rikishi.current_rank === "J")

    function renderAlreadyDrafted() {
        // console.log('already drafted')
        return (
            <div id="DraftAD">
                <p>you already have a team, silly!</p>
                <button onClick={goToTeam}>check out your team</button>
            </div>
        )
    }

    function renderDraftPage() {
        // console.log('you can draft')
        return (
            <div>
                <div id="DraftTopFlex">
                    <DraftTeam userTeam={userTeam} setUserTeam={setUserTeam} user={user} setUser={setUser} tachiai={tachiai} />
                    <RikishiLarge
                        userTeam={userTeam}
                        setUserTeam={setUserTeam}
                        clickedRikishi={clickedRikishi}
                        handleCardClick={handleCardClick} />
                </div>
                <div id="DraftFilters">
                    <div id="DraftSearch">
                        <label>Search:</label>
                        <input onChange={onSearch} value={search} type="text" name="search"></input>
                    </div>
                    <p>OR filter Makuuchi rikishi:</p>
                    <div id="DFSelect">
                        <select defaultValue="All" onChange={onRFilter}>
                            <option value="All" >All Makuuchi</option>
                            <option value="S">Sanyaku only</option>
                            <option value="1">M1-M4 only</option>
                            <option value="5">M5-M8 only</option>
                            <option value="9">M9-M12 only</option>
                            <option value="13">M13+ only</option>
                        </select>
                    </div>
                </div>
                <div id="AllRikishiFlex">
                    <div id="Makuuchi">
                        <h2>- Makuuchi -</h2>
                        <RikishiList
                            // this needs to filter just makuuchi rikishi
                            rikishi={MakuuchiRikishi}
                            handleCardClick={handleCardClick}
                        />
                    </div>
                    <div id="Juryo">
                        <h2>- Juryo -</h2>
                        <RikishiList
                            // this needs to filter just makuuchi rikishi
                            rikishi={JuryoRikishi}
                            handleCardClick={handleCardClick}
                        />
                    </div>
                </div>
            </div>
        )
    }

    function ADCheck() {
        return (
            (user.teams.some(e => e.basho === 2023.1)) ?
                renderAlreadyDrafted()
                :
                renderDraftPage()
        )
    }

    function areYouLoggedIn() {
        return (
            (user !== null) ?
                ADCheck()
                :
                <div>
                    <p id="DraftLogin">You need to login or sign up to draft a team!</p>
                    <div id="LoginFlex">
                        <LoginForm
                            setUser={setUser}
                            clap={clap}
                        />
                        <SignupForm
                            setUser={setUser}
                            clap={clap}
                        />
                    </div>
                </div>

        )
    }

    return (
        (rikishiLoaded === true) ?
            areYouLoggedIn()
            : <p>loading...</p>
    )
}

export default Draft