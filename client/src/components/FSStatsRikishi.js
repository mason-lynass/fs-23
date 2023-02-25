function FSStatsRikishi({ rikishi }) {

    return (
        rikishi.map((r) => {

            const history = r.FS_history
            const recentFirst = [...history].reverse()

            return (
                <div key={r.id} className='DBOneRikishi'>
                    <img className='DBImage' src={r.image_url} alt="" />
                    <p className='DBShikona'>{r.shikona}</p>
                    <p className="DBAvg">{r.avg_fs_score}</p>
                    {recentFirst.map((basho) => {
                        return (<p className="DBBasho">{basho}</p>)
                    })}
                </div>
            )
        })
    )
}

export default FSStatsRikishi