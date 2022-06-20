import React, { useState, useEffect }from 'react'
import Navbar from '../../Components/navBar/Navbar'

const Season = () => {
  const [season, setSeason] =useState([])

  useEffect(() => {
    fetch('https://my-baseball-teams.herokuapp.com/season')
    .then(res => res.json())
    .then((data) => {
      setSeason(data)
    })
  },[])
  console.log(season )
  return (
    <div>
        <Navbar/>
        <h1>Season</h1>
        <div>
          {season.map((data, index)=>{
           return ( 
             <div id={index}>
               {/* {data.points_team > data.points_vs ? data.points_team  :null} */}
               <div style={{ background: 'blue', marginBottom: '3px', display: 'flex', margin:'4px', borderRadius: '3px',  height: '90px'  }}>
                  <div >
                     <div style={{ color: 'white', textAlign: 'center', width: '70px'}}>{data.date}</div>
                  </div>
                  <div >
                    <div style={{ textAlign: 'center',width: '70px'}}>{data.team_name}</div>
                  </div>
                  <div style={{display:'flex', textAlign: 'center', width: '20px'}}><h1>vs</h1></div>
                  <div>
                    <div style={{ textAlign: 'center',width: '70px'}}>{data.team_vs}</div>
                  </div>
                  <div style={{display:'flex',color: 'white', flexDirection: 'row', gap:'15px', }}>
                    <div style={{alignItems: 'center'}}>
                    <img src={data.image_team} alt={index} style={{width: '30px',  height: '30px', borderRadius: '50px'}}/></div>
                    <div style={{width: '10px', textAlign: 'center'}}>{data.points_team}</div>
                  </div>
                  <div style={{display:'flex',color: 'white', flexDirection: 'row', gap:'15px'}} > 
                    <div style={{textAlign: 'center' }}>
                      <img src={data.image_vs} alt={index} style={{width: '30px', height: '30px',borderRadius: '50px'}} /></div>
                    <div style={{width: '10px', textAlign: 'center' }}>{data.points_vs}</div>
                  </div>
                </div>
             </div>
            )
          })}
        </div>
    </div>
  )
}

export default Season