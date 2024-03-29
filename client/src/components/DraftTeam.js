import { useState } from "react"
// import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function DraftTeam({ userTeam, setUserTeam, user, setUser, teams, setTeams, tachiai }) {

    const navigate = useNavigate()
    const [errors, setErrors] = useState("")

    function handleTeamFormSubmit(e) {
        e.preventDefault()
        fetch(`/teams`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...userTeam, user_id: user.id })
        })
            .then((r) => {
                if (r.ok) {
                    tachiai()
                    fetch("/me")
                        .then(r => r.json())
                        .then(user => {
                            setUser(user)
                            navigate('/account')
                        })
                } else {
                    r.json().then(err => {
                        setErrors(err.errors)
                    })
                }
            })
    }

    function errorMessage() {
        if (errors !== "") {
            return (
                <p id="DraftErrorMessage">{errors}</p>
            )
        }
    }

    function handleXButton(clicked) {
        let i = clicked.target.id
        const newTeam = { ...userTeam }
        newTeam[i] = ""
        setUserTeam(newTeam)
    }

    return (
        <div id="FSTeam" className="FSTeamContainer">
            <h2>Build your Fantasy Sumo team</h2>
            <div id="FSFlex">
                <div id="FSTeamTable">
                    <p>Sanyaku:</p>
                    <p>M1-M4:</p>
                    <p>M5-M8:</p>
                    <p>M9-M12:</p>
                    <p>M13-M16:</p>
                    <p>extra (any rank):</p>
                    <p>Juryo:</p>
                </div>
                <div id="FSRikishi">
                    <div>
                        <p>{userTeam.r1} </p>
                        {userTeam.r1 !== "" ? <button id="r1" onClick={handleXButton}>X</button> : null}
                    </div>
                    <div>
                    <p>{userTeam.r2}</p> {userTeam.r2 !== "" ? <button id="r2" onClick={handleXButton}>X</button> : null}
                    </div>
                    <div>
                    <p>{userTeam.r3}</p> {userTeam.r3 !== "" ? <button id="r3" onClick={handleXButton}>X</button> : null}
                    </div>
                    <div>
                    <p>{userTeam.r4}</p> {userTeam.r4 !== "" ? <button id="r4" onClick={handleXButton}>X</button> : null}
                    </div>
                    <div>
                    <p>{userTeam.r5}</p> {userTeam.r5 !== "" ? <button id="r5" onClick={handleXButton}>X</button> : null}
                    </div>
                    <div>
                    <p>{userTeam.r6}</p> {userTeam.r6 !== "" ? <button id="r6" onClick={handleXButton}>X</button> : null}
                    </div>
                    <div>
                    <p>{userTeam.r7}</p> {userTeam.r7 !== "" ? <button id="r7" onClick={handleXButton}>X</button> : null}   
                    </div> 
                </div>
            </div>
            <div>
                {/* only show this when all r spots are filled */}
                {
                    (userTeam.r1 === "" || userTeam.r2 === "" || userTeam.r3 === "" || userTeam.r4 === "" || userTeam.r5 === "" || userTeam.r6 === "" || userTeam.r7 === "")
                     ? 
                    null
                    :
                    <form id="FSTeamBottom" onSubmit={handleTeamFormSubmit}>
                    <button type="submit">Submit your team</button>
                    {errorMessage()}
                    <p id="warning">remember, no edits after you submit!</p>
                </form>
                }
                
            </div>

        </div>
    )
}

export default DraftTeam