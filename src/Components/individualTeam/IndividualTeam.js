import React from 'react'
import { Link} from 'react-router-dom'
import './IndividualTeam.css'

const IndividualTeam = ({team, checkUser}) => {
   console.log(checkUser, 'checkUser')
  
  return (
    <div className="Individual">
       
      <Link to={`/teams/allmembers/${team.id}`} checkUser={checkUser} >
        <div className="teamContainer"  > 
             <img src={team.imag} alt={team.id} className="img"/> 
             <div>{team.name}</div> 
        </div>
        </Link>
    </div>
  )
}

export default IndividualTeam