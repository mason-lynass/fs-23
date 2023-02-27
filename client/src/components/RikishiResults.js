import MResults from "./MResults"
import JResults from "./JResults"

function RikishiResults({ rikishi }) {

    const alphaSort = [...rikishi].sort((a, b) => a.shikona.localeCompare(b.shikona))

    // && rikishi.shikona !== "Ichinojo" && rikishi.shikona !== "Terunofuji"
    const MRikishi = [...rikishi].filter(rikishi => rikishi.current_rank !== "J" ).sort((a, b) => b.FS_20233 - a.FS_20233)
    const JRikishi = [...alphaSort].filter(rikishi => rikishi.current_rank === "J").sort((a, b) => b.FS_20233 - a.FS_20233)



    return (
        <div id="RRContainer">
            <div id="MRR">
                <section className="RRtop">
                    <h3 id="RRMakuuchi">Makuuchi</h3>
                    <div id="MRRTitles">
                        <h2 className="RRShikona">Shikona</h2>
                        <h2 className="RRPoints">FS Points</h2>
                    </div>
                </section>
                <MResults MRikishi={MRikishi} />
            </div>
            <div id="JRR">
                <section className="RRtop">
                    <h3 id="RRJuryo">Juryo</h3>
                    <div id="JRRTitles">
                        <h2 className="RRShikona">Shikona</h2>
                        <h2 className="RRPoints">FS Points</h2>
                    </div>
                </section>
                <JResults JRikishi={JRikishi} />
            </div>
        </div>
    )
}

export default RikishiResults