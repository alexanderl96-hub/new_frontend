import React, { useState, useEffect } from 'react'
import IndividualTeam from '../individualTeam/IndividualTeam'


const Teams = () => {
    const [teams, setTeams] = useState([])

    useEffect(() => {
        fetch("https://my-baseball-teams.herokuapp.com/teams")
        .then(res => res.json())
        .then(data =>{
            console.log(data.teamData.teams)
            setTeams(data.teamData.teams)
        })
    },[])
  return (
    <div>
         <h1 >Showing Team</h1>
         {teams.map((team, index)=>{
             return (
                <IndividualTeam team={team} key={index}/> 
             )
         })}
    </div>
  )
}

export default Teams