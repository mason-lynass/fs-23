import { useState } from "react";
import { useNavigate } from "react-router-dom";

function DraftTeam({ userTeam, setUserTeam, user, setUser, tachiai, basho }) {
  const navigate = useNavigate();
  const [errors, setErrors] = useState("");

  function handleTeamFormSubmit(e) {
    e.preventDefault();
    fetch(`/new_teams`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // I think this works, but check on it before the draft
      // userTeam contains r1 - r7 rikishi objects, but we only want to pass integer-type references to the objects' ids
      // is it making new new_team ids correctly?
      body: JSON.stringify({
        // basho: userTeam.basho,
        basho: basho,
        r1_id: userTeam.r1.id,
        r2_id: userTeam.r2.id,
        r3_id: userTeam.r3.id,
        r4_id: userTeam.r4.id,
        r5_id: userTeam.r5.id,
        r6_id: userTeam.r6.id,
        r7_id: userTeam.r7.id,
        user_id: user.id,
    id: 4 }),
    }).then((r) => {
      if (r.ok) {
        tachiai();
        fetch("/me")
          .then((r) => r.json())
          .then((user) => {
            setUser(user);
            navigate("/account");
          });
      } else {
        r.json().then((err) => {
          setErrors(err.errors);
        });
      }
    });
  }

  function errorMessage() {
    if (errors !== "") {
      return <p id="DraftErrorMessage">{errors}</p>;
    }
  }

  function handleXButton(clicked) {
    let i = clicked.target.id;
    const newTeam = { ...userTeam };
    newTeam[i] = "";
    setUserTeam(newTeam);
  }

  return (
    <div id="FSTeam" className="FSTeamContainer">
      <h2>Build your Fantasy Sumo team</h2>
      <div id="FSFlex">
        <div id="FSTeamTable">
          <p>Sanyaku:</p>
          <p>M1-M4:</p>
          <p>M5-M8:</p>
          <p>M9-M12:</p>
          <p>M13+:</p>
          <p>extra (any rank):</p>
          <p>Juryo:</p>
        </div>
        <div id="FSRikishi">
          <div>
            <p>{userTeam.r1.shikona} </p>
            {userTeam.r1 !== "" ? (
              <button id="r1" onClick={handleXButton}>
                X
              </button>
            ) : null}
          </div>
          <div>
            <p>{userTeam.r2.shikona}</p>{" "}
            {userTeam.r2 !== "" ? (
              <button id="r2" onClick={handleXButton}>
                X
              </button>
            ) : null}
          </div>
          <div>
            <p>{userTeam.r3.shikona}</p>{" "}
            {userTeam.r3 !== "" ? (
              <button id="r3" onClick={handleXButton}>
                X
              </button>
            ) : null}
          </div>
          <div>
            <p>{userTeam.r4.shikona}</p>{" "}
            {userTeam.r4 !== "" ? (
              <button id="r4" onClick={handleXButton}>
                X
              </button>
            ) : null}
          </div>
          <div>
            <p>{userTeam.r5.shikona}</p>{" "}
            {userTeam.r5 !== "" ? (
              <button id="r5" onClick={handleXButton}>
                X
              </button>
            ) : null}
          </div>
          <div>
            <p>{userTeam.r6.shikona}</p>{" "}
            {userTeam.r6 !== "" ? (
              <button id="r6" onClick={handleXButton}>
                X
              </button>
            ) : null}
          </div>
          <div>
            <p>{userTeam.r7.shikona}</p>{" "}
            {userTeam.r7 !== "" ? (
              <button id="r7" onClick={handleXButton}>
                X
              </button>
            ) : null}
          </div>
        </div>
      </div>
      <div>
        {/* only show this when all r spots are filled */}
        {userTeam.r1 === "" ||
        userTeam.r2 === "" ||
        userTeam.r3 === "" ||
        userTeam.r4 === "" ||
        userTeam.r5 === "" ||
        userTeam.r6 === "" ||
        userTeam.r7 === "" ? null : (
          <form id="FSTeamBottom" onSubmit={handleTeamFormSubmit}>
            <button type="submit">Submit your team</button>
            {errorMessage()}
            <p id="warning">remember, no edits after you submit!</p>
          </form>
        )}
      </div>
    </div>
  );
}

export default DraftTeam;
