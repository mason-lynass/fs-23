function JResults ({JRikishi}) {
    
    return (
        JRikishi.map((r) => {
            return (
                <div className="oneRR" id={r.shikona} key={r.shikona}>
                    <h2 className="RRShikona">{r.shikona}</h2>
                    <h2 className="RRPoints">{r.FS_20233}</h2>
                </div>
            )
        })
    )
}

export default JResults