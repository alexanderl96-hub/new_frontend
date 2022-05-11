import React,  { useState, useEffect} from 'react'
import { Link} from 'react-router-dom'
import './TeamsPlayers.css'

const TemasPlayers = () => {
  const [gruopPlayers, setGruopPlayers] = useState([]);

  // let  params = useParams();
  // let teamId = params.id

  // useEffect(()=>{
  //   fetch(`http://localhost:9000/teams/${teamId}`)
  //   .then(res => res.json())
  //   .then(data =>{
  //     console.log(data.individual.group , 'temasPlayers');
  //     setGruopPlayers(data.individual.group)
  //   })
  // },[teamId])

  useEffect(()=>{
    fetch(`http://localhost:9000/groups`)
    .then(res => res.json())
    .then(data =>{
      console.log(data, 'temasPlayers');
      setGruopPlayers(data)
    })
  },[])




  return (
    <div style={{ paddingBottom: '10px'}}>
      <h3>TemasPlayers</h3>
      <Link to="/homebase" className='teamLink'>⬅</Link>
      <div>
       {gruopPlayers.map((player, index) =>{
         return(
           <div className="teamsPlayers">
             <div>
                <img src={player?.imag} alt={player?.id} className="players_Img"/> 
                <div key={index} className="players_Name">{player?.name}</div>
                <div className="players_Info">
                  <hr/>
                  <div className= 'playerDataInfo'><span>Team: </span> {player?.currentteam}</div>
                  <div className= 'playerDataInfo'><span>Number:</span> {player?.number}</div>
                  <div className= 'playerDataInfo'><span>Position:</span> {player?.position}</div>
                  <div className= 'playerDataInfo'><span>Salary: </span>{player?.salary}</div>
                  <p className= 'playerDataInfo'>more...</p>
                </div>
             </div>
           </div>
           
         )
       })}
      </div>
     
    </div>
  )
}

export default TemasPlayers