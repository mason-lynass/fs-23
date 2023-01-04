import { Link } from "react-router-dom"

function NavBar ({user, setUser, hyoshigi}) {

    function handleLogoutClick() {
        if (user) {
            fetch("/logout", { method: "DELETE" }).then((r) => {
                if (r.ok) {
                    setUser(null)
                }
            })
        }
    }

    return (
        <div id="FullTop">
            <div id="HeaderTop">
                <Link id="navLogin" to="/login" onClick={handleLogoutClick}>
                    {user === null ? "Login" : "Logout"}
                </Link>
                <Link to="/">
                    <h1 id="SiteTitle">Fantasy Sumo</h1>
                </Link>
                <Link id="navAccount" to="/account">
                    Account
                </Link>
            </div>
            <div id="NavBar">
                <Link to="/rules" onClick={hyoshigi}>Rules & Scoring</Link>
                <Link to="/draft" onClick={hyoshigi}>Draft Your Team</Link>
                <Link to="/results" onClick={hyoshigi}>All Teams / Results</Link>
                <Link to="/database" onClick={hyoshigi}>Browse the database</Link>
            </div>
        </div>
        
        
    )

}

export default NavBar