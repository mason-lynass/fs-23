function RikishiLarge({ clickedRikishi, userTeam, setUserTeam }) {

    const rikishi = clickedRikishi

    console.log(userTeam)

    const totalSansho = (clickedRikishi.shukun_sho + clickedRikishi.kanto_sho + clickedRikishi.gino_sho)

    function calculate_age(dob) {
        const birthdate = new Date(dob)
        const diff_ms = Date.now() - birthdate.getTime();
        const age_dt = new Date(diff_ms)

        return Math.abs(age_dt.getUTCFullYear() - 1970)
    }

    // this is pretty self-explanatory but we're checking for their rank, then checking to see if their normal slot is filled
    function handleAddToTeam(rikishi) {
        if (rikishi.current_rank === "Y" || rikishi.current_rank === "O" || rikishi.current_rank === "S" || rikishi.current_rank === "K") {
            if (userTeam.r1 === "") {
                setUserTeam({ ...userTeam, r1: rikishi })
            } else if (userTeam.r1 !== "" && userTeam.r1 !== rikishi) {
                setUserTeam({ ...userTeam, r6: rikishi })
            }
        }
        if (rikishi.current_rank === "M1" || rikishi.current_rank === "M2" || rikishi.current_rank === "M3" || rikishi.current_rank === "M4") {
            if (userTeam.r2 === "") {
                setUserTeam({ ...userTeam, r2: rikishi })
            } else if (userTeam.r2 !== "" && userTeam.r2 !== rikishi) {
                setUserTeam({ ...userTeam, r6: rikishi })
            }
        }
        if (rikishi.current_rank === "M5" || rikishi.current_rank === "M6" || rikishi.current_rank === "M7" || rikishi.current_rank === "M8") {
            if (userTeam.r3 === "") {
                setUserTeam({ ...userTeam, r3: rikishi })
            } else if (userTeam.r3 !== "" && userTeam.r3 !== rikishi) {
                setUserTeam({ ...userTeam, r6: rikishi })
            }
        }
        if (rikishi.current_rank === "M9" || rikishi.current_rank === "M10" || rikishi.current_rank === "M11" || rikishi.current_rank === "M12") {
            if (userTeam.r4 === "") {
                setUserTeam({ ...userTeam, r4: rikishi })
            } else if (userTeam.r4 !== "" && userTeam.r4 !== rikishi) {
                setUserTeam({ ...userTeam, r6: rikishi })
            }
        }
        if (rikishi.current_rank === "M13" || rikishi.current_rank === "M14" || rikishi.current_rank === "M15" || rikishi.current_rank === "M16" || rikishi.current_rank === "M17" || rikishi.current_rank === "M18") {
            if (userTeam.r5 === "") {
                setUserTeam({ ...userTeam, r5: rikishi })
            } else if (userTeam.r5 !== "" && userTeam.r5 !== rikishi) {
                setUserTeam({ ...userTeam, r6: rikishi })
            }
        }
        if (rikishi.current_rank === "J") {
            setUserTeam({ ...userTeam, r7: rikishi })
        }
    }

    return (
        <div className="RLarge">
            {clickedRikishi ?
                <div>
                    <div className="content">
                        <div className="card-title">
                            <h1>{rikishi.shikona}</h1>
                            <img id="RLargeImage" src={rikishi.image_url} alt={rikishi.shikona}></img>
                        </div>
                        <div>
                            <p>Age: {calculate_age(rikishi.birthdate)} - {rikishi.heya} stable</p>
                            <p>Height: {rikishi.height} cm | Weight: {rikishi.weight} kg</p>
                            <p>current rank: {rikishi.current_rank} | highest rank: {rikishi.highest_rank}</p>
                            <p>career stats: Yusho: {rikishi.yusho} | special prizes: {totalSansho} | Kinboshi: {rikishi.kinboshi}</p>
                            <p>FS points last basho: {rikishi.fsHistories.length > 0 ? rikishi.fsHistories[0].b202507 : "N/A"}</p>

                        </div>
                    </div>
                    <button id="AddRikishiButton" onClick={() => handleAddToTeam(rikishi)}>Add {rikishi.shikona} to your squad</button>
                </div>
                :
                <div id="RLargeTop">
                    <h2>click on a wrestler</h2>
                    <p>their information and stats will show up here</p>
                    <hr></hr>
                    <p>(more stats and score history on the Database page)</p>
                </div>
            }
        </div>
    )
}

export default RikishiLarge