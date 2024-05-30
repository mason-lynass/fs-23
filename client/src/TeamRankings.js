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
  const bashos = []

  const [bashosLoaded, setBashosLoaded] = useState(false)
  const [usersLoaded, setUsersLoaded] = useState(false)

  useEffect(() => {
    if (teamsLoaded === true) {
      for (let i = 0; i < teams.length; i++) {
        if (bashos.length === 0) {
            bashos.push({basho: teams[i].basho, teams: [teams[i]]})
        }
        else if (bashos.length > 0 && (bashos.some((b) => b.basho === teams[i].basho) === false)) {
            bashos.push({basho: teams[i].basho, teams: [teams[i]]})
        }
        else {
            const target = bashos.find((b) => b.basho === teams[i].basho)
            target.teams.push(teams[i])
        }

        if (users.length > 0 && users.some((u) =>  u.username === teams[i].user.username)) continue;
        else {
            users.push({username: teams[i].user.username})
        }
      }
      console.log(teams, bashos)
      setBashosLoaded(true)
      setUsersLoaded(true)
      bashosCleanup()
    }
  }, [teamsLoaded]);


  function bashosCleanup () {
    bashos.forEach((b) => {
        b.teams.sort((a,b) => b.final_score - a.final_score)
        const highest_score = b.teams[0].final_score
        b.teams.forEach((t) => {
            const percentile = (t.final_score / highest_score).toFixed(2)
            t.percentile = percentile
        })
    }) 
    console.log(bashos)
  }

  if (bashos.length > 0) {
    bashosCleanup()
  }

  function allTeams() {
    if (teamsLoaded === true) {
      return teams.map((team) => {
        return (
          <div className="oneTeam" key={team.id}>
            <h2>{team.user.username}</h2>
            <p>{team.basho}</p>
            <h3 className="total">{team.final_score}</h3>
          </div>
        );
      });
    }
  }

  return teamsLoaded === false ? <h2>loading...</h2> : <div>{allTeams()}</div>;
}

export default TeamRankings;
