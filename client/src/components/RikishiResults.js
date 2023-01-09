import MResults from "./MResults"
import JResults from "./JResults"

function RikishiResults({ rikishi }) {

    console.log(rikishi)

    const MRikishi = [...rikishi].filter(rikishi => rikishi.current_rank !== "J" && rikishi.shikona !== "Ichinojo" && rikishi.shikona !== "Terunofuji").sort((a, b) => b.FS_20231 - a.FS_20231)
    const JRikishi = [...rikishi].filter(rikishi => rikishi.current_rank === "J").sort((a, b) => b.FS_20231 - a.FS_20231)



    return (
        <div id="RRContainer">
            <div id="MRR">
                <h3 id="RRMakuuchi">Makuuchi</h3>
                <div id="MRRTitles">
                    <h2 className="RRShikona">Shikona</h2>
                    <h2 className="RRPoints">FS Points</h2>
                </div>
                <MResults MRikishi={MRikishi} />
            </div>
            <div id="JRR">
                <h3 id="RRJuryo">Juryo</h3>
                <div id="JRRTitles">
                    <h2 className="RRShikona">Shikona</h2>
                    <h2 className="RRPoints">FS Points</h2>
                </div>
                <JResults JRikishi={JRikishi} />
            </div>
        </div>
    )
}

export default RikishiResults