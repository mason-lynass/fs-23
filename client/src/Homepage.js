import { Link } from "react-router-dom"
import takanoshoFootball from './images/takanosho_football.jpeg'

function Homepage() {
    return (
        <div id="HomepageFlex">
            <div id="HomepageText">
                <p>Welcome to my Fantasy Sumo website!<br></br> Whether you play every other sumo game, or you know absolutely nothing about sumo, I hope you'll join my game.</p>
                <p>Make sure you read <Link to="/rules">the rules</Link> before you draft<br></br> so that you can get the most points!</p>
                <p>Once you're familiar with the rules and my scoring system,<br></br> <Link to="/draft">assemble your team</Link> and show the world you know who's the best!</p>
                <p>Feel free to <Link to="/database">browse the database</Link> to check out information about individual rikishi, records of past tournaments, and Fantasy Sumo scores going back for years!</p>
            </div>
            <img id="takanoshoFootball" alt="Takanosho throwing a football" src={takanoshoFootball} ></img>
        </div>
    )
}

export default Homepage