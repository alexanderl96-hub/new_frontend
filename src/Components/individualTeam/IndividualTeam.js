import React from 'react'
import { Link} from 'react-router-dom'
import './IndividualTeam.css'

const IndividualTeam = ({team}) => {
  
  return (
    <div className="Individual">
       
      <Link to={`/teams/allmembers/${team.id}`} >
        <div className="teamContainer"  > 
             <img src={team.imag} alt={team.id} className="img"/> 
             <div>{team.name}</div> 
        </div>
        </Link>
    </div>
  )
}

export default IndividualTeam