import "./CSS/homepage.css"
import { Link } from "react-router-dom"
import takanoshoFootball from './images/takanosho_football.jpeg'

function Homepage() {
    // next tournament starts on May 14th, banzuke is out on May 1st

    return (
        <div>
            <div id="HomepageFlex">
                <div id='HomeTextFull'>
                    <div id="hello">
                        <p>Congrats to mason on your Fantasy Sumo win, and to Kiribayama for winning the Haru 2023 yusho!</p>
                        <p>The new rankings will be announced on May 1st, so the draft will open on the 2nd.</p>
                    </div>
                    <div id="HomepageText">
                        <p>Welcome to my Fantasy Sumo website!<br></br> Whether you play every other sumo game, or you know absolutely nothing about sumo, I hope you'll join my game.</p>
                        <p>Make sure you read <Link to="/rules">the rules</Link> before you draft<br></br> so that you can get the most points!</p>
                        <p>Once you're familiar with the rules and my scoring system, <Link to="/draft">assemble your team</Link> and show the world you know who's the best!</p>
                        <p>Feel free to <Link to="/database">browse the database</Link> to check out information about individual rikishi, records of past tournaments, and Fantasy Sumo scores going back for years!</p>
                    </div>
                </div>

                <img id="takanoshoFootball" alt="Takanosho throwing a football" src={takanoshoFootball} ></img>
            </div>
        </div>
    )
}

export default Homepage