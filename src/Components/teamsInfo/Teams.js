import React, { useState, useEffect } from 'react'
import IndividualTeam from '../individualTeam/IndividualTeam'
import Navbar from '../navBar/Navbar'
import Footer from '../Footer/Footer.js'
import './Teams.css'




const Teams = () => {
    const [teams, setTeams] = useState([])

    
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
         <h1 className="pageTitle">USA Teams</h1>
         <div className='Container'>
         {teams.map((team, index)=>{
             return (
                 <IndividualTeam team={team} key={index} id={team.id} /> 
               
             )
         })}
         </div>
         <Footer/>
    </div>
  )
}

export default Teams