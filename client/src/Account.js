import "./CSS/account.css";
import "./CSS/media.css";
import PreviousTeams from "./components/PreviousTeams";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import { useNavigate } from "react-router-dom";

function Account({
  user,
  setUser,
  rikishi,
  clap,
  teams,
  goodTeamNames,
  fsHistories,
  basho,
}) {
  const navigate = useNavigate();

  function handleDeleteTeam() {
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
  }

  function isString(value) {
    return typeof value === "string";
  }

  function currentBashoTeam() {
    // otherTeams is all teams with valid usernames for the current basho
    // const otherTeams = [...teams].filter((team) => team.basho === basho && goodTeamNames.includes(team.user.username))
    const otherTeams = [...teams].filter((team) => team.basho === basho);
    const sortedOtherTeams = otherTeams.sort(
      (a, b) => b.final_score - a.final_score
    );
    // find this team's position by finding its index in all teams, sorted by final score
    const teamPosition =
      sortedOtherTeams.findIndex(
        (team) => team.user.username === user.username
      ) + 1;

    const currentTeam = user.teams.find((e) => e.basho === basho);
    const CTRikishiStrings = Object.values(currentTeam).filter(isString);
    const actualTeam = rikishi.filter((r) =>
      CTRikishiStrings.includes(r.shikona)
    );

    const indivPoints = actualTeam.map((r) => r.fs_current);
    const totalPoints = indivPoints.reduce((a, b) => a + b, 0);

    return (
      <div>
        <h3>Here's your team for the March tournament:</h3>
        <div id="AccountTeam">
          <div id="ATRikishi">
            {actualTeam.map((obj) => (
              <div className="AccountOneRikishi" key={obj.id}>
                <img src={obj.image_url} alt="" />
                <h3 className="AORrank">{obj.current_rank}</h3>
                <h3 className="AORshikona">{obj.shikona}</h3>
                {/* change this every basho */}
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
        {/* turn this off during the tournament */}
        {/* <div id="Redraft">
          <h4>
            If you need to redraft before the tournament starts, if someone is
            injured or you've changed your mind:{" "}
          </h4>
          <button onClick={handleDeleteTeam}>DELETE TEAM</button>
        </div> */}
      </div>
    );
  }

  function renderCurrentBashoTeam() {
    if (user.teams.find((e) => e.basho === basho) === undefined) {
      return (
        <p id="NoTeam">
          You haven't drafted a team yet for the upcoming tournament
        </p>
      );
    } else {
      return currentBashoTeam();
    }
  }

  function renderAccountPage() {
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
      const oldTeams = user.teams.filter((e) => e.basho !== basho);

      return (
        <div id="AccountPage">
          <h2 id="AccountHello">Hello, {user.username}!</h2>
          {renderCurrentBashoTeam()}
          {oldTeams.length > 0 ? (
            <PreviousTeams
              user={user}
              rikishi={rikishi}
              teams={teams}
              fsHistories={fsHistories}
              basho={basho}
            />
          ) : null}
        </div>
      );
    }
  }

  return <>{renderAccountPage()}</>;
}

export default Account;
