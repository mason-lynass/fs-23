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
  const [sortState, setSortState] = useState("default");

  useEffect(() => {
    fetch("/users")
      .then((r) => r.json())
      .then((r) => setAllUsers(r));
  }, [])

  useEffect(() => {
    if (teamsLoaded === true) {
      let bashos = [];
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
        iNumber++;
      }
      console.log(teams, bashos, number, iNumber);
      if (number === iNumber) {
        console.log("its working!");
        setAllBashos(bashos);
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

  function handleSortState(e) {
    setSortState(e.target.id);
    const target = document.getElementById(`${e.target.id}`);
    setHighlight(target);
  }

  function setHighlight(target) {
    const columns = document.querySelectorAll(".TRCol");
    columns.forEach((col) => {
      if (col.classList.contains("DBStatsActive")) {
        col.classList.remove("DBStatsActive");
      }
    });
    target.classList.add("DBStatsActive");
  }

  function usersCleanup() {
    console.log(allUsers);
    allUsers.forEach((u) => {
      const allPercentileKeys = Object.keys(u).filter((k) =>
        k.includes("score")
      ); //find the keys that have "score" in their name
      const allPercentiles = allPercentileKeys.map((key) => u[key]);
      const total = u.total_percentile
      const average = (parseFloat(total) / allPercentiles.length).toFixed(2); // something like this
      u.average_percentile = average;
      u.weighted_average = (
        parseFloat(average) +
        0.1 * (allPercentiles.length - 1)
      ).toFixed(2);
      u.total = total.toFixed(2);
    });
    console.log(allUsers);
    setUsersLoaded(true);
  }

  function bashosCleanup() {
    console.log(allBashos, allUsers);
    allBashos.forEach((b) => {
      b.teams.forEach((t) => {
        const targetUser = allUsers.find((u) => u.username === t.user.username);
        targetUser[`score${t.basho}`] = t.percentile;
      });
    });
    console.log(allBashos, allUsers);
    usersCleanup();
  }

  function allTeams() {
    if (usersLoaded === true && allUsers[allUsers.length - 1].average_percentile) {
      console.log(allUsers);
      let sortedUsers
      if (sortState === 'default') {
        sortedUsers = allUsers.sort(
            (a, b) =>
              //   parseFloat(b.average_percentile) - parseFloat(a.average_percentile)
              parseFloat(b.weighted_average) - parseFloat(a.weighted_average)
          );
      }
      else if (sortState === 'TRUsername') sortedUsers = allUsers.sort((a, b) => a.username - b.username);
      else if (sortState === 'TRAverage') sortedUsers = allUsers.sort((a, b) => parseFloat(b.average_percentile) - parseFloat(a.average_percentile));
      else if (sortState === 'TRTotal') sortedUsers = allUsers.sort((a, b) => parseFloat(b.total) - parseFloat(a.total));
      else if (sortState === 'TRWeighted') sortedUsers = allUsers.sort((a, b) => parseFloat(b.weighted_average) - parseFloat(a.weighted_average));
      else if (sortState === '202301') sortedUsers = allUsers.sort((a, b) => parseFloat(b[`score2023.01`]) - parseFloat(a[`score2023.01`]));
      else if (sortState === '202303') sortedUsers = allUsers.sort((a, b) => parseFloat(b[`score2023.03`]) - parseFloat(a[`score2023.03`]))
      else if (sortState === '202305') sortedUsers = allUsers.sort((a, b) => parseFloat(b[`score2023.05`]) - parseFloat(a[`score2023.05`]))
      else if (sortState === '202307') sortedUsers = allUsers.sort((a, b) => parseFloat(b[`score2023.07`]) - parseFloat(a[`score2023.07`]))
      else if (sortState === '202309') sortedUsers = allUsers.sort((a, b) => parseFloat(b[`score2023.09`]) - parseFloat(a[`score2023.09`]))
      else if (sortState === '202311') sortedUsers = allUsers.sort((a, b) => parseFloat(b[`score2023.11`]) - parseFloat(a[`score2023.11`]))
      else if (sortState === '202401') sortedUsers = allUsers.sort((a, b) => parseFloat(b[`score2024.01`]) - parseFloat(a[`score2024.01`]))
      else if (sortState === '202403') sortedUsers = allUsers.sort((a, b) => parseFloat(b[`score2024.03`]) - parseFloat(a[`score2024.03`]))
      else if (sortState === '202405') sortedUsers = allUsers.sort((a, b) => parseFloat(b[`score2024.05`]) - parseFloat(a[`score2024.05`]))
      
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
            <h3 className="totalTR">{user.total}</h3>
            <h3 className="totalTR">{user.weighted_average}</h3>
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
      <div className="oneTeamTR" id="TRHeaderColumn">
        <h2 className="TRCol" id='TRUsername'>username</h2>
        <h3 className="totalTR TRCol" id="TRAverage" onClick={handleSortState}>
          average score
        </h3>
        <h3 className="totalTR TRCol" id="TRTotal" onClick={handleSortState}>
          total score
        </h3>
        <h3 className="totalTR TRCol" id="TRWeighted" onClick={handleSortState}>
          weighted average
        </h3>
        <p className="TRCol" id="202301" onClick={handleSortState}>
          2023.01
        </p>
        <p className="TRCol" id="202303" onClick={handleSortState}>
          2023.03
        </p>
        <p className="TRCol" id="202305" onClick={handleSortState}>
          2023.05
        </p>
        <p className="TRCol" id="202307" onClick={handleSortState}>
          2023.07
        </p>
        <p className="TRCol" id="202309" onClick={handleSortState}>
          2023.09
        </p>
        <p className="TRCol" id="202311" onClick={handleSortState}>
          2023.11
        </p>
        <p className="TRCol" id="202401" onClick={handleSortState}>
          2024.01
        </p>
        <p className="TRCol" id="202403" onClick={handleSortState}>
          2024.03
        </p>
        <p className="TRCol" id="202405" onClick={handleSortState}>
          2024.05
        </p>
      </div>
      <div>{allTeams()}</div>
    </div>
  );
}

export default TeamRankings;
