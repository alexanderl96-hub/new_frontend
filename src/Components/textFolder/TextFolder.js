import React,  { useState, useEffect }from 'react'
import { useParams, Link, useNavigate} from 'react-router-dom'
import { apiURL } from '../back-end/Back-End'
import axios from 'axios'
import './textFolder.css'
const API_DTBASE = apiURL();

const TextFolder = () => {
    const [on , setON] = useState([true]);
    const [more , setMore] = useState(['more...']);
    const [players, setPlayers] = useState([]);
    let params = useParams()
    let teamId = params.id

    const navigate = useNavigate();
    
    useEffect(() => {
        fetch(`http://localhost:9000/groups`)
        .then(res => res.json())
        .then(data =>{
            setPlayers(data)
        })
  },[])
  const handleDelete = () => {
    axios.delete(`${API_DTBASE}/teams/${teamId}`).then(() =>{
        navigate(`/homebase`)
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
  return (
    <div style={{ paddingTop: '15px'}} >
            <h1 className="nav-TeamPlayers">Teams Players</h1>
        <div style={{paddingBottom: '10px'}}>
          <div> <Link to="/homebase" className='teamLink'>⬅</Link></div>      
           <Link to={`/homeBase/updateteam/${teamId}`} className='teamLinkDelete' style={{marginLeft: '75%'}}>Update Team</Link>
           <Link to={`/homebase`} onClick={handleDelete} className="teamLinkDelete" >Delete</Link>
           <Link to={`/homebase/newMember/${teamId}`} id={teamId} className="teamLinkDelete" >Add Member</Link>
        </div>
     
        <div className="teamPlayersContainer">
        {players.map((member, index)=>{
            return (
                 <div >
                    {Number(teamId) === member.team_id ? 
                        <div className="teamPlayer_Container">
                            <div className="teamPlayer_Wrapper" value={on}  onClick={ handleSub} >
                                <div>
                                      <img src={member?.imag} alt={member?.id} className="players_Img"/> 
                                      <div key={index} className="players_Name">{member?.name}</div>
                                   <div className="players_Info">
                                        <hr/>
                                        <div className= 'playerDataInfo'><span>Team: </span> {member?.currentteam}</div>
                                        <div className= 'playerDataInfo'><span>Number:</span> {member?.number}</div>
                                        <div className= 'playerDataInfo'><span>Position:</span> {member?.position}</div>
                                        <div className= 'playerDataInfo'><span>Salary: </span> {member?.salary}</div>
                                        <Link to={`/homebase/groups/${member.id}` } >
                                              <p   className= ' More' >{more}</p>
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