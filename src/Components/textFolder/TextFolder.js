import React,  { useState, useEffect }from 'react'
import { useParams, Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import './textFolder.css'


const TextFolder = () => {
    const [on , setON] = useState([true]);
    const [more , setMore] = useState(['more...']);
    const [players, setPlayers] = useState([]);
    let params = useParams()
    let teamId = params.id

    const navigate = useNavigate();
    
    useEffect(() => {
        fetch(`https://my-baseball-teams.herokuapp.com/groups`)
        .then(res => res.json())
        .then(data =>{
            setPlayers(data)
        })
  },[])
  const handleDelete = () => {
    axios.delete(`https://my-baseball-teams.herokuapp.com/teams/${teamId}`).then(() =>{
        navigate(`/teams`)
    }, (error) => console.log(error))
};

  const handleSub = (e) => {
    e.preventDefault();
    if(on ) {
      setMore('See more!!!');
      setON(false)
    }else{
      setMore('more...')
      setON(true)
    }
  };

  console.log(players)
  return (
    <div style={{}}  className="nav-TeamHead"> 
            <h1 className="nav-TeamPlayers">Teams Players</h1>
        <div style={{}} className="nav-TeamPlayers2">
          <div> <Link to="/teams" className='teamLink'>⬅</Link></div>      
           <Link to={`/teams/updateteam/${teamId}`} className='teamLinkDelete' style={{}}>Update Team</Link>
           <Link to={`/teams`} onClick={handleDelete} className="teamLinkDelete-1" >Delete</Link>
           {/* <Link to={`/homeBase/newMember/${teamId}`} id={teamId} className="teamLinkDelete" >Add Member</Link> */}
        </div>
     
        <div className="teamPlayersContainer">
        {players.map((member, index)=>{
            return (
                 <div >
                    {teamId === member.team_id ? 
                        <div className="teamPlayer_Container" >
                            <div className="teamPlayer_Wrapper" value={on}  onClick={ handleSub} >
                                <div>
                                      <img src={member?.imag} alt={member?.id} className="players_Img"/> 
                                      <div key={index} className="players_Name">{member?.name}</div>
                                   <div className="players_Info">
                                        <hr/>
                                        <div className= 'playerDataInfo'><span>Team: </span> {member?.current_team}</div>
                                        <div className= 'playerDataInfo'><span>Number:</span> {member?.number}</div>
                                        <div className= 'playerDataInfo'><span>Position:</span> {member?.position}</div>
                                        <div className= 'playerDataInfo'><span>Salary: </span> {member?.salary}</div>
                                        <Link to={`/teams/groups/${member.id}` } teamID={teamId}>
                                              <p   className= ' More' teamID={teamId} >{more}</p>
                                        </Link>
                                   </div>
                                </div>
                            </div>
                        </div>
                    : null }   
                 </div>
            )
        })}
          </div>
    </div>
  )
}

export default TextFolder