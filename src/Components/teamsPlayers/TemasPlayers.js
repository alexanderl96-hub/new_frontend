import React,  { useState, useEffect} from 'react'
import { Link} from 'react-router-dom'
import './TeamsPlayers.css'

const TemasPlayers = () => {
  const [gruopPlayers, setGruopPlayers] = useState([]);
  const [group, setGroup] = useState([]);
  const [on , setON] = useState([true]);
  const [on1 , setON1] = useState([true]);
  const [more , setMore] = useState([]);

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
  // useEffect(()=>{
  //   fetch(`http://localhost:9000/groups`)
  //   .then(res => res.json())
  //   .then(data =>{
  //     console.log(data, 'temasPlayers');
  //     setGruopPlayers(data)
  //   })
  // },[])
 
  useEffect(()=>{
    fetch(`http://localhost:9000/groups`)
    .then(res => res.json())
    .then(data =>{
      console.log(data, 'temasPlayers');
      setGruopPlayers(data)
    })
  },[])
console.log(group , 'group members')

  const handleSub = (e) => {
    e.preventDefault();
    if(on ) {
      setGroup(gruopPlayers);
      setMore('');
      setON(false)
    }else{
      setGroup('')
      setMore("more...")
      setON(true)
    }
  };



  return (
    <div style={{ paddingBottom: '15px', paddingTop: '10px'}} >
      <h3>TemasPlayers</h3>
      <Link to="/homebase" className='teamLink'>⬅</Link>
      <div >
       {gruopPlayers.map((player, index) =>{
         return(
          <div className="teamPlayer_Container">
           <div className="teamsPlayers" value={on}  onClick={ handleSub}  >
             <div >
                <img src={player?.imag} alt={player?.id} className="players_Img"/> 
                <div key={index} className="players_Name">{player?.name}</div>
                <div className="players_Info">
                  <hr/>
                  <div className= 'playerDataInfo'><span>Team: </span> {player?.currentteam}</div>
                  <div className= 'playerDataInfo'><span>Number:</span> {player?.number}</div>
                  <div className= 'playerDataInfo'><span>Position:</span> {player?.position}</div>
                  <div className= 'playerDataInfo'><span>Salary: </span>{player?.salary}</div>
                  <p className= 'playerDataInfo'   >{more}</p>
                </div>
             </div>
           </div>
           <div>
           {group === '' ? null : group.map((player)=>{
             return (
               <div className="teamPlayer_Group">
                 <div className="teamPlayer_About">
                    <div><span>About:</span> {player.about}</div> 
                 </div>
                  
                  <div className="teamPlayer_About">
                    <div> <span>Age:</span> {player.age}</div> 
                    <div> <span>Born:</span> {player.born}</div> 
                    <div> <span>City: </span>{player.city}</div> 
                    <div> <span>State:</span> {player.state}</div>
                    <div> <span>Country:</span> {player.country}</div> 
                    <div> <span>Education:</span> {player.education}</div>
                  </div>
                  <div className="teamPlayer_About">
                    <div> <span>Parents:</span> {player.parents}</div> 
                    <div> <span>Spouse: </span>{player.spouse}</div> 
                    <div> <span>Children:</span> {player.children}</div>
                    <div> <span>Siblings:</span> {player.siblings}</div>
                  </div>
                  <div className="teamPlayer_About">
                    <div> <span>Nickname:</span> {player.nickname}</div>
                    <div> <span>Bats:</span> {player.bats}</div>
                    <div> <span>Throws:</span> {player.throws}</div>
                    <div> <span>Height:</span> {player.height}</div>
                    <div> <span>Weight: </span>{player.weight}</div>
                  </div>
                  <div className="teamPlayer_About">
                    <div> <span>Stats: </span>{player.stats}</div>
                  </div>
               </div>
             )
           }) }
           </div>
           </div>
         )
       })}
      </div>
      
     
    </div>
  )
}

export default TemasPlayers