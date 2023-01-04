import SmallCard from "./SmallCard"

function RikishiList ({rikishi, handleCardClick}) {
    return (
        <div id='addedRikishiList' className="RLFlex">
            {rikishi.map((rikishi) => 
            <SmallCard 
            key={rikishi.id} 
            rikishi={rikishi}
            handleCardClick={handleCardClick}
            />)}
        </div>
    )
}

export default RikishiList