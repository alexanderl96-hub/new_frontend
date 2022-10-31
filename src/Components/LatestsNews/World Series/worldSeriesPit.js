import React, { useState, useEffect } from 'react'

const WorldSeriesPit = () => {
    const [worldPit, setWorldPit] = useState([])

    useEffect(() => {
        fetch(`http://lookup-service-prod.mlb.com/json/named.leader_pitching_repeater.bam?sport_code='mlb'&results=10&game_type='W'&season='2022'&sort_column=era`)
        .then(res => res.json())
        .then(data =>{
            setWorldPit(data.leader_pitching_repeater.leader_pitching_mux.queryResults.row)
        })
    },[])
  return (
    <div>
         <div>
           <p className='allHitTitle' >Leader Pitcher World Series Top-10</p>
            {worldPit ?  worldPit.map((pit, index)=>{
                return(  
                        <div className='cardHit' key={index} >
                            <div>Era: {pit.era} / {pit.name_display_first_last} / {pit.team_name}</div>
                            <div>League: {pit.league} / {pit.sport}</div>
                        </div>
                )
            }) :  <div className='noneInfo' >No Information Found</div>}
        </div>
    </div>
  )
}

export default WorldSeriesPit