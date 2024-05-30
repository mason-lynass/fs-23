import OneTeam from "./components/OneTeam";
import "./CSS/teamrankings.css";
import { useEffect, useState } from "react";

function TeamRankings({ teams, teamsLoaded }) {
  // get all of the teams - this comes from a prop
  // go through all of the teams and create user objects for each username
  // organize all of the teams into bashos
  // for each basho, find the team with the highest score - set this score as a variable to reference
  // for each team in the basho, calculate the % of highest score, assign that value to the user object "score202401" for example
  // once you've done this for every basho, add up each user's scores and divide it by their number of bashos - save this as a value "averageRank"
  // sort users by average rank, display the number of bashos, display their % of highest score in a table

  const [bashosLoaded, setBashosLoaded] = useState(false);
  const [usersLoaded, setUsersLoaded] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  const [allBashos, setAllBashos] = useState([]);

  useEffect(() => {
    if (teamsLoaded === true) {
      let bashos = [];
      let users = [];
      let number = teams.length;
      let iNumber = 0;
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

        if (!users.some((u) => u.username === teams[i].user.username)) {
          users.push({ username: teams[i].user.username });
        }
        iNumber++;
      }
      console.log(teams, bashos, number, iNumber);
      if (number === iNumber) {
        console.log("its working!");
        setAllBashos(bashos);
        setAllUsers(users);
        setBashosLoaded(true);
      }
    }
  }, [teamsLoaded]);

  useEffect(() => {
    if (allBashos.length > 0 && allUsers.length > 0) {
      console.log("doing bashosCleanup");
      bashosCleanup();
    }
  }, [allBashos, allUsers]);

  function usersCleanup() {
    allUsers.forEach((u) => {
      const allPercentileKeys = Object.keys(u).filter((k) =>
        k.includes("score")
      ); //find the keys that have "score" in their name
      const allPercentiles = allPercentileKeys.map((key) => u[key]);
      const total = allPercentiles.reduce(
        (acc, value) => parseFloat(acc) + parseFloat(value),
        0
      );
      const average = (total / allPercentiles.length).toFixed(2); // something like this
      u.average_percentile = average;
    });
    console.log(allUsers);
    setUsersLoaded(true);
  }

  function bashosCleanup() {
    console.log(allBashos, allUsers);
    allBashos.forEach((b) => {
      b.teams.sort((a, b) => b.final_score - a.final_score);
      const highest_score = b.teams[0].final_score;
      b.teams.forEach((t) => {
        const percentile = (t.final_score / highest_score).toFixed(2);
        t.percentile = percentile;
        const targetUser = allUsers.find((u) => u.username === t.user.username);
        targetUser[`score${t.basho}`] = percentile;
      });
    });
    console.log(allBashos, allUsers);
    usersCleanup();
  }

  function allTeams() {
    if (
      usersLoaded === true &&
      allUsers[allUsers.length - 1].average_percentile
    ) {
      console.log(allUsers);
      const sortedUsers = allUsers.sort(
        (a, b) =>
          parseFloat(b.average_percentile) - parseFloat(a.average_percentile)
      );
      console.log(sortedUsers);
      return sortedUsers.map((user) => {
        let username = user.username;

        // to hide full email addresses
        if (username.includes("@")) {
          let at = username.indexOf("@");
          username = username.slice(0, at);
        }
        return (
          <div className="oneTeamTR" key={user.username}>
            <h2>{user.username}</h2>
            <h3 className="totalTR">{user.average_percentile}</h3>
            <p>{user[`score2023.01`]}</p>
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

  return usersLoaded === false ? (
    <h2>loading...</h2>
  ) : (
    <div id="team-rankings-box">
      <div className="oneTeamTR">
        <h2>username</h2>
        <h3 className="totalTR" id="TRHeader">
          average score
        </h3>
        <p>2023.01</p>
        <p>2023.03</p>
        <p>2023.05</p>
        <p>2023.07</p>
        <p>2023.09</p>
        <p>2023.11</p>
        <p>2024.01</p>
        <p>2024.03</p>
        <p>2024.05</p>
      </div>
      <div>{allTeams()}</div>
    </div>
  );
}

export default TeamRankings;
