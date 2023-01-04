function SmallCard ({rikishi, handleCardClick}) {
    return (
        <div id={rikishi.current_rank} className="SmallCard" onClick={() => handleCardClick(rikishi)}>
            <img className="smallImage" src={rikishi.image_url} alt={rikishi.shikona}></img>
            <h3>{rikishi.shikona}</h3>
            <p>{rikishi.current_rank}</p>
        </div>
    )
}

export default SmallCard