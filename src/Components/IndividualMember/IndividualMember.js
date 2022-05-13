import React,  { useState, useEffect }from 'react'
import { useParams, Link} from 'react-router-dom'
import './IndividualMember.css'

const IndividualMember = () => {
   const [member, setMember] = useState([])
   const [teamId, setTeamID] = useState([])
  let params = useParams()
  let memberId = params.id
  console.log(memberId)

    useEffect(() => {
        fetch(`http://localhost:9000/groups`)
        .then(res => res.json())
        .then(data =>{
            setMember(data)
            setTeamID(data)
        })
  },[])

  return (
      <div style={{backgroundColor: '#0000ff6d', padding: '10px'}}>
          <div style={{ display: 'flex', padding: '10px' }}>
              <div>
                    {teamId.map((teams, index) =>{
                        return (
                            <div style={{paddingTop: ''}}>
                                {teams.team_id === teams.id ? 
                                <Link to={`/homeBase/${teams.id}`} className='memberLink1'>Back</Link> 
                                : null}
                            </div>  
                        )
                    })}
              </div>
              <div> 
                <Link to={`/homeBase/team`} className='memberLink'>Update Member
                </Link>
              </div>
          </div>
           
          {member.map((player, index) =>{
              return (
                   <div className="IndividualContainer">
                       {Number(memberId) === player.id ? 
                       <div >
                           
                            <div className='Wrapper'>
                                
                               <div>
                                    <img src={player?.imag} alt={player?.id} className="member_Img"/> 
                                    <div key={index} className="member_Name">{player?.name}</div>
                                </div>
                                <div className="member_Info">
                                    <hr/>
                                    <div className= 'playerDataInfo'><span>Team: </span> {player?.currentteam}</div>
                                    <div className= 'playerDataInfo'><span>Number:</span> {player?.number}</div>
                                    <div className= 'playerDataInfo'><span>Position:</span> {player?.position}</div>
                                    <div className= 'playerDataInfo'><span>Salary: </span> {player?.salary}</div> 
                                </div>
                            </div>
                            <div className ="teamPlayer_AboutGrid">
                                <div className="teamPlayer_About1">
                                    <div> <span>Age:</span> {player.age}</div> 
                                    <div> <span>Born:</span> {player.born}</div> 
                                    <div> <span>City: </span>{player.city}</div> 
                                    <div> <span>State:</span> {player.state}</div>
                                    <div> <span>Country:</span> {player.country}</div> 
                                    <div> <span>Education:</span> {player.education}</div>
                                </div>
                                <div className="teamPlayer_About2">
                                    <div> <span>Parents:</span> {player.parents}</div> 
                                    <div> <span>Spouse: </span>{player.spouse}</div> 
                                    <div> <span>Children:</span> {player.children}</div>
                                    <div> <span>Siblings:</span> {player.siblings}</div>
                                </div>
                                <div className="teamPlayer_About3">
                                    <div> <span>Nickname:</span> {player.nickname}</div>
                                    <div> <span>Bats:</span> {player.bats}</div>
                                    <div> <span>Throws:</span> {player.throws}</div>
                                    <div> <span>Height:</span> {player.height}</div>
                                    <div> <span>Weight: </span>{player.weight}</div>
                                </div>
                                  <div className="teamPlayer_About4">
                                        <div> <span>Stats: </span>{player.stats}</div>
                                    </div>

                            </div>
                          
                       </div>
                       : null}
                  </div>
              )  
          })}
          
                      
      </div>
   
  )
}

export default IndividualMember