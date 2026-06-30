import "./CSS/userrankings.css";
import { useEffect, useState } from "react";
import { API_URL } from "./App";
import { displayUsername } from "./utils";

const BASHOS = [
  2026.05, 2026.03, 2026.01,
  2025.11, 2025.09, 2025.07, 2025.05, 2025.03, 2025.01,
  2024.11, 2024.09, 2024.07, 2024.05, 2024.03, 2024.01,
  2023.11, 2023.09, 2023.07, 2023.05, 2023.03, 2023.01,
];

function UserRankings() {
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
      });
  }, []);

  useEffect(() => {
    if (!loading) {
      updateDisplayedUsers();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, currentPage, sortState]);

  function updateDisplayedUsers() {
    let sortedUsers = getSortedUsers();
    const startIndex = (currentPage - 1) * usersPerPage;
    const endIndex = startIndex + usersPerPage;
    setDisplayedUsers(sortedUsers.slice(startIndex, endIndex));
  }

  function getSortedUsers() {
    let sortedUsers = [...allUsers];

    function bashoSort(x) {
      sortedUsers = sortedUsers.sort((a, b) => {
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
      sortedUsers = sortedUsers.sort(
        (a, b) =>
          parseFloat(b.weighted_average) - parseFloat(a.weighted_average),
      );
    } else if (sortState === "TRUsername")
      sortedUsers = sortedUsers.sort((a, b) => a.username - b.username);
    else if (sortState === "TRAverage")
      sortedUsers = sortedUsers.sort(
        (a, b) =>
          parseFloat(b.average_percentile) - parseFloat(a.average_percentile),
      );
    else if (sortState === "TRTotal")
      sortedUsers = sortedUsers.sort(
        (a, b) =>
          parseFloat(b.total_percentile) - parseFloat(a.total_percentile),
      );
    else if (sortState === "TRWeighted")
      sortedUsers = sortedUsers.sort(
        (a, b) =>
          parseFloat(b.weighted_average) - parseFloat(a.weighted_average),
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

      for (
        let i = Math.max(2, currentPage - delta);
        i <= Math.min(totalPages - 1, currentPage + delta);
        i++
      ) {
        range.push(i);
      }

      if (currentPage - delta > 2) {
        rangeWithDots.push(1, "...");
      } else {
        rangeWithDots.push(1);
      }

      rangeWithDots.push(...range);

      if (currentPage + delta < totalPages - 1) {
        rangeWithDots.push("...", totalPages);
      } else {
        rangeWithDots.push(totalPages);
      }

      return rangeWithDots;
    };

    const visiblePages =
      totalPages <= 7
        ? Array.from({ length: totalPages }, (_, i) => i + 1)
        : getVisiblePages();

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
      <div
        style={{
          textAlign: "center",
          margin: "20px 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "2px",
          }}
        >
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            style={{
              ...currentButtonStyle,
              backgroundColor: currentPage === 1 ? "#ccc" : "#f0f0f0",
              cursor: currentPage === 1 ? "default" : "pointer",
              marginRight: "8px",
            }}
          >
            ‹
          </button>

          {visiblePages.map((page, index) =>
            page === "..." ? (
              <span key={`dots-${index}`} style={{ margin: "0 4px" }}>
                ...
              </span>
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
            ),
          )}

          <button
            onClick={() =>
              setCurrentPage(Math.min(totalPages, currentPage + 1))
            }
            disabled={currentPage === totalPages}
            style={{
              ...currentButtonStyle,
              backgroundColor: currentPage === totalPages ? "#ccc" : "#f0f0f0",
              cursor: currentPage === totalPages ? "default" : "pointer",
              marginLeft: "8px",
            }}
          >
            ›
          </button>
        </div>

        <div
          style={{
            fontSize: isMobile ? "12px" : "14px",
            color: "#666",
            textAlign: "center",
          }}
        >
          Showing{" "}
          {Math.min((currentPage - 1) * usersPerPage + 1, allUsers.length)} -{" "}
          {Math.min(currentPage * usersPerPage, allUsers.length)} of{" "}
          {allUsers.length} users
        </div>
      </div>
    );
  }

  function allTeams() {
    if (displayedUsers.length > 0) {
      return displayedUsers.map((user) => {
        const username = displayUsername(user.username);

        return (
          <div className="oneTeamTR" key={user.username}>
            <h2 style={{ overflow: "hidden" }}>{username}</h2>
            <h3 className="totalTR">{user.average_percentile}</h3>
            <h3 className="totalTR">{user.total_percentile}</h3>
            <h3 className="totalTR">{user.weighted_average}</h3>
            {BASHOS.map((b) => {
              const team = user.old_teams.find((t) => t.basho === b);
              return <p key={b}>{team ? team.percentile : ""}</p>;
            })}
          </div>
        );
      });
    }
  }

  if (loading) {
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
          {BASHOS.map((b) => (
            <p key={b} className="TRCol basho" id={String(b)} onClick={handleSortState}>
              {b}
            </p>
          ))}
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
