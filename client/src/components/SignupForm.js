import "../CSS/signup.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { API_URL } from "./App";

function SignupForm({ setUser, clap }) {

    const navigate = useNavigate()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [errors, setErrors] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const handleSignupSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setErrors([])
        fetch(`${API_URL}/signup`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username,
                password,
                password_confirmation: passwordConfirmation
            })
        }).then(r => {
            setIsLoading(false)
            if (r.ok) {
                r.json().then((user) => {
                    setUser(user)
                    clap()
                    navigate("/")
                })

            } else {
                r.json().then(err => setErrors(err.errors))
            }
        })
    }

    return (
        <div id="SignupFlex">
            <form id="SignupForm" onSubmit={handleSignupSubmit}>
                <h2 style={{ textAlign: "center" }}>Sign Up</h2>
                <div id='SignupLines'>
                    <div className="SignupLine">
                        <label>
                            Username:
                        </label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="SignupLine">
                        <label>
                            Password:
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="SignupLine">
                        <label id='pc'>
                            Confirm password:
                        </label>
                        <input
                            type="password"
                            value={passwordConfirmation}
                            onChange={(e) => setPasswordConfirmation(e.target.value)}
                        />
                    </div>
                </div>
                <button type="submit">
                    {isLoading ? "Loading" : "Sign Up!"}
                </button>
                {errors.map((err) => (
                    <p key={err}>{err}</p>
                ))}
            </form>
        </div>
    )
}

export default SignupForm