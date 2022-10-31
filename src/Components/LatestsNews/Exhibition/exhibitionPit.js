import React, { useState, useEffect } from 'react'

const ExhibitionPit = () => {
    const [exhPit, setExhPit] = useState([])

    useEffect(() => {
        fetch(`http://lookup-service-prod.mlb.com/json/named.leader_pitching_repeater.bam?sport_code='mlb'&results=10&game_type='E'&season='2022'&sort_column=era`)
        .then(res => res.json())
        .then(data =>{
            setExhPit(data.leader_pitching_repeater.leader_pitching_mux.queryResults.row)
        })
    },[])

  return (
    <div>
         <div>
           <p className='allHitTitle' >Leader Pitcher Exhibition Top-10</p>
            {exhPit ?  exhPit.map((pit, index)=>{
                return( 
                        <div className='cardHit' key={index} >
                            <div>Era: {pit.era} / {pit.name_display_first_last} / {pit.team_name}</div>
                            <div>League: {pit.league} / {pit.sport}</div>
                        </div>
                )
            }) : <div className='noneInfo' >No Information Found</div>}
        </div>
    </div>
  )
}

export default ExhibitionPit