import React, { useState, useEffect } from 'react'
import IndividualTeam from '../individualTeam/IndividualTeam'
import './Teams.css'
import LoadingHome from '../../Loading'
import SlideShow from '../SlideShow/SlideShow'
import Videos from '../AddsVideos/Videos'
import Videos2 from '../AddsVideos/Videos2'
import Videos3 from '../AddsVideos/Videos3'
import AccountList from '../accountList/AccountList'
// import Weather from '../Weather'
// import  Weather  from '../Weather'




const Teams = ({loggedIn, openLoginModal}) => {
    const [teams, setTeams] = useState([])
    const [count, setCount] = useState(<div className='LoadingFront'><LoadingHome/></div>);
    const [countInTimeout, setCountInTimeout] = useState([]);
    
    useEffect(() => {
     
      setTimeout(() => {
        setCountInTimeout(count)
      },3000);
      setCount()
    },[count])
    
    useEffect(() => {
        fetch(`https://my-baseball-teams.adaptable.app/teams`)
        .then(res => res.json())
        .then(data =>{
            setTeams(data)
        })
    },[])
    // useEffect(() => {
    //     fetch(`http://localhost:9000/teams`)
    //     .then(res => res.json())
    //     .then(data =>{
    //         setTeams(data)
    //     })
    // },[])

  
  return (
    <div className='home'>
     
        <div style={{display:'flex'}}>
            {/* wheater app */}
            <SlideShow />
           {/* {Weather} */}
        </div>
        <AccountList />
         <h1 className="pageTitle">USA Teams</h1>
         {!countInTimeout ? 
         <div className='Container'>
         {teams.map((team, index)=>{
             return (
                 <IndividualTeam team={team} key={index} id={team.id} /> 
               
             )
         })}
         </div> : <div className='LoadingFront'><LoadingHome/></div>}
         <div style={{display:'flex',  marginTop: '20px'}}>
         <Videos />
         <Videos2 />
         <Videos3 />
         </div>
        
    </div>
  )
}

export default Teams