import OneTeamMobile from "./OneTeamMobile";

function MobileResultsContainer({ goodTeams, user }) {
  let yourTeam;
  let otherTeams = goodTeams;

  if (user !== null && user.username) {
    yourTeam = [...goodTeams].filter(
      (team) => team.user.username === user.username
    )[0];
    otherTeams = [...goodTeams].filter(
      (team) => team.user.username !== user.username
    );
  }

  function showYourTeam() {
    if (user !== null && user.username) {
      return (
        <div id="yourTeam">
          <OneTeamMobile team={yourTeam} key={yourTeam.id} />
        </div>
      );
    }
  }

  return (
    <div className="resultsContainer">
      <div className="teamsTop">
        <h2 className="teamName">team name</h2>
        <p className="smallerColumn">1</p>
        <p className="smallerColumn">2</p>
        <p className="smallerColumn">3</p>
        <p className="smallerColumn">4</p>
        <p className="smallerColumn">5</p>
        <p className="smallerColumn">6</p>
        <p className="smallerColumn">7</p>
        <h3 className="total">Total:</h3>
      </div>
      {showYourTeam()}
      <div id="teamsContainer">
        {otherTeams.map((team) => {
          return <OneTeamMobile team={team} key={team.id} />;
        })}
      </div>
    </div>
  );
}

export default MobileResultsContainer;
