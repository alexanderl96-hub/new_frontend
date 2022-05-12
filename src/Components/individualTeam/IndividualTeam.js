import React,  { useState, useEffect }from 'react'
import { Link} from 'react-router-dom'
import './IndividualTeam.css'

const IndividualTeam = ({team, id}) => {
  const [players, setPlayers] = useState([]);
  const [play, setPlay] = useState([]);

  let teamId = id;


  useEffect(() => {
    
      fetch(`http://localhost:9000/groups`)
      .then(res => res.json())
      .then(data =>{
        console(data, 'goup')
          setPlay(data)
      })
  
    
},[])
console.log(play ,'')

  useEffect(() => {
    if(teamId){
      fetch(`http://localhost:9000/groups/team`)
      .then(res => res.json())
      .then(data =>{
        // console(data, 'goup')
          setPlayers(data)
      })
    }
    
},[teamId])



  return (
    <div>
      <Link to={`/homeBase/groups/team/${teamId}`} value={teamId} >
        <div className="teamContainer"  > 
             <img src={team.imag} alt={team.id} className="img"/> 
             <div>{team.name}</div> 
        </div>
        </Link>
    </div>
  )
}

export default IndividualTeam