import React, { useState, useEffect } from 'react'

const FirstHit = () => {
    const [firstHiter, setFirstHiter]= useState([])
    useEffect(() => {
        fetch(`http://lookup-service-prod.mlb.com/json/named.leader_hitting_repeater.bam?sport_code='mlb'&results=10&game_type='F'&season='2022'&sort_column=ab`)
        .then(res => res.json())
        .then(data =>{
            setFirstHiter(data.leader_hitting_repeater.leader_hitting_mux.queryResults.row)
        })
    },[])
  return (
    <div>
            <div>
                <p className='allHitTitle' >Leader Hitting First Round/Wild Card Top-10</p>
                    {firstHiter ? firstHiter.map((hit, index)=>{
                        return(
                                <div className='cardHit' key={index} >
                                        <div>AB: {hit.ab} / {hit.name_display_first_last} / {hit.team_name}</div>
                                        <div>League: {hit.league} / {hit.sport}</div>
                                    </div>
                        )
                    }) :  <div className='noneInfo' >No Information Found</div>}
            </div>
    </div>
  )
}

export default FirstHit