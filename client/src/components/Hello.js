function Hello() {
    return (
        <div id="hello">
            {/*  when it's time to draft */}
            {/* <p> The draft is open!<br/><br/> The next tournament begins on January 14th, so make sure you draft before then!</p> */}

            {/* when the tournament is live */}
            {/* <p>The tournament has started, and the draft is closed! The next draft will begin after the banzuke is announced for the next tournament.</p> */}

            {/* if you want to let someone contact you for some reason */}
            {/* <p>(If you picked someone that's out of the tournament, feel free to email me at mtfujisumo at gmail.com with your team name and new pick.)</p> */}

            {/* after the tournament */}
            <p>Congrats to Itchynotoe on your Fantasy Sumo victory! </p><p> The new rankings will be announced on February 26th, so the draft will be open from February 27th - March 10th.</p>
        </div>
    )
}

export default Hello