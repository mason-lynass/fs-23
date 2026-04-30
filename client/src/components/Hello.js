function Hello() {
  return (
    <div id="hello">
      {/*  when it's time to draft */}
      <p>
        Sorry for the delay everyone! The draft is open.
        <br />
        <br /> The next tournament begins on March 8th, so make sure you
        draft before then!
      </p>
      <hr style={{ width: "100px", margin: "5px auto" }} />
      <p>
        If you've created multiple accounts / teams and you want to consolidate,
        or if you notice any other unusual site behavior, feel free to email me
        - mtfujisumo[at]gmail[dot]com
      </p>

      {/* when the tournament is live */}
   {/* <p>The tournament has started, and the draft is closed! The next draft will begin after the banzuke is announced for the next tournament.</p>
   <p id='tip-jar'>I added a Ko-fi tip jar - tips offset server & hosting costs for the site. This site will always be free to play, but any donation would make my day :) </p> */}

      {/* if you want to let someone contact you for some reason */}
  {/* <p>If you picked someone that's out of the tournament, feel free to email me at mtfujisumo[at]gmail[dot]com with your team name and new pick.</p> */}

      {/* after the tournament */}
      {/* <p>Congrats to andrewsumo & Cul1 on your Fantasy Sumo victory!</p><p> The new rankings will be announced on April 27th, so the draft will be open from April 28th - May 9th.</p>
      <p>If you made a new account to draft a team for the last basho and you want to merge accounts, or if you have any other questions or comments, feel free to email me - mtfujisumo[at]gmail[dot]com.</p>
      <p>Thanks for playing everyone!</p>  */}
    </div>
  );
}

export default Hello;
