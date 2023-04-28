import "./CSS/account.css"
import "./CSS/media.css"
import PreviousTeams from "./components/PreviousTeams";
import LoginForm from "./components/LoginForm";
import { useNavigate } from "react-router-dom";

function Account({ user, setUser, rikishi, clap, teams, goodTeamNames, fsHistories }) {

    const navigate = useNavigate()

    // starting to think about displaying the rank during the basho
    // basically need to recreate what's happening in PreviousTeams
    const otherTeams = [...teams].filter((team) => team.basho === 2023.3 && goodTeamNames.includes(team.user.username))
    // console.log(otherTeams)
    const sortedOtherTeams = otherTeams.sort((a, b) => b.final_score - a.final_score)
    const teamPosition = sortedOtherTeams.findIndex((team) => team.user.username === user.username) + 1

    function handleDeleteTeam() {
        // change this every basho
        const toDelete = user.teams.find(e => e.basho === 2023.5).id
        fetch(`/teams/${toDelete}`, { method: "DELETE" })
            .then((r) => {
                if (r.ok) {
                    fetch("/me").then((r) => {
                        if (r.ok) {
                            r.json().then((user) => {
                                setUser(user)
                                navigate("/draft")
                            });
                        }
                    })
                }
            })
    }

    function isString(value) { return typeof value === "string" }

    // change these every basho
    const currentTeam = user.teams.find(e => e.basho === 2023.5)
    const oldTeams = user.teams.filter(e => e.basho !== 2023.5)
    // console.log(oldTeams)

    function currentBashoTeam() {
        
        const CTRikishiStrings = Object.values(currentTeam).filter((isString))
        const actualTeam = rikishi.filter((r) => CTRikishiStrings.includes(r.shikona))

        const indivPoints = actualTeam.map((r) => r.FS_20233)
        const totalPoints = indivPoints.reduce((a, b) => a + b, 0)

        return (
            <div>
                <h3>Here's your team for the May tournament:</h3>
                <div id="AccountTeam">
                    <div id="ATRikishi">
                        {actualTeam.map((obj) =>
                            <div className="AccountOneRikishi" key={obj.id}>
                                <img src={obj.image_url} alt="" />
                                <h3 className="AORrank">{obj.current_rank}</h3>
                                <h3 className="AORshikona">{obj.shikona}</h3>
                                {/* change this every basho */}
                                <h3 className="AORscore">{obj.fs_current !== null ? obj.fs_current : "0"}</h3>
                            </div>
                        )}
                    </div>
                    <div id="ATTotal">
                        <h1>{totalPoints}</h1>
                        <h2>points</h2>
                        <hr></hr>
                        <h2>#{teamPosition} out of</h2>
                        <h2>{otherTeams.length} teams</h2>
                    </div>
                </div>
                <div id="delay">
                    <h4>Your team will be visible on the Results page before and during the tournament - there may be some delay in visibility, up to 24 hours after you draft your team.</h4>
                </div>
                {/* turn this off during the tournament */}
                <div id="Redraft">
                    <h4>If you need to redraft before the tournament starts, if someone is injured or you've changed your mind: </h4>
                    <button onClick={handleDeleteTeam}>DELETE TEAM</button>
                </div>
            </div>
        )
    }

    function renderCurrentBashoTeam() {
        // change this every basho
        if (user.teams.find(e => e.basho === 2023.5) === undefined) {
            return (
                <p id="NoTeam">You haven't drafted a team yet for the upcoming tournament</p>
            )
        } else {
            return (currentBashoTeam())
        }
    }

    function renderAccountPage() {
        if (!user) {
            return (
                <div>
                    <h1 id="AccountLogin">You need to login to see your account page!</h1>
                    <LoginForm id="AccountLoginForm" clap={clap} setUser={setUser} />
                </div>
            )
        } else {
            return (
                <div id="AccountPage">
                    <h2 id="AccountHello">Hello, {user.username}!</h2>
                    {renderCurrentBashoTeam()}
                    {oldTeams.length > 0 ?
                        <PreviousTeams user={user} rikishi={rikishi} teams={teams} fsHistories={fsHistories}/>
                        :
                        null}
                </div>
            )
        }
    }

    return (
        <>
            {renderAccountPage()}
        </>
    )
}

export default Account