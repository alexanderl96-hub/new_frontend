import React, { useState, useEffect } from 'react'
import IndividualTeam from '../individualTeam/IndividualTeam'
import './Teams.css'


const Teams = () => {
    const [teams, setTeams] = useState([])

    useEffect(() => {
        fetch("http://localhost:9000/teams")
        .then(res => res.json())
        .then(data =>{
            console.log(data, 'teams')
            setTeams(data)
        })
    },[])
  return (
    <div>
         <h1 >Showing Team</h1>
         <div className='Container'>
         {teams.map((team, index)=>{
             return (
                <IndividualTeam team={team} key={index}/> 
             )
         })}
         </div>
    </div>
  )
}

export default Teams