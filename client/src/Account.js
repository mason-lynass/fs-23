import "./CSS/account.css";
import "./CSS/media.css";
import PreviousTeams from "./components/PreviousTeams";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import { useNavigate } from "react-router-dom";
import { useMemo, useCallback } from "react";

function Account({
  user,
  setUser,
  rikishi,
  clap,
  teams,
  fantasySumoHistories,
  basho,
}) {
  const navigate = useNavigate();

  const handleDeleteTeam = useCallback(() => {
    const toDelete = user.teams.find((e) => e.basho === basho).id;
    fetch(`/teams/${toDelete}`, { method: "DELETE" }).then((r) => {
      if (r.ok) {
        fetch("/me").then((r) => {
          if (r.ok) {
            r.json().then((user) => {
              setUser(user);
              navigate("/draft");
            });
          }
        });
      }
    });
  }, [user, basho, navigate, setUser]);

  const currentTeam = useMemo(() => {
    if (user && user.teams) return user.teams.find((e) => e.basho === basho);
  }, [user, basho]);

  const CTRikishiStrings = useMemo(() => {
    return currentTeam ? Object.values(currentTeam).filter((value) => typeof value === "string") : [];
  }, [currentTeam]);

  const actualTeam = useMemo(() => {
    return rikishi.filter((r) => CTRikishiStrings.includes(r.shikona));
  }, [rikishi, CTRikishiStrings]);

  const indivPoints = useMemo(() => {
    return actualTeam.map((r) => r.fs_current);
  }, [actualTeam]);

  const totalPoints = useMemo(() => {
    return indivPoints.reduce((a, b) => a + b, 0);
  }, [indivPoints]);

  const otherTeams = useMemo(() => {
    return teams.filter((team) => team.basho === basho);
  }, [teams, basho]);

  const sortedOtherTeams = useMemo(() => {
    return [...otherTeams].sort((a, b) => b.final_score - a.final_score);
  }, [otherTeams]);

  const teamPosition = useMemo(() => {
    if (user && user.username) 
    return sortedOtherTeams.findIndex(
      (team) => team.user.username === user.username
    ) + 1;
  }, [sortedOtherTeams, user]);

  const renderCurrentBashoTeam = useCallback(() => {
    if (!currentTeam) {
      return (
        <p id="NoTeam">
          You haven't drafted a team yet for the upcoming tournament
        </p>
      );
    }

    return (
      <div>
        <h3>Here's your team for the January tournament:</h3>
        <div id="AccountTeam">
          <div id="ATRikishi">
            {actualTeam.map((obj) => (
              <div className="AccountOneRikishi" key={obj.id}>
                <img src={obj.image_url} alt="" />
                <h3 className="AORrank">{obj.current_rank}</h3>
                <h3 className="AORshikona">{obj.shikona}</h3>
                <h3 className="AORscore">
                  {obj.fs_current !== null ? obj.fs_current : "0"}
                </h3>
              </div>
            ))}
          </div>
          <div id="ATTotal">
            <h1>{totalPoints}</h1>
            <h2>points</h2>
            {currentTeam.final_score === null ? (
              ""
            ) : (
              <>
                <hr></hr>
                <h2>#{teamPosition} out of</h2>
                <h2>{otherTeams.length} teams</h2>
              </>
            )}
          </div>
        </div>
        <div id="delay">
          <h4>
            Your team will be visible on the Results page before and during the
            tournament - there may be some delay in visibility, up to 24 hours
            after you draft your team.
          </h4>
        </div>
        {/* <div id="Redraft">
          <h4>
            If you need to redraft before the tournament starts, if someone is
            injured or you've changed your mind:{" "}
          </h4>
          <button onClick={handleDeleteTeam}>DELETE TEAM</button>
        </div> */}
      </div>
    );
  }, [currentTeam, actualTeam, totalPoints, teamPosition, otherTeams, handleDeleteTeam]);

  const renderAccountPage = useCallback(() => {
    if (user === null) {
      return (
        <div>
          <h2 id="AccountLogin">You need to login to see your account page!</h2>
          <div id="LoginFlex">
            <LoginForm setUser={setUser} clap={clap} />
            <SignupForm setUser={setUser} clap={clap} />
          </div>
        </div>
      );
    } else {
      return (
        <div id="AccountPage">
          <h2 id="AccountHello">Hello, {user.username}!</h2>
          {renderCurrentBashoTeam()}
          {user.teams.length > 0 && (
            <PreviousTeams
              user={user}
              rikishi={rikishi}
              teams={teams}
              fantasySumoHistories={fantasySumoHistories}
              basho={basho}
            />
          )}
        </div>
      );
    }
  }, [user, clap, setUser, renderCurrentBashoTeam, rikishi, teams, fantasySumoHistories, basho]);

  return <>{renderAccountPage()}</>;
}

export default Account;
