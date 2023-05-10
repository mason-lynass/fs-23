function OneTeamMobile({ team }) {

    let username = team.user.username

    if (username.includes('@')) {
        let at = username.indexOf('@')
        username = username.slice(0, at)
    }

    return (
        <div className='oneTeam'>
            <h2>{username}</h2>
            <div className="smallerColumn">
                <p>{team[0].fs_current}</p>
            </div>
            <div className="smallerColumn">
                <p>{team[1].fs_current}</p>
            </div>
            <div className="smallerColumn">
                <p>{team[2].fs_current}</p>
            </div>
            <div className="smallerColumn">
                <p>{team[3].fs_current}</p>
            </div>
            <div className="smallerColumn">
                <p>{team[4].fs_current}</p>
            </div>
            <div className="smallerColumn">
                <p>{team[5].fs_current}</p>
            </div>
            <div className="smallerColumn">
                <p>{team[6].fs_current}</p>
            </div>
            <h3 className="total">{team.scoreSum}</h3>
        </div>
    )
}

export default OneTeamMobile