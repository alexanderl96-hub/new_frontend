import React, { useState, useEffect } from 'react'

const LeaderPitcher = () => {
    const [leaderPitcher, setLeaderPitcher] = useState([])
    const [count, setCount] = useState(0)
    const [countInTimeout, setCountInTimeout] = useState([]);

    useEffect(() => {
     
      setTimeout(() => {
        setCountInTimeout(count)
      },500);
      setCount()
    },[count])

    useEffect(() => {
        fetch(`  http://lookup-service-prod.mlb.com/json/named.leader_pitching_repeater.bam?sport_code='mlb'&results=10&game_type='R'&season='2022'&sort_column=era`)
        .then(res => res.json())
        .then(data =>{
            setLeaderPitcher(data.leader_pitching_repeater.leader_pitching_mux.queryResults.row)
        })
    },[])


  return (
    <div>
         <div>
           <p className='allHitTitle' >Leader Pitcher Regular Season Top-10</p>
            {leaderPitcher ? leaderPitcher.map((pit, index)=>{
                return (
                        <div className={ !countInTimeout ?  'cardHittrans' : 'cardHit'} key={index} >
                            <div>Era: {pit.era} / {pit.name_display_first_last} / {pit.team_name}</div>
                            <div>League: {pit.league} / {pit.sport}</div>
                        </div>
                )
            }) :  <div className='noneInfo' >No Information Found</div>}
        </div>
    </div>
  )
}

export default LeaderPitcher