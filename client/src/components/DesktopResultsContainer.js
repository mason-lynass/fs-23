import OneTeam from "./OneTeam";

function DesktopResultsContainer({ goodTeams, user }) {
  
  let yourTeam = null;
  let otherTeams = goodTeams;

  if (user !== null && user.username) {
    yourTeam = goodTeams.find(
      (team) => team.user.username === user.username
    );
    otherTeams = goodTeams.filter(
      (team) => team.user.username !== user.username
    );
  }

  function showYourTeam() {
    if (user && user.username && yourTeam) {
      return (
        <div id="yourTeam">
          <OneTeam team={yourTeam} key={yourTeam.id} />
        </div>
      );
    }
    return null
  }

  return (
    <div className="resultsContainer">
      <div className="teamsTop">
        <h2 className="teamName">team name</h2>
        <p className="smallerColumn">sanyaku</p>
        <p className="smallerColumn">M1-M4</p>
        <p className="smallerColumn">M5-M8</p>
        <p className="smallerColumn">M9-M12</p>
        <p className="smallerColumn">M13-M17</p>
        <p className="smallerColumn">extra</p>
        <p className="smallerColumn">juryo</p>
        <h3 className="total">Total:</h3>
      </div>
      {showYourTeam()}
      <div id="teamsContainer">
        {otherTeams.map((team) => {
          return <OneTeam team={team} key={team.id} />;
        })}
      </div>
    </div>
  );
}

export default DesktopResultsContainer;
