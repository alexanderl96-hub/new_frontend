import React,  { useState, useEffect} from 'react'
import { useParams, Link} from 'react-router-dom'

const TemasPlayers = () => {
  const [gruopPlayers, setGruopPlayers] = useState([]);

  let  params = useParams();
  let teamId = params.id

  useEffect(()=>{
    fetch(`https://my-baseball-teams.herokuapp.com/teams/${teamId}`)
    .then(res => res.json())
    .then(data =>{
      console.log(data.individual.group);
      setGruopPlayers(data.individual.group)
    })
  },[teamId])




  return (
    <div>TemasPlayers
      <div>
       {gruopPlayers.map((player, index) =>{
         return(
            <div index={index}>{player.name}</div>
         )
       })}
      </div>
    </div>
  )
}

export default TemasPlayers