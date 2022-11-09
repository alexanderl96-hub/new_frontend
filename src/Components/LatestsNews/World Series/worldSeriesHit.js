import React, { useState, useEffect } from 'react'

const WorldSeriesHit = () => {
    const [worldHiter, setWorldHiter]= useState([])
    const [count, setCount] = useState(0)
    const [countInTimeout, setCountInTimeout] = useState([]);

    useEffect(() => {
     
      setTimeout(() => {
        setCountInTimeout(count)
      },500);
      setCount()
    },[count])


    useEffect(() => {
        fetch(`http://lookup-service-prod.mlb.com/json/named.leader_hitting_repeater.bam?sport_code='mlb'&results=10&game_type='W'&season='${new Date().getFullYear()}'&sort_column=ab`)
        .then(res => res.json())
        .then(data =>{
            setWorldHiter(data.leader_hitting_repeater.leader_hitting_mux.queryResults.row)
        })
    },[])
  return (
    <div>
          <div style={{transaction: 'all 2s ease-out',}} >
                <p className='allHitTitle' >Leader Hitting World Series Top-10</p>
                    {worldHiter ? worldHiter.map((hit, index)=>{
                        return( 
                                <div className={ !countInTimeout ?  'cardHittrans' : 'cardHit'} key={index} >
                                        <div>AB: {hit.ab} / {hit.name_display_first_last} / {hit.team_name}</div>
                                        <div>League: {hit.league} / {hit.sport}</div>
                                    </div>
                        )
                    }) :  <div className='noneInfo' >No Information Found</div>}
                </div>
    </div>
  )
}

export default WorldSeriesHit