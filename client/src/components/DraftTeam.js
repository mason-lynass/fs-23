import { useState} from "react"
// import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function DraftTeam({ userTeam, setUserTeam, user, setUser, teams, setTeams, tachiai }) {

    const navigate = useNavigate()
    const [errors, setErrors] = useState("")

    // function handleTeamFormChange(e) {
    //     const name = e.target.name;
    //     const value = e.target.value;
    //     setUserTeam({...userTeam, [name]: value})
    //   }


    function handleTeamFormSubmit(e) {
        e.preventDefault()
        fetch(`/teams`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({...userTeam, user_id: user.id})
        })
        .then((r) => {
            if (r.ok) {
                tachiai()
                fetch("/me")
                    .then(r => r.json())
                    .then(user => {
                        setUser(user)
                        navigate('/account')
                        console.log('submitted!')
                    })
            } else {
                r.json().then(err => {
                    setErrors(err.errors)
                    console.log(errors)
                })
            }
            
        })
        

        // .then(r => r.json())
        // then we need to just navigate to the account page!
        // .then((newTeam) => setTeams([...teams, newTeam]))
    }


    function errorMessage () {
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
        // console.log(i)
        // console.log(newTeam)
    }

    return (
        <div id="FSTeam" className="FSTeamContainer">
            <h2>Build your Fantasy Sumo team</h2>
            <div id="FSFlex">
                <div id="FSTeamTable">
                    <p>One sanyaku rikishi:</p>
                    <p>One rikishi M1-M4:</p>
                    <p>One rikishi M5-M8:</p>
                    <p>One rikishi M9-M12:</p>
                    <p>One rikishi M13-M17:</p>
                    <p>One extra rikishi any rank:</p>
                    <p>One Juryo rikishi:</p>
                </div>
                <div id="FSRikishi">
                    <p>{userTeam.r1} {userTeam.r1 !== "" ? <button id="r1" onClick={handleXButton}>x</button> : null}</p>
                    <p>{userTeam.r2} {userTeam.r2 !== "" ? <button id="r2" onClick={handleXButton}>x</button> : null}</p>
                    <p>{userTeam.r3} {userTeam.r3 !== "" ? <button id="r3" onClick={handleXButton}>x</button> : null}</p>
                    <p>{userTeam.r4} {userTeam.r4 !== "" ? <button id="r4" onClick={handleXButton}>x</button> : null}</p>
                    <p>{userTeam.r5} {userTeam.r5 !== "" ? <button id="r5" onClick={handleXButton}>x</button> : null}</p>
                    <p>{userTeam.r6} {userTeam.r6 !== "" ? <button id="r6" onClick={handleXButton}>x</button> : null}</p>
                    <p>{userTeam.r7} {userTeam.r7 !== "" ? <button id="r7" onClick={handleXButton}>x</button> : null}</p>
                </div>
            </div>
            <div>
                <form id="FSTeamBottom" onSubmit={handleTeamFormSubmit}>
                    <button type="submit">Submit your team</button>
                    {errorMessage()}
                    <p id="warning">remember, no edits after you submit!</p>
                </form>
            </div>
            
        </div>
    )
}

export default DraftTeam