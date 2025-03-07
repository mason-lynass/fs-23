function Hello() {
  return (
    <div id="hello">
      {/*  when it's time to draft */}
      <p>
        The draft is open!
        <br />
        <br /> The next tournament begins on March 9th, so make sure you draft
        before then!
      </p>
      <br />
      <hr style={{ width: "100px", margin: "5px auto" }} />
      <br />
      <p>
        I'm actively working on an error with account login. Thanks for emailing
        me if you found my address!
      </p>
      <br />
      <p>
        If you created multiple accounts / teams to get around the login bug and
        you want to consolidate, or if you notice any other unusual site
        behavior, feel free to email me - mklynass93 [at] gmail.com
      </p>

      {/* when the tournament is live */}
      {/* <p>The tournament has started, and the draft is closed! The next draft will begin after the banzuke is announced for the next tournament.</p>  */}

      {/* if you want to let someone contact you for some reason */}
      {/* <p>(If you picked someone that's out of the tournament, feel free to email me at mtfujisumo at gmail.com with your team name and new pick.)</p> */}

      {/* after the tournament */}
      {/* <p>Congrats to deathlyhalliwell on your Fantasy Sumo victory!</p><p> The new rankings will be announced on February 25th, so the draft will be open from February 26th - March 9th.</p><p>Thanks for playing everyone!</p> */}
    </div>
  );
}

export default Hello;
