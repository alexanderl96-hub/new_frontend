import React, { useState, useEffect }from 'react'
import Navbar from '../../Components/navBar/Navbar'
import './season.css'

const Season = () => {
  const [season, setSeason] =useState([])


  // function date(num){
  //   let year = ''
  //   let month = ''
  //   let day = ''
  //   if(num.length < 8 ){
  //     year = num.toString().slice(3)
  //     day = num.toString().slice(1,3)
  //     month = num.toString().slice(0,1)
  //   }
   
  //   return month+'/'+day+'/'+year
  // }

  useEffect(() => {
    fetch('https://my-baseball-teams.herokuapp.com/season')
    .then(res => res.json())
    .then((data) => {
      setSeason(data)
    })
  },[])
  console.log(season)
  return (
    <div>
        <Navbar/>
        <div className='navSeason'>
        <h1 >Season</h1>
        <div className='season-inner'>
          {season.map((data, index)=>{
           return ( 
             <div id={index} className='card'>
               {/* {data.points_team > data.points_vs ? data.points_team  :null} */}
               <div >
                  <div >
                     <div className='date'>{data.date}</div>
                  </div>
                  <div >
                    <div className='teamName'>{data.team_name}</div>
                    <div className='teamNameImg'>
                     <img src={data.image_team} alt={index} style={{width: '30px',  height: '30px', borderRadius: '50px'}}/>
                     <div style={{width: '10px', textAlign: 'center', marginLeft: '55px', marginTop:'-27px'}}>{data.points_team}</div></div>
                  </div>
                  <div ><h1 style={{color:'white'}}>vs</h1></div>
                  <div>
                    <div className='teamVs'>{data.team_vs}</div>
                    <div className='teamNameImg2'>
                      <img src={data.image_vs} alt={index} style={{width: '30px', height: '30px',borderRadius: '50px'}} /></div>
                      <div style={{width: '10px', textAlign: 'center',marginLeft: '65px', marginTop:'-28px' }}>{data.points_vs}</div>
                  </div>
                </div>
             </div>
            )
          })}
        </div>
        </div>
    </div>
  )
}

export default Season