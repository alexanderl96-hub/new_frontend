import React, { useState, useEffect } from 'react'

const DivisionHit = () => {
    const [divHiter, setDivHiter]= useState([])
    const [count, setCount] = useState(0)
    const [countInTimeout, setCountInTimeout] = useState([]);

    useEffect(() => {
     
      setTimeout(() => {
        setCountInTimeout(count)
      },500);
      setCount()
    },[count])

    useEffect(() => {
        fetch(`http://lookup-service-prod.mlb.com/json/named.leader_hitting_repeater.bam?sport_code='mlb'&results=10&game_type='D'&season='2022'&sort_column=ab`)
        .then(res => res.json())
        .then(data =>{
            setDivHiter(data.leader_hitting_repeater.leader_hitting_mux.queryResults.row)
        })
    },[])
  return (
    <div>
         <div>
           <p className='allHitTitle' >Leader Hitting Division Series Top-10</p>
            {divHiter ? divHiter.map((hit, index)=>{
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

export default DivisionHit