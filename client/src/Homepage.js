import { Link } from "react-router-dom"
import takanoshoFootball from './images/takanosho_football.jpeg'

function Homepage() {
    // next tournament starts on March 12, banzuke is out on Feb 27

    return (
        <div>
            <div id="hello">
                <p>Congratulations to <h2>heavenhouse666</h2> for your win in the Hatsu 2023 Fantasy Sumo Tournament!</p>
                <p>All scores on the Results page are final,<br></br> and they'll be available until the next draft is live.</p>
                <p>The banzuke for the next tournament will be published on February 27th, and the Draft page will be up soon after. The next tournament begins on March 12th, so make sure you draft before then!</p>
            </div>
            <div id="HomepageFlex">
                <div id="HomepageText">
                    <p>Welcome to my Fantasy Sumo website!<br></br> Whether you play every other sumo game, or you know absolutely nothing about sumo, I hope you'll join my game.</p>
                    <p>Make sure you read <Link to="/rules">the rules</Link> before you draft<br></br> so that you can get the most points!</p>
                    <p>Once you're familiar with the rules and my scoring system, <Link to="/draft">assemble your team</Link> and show the world you know who's the best!</p>
                    <p>Feel free to <Link to="/database">browse the database</Link> to check out information about individual rikishi, records of past tournaments, and Fantasy Sumo scores going back for years!</p>
                </div>
                <img id="takanoshoFootball" alt="Takanosho throwing a football" src={takanoshoFootball} ></img>
            </div>
        </div>
    )
}

export default Homepage