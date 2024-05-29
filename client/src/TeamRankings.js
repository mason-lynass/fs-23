import OneTeam from "./components/OneTeam";

function TeamRankings({teams, teamsLoaded}) {

  function allTeams() {
    console.log(teams);
    if (teamsLoaded === true) {
      return teams.map((team) => {
        return (
          <div className="oneTeam">
            <h2>{team.user.username}</h2>
            <p>{team.basho}</p>
            <h3 className="total">{team.final_score}</h3>
          </div>
        );
      });
    }
  }

  return <div>{allTeams()}</div>
}

export default TeamRankings;
