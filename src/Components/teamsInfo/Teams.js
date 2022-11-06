import React, { useState, useEffect } from 'react'
import IndividualTeam from '../individualTeam/IndividualTeam'
import Navbar from '../navBar/Navbar'
import Footer from '../Footer/Footer.js'
import './Teams.css'
import LoadingHome from '../../Loading'
import SlideShow from '../SlideShow/SlideShow'
import Videos from '../Videos'




const Teams = () => {
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
        <Navbar />
        <div style={{display:'flex'}}>
            {/* wheater app */}
            <SlideShow />
            <Videos />
        </div>
       
         <h1 className="pageTitle">USA Teams</h1>
         {!countInTimeout ? 
         <div className='Container'>
         {teams.map((team, index)=>{
             return (
                 <IndividualTeam team={team} key={index} id={team.id} /> 
               
             )
         })}
         </div> : <div className='LoadingFront'><LoadingHome/></div>}
         <Footer/>
    </div>
  )
}

export default Teams