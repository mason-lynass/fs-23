import "./CSS/userrankings.css";
import { useEffect, useState } from "react";
import { API_URL } from "./App";

function UserRankings() {
  const [usersLoaded, setUsersLoaded] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  const [displayedUsers, setDisplayedUsers] = useState([]);
  const [sortState, setSortState] = useState("default");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(50);

  useEffect(() => {
    setLoading(true);
    fetch(`${API_URL}/users/rankings`, { credentials: "include" })
      .then((r) => {
        if (!r.ok) throw new Error("Failed to fetch user rankings");
        return r.json();
      })
      .then((r) => {
        setAllUsers(r);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setAllUsers([]);
      })
      .finally(() => {
        setLoading(false);
        setUsersLoaded(true);
      });
  }, []);

  useEffect(() => {
    if (allUsers.length > 0) {
      setUsersLoaded(true);
    }
  }, [allUsers]);

  useEffect(() => {
    if (usersLoaded) {
      console.log("update displayed users");
      updateDisplayedUsers();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [usersLoaded, currentPage, sortState]);

  function updateDisplayedUsers() {
    let sortedUsers = getSortedUsers();
    const startIndex = (currentPage - 1) * usersPerPage;
    const endIndex = startIndex + usersPerPage;
    setDisplayedUsers(sortedUsers.slice(startIndex, endIndex));
  }

  function getSortedUsers() {
    let sortedUsers;

    function bashoSort(x) {
      sortedUsers = allUsers.sort((a, b) => {
        let targetBasho = parseFloat(x);
        let bTeam = b.old_teams.find((t) => t.basho === targetBasho);
        let aTeam = a.old_teams.find((t) => t.basho === targetBasho);
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

    return sortedUsers;
  }

  function handleSortState(e) {
    setSortState(e.target.id);
    setCurrentPage(1); // Reset to first page when sorting
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

  function renderPagination() {
    const totalPages = Math.ceil(allUsers.length / usersPerPage);

    if (totalPages <= 1) return null;

    // Mobile-friendly pagination: show fewer page numbers
    const getVisiblePages = () => {
      const delta = 2; // Show 2 pages on each side of current page
      const range = [];
      const rangeWithDots = [];

      for (let i = Math.max(2, currentPage - delta);
           i <= Math.min(totalPages - 1, currentPage + delta);
           i++) {
        range.push(i);
      }

      if (currentPage - delta > 2) {
        rangeWithDots.push(1, '...');
      } else {
        rangeWithDots.push(1);
      }

      rangeWithDots.push(...range);

      if (currentPage + delta < totalPages - 1) {
        rangeWithDots.push('...', totalPages);
      } else {
        rangeWithDots.push(totalPages);
      }

      return rangeWithDots;
    };

    const visiblePages = totalPages <= 7 ?
      Array.from({length: totalPages}, (_, i) => i + 1) :
      getVisiblePages();

    const buttonStyle = {
      margin: "0 1px",
      padding: "8px 10px",
      border: "1px solid #ccc",
      cursor: "pointer",
      fontSize: "14px",
      minWidth: "36px",
    };

    const mobileButtonStyle = {
      ...buttonStyle,
      padding: "10px 8px",
      fontSize: "16px",
      minWidth: "44px", // Better touch target
    };

    const isMobile = window.innerWidth <= 768;
    const currentButtonStyle = isMobile ? mobileButtonStyle : buttonStyle;

    return (
      <div style={{
        textAlign: "center",
        margin: "20px 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px"
      }}>
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "2px"
        }}>
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            style={{
              ...currentButtonStyle,
              backgroundColor: currentPage === 1 ? "#ccc" : "#f0f0f0",
              cursor: currentPage === 1 ? "default" : "pointer",
              marginRight: "8px"
            }}
          >
            ‹
          </button>

          {visiblePages.map((page, index) => (
            page === '...' ? (
              <span key={`dots-${index}`} style={{ margin: "0 4px" }}>...</span>
            ) : (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                style={{
                  ...currentButtonStyle,
                  backgroundColor: currentPage === page ? "#333" : "#f0f0f0",
                  color: currentPage === page ? "white" : "black",
                }}
              >
                {page}
              </button>
            )
          ))}

          <button
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            style={{
              ...currentButtonStyle,
              backgroundColor: currentPage === totalPages ? "#ccc" : "#f0f0f0",
              cursor: currentPage === totalPages ? "default" : "pointer",
              marginLeft: "8px"
            }}
          >
            ›
          </button>
        </div>

        <div style={{
          fontSize: isMobile ? "12px" : "14px",
          color: "#666",
          textAlign: "center"
        }}>
          Showing{" "}
          {Math.min((currentPage - 1) * usersPerPage + 1, allUsers.length)} -{" "}
          {Math.min(currentPage * usersPerPage, allUsers.length)} of{" "}
          {allUsers.length} users
        </div>
      </div>
    );
  }

  function allTeams() {
    if (usersLoaded === true && displayedUsers.length > 0) {
      return displayedUsers.map((user) => {
        let username = user.username;

        // to hide full email addresses
        if (username.includes("@")) {
          let at = username.indexOf("@");
          username = username.slice(0, at);
        }

        const hatsu2023 =
          user.old_teams.filter((t) => t.basho === 2023.01)[0] || "";
        const haru2023 =
          user.old_teams.filter((t) => t.basho === 2023.03)[0] || "";
        const natsu2023 =
          user.old_teams.filter((t) => t.basho === 2023.05)[0] || "";
        const nagoya2023 =
          user.old_teams.filter((t) => t.basho === 2023.07)[0] || "";
        const aki2023 =
          user.old_teams.filter((t) => t.basho === 2023.09)[0] || "";
        const kyushu2023 =
          user.old_teams.filter((t) => t.basho === 2023.11)[0] || "";
        const hatsu2024 =
          user.old_teams.filter((t) => t.basho === 2024.01)[0] || "";
        const haru2024 =
          user.old_teams.filter((t) => t.basho === 2024.03)[0] || "";
        const natsu2024 =
          user.old_teams.filter((t) => t.basho === 2024.05)[0] || "";
        const nagoya2024 =
          user.old_teams.filter((t) => t.basho === 2024.07)[0] || "";
        const aki2024 =
          user.old_teams.filter((t) => t.basho === 2024.09)[0] || "";
        const kyushu2024 =
          user.old_teams.filter((t) => t.basho === 2024.11)[0] || "";
        const hatsu2025 =
          user.old_teams.filter((t) => t.basho === 2025.01)[0] || "";
        const haru2025 =
          user.old_teams.filter((t) => t.basho === 2025.03)[0] || "";
        const natsu2025 =
          user.old_teams.filter((t) => t.basho === 2025.05)[0] || "";
        const nagoya2025 =
          user.old_teams.filter((t) => t.basho === 2025.07)[0] || "";
        const aki2025 =
          user.old_teams.filter((t) => t.basho === 2025.09)[0] || "";

        return (
          <div className="oneTeamTR" key={user.username}>
            <h2 style={{ overflow: "hidden" }}>{username}</h2>
            <h3 className="totalTR">{user.average_percentile}</h3>
            <h3 className="totalTR">{user.total_percentile}</h3>
            <h3 className="totalTR">{user.weighted_average}</h3>
            <p>{aki2025 !== "" ? aki2025.percentile : ""}</p>
            <p>{nagoya2025 !== "" ? nagoya2025.percentile : ""}</p>
            <p>{natsu2025 !== "" ? natsu2025.percentile : ""}</p>
            <p>{haru2025 !== "" ? haru2025.percentile : ""}</p>
            <p>{hatsu2025 !== "" ? hatsu2025.percentile : ""}</p>
            <p>{kyushu2024 !== "" ? kyushu2024.percentile : ""}</p>
            <p>{aki2024 !== "" ? aki2024.percentile : ""}</p>
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

  if (loading || !usersLoaded) {
    return (
      <h2 style={{ textAlign: "center", margin: "40px auto" }}>loading...</h2>
    );
  }

  if (error) {
    return (
      <div style={{ textAlign: "center", margin: "40px auto" }}>
        <h2 style={{ color: "red" }}>Error loading users</h2>
        <p>{error}</p>
        <button
          onClick={() => window.location.reload()}
          style={{
            padding: "10px 20px",
            backgroundColor: "#333",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <main>
      {renderPagination()}
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
          <p className="TRCol basho" id="2025.07" onClick={handleSortState}>
            2025.07
          </p>
          <p className="TRCol basho" id="2025.05" onClick={handleSortState}>
            2025.05
          </p>
          <p className="TRCol basho" id="2025.03" onClick={handleSortState}>
            2025.03
          </p>
          <p className="TRCol basho" id="2025.01" onClick={handleSortState}>
            2025.01
          </p>
          <p className="TRCol basho" id="2024.11" onClick={handleSortState}>
            2024.11
          </p>
          <p className="TRCol basho" id="2024.09" onClick={handleSortState}>
            2024.09
          </p>
          <p className="TRCol basho" id="2024.07" onClick={handleSortState}>
            2024.07
          </p>
          <p className="TRCol basho" id="2024.05" onClick={handleSortState}>
            2024.05
          </p>
          <p className="TRCol basho" id="2024.03" onClick={handleSortState}>
            2024.03
          </p>
          <p className="TRCol basho" id="2024.01" onClick={handleSortState}>
            2024.01
          </p>
          <p className="TRCol basho" id="2023.11" onClick={handleSortState}>
            2023.11
          </p>
          <p className="TRCol basho" id="2023.09" onClick={handleSortState}>
            2023.09
          </p>
          <p className="TRCol basho" id="2023.07" onClick={handleSortState}>
            2023.07
          </p>
          <p className="TRCol basho" id="2023.05" onClick={handleSortState}>
            2023.05
          </p>
          <p className="TRCol basho" id="2023.03" onClick={handleSortState}>
            2023.03
          </p>
          <p className="TRCol basho" id="2023.01" onClick={handleSortState}>
            2023.01
          </p>
        </div>
        <div>{allTeams()}</div>
      </div>
      {renderPagination()}
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
