import Kotomitsuki from "./images/kotomitsuki.png"
import { Link } from "react-router-dom"

function Rules() {

    return (
        <div>
            <div id="RulesTopFlex">
                <div id="RulesText">
                    <div id="HowItWorks">
                        <h2>How It Works:</h2>
                        <p>Once you've made an account and logged in, you can select 7 rikishi from the top two divisions for your team.</p>
                        <div id="HWFlex">
                            <div>
                                <p>Pick one rikishi for each of these ranks:</p>
                                <ul>
                                    <li>Sanyaku</li>
                                    <li>M1-M4</li>
                                    <li>M5-M8</li>
                                    <li>M9-M12</li>
                                    <li>M13-M16+</li>
                                    <li>Any rank in Makuuchi</li>
                                    <li>Juryo</li>
                                </ul>
                            </div>
                            <div>
                                <p style={{ width: "360px" }}>You won't be able to replace rikishi on your squad in the event of injury or any other absence. <br></br><br></br>Let's hope everybody stays healthy!</p>
                            </div>
                        </div>
                    </div>
                    <div id="Scoring">
                        <h3>Scoring:</h3>
                        <p>Wrestlers will earn one point for each match they win over the 15 days of the tournament.</p>
                        <p>Bonus points are awarded for wins against a sanyaku opponent -<br></br> one bonus point for each rank difference:</p>
                        <ul>
                            <li>Maegashira earn 1 bonus point for beating a Komusubi, 2 - Sekiwake, 3 - Ozeki, 4 - Yokozuna</li>
                            <li>Komusubi earn 1 bonus point for beating a Sekiwake, 2 - Ozeki, 3 - Yokozuna</li>
                            <li>Sekiwake earn 1 bonus point for beating an Ozeki, 2 for a Yokozuna</li>
                            <li>Ozeki earn 1 bonus point for beating a Yokozuna</li>
                        </ul>
                        <p>Sansho and Makuuchi Yusho earn an additional 5 bonus points.</p>
                    </div>
                </div>
                <div id="ScoringFacts">
                    <div>
                        <h3>Here's the current one rikishi high score - <br></br>a legendary tournament from Kotomitsuki in Aki 2001:</h3>
                        <div id="ScoringFlex">
                            <img id="Kotomitsuki" alt="Kotomitsuki's 43 point basho, Aki 2001" src={Kotomitsuki} />
                            <div>
                                <p>13 wins = 13 points</p>
                                <p>1Y - 4, 2O - 6, 2S - 4, 2K - 2 = 16 bonus points</p>
                                <p> Yusho, gino-sho, shukun-sho = 15 points</p>
                                <h3>44 points!</h3>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <div id="MoreFacts">
                <p>Daieisho set the high bar for active rikishi in January 2021, earning 43 points in his Yusho winning effort.</p>
                <p>Right now, the active leader in Fantasy Sumo points per basho is Wakatakakage, with 12.67 points</p>
                <p>Asashoryu is the all-time leader in average points per basho,<br></br> but Hakuho set the all-time total points record at 1399 at the end of his much longer career.</p>
                <p>You can find Fantasy Sumo records going back 20 years, and all kinds of other info about wrestlers on the <Link to="/database">Database page</Link>.</p>
            </div>
        </div>
    )
}

export default Rules