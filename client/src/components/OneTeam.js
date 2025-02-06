function OneTeam({ team }) {
  let username = team.user.username;

  // to hide full email addresses
  if (username.includes("@")) {
    let at = username.indexOf("@");
    username = username.slice(0, at);
  }

  return (
    <div className="oneTeam">
      <h2>{username}</h2>
      <div className="smallerColumn">
        <p>{team.r1.shikona}</p>
        <p>{team.r1.fs_current}</p>
      </div>
      <div className="smallerColumn">
        <p>{team.r2.shikona}</p>
        <p>{team.r2.fs_current}</p>
      </div>
      <div className="smallerColumn">
        <p>{team.r3.shikona}</p>
        <p>{team.r3.fs_current}</p>
      </div>
      <div className="smallerColumn">
        <p>{team.r4.shikona}</p>
        <p>{team.r4.fs_current}</p>
      </div>
      <div className="smallerColumn">
        <p>{team.r5.shikona}</p>
        <p>{team.r5.fs_current}</p>
      </div>
      <div className="smallerColumn">
        <p>{team.r6.shikona}</p>
        <p>{team.r6.fs_current}</p>
      </div>
      <div className="smallerColumn">
        <p>{team.r7.shikona}</p>
        <p>{team.r7.fs_current}</p>
      </div>
      <h3 className="total">{team.scoreSum}</h3>
    </div>
  );
}

export default OneTeam;
