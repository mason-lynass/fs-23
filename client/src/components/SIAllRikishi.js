function SIAllRikishi({ rikishi, calculate_age }) {

    return (
        rikishi.map((r) => {

            let image = r.image_url
            if (image.charAt(0) !== 'h') image = 'https://sumo.or.jp/img/sumo_data/rikishi/60x60/kanto_no_image.jpg'

            return (
                <div key={r.id} className='DBOneRikishi'>
                    <img className='DBImage' src={image} alt="" />
                    <p className='DBCurrent'>{r.current_rank}</p>
                    <p className='DBShikona'>{r.shikona}</p>
                    <p className='DBHighest'>{r.highest_rank}</p>
                    <p className='DBHeya'>{r.heya}</p>
                    {/* get this from the RLarge component */}
                    <p className='DBAge'>{calculate_age(r.birthdate)}</p>
                    <p className='DBHeight'>{r.height}</p>
                    <p className='DBWeight'>{r.weight}</p>
                    <p className='DBYusho'>{r.yusho}</p>
                    <p className='DBKinboshi'>{r.kinboshi}</p>
                    <p className='DBSansho'>{r.shukun_sho}</p>
                    <p className='DBSansho'>{r.kanto_sho}</p>
                    <p className='DBSansho'>{r.gino_sho}</p>
                </div>
            )
        })
    )
}

export default SIAllRikishi