import OneTeam from "./components/OneTeam";
import { useEffect, useState } from "react";

function TeamRankings({ teams, teamsLoaded }) {
  // get all of the teams - this comes from a prop
  // go through all of the teams and create user objects for each username
  // organize all of the teams into bashos
  // for each basho, find the team with the highest score - set this score as a variable to reference
  // for each team in the basho, calculate the % of highest score, assign that value to the user object "score202401" for example
  // once you've done this for every basho, add up each user's scores and divide it by their number of bashos - save this as a value "averageRank"
  // sort users by average rank, display the number of bashos, display their % of highest score in a table

  const users = [];
  const bashos = [];

  const [bashosLoaded, setBashosLoaded] = useState(false);
  const [usersLoaded, setUsersLoaded] = useState(false);

  useEffect(() => {
    if (teamsLoaded === true) {
      for (let i = 0; i < teams.length; i++) {
        if (bashos.length === 0) {
          bashos.push({ basho: teams[i].basho, teams: [teams[i]] });
        } else if (
          bashos.length > 0 &&
          bashos.some((b) => b.basho === teams[i].basho) === false
        ) {
          bashos.push({ basho: teams[i].basho, teams: [teams[i]] });
        } else {
          const target = bashos.find((b) => b.basho === teams[i].basho);
          target.teams.push(teams[i]);
        }

        if (
          users.length > 0 &&
          users.some((u) => u.username === teams[i].user.username)
        )
          continue;
        else {
          users.push({ username: teams[i].user.username });
        }
      }
      console.log(teams, bashos);
      setBashosLoaded(true);
      bashosCleanup();
    }
  }, [teamsLoaded]);

  function usersCleanup() {
    users.forEach((u) => {
      const allPercentileKeys = Object.keys(u).filter((k) =>
        k.includes("score")
      ); //find the keys that have "score" in their name
      const allPercentiles = allPercentileKeys.map((key) => u[key]);
      const total = allPercentiles.reduce(
        (acc, value) => parseFloat(acc) + parseFloat(value),
        0
      );
      console.log(total);
      const average = (total / allPercentiles.length).toFixed(2); // something like this
      u.average_percentile = average;
    });
    console.log(users);
    setUsersLoaded(true);
  }

  function bashosCleanup() {
    bashos.forEach((b) => {
      b.teams.sort((a, b) => b.final_score - a.final_score);
      const highest_score = b.teams[0].final_score;
      b.teams.forEach((t) => {
        const percentile = (t.final_score / highest_score).toFixed(2);
        t.percentile = percentile;
        const targetUser = users.find((u) => u.username === t.user.username);
        targetUser[`score${t.basho}`] = percentile;
      });
    });
    console.log(bashos, users);
    usersCleanup();
  }

  function allTeams() {
    if (usersLoaded === true) {
        console.log(users)
      const sortedUsers = users.sort(
        (a, b) => parseFloat(b.average_percentile) - parseFloat(a.average_percentile)
      );
      console.log(sortedUsers)
      return sortedUsers.map((user) => {
        return (
          <div className="oneTeam" key={user.username}>
            <h2>{user.username}</h2>
            <h3 className="total">{user.average_percentile}</h3>
            <p>{user[`score2023.03`]}</p>
            <p>{user[`score2023.05`]}</p>
            <p>{user[`score2023.07`]}</p>
            <p>{user[`score2023.09`]}</p>
            <p>{user[`score2023.11`]}</p>
            <p>{user[`score2024.01`]}</p>
            <p>{user[`score2024.03`]}</p>
            <p>{user[`score2024.05`]}</p>
          </div>
        );
      });
    }
  }

  return usersLoaded === false ? <h2>loading...</h2> : <div>{allTeams()}</div>;
}

export default TeamRankings;
