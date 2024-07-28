import "./CSS/userrankings.css";
import { useEffect, useState } from "react";

function UserRankings() {
  // get all of the users
  // they already have teams with percentile values, so we don't need to calculate that
  // users also already have total_percentiles, so we don't need to calculate that
  // what we need to calculate is the average_percentile, which is just total_percentile / number of teams
  //

  // get all of the teams - this comes from a prop
  // go through all of the teams and create user objects for each username
  // organize all of the teams into bashos
  // for each basho, find the team with the highest score - set this score as a variable to reference
  // for each team in the basho, calculate the % of highest score, assign that value to the user object "score202401" for example
  // once you've done this for every basho, add up each user's scores and divide it by their number of bashos - save this as a value "averageRank"
  // sort users by average rank, display the number of bashos, display their % of highest score in a table

  const [usersLoaded, setUsersLoaded] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  const [sortState, setSortState] = useState("default");

  useEffect(() => {
    fetch("/users")
      .then((r) => r.json())
      .then((r) => setAllUsers(r.filter((u) => u.teams.length > 0)));
  }, []);

  useEffect(() => {
    if (allUsers.length > 0) {
      usersCleanup();
    }
  }, [allUsers]);

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
    allUsers.forEach((u) => {
      const total = u.total_percentile;
      let average = 0;
      let weightedAverage = 0;
      if (parseFloat(total) > 0) {
        average = (parseFloat(total) / u.teams.length).toFixed(2); // something like this
        weightedAverage = (
          parseFloat(average) +
          0.1 * (u.teams.length - 1)
        ).toFixed(2);
      }
      u.average_percentile = average;
      u.weighted_average = weightedAverage;
    });
    setUsersLoaded(true);
  }

  function allTeams() {
    if (usersLoaded === true) {
      let sortedUsers;

      function bashoSort(x) {
        sortedUsers = allUsers.sort((a, b) => {
          let targetBasho = parseFloat(x);
          let bTeam = b.teams.find((t) => t.basho === targetBasho);
          let aTeam = a.teams.find((t) => t.basho === targetBasho);
          let bScore, aScore;
          if (bTeam === undefined) bScore = 0;
          else bScore = bTeam.final_score;
          if (aTeam === undefined) aScore = 0;
          else aScore = aTeam.final_score;
          return bScore - aScore;
        });
      }

      if (sortState === "default") {
        sortedUsers = allUsers.sort(
          (a, b) =>
            //   parseFloat(b.average_percentile) - parseFloat(a.average_percentile)
            parseFloat(b.weighted_average) - parseFloat(a.weighted_average)
        );
      } else if (sortState === "TRUsername")
        sortedUsers = allUsers.sort((a, b) => a.username - b.username);
      else if (sortState === "TRAverage")
        sortedUsers = allUsers.sort(
          (a, b) =>
            parseFloat(b.average_percentile) - parseFloat(a.average_percentile)
        );
      else if (sortState === "TRTotal")
        sortedUsers = allUsers.sort(
          (a, b) =>
            parseFloat(b.total_percentile) - parseFloat(a.total_percentile)
        );
      else if (sortState === "TRWeighted")
        sortedUsers = allUsers.sort(
          (a, b) =>
            parseFloat(b.weighted_average) - parseFloat(a.weighted_average)
        );
      else bashoSort(sortState);

      return sortedUsers.map((user) => {
        let username = user.username;

        // to hide full email addresses
        if (username.includes("@")) {
          let at = username.indexOf("@");
          username = username.slice(0, at);
        }

        const hatsu2023 =
          user.teams.filter((t) => t.basho === 2023.01)[0] || "";
        const haru2023 = user.teams.filter((t) => t.basho === 2023.03)[0] || "";
        const natsu2023 =
          user.teams.filter((t) => t.basho === 2023.05)[0] || "";
        const nagoya2023 =
          user.teams.filter((t) => t.basho === 2023.07)[0] || "";
        const aki2023 = user.teams.filter((t) => t.basho === 2023.09)[0] || "";
        const kyushu2023 =
          user.teams.filter((t) => t.basho === 2023.11)[0] || "";
        const hatsu2024 =
          user.teams.filter((t) => t.basho === 2024.01)[0] || "";
        const haru2024 = user.teams.filter((t) => t.basho === 2024.03)[0] || "";
        const natsu2024 =
          user.teams.filter((t) => t.basho === 2024.05)[0] || "";
        const nagoya2024 =
          user.teams.filter((t) => t.basho === 2024.07)[0] || "";

        return (
          <div className="oneTeamTR" key={user.username}>
            <h2>{username}</h2>
            <h3 className="totalTR">{user.average_percentile}</h3>
            <h3 className="totalTR">{user.total_percentile}</h3>
            <h3 className="totalTR">{user.weighted_average}</h3>
            <p>{nagoya2024 !== "" ? nagoya2024.percentile : ""}</p>
            <p>{natsu2024 !== "" ? natsu2024.percentile : ""}</p>
            <p>{haru2024 !== "" ? haru2024.percentile : ""}</p>
            <p>{hatsu2024 !== "" ? hatsu2024.percentile : ""}</p>
            <p>{kyushu2023 !== "" ? kyushu2023.percentile : ""}</p>
            <p>{aki2023 !== "" ? aki2023.percentile : ""}</p>
            <p>{nagoya2023 !== "" ? nagoya2023.percentile : ""}</p>
            <p>{natsu2023 !== "" ? natsu2023.percentile : ""}</p>
            <p>{haru2023 !== "" ? haru2023.percentile : ""}</p>
            <p>{hatsu2023 !== "" ? hatsu2023.percentile : ""}</p>
          </div>
        );
      });
    }
  }

  return usersLoaded === false ? (
    <h2>loading...</h2>
  ) : (
    <main>
      <div id="team-rankings-box">
        <div className="oneTeamTR" id="TRHeaderColumn">
          <h2 className="TRCol" id="TRUsername">
            username
          </h2>
          <h3
            className="totalTR TRCol"
            id="TRAverage"
            onClick={handleSortState}
          >
            average score
          </h3>
          <h3 className="totalTR TRCol" id="TRTotal" onClick={handleSortState}>
            total score
          </h3>
          <h3
            className="totalTR TRCol"
            id="TRWeighted"
            onClick={handleSortState}
          >
            weighted average
          </h3>
          <p className="TRCol" id="2024.07" onClick={handleSortState}>
            2024.07
          </p>
          <p className="TRCol" id="2024.05" onClick={handleSortState}>
            2024.05
          </p>
          <p className="TRCol" id="2024.03" onClick={handleSortState}>
            2024.03
          </p>
          <p className="TRCol" id="2024.01" onClick={handleSortState}>
            2024.01
          </p>
          <p className="TRCol" id="2023.11" onClick={handleSortState}>
            2023.11
          </p>
          <p className="TRCol" id="2023.09" onClick={handleSortState}>
            2023.09
          </p>
          <p className="TRCol" id="2023.07" onClick={handleSortState}>
            2023.07
          </p>
          <p className="TRCol" id="2023.05" onClick={handleSortState}>
            2023.05
          </p>
          <p className="TRCol" id="2023.03" onClick={handleSortState}>
            2023.03
          </p>
          <p className="TRCol" id="2023.01" onClick={handleSortState}>
            2023.01
          </p>
        </div>
        <div>{allTeams()}</div>
      </div>
      <div id="about-box">
        <p>
          Each basho has a different highest score, so basho scores are
          calculated as a percentage of the tournament winner's score.
        </p>
        <p>
          Weighted averages are calculated as an average of each user's team's
          percentage, plus .1 for each tournament after the user's first
          tournament. I know it's arbitrary, but it's a way to reward regular
          players, I guess.
        </p>
        <p>
          Feel free to email me if you have any questions - mklynass93@gmail.com
        </p>
      </div>
    </main>
  );
}

export default UserRankings;
