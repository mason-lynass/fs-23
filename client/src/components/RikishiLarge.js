function RikishiLarge({ clickedRikishi, userTeam, setUserTeam }) {

    const rikishi = clickedRikishi

    const totalSansho = (clickedRikishi.shukun_sho + clickedRikishi.kanto_sho + clickedRikishi.gino_sho)

    function calculate_age(dob) {
        const birthdate = new Date(dob)
        const diff_ms = Date.now() - birthdate.getTime();
        const age_dt = new Date(diff_ms)

        return Math.abs(age_dt.getUTCFullYear() - 1970)
    }

    // if (userTeam.r1 !== "" && userTeam.r6 !== "") {
    //     const target = document.querySelectorAll("#Y, #O, #S, #K")
    //     target.forEach(e => e.classList.add("greyed"))
    // } else if (userTeam.r2 !== "" && userTeam.r6 !== "") {
    //     const target = document.querySelectorAll("#1, #2, #3, #4")
    //     target.forEach(console.log("hellooooo"))
    // }


    function handleAddToTeam(rikishi) {
        if (rikishi.current_rank === "Y" || rikishi.current_rank === "O" || rikishi.current_rank === "S" || rikishi.current_rank === "K") {
            if (userTeam.r1 === "") {
                setUserTeam({ ...userTeam, r1: rikishi.shikona })
            } else if (userTeam.r1 !== "" && userTeam.r1 !== rikishi.shikona) {
                setUserTeam({ ...userTeam, r6: rikishi.shikona })
                const target = document.querySelectorAll(`#Y, #O, #S, #K`)
                target.forEach(e => e.classList.add("greyed"))
            }
        }
        if (rikishi.current_rank === "M1" || rikishi.current_rank === "M2" || rikishi.current_rank === "M3" || rikishi.current_rank === "M4") {
            if (userTeam.r2 === "") {
                setUserTeam({ ...userTeam, r2: rikishi.shikona })
            } else if (userTeam.r2 !== "" && userTeam.r2 !== rikishi.shikona) {
                setUserTeam({ ...userTeam, r6: rikishi.shikona })
                const target = document.querySelectorAll(`#M1, #M2, #M3, #M4`)
                target.forEach(e => e.classList.add("greyed"))
            }
        }
        if (rikishi.current_rank === "M5" || rikishi.current_rank === "M6" || rikishi.current_rank === "M7" || rikishi.current_rank === "M8") {
            if (userTeam.r3 === "") {
                setUserTeam({ ...userTeam, r3: rikishi.shikona })
            } else if (userTeam.r3 !== "" && userTeam.r3 !== rikishi.shikona) {
                setUserTeam({ ...userTeam, r6: rikishi.shikona })
                const target = document.querySelectorAll(`#M5, #M6, #M7, #M8`)
                target.forEach(e => e.classList.add("greyed"))
            }
        }
        if (rikishi.current_rank === "M9" || rikishi.current_rank === "M10" || rikishi.current_rank === "M11" || rikishi.current_rank === "M12") {
            if (userTeam.r4 === "") {
                setUserTeam({ ...userTeam, r4: rikishi.shikona })
            } else if (userTeam.r4 !== "" && userTeam.r4 !== rikishi.shikona) {
                setUserTeam({ ...userTeam, r6: rikishi.shikona })
                const target = document.querySelectorAll(`#M9, #M10, #M11, #M12`)
                target.forEach(e => e.classList.add("greyed"))
            }
        }
        if (rikishi.current_rank === "M13" || rikishi.current_rank === "M14" || rikishi.current_rank === "M15" || rikishi.current_rank === "M16" || rikishi.current_rank === "M17") {
            if (userTeam.r5 === "") {
                setUserTeam({ ...userTeam, r5: rikishi.shikona })
            } else if (userTeam.r5 !== "" && userTeam.r5 !== rikishi.shikona) {
                setUserTeam({ ...userTeam, r6: rikishi.shikona })
                const target = document.querySelectorAll(`#M13, #M14, #M15, #M16`)
                target.forEach(e => e.classList.add("greyed"))
            }
        }
        if (rikishi.current_rank === "J") {
            setUserTeam({ ...userTeam, r7: rikishi.shikona })
            const target = document.querySelectorAll(`#J`)
            target.forEach(e => e.classList.add("greyed"))
        }
    }

    return (
        <div className="RLarge">
            {clickedRikishi ?
                <div className="content"
                // onClick={() => handleCardClick(rikishi)}
                >
                    <div className="card-title">
                        <h1>{rikishi.shikona}</h1>
                        <img id="RLargeImage" src={rikishi.image_url} alt={rikishi.shikona}></img>
                    </div>
                    <p>Age: {calculate_age(rikishi.birthdate)} - {rikishi.heya} stable</p>
                    <p>Height: {rikishi.height} cm | Weight {rikishi.weight} kg</p>
                    <p>current rank: {rikishi.current_rank} | highest rank: {rikishi.highest_rank}</p>
                    <p>career stats: Yusho: {rikishi.yusho} | special prizes: {totalSansho} | Kinboshi: {rikishi.kinboshi}</p>
                    <p>FS points last basho: {rikishi.FS_20226 !== null ? rikishi.FS_20226 : "N/A"}</p>
                    <button id="AddRikishiButton" onClick={() => handleAddToTeam(rikishi)}>Add {rikishi.shikona} to your squad</button>
                </div>

                :
                <div id="RLargeTop">
                    <h2>click on a wrestler</h2>
                    <p>their information and stats will show up here</p>
                </div>
            }
        </div>
    )
}

export default RikishiLarge