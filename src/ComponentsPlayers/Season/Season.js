import React, { useState, useEffect }from 'react'
import Navbar from '../../Components/navBar/Navbar'
import './season.css'
import LoadingHome from '../../../src/Loading'

const Season = () => {
  const [season, setSeason] =useState([])
  const [count, setCount] = useState(<div className='LoadingFront'><LoadingHome/></div>);
  const [countInTimeout, setCountInTimeout] = useState([]);

  useEffect(() => {
   
    setTimeout(() => {
      setCountInTimeout(count)
    },3000);
    setCount()
  },[count])


  function date(num){
    let year = ''
    let month = ''
    let day = ''
    year = num.toString().slice(3)
    day = num.toString().slice(1,3)
     month = num.toString().slice(0,1).length < 2 ? `0${num.toString().slice(0,1)}` : num.toString().slice(0,1)
   
    return month+'/'+day+'/'+year
  }

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
        {!countInTimeout ? 
        <div className='season-inner'>
          {season.map((data, index)=>{
           return ( 
             <div id={index} className='card'>
               {/* {data.points_team > data.points_vs ? data.points_team  :null} */}
               <div >
              
                  <div className='dateTop'>
                     <div className='date'>{date(data.date)}</div>
                  </div>
                  <div >
                    <div className='teamName'>{data.team_name}</div>
                      <div className='teamNameImg'>
                          <img src={data.image_team} alt={index}/>
                          <div >{data.points_team}</div>
                      </div>
                  </div>
                  <div ><h1 className='VS'>vs</h1></div>
                  <div>
                    <div className='teamVs'>{data.team_vs}</div>
                    <div className='teamNameImg2'>
                      <img src={data.image_vs} alt={index}  /></div>
                      <div className= 'lastpoint'>{data.points_vs}</div>
                  </div>
                </div>
             </div>
            )
          })}
        </div> : <div className='LoadingFrontS'><LoadingHome/></div>}
        </div>
    </div>
  )
}

export default Season