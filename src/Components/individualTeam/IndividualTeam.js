import React from 'react'
import '../../App.css'

const IndividualTeam = ({team}) => {
    
  return (
    <div className="teamComponent">
        <div className="teamContainer"> 
             <img src={team.imag} alt={team.id} className="img"/> 
             <div>{team.name}</div> 
        </div>
       
    </div>
  )
}

export default IndividualTeam