import { useEffect, useState } from "react";

function HowMany({ teams, teamsLoaded, rikishi, rikishiLoaded }) {
  const [counts, setCounts] = useState({ mRikishi: [], jRikishi: [] });

  useEffect(() => {
    if (teamsLoaded && rikishiLoaded) {
      const mRikishiArray = [];
      const jRikishiArray = [];

      teams.forEach((team) => {
        const mRikishiIDsArray = [
          team.r1.id,
          team.r2.id,
          team.r3.id,
          team.r4.id,
          team.r5.id,
          team.r6.id,
        ];
        mRikishiArray.push(...mRikishiIDsArray);
        jRikishiArray.push(team.r7.id);
      });

      setCounts({ mRikishi: mRikishiArray, jRikishi: jRikishiArray });
    }
  }, [teamsLoaded, rikishiLoaded, teams]);

  function oneDivision(rArray) {

    const rikishiWithCount = rikishi.map((r) => ({ ...r, count: 0 }));

    rArray.forEach((id) => {
      const target = rikishiWithCount.find((r) => r.id === id);
      if (target) target.count += 1;
    });

    const sortedRikishi = rikishiWithCount
      .filter((r) => r.count > 0)
      .sort((a, b) => b.count - a.count);

    return sortedRikishi.map((r) => (
      <div className="HowManyOne" key={r.id}>
        <p>{r.shikona}</p>
        <p>{r.count}</p>
      </div>
    ));
  }

  return (
    <div id="HowManyMain">
      {teamsLoaded && rikishiLoaded && (
        <>
          <div id="HowManyM">
            <h3>Makuuchi Wrestler Count</h3>
            {oneDivision(counts.mRikishi)}
          </div>
          <div id="HowManyJ">
            <h3>Juryo Wrestler Count</h3>
            {oneDivision(counts.jRikishi)}
          </div>
        </>
      )}
    </div>
  );
}

export default HowMany;
