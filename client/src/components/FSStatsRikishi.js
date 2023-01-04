function FSStatsRikishi ({rikishi}) {
    return (
        rikishi.map((r) => {
            return (
                <div key={r.id} className='DBOneRikishi'>
                    <img className='DBImage' src={r.image_url} alt=""/>
                    <p className='DBCurrent'>{r.highest_rank}</p>
                    <p className='DBShikona'>{r.shikona}</p>
                    <p className="DBAvg">{r.avg_fs_score}</p>
                    {r.FS_history.map((basho) => {
                        return (<p className="DBBasho">{basho}</p>)
                    })}
                </div>
            )
        })
    )
}

export default FSStatsRikishi