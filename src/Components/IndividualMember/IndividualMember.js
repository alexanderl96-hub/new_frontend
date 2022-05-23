import React,  { useState, useEffect }from 'react'
import { useParams, Link, useNavigate} from 'react-router-dom'
import { apiURL } from '../back-end/Back-End'
import './IndividualMember.css'
import axios from 'axios'
const API_DTBASE = apiURL();

const IndividualMember = ({ teamID }) => {
   const [member, setMember] = useState([])
//    const [teamId, setTeamID] = useState([])
   const [group, setGroup] =useState([])
  let params = useParams()
  let memberId = params.id
   console.log(teamID, 'teamID')
   console.log(memberId, 'memberId')
// const navigate = useNavigate();   
const handleDelete = () => {
    axios.delete(`${API_DTBASE}/groups/${memberId}`).then(() =>{
        //  navigate(`/homebase`)
    }, (error) => console.log(error))
};

    useEffect(() => {
        fetch(`http://localhost:9000/groups`)
        .then(res => res.json())
        .then(data =>{
            setMember(data)
            // setTeamID(data)
        })
  },[])
  useEffect(() => {
    fetch(`http://localhost:9000/groups/${memberId}`)
    .then(res => res.json())
    .then(data =>{
        setGroup(data.team.team_id )
    })
},[memberId])

  console.log(group, 'group-ookingid')


  return (
      <div style={{}} className='Main'>
          <div style={{ }}  className='Main2'>
              <div > <Link to={`/homeBase/${group}`} className='memberLink1'>Back</Link> </div>
              <div> 
                <Link to={`/homeBase/updateMember/${memberId}`} className='memberLink'>Update Member
                </Link>
                <div style={{}} className='delBTn'> 
                    <Link to={`/homeBase/${group}`} onClick={handleDelete} className="teamLinkDelete" >Delete</Link>
                </div>
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
                                    <div className= 'playerDataInfo'><span>Team: </span> {player?.current_team}</div>
                                    <div className= 'playerDataInfo'><span>Number:</span> {player?.number}</div>
                                    <div className= 'playerDataInfo'><span>Position:</span> {player?.position}</div>
                                    <div className= 'playerDataInfo'><span>Salary: </span> {player?.salary}</div> 
                                </div>
                            </div>
                            <div className ="teamPlayer_AboutGrid">
                                <div className="teamPlayer_About1">
                                    <div> <span>Age:</span> {player.age} years</div> 
                                    <div> <span>Born:</span> {player.born}</div> 
                                    <div> <span>City: </span>{player.city}</div> 
                                    <div> <span>State:</span> {player.state}</div>
                                    <div> <span>Country:</span> {player.country}</div> 
                                    <div> <span>Education:</span> {player.education}</div>
                                </div>
                                <div className="teamPlayer_About2">
                                    <div style={{paddingTop: '3%'}}> <span>Parents:</span> {player.parents}</div> 
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
                                <div className="teamPlayer_About5">
                                    <div> <span>About: </span>{player.about}</div> 
                                </div>
                                  <div className="teamPlayer_About4">
                                        <div style={{}} className="about4-1"> <span>Stats: </span>{player.stats}
                                             <div style={{}} className="about4-2">   
                                                    <div style={{}} className='about-inner'> Game Stats:
                                                        <div style={{}} className='about-inner1'>
                                                                <div style={{}} className='about-inner2'> Game</div>
                                                                <div> IP</div>
                                                                <div> H</div>
                                                                <div> ER</div>
                                                                <div> HR</div>
                                                                <div> BB</div>
                                                                <div> SO</div>
                                                                <div> Sv</div>
                                                                <div> ERA</div>
                                                        </div>
                                                    </div>
                                                    <div style={{}} className='about-inner'> Career Stats:
                                                        <div style={{}} className='about-inner1'>
                                                                <div>Year</div>
                                                                <div style={{}} className='about-innerTeam'>Team</div>
                                                                <div> GP</div>
                                                                <div> CG</div>
                                                                <div> ER</div>
                                                                <div> SO</div>
                                                                <div> W</div>
                                                                <div> L</div>
                                                                <div> Sv</div>
                                                                <div> WHIP</div>
                                                                <div> ERA</div>
                                                        </div>
                                                    </div>
                                                    <div style={{}} className='about-inner'> Career Stats:
                                                        <div style={{}} className='about-inner1'>
                                                                <div>Year</div>
                                                                <div style={{}} className='about-innerTeam'>Team</div>
                                                                <div> GP</div>
                                                                <div> CG</div>
                                                                <div> ER</div>
                                                                <div> SO</div>
                                                                <div> W</div>
                                                                <div> L</div>
                                                                <div> Sv</div>
                                                                <div> WHIP</div>
                                                                <div> ERA</div>
                                                        </div>
                                                    </div>
                                                    <div style={{}} className='about-inner'> Career Stats:
                                                        <div style={{}} className='about-inner1'>
                                                                <div>Year</div>
                                                                <div style={{}} className='about-innerTeam'>Team</div>
                                                                <div> GP</div>
                                                                <div> CG</div>
                                                                <div> ER</div>
                                                                <div> SO</div>
                                                                <div> W</div>
                                                                <div> L</div>
                                                                <div> Sv</div>
                                                                <div> WHIP</div>
                                                                <div> ERA</div>
                                                        </div>
                                                    </div>
                                                    <div style={{}} className='about-inner'> Career Stats:
                                                        <div style={{}} className='about-inner1'>
                                                                <div>Year</div>
                                                                <div style={{}} className='about-innerTeam'>Team</div>
                                                                <div> GP</div>
                                                                <div> CG</div>
                                                                <div> ER</div>
                                                                <div> SO</div>
                                                                <div> W</div>
                                                                <div> L</div>
                                                                <div> Sv</div>
                                                                <div> WHIP</div>
                                                                <div> ERA</div>
                                                        </div>
                                                    </div>
                                                    <div style={{}} className='about-inner'> Career Stats:
                                                        <div style={{}} className='about-inner1'>
                                                                <div>Year</div>
                                                                <div style={{}} className='about-innerTeam'>Team</div>
                                                                <div> GP</div>
                                                                <div> CG</div>
                                                                <div> ER</div>
                                                                <div> SO</div>
                                                                <div> W</div>
                                                                <div> L</div>
                                                                <div> Sv</div>
                                                                <div> WHIP</div>
                                                                <div> ERA</div>
                                                        </div>
                                                    </div>
                                                    <div style={{}} className='about-inner'> Career Stats:
                                                        <div style={{}} className='about-inner1'>
                                                                <div>Year</div>
                                                                <div style={{}} className='about-innerTeam'>Team</div>
                                                                <div> GP</div>
                                                                <div> CG</div>
                                                                <div> ER</div>
                                                                <div> SO</div>
                                                                <div> W</div>
                                                                <div> L</div>
                                                                <div> Sv</div>
                                                                <div> WHIP</div>
                                                                <div> ERA</div>
                                                        </div>
                                                    </div>
                                             </div> 
                                        </div>
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