function JResults ({JRikishi}) {
    
    return (
        JRikishi.map((r) => {
            return (
                <div className="oneRR" id={r.shikona} key={r.shikona}>
                    <h2 className="RRShikona">{r.shikona}</h2>
                    <h2 className="RRPoints">{r.fs_current}</h2>
                </div>
            )
        })
    )
}

export default JResults