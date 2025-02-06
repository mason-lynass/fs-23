import { useMemo, useCallback } from "react";

function PreviousTeams({ user, teams, fantasySumoHistories, basho }) {

  // Memoize the getFilteredTeams function to filter teams by basho
  const getFilteredTeams = useCallback((teamBasho) => {
    return teams.filter((team) => team.basho === teamBasho);
  }, [teams]);

  // Memoize the rendering of each previous team
  const allPrevTeams = useMemo(() => {
    return user.old_teams.map((team) => {
      // Filter out the string values (rikishi names) from the team object

      const rikishiObjects = Object.values(team).filter((value) => value && typeof(value) === 'object')

      // Get the actual team details from fantasySumoHistories
      const actualTeam = rikishiObjects.map((r) =>
        fantasySumoHistories.find((f) => f.rikishi.shikona === r.shikona)
      );

      console.log(actualTeam)

      // Skip if fantasySumoHistories is empty
      if (fantasySumoHistories.length === 0) {
        return <div id="fullOneTeam"></div>;
      }

      // Calculate the teamScores
      const temp = `b${team.basho.toString().replace('.', '')}`;
      const teamScores = {
        r1: actualTeam[0]?.[temp] || 0,
        r2: actualTeam[1]?.[temp] || 0,
        r3: actualTeam[2]?.[temp] || 0,
        r4: actualTeam[3]?.[temp] || 0,
        r5: actualTeam[4]?.[temp] || 0,
        r6: actualTeam[5]?.[temp] || 0,
        r7:
          team.final_score -
          (
            (actualTeam[0]?.[temp] || 0) +
            (actualTeam[1]?.[temp] || 0) +
            (actualTeam[2]?.[temp] || 0) +
            (actualTeam[3]?.[temp] || 0) +
            (actualTeam[4]?.[temp] || 0) +
            (actualTeam[5]?.[temp] || 0)
          ),
      };

      // Get other teams from the same basho
      const otherTeams = getFilteredTeams(team.basho);

      // Sort other teams by final_score
      const sortedOtherTeams = otherTeams.sort((a, b) => b.final_score - a.final_score);

      // Get the team's position among the sorted teams
      const teamPosition = sortedOtherTeams.findIndex(
        (sortedTeam) => sortedTeam.user.username === user.username
      ) + 1;

      return (
        <div id="fullOneTeam" key={team.basho}>
          <div>
            <h3>{team.basho}</h3>
            <div id="oneTeamRank">
              <h2>{team.final_score} points</h2>
              <hr />
              <h2>#{teamPosition} out of</h2>
              <h2>{otherTeams.length} teams</h2>
            </div>
          </div>
          <div id="oneTeam">
            <div>
              <p>{team.r1.shikona}</p>
              <p>{teamScores.r1}</p>
            </div>
            <div>
              <p>{team.r2.shikona}</p>
              <p>{teamScores.r2}</p>
            </div>
            <div>
              <p>{team.r3.shikona}</p>
              <p>{teamScores.r3}</p>
            </div>
            <div>
              <p>{team.r4.shikona}</p>
              <p>{teamScores.r4}</p>
            </div>
            <div>
              <p>{team.r5.shikona}</p>
              <p>{teamScores.r5}</p>
            </div>
            <div>
              <p>{team.r6.shikona}</p>
              <p>{teamScores.r6}</p>
            </div>
            <div>
              <p>{team.r7.shikona}</p>
              <p>{teamScores.r7}</p>
            </div>
          </div>
        </div>
      );
    });
  }, [fantasySumoHistories, getFilteredTeams, user.username]);

  return (
    <div>
      <hr></hr>
      <h3>Check out your previous teams:</h3>
      <div>{teams.length > 0 ? allPrevTeams : ""}</div>
    </div>
  );
}

export default PreviousTeams;
