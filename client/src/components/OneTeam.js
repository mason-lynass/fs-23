function OneTeam({ team }) {
    // console.log(team)

    // change it back to FS_history[13] once you push the scores to their arrays

    return (
        <div className='oneTeam'>
            <h2>{team.user.username}</h2>
            <div className="smallerColumn">
                <p>{team[0].shikona}</p>
                <p>{team[0].FS_20233}</p>
            </div>
            <div className="smallerColumn">
                <p>{team[1].shikona}</p>
                <p>{team[1].FS_20233}</p>
            </div>
            <div className="smallerColumn">
                <p>{team[2].shikona}</p>
                <p>{team[2].FS_20233}</p>
            </div>
            <div className="smallerColumn">
                <p>{team[3].shikona}</p>
                <p>{team[3].FS_20233}</p>
            </div>
            <div className="smallerColumn">
                <p>{team[4].shikona}</p>
                <p>{team[4].FS_20233}</p>
            </div>
            <div className="smallerColumn">
                <p>{team[5].shikona}</p>
                <p>{team[5].FS_20233}</p>
            </div>
            <div className="smallerColumn">
                <p>{team[6].shikona}</p>
                <p>{team[6].FS_20233}</p>
            </div>
            <h3 className="total">{team.scoreSum}</h3>
        </div>
    )
}

export default OneTeam