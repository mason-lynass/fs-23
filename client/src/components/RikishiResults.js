import MResults from "./MResults"
import JResults from "./JResults"
import HowMany from "./HowMany"

function RikishiResults({ rikishi, teams, teamsLoaded, rikishiLoaded }) {

    const alphaSort = [...rikishi].sort((a, b) => a.shikona.localeCompare(b.shikona))

    // && rikishi.shikona !== "Ichinojo" && rikishi.shikona !== "Terunofuji"
    const MRikishi = [...rikishi].filter(rikishi => rikishi.current_rank !== "J" && rikishi.current_rank !== "MS" && rikishi.current_rank !== 'i').sort((a, b) => b.fs_current - a.fs_current)
    const JRikishi = [...alphaSort].filter(rikishi => rikishi.current_rank === "J").sort((a, b) => b.fs_current - a.fs_current)

    return (
        <div id='allRR'>
            <div id="RRContainer">
                <div id="MRR">
                    <section className="RRtop">
                        <h3 id="RRMakuuchi">Makuuchi FS Points</h3>
                    </section>
                    <MResults MRikishi={MRikishi} />
                </div>
                <div id="JRR">
                    <section className="RRtop">
                        <h3 id="RRJuryo">Juryo FS Points</h3>
                    </section>
                    <JResults JRikishi={JRikishi} />
                </div>
            </div>
            <HowMany teams={teams} teamsLoaded={teamsLoaded} rikishi={rikishi} rikishiLoaded={rikishiLoaded}/>
        </div>

    )
}

export default RikishiResults