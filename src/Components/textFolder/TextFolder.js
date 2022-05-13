import React,  { useState, useEffect }from 'react'
import { useParams, Link} from 'react-router-dom'

import './textFolder.css'

const TextFolder = () => {
    const [group, setGroup] = useState([]);
    const [on , setON] = useState([true]);
    const [more , setMore] = useState(['more...']);
    const [players, setPlayers] = useState([]);
    let params = useParams()
    let teamId = params.id
    
    useEffect(() => {
        fetch(`http://localhost:9000/groups`)
        .then(res => res.json())
        .then(data =>{
            setPlayers(data)
        })
  },[])

  const handleSub = (e) => {
    e.preventDefault();
    if(on ) {
      setGroup(players);
      setMore('See more!!!');
      setON(false)
    }else{
      setGroup('')
      setMore('more...')
      setON(true)
    }
  };
  return (
    <div style={{ paddingBottom: '15px'}} >
        <h1>TemasPlayers</h1>
        <Link to="/homebase" className='teamLink'>⬅</Link>
        <div className="Container">
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