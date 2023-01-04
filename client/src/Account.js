// import { useEffect, useState } from "react";
import LoginForm from "./components/LoginForm";
import { useNavigate } from "react-router-dom";

function Account({ user, setUser, rikishi, clap }) {

    const navigate = useNavigate()

    console.log(user)

    function handleDeleteTeam() {
        const toDelete = user.teams.find(e => e.basho === 2023.1).id
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

    function currentBashoTeam() {

        const currentTeam = user.teams.find(e => e.basho === 2023.1)
        const CTRikishiStrings = Object.values(currentTeam).filter((isString))
        const actualTeam = rikishi.filter((r) => CTRikishiStrings.includes(r.shikona))
        console.log(actualTeam)

        return (
            <div>
                <h3>Here's your team for the January tournament:</h3>
                <div id="AccountTeam">
                    {actualTeam.map((obj) =>
                        <div className="AccountOneRikishi" key={obj.id}>
                            <img src={obj.image_url} alt=""/>
                            <h3 className="AORrank">{obj.current_rank}</h3>
                            <h3 className="AORshikona">{obj.shikona}</h3>
                            <h3 className="AORscore">{obj.FS_20226 !== null ? obj.FS_20226 : "0"}</h3>
                        </div>
                    )}
                </div>
                <div id="Redraft">
                    <h4>If you need to redraft before the tournament starts, if someone is injured or you've changed your mind: </h4>
                    <button onClick={handleDeleteTeam}>DELETE TEAM</button>
                </div>
            </div>
        )
    }

    function renderCurrentBashoTeam() {
        if (user.teams.length === 0) {
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