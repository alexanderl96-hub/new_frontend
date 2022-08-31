import React,  { useState, useEffect }from 'react'
import { useParams, Link} from 'react-router-dom'
import './IndividualMember.css'
import axios from 'axios'


const IndividualMember = () => {
   const [member, setMember] = useState([])
   const [teamId, setTeamID] = useState([])
   const [teamCareerId, setTeamCareerID] = useState([])
   const [pitcherId, setPitcherID] = useState([])
   const [pitcherCareerId, setPitcherCareerID] = useState([])
//    const [coachId, setCoachID] = useState([])
   const [group, setGroup] =useState([])
  

  let params = useParams()
  let memberId = params.id
  

// const navigate = useNavigate();   
const handleDelete = () => {
    axios.delete(`https://my-baseball-teams.herokuapp.com/groups/${memberId}`).then(() =>{
        //  navigate(`/homebase`)
    }, (error) => console.log(error))
};

    useEffect(() => {
        fetch(`https://my-baseball-teams.herokuapp.com/groups`)
        .then(res => res.json())
        .then(data =>{
            setMember(data)
        })
  },[])

  useEffect(() => {
    fetch(`https://my-baseball-teams.herokuapp.com/playersStats`)
    .then(res => res.json())
    .then(data =>{
        setTeamID(data)
    })
},[])
useEffect(() => {
    fetch(`https://my-baseball-teams.herokuapp.com/playersCareer`)
    .then(res => res.json())
    .then(data =>{
        setTeamCareerID(data)
    })
},[])

useEffect(() => {
    fetch(`https://my-baseball-teams.herokuapp.com/pitchersStats`)
    .then(res => res.json())
    .then(data =>{
        setPitcherID(data)
    })
},[])
useEffect(() => {
    fetch(`https://my-baseball-teams.herokuapp.com/pitchersCarrer`)
    .then(res => res.json())
    .then(data =>{
        setPitcherCareerID(data)
    })
},[])

  useEffect(() => {
    fetch(`https://my-baseball-teams.herokuapp.com/groups/${memberId}`)
    .then(res => res.json())
    .then(data =>{
        setGroup(data.team.team_id )
    })
},[memberId])


  return (
      <div  className='Main'>
          <div  className='Main2'>
              <div > <Link to={`/teams/newpage/${group}`} className='memberLink1'>Back</Link> </div>
              <div> 
                <Link to={`/teams/updateMember/${memberId}`} className='memberLink'>Update Member
                </Link>
                <Link to={`/teams/groups/${memberId}/addStats`} className='memberLink2'>Add Stats</Link>
                <div className='delBTn'> 
                    <Link to={`/teams/${group}`} onClick={handleDelete} className="teamLinkDelete" >Delete</Link>
                </div>
                {/* give the css to add Stats buttonLink */}
                {/* <Link to={`/teams/groups/${memberId}/addStats`} className='memberLink2'>Add Stats</Link> */}
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
                                    <div key={index} className="member_Name">{player?.name ? player.name : '-'}</div>
                                </div>
                                <div className="member_Info">
                                    <hr/>
                                    <div className= 'playerDataInfo'><span>Team: </span> {player?.current_team ? player.current_team : '-'}</div>
                                    <div className= 'playerDataInfo'><span>Number:</span> {player?.number ? player.number : '-' }</div>
                                    <div className= 'playerDataInfo'><span>Position:</span> {player?.position ? player.position : '-'}</div>
                                    <div className= 'playerDataInfo'><span>Salary: </span> {player?.salary ? player.salary : '-'}</div> 
                                </div>
                            </div>
                            <div className ="teamPlayer_AboutGrid">
                                <div className="teamPlayer_About1">
                                    <div> <span>Age:</span> {player.age ? player.age : '-'} years</div> 
                                    <div> <span>Born:</span> {player.born ? player.born : '-'}</div> 
                                    <div> <span>City: </span>{player.city ? player.city : '-'}</div> 
                                    <div> <span>State:</span> {player.state ? player.state : '-'}</div>
                                    <div> <span>Country:</span> {player.country ? player.country : '-'}</div> 
                                    <div> <span>Education:</span> {player.education ? player.education : '-'}</div>
                                </div>
                                <div className="teamPlayer_About2">
                                    <div style={{paddingTop: '3%'}}> <span>Parents:</span> {player.parents ? player.parents : '-'}</div> 
                                    <div> <span>Spouse: </span>{player.spouse ? player.spouse : '-'}</div> 
                                    <div> <span>Children:</span> {player.children ? player.children : '-'}</div>
                                    <div> <span>Siblings:</span> {player.siblings ? player.siblings : '-'}</div>
                                </div>
                                <div className="teamPlayer_About3">
                                    <div> <span>Nickname:</span> {player.nickname ? player.nickname : '-'}</div>
                                    <div> <span>Bats:</span> {player.bats ? player.bats : '-'}</div>
                                    <div> <span>Throws:</span> {player.throws ? player.throws : '-'}</div>
                                    <div> <span>Height:</span> {player.height ? player.height : '-'}</div>
                                    <div> <span>Weight: </span>{player.weight ? player.weight : '-'}</div>
                                </div>
                                <div className="teamPlayer_About5">
                                    <div> <span>About: </span>{player.about ? player.about : '-'}</div> 
                                </div>
                                  <div className="teamPlayer_About4">
                                        <div style={{}} className="about4-1"> <span>Stats: </span>{player.stats ? player.stats : '-'}
                                             <div style={{}} className="about4-2">  
                                             { teamId ? 
                                                    <div style={{backgroundColor: 'white', borderRadius: '5px'}} className='about-inner'> Game Stats:
                                                    {teamId.map((stat, index)=>{
                                                        return(
                                                            <div>
                                                                {Number(memberId) === stat.players_id ?  
                                                                    <div style={{backgroundColor: 'white', borderRadius: '5px'}} className='about-inner1'>
                                                                        <div style={{marginBottom: '5px'}} className='about-inner2'> GAME
                                                                        <div style={{marginTop: '5px'}}>{stat.game_date} {stat.game}</div>
                                                                        </div>
                                                                        <div > AB
                                                                            <div style={{textAlign: 'center'}}>{stat.ab >= 0 ? stat.ab : '-'}</div>
                                                                        </div>
                                                                        <div> R
                                                                            <div style={{textAlign: 'center'}}>{stat.r >= 0 ? stat.r : '-'}</div>
                                                                        </div>
                                                                        <div> H
                                                                            <div style={{textAlign: 'center'}}>{stat.h >= 0 ? stat.h : '-'}</div>
                                                                        </div>
                                                                        <div> RBI
                                                                            <div style={{textAlign: 'center'}}>{stat.rb >= 0 ? stat.rb : '-'}</div>
                                                                        </div>
                                                                        <div> BB
                                                                             <div style={{textAlign: 'center'}}>{stat.bb >= 0 ? stat.bb : '-'}</div>
                                                                        </div>
                                                                        <div> SO
                                                                             <div style={{textAlign: 'center'}}>{stat.so  >= 0 ? stat.so : '-'}</div>
                                                                        </div>
                                                                        <div> HR
                                                                             <div style={{textAlign: 'center'}}>{stat.hr >= 0 ? stat.hr : '-'}</div>
                                                                        </div>
                                                                        <div> SB
                                                                             <div style={{textAlign: 'center'}}>{stat.sb  >= 0 ? stat.sb : '-'}</div>
                                                                        </div>
                                                                        <div> AVG
                                                                             <div style={{textAlign: 'center'}}>{stat.average  >= 0 ? stat.average : '-'}</div>
                                                                        </div>
                                                                    </div>
                                                            : null}
                                                        </div>
                                                        )
                                                    })}  
                                                    </div> : null }
                                                    { teamCareerId ? 
                                                    <div style={{backgroundColor: 'white', borderRadius: '5px'}} className='about-inner'> Career Stats:
                                                     {teamCareerId.map((career, index)=>{
                                                         return(
                                                             <div>
                                                                 {Number(memberId) === career.players_id ? 
                                                                  <div style={{}} className='about-inner1'>
                                                                  <div style={{marginTop: '5px'}}>Year
                                                                     <div>{career.game_year}</div> 
                                                                  </div>
                                                                  <div style={{marginTop: '5px'}} className='about-innerTeam'>Team
                                                                     <div>{career.team}</div> 
                                                                  </div>
                                                                  <div> GP
                                                                     <div>{career.career_gp}</div> 
                                                                  </div>
                                                                  <div> AB
                                                                     <div>{career.career_ab}</div> 
                                                                  </div>
                                                                  <div> R
                                                                     <div>{career.career_r}</div> 
                                                                  </div>
                                                                  <div> H
                                                                     <div>{career.career_h}</div> 
                                                                  </div>
                                                                  <div> RBI
                                                                     <div>{career.career_rbi}</div> 
                                                                  </div>
                                                                  <div> BB
                                                                     <div>{career.career_bb}</div> 
                                                                  </div>
                                                                  <div> SO
                                                                     <div>{career.career_so}</div> 
                                                                  </div>
                                                                  <div> HR
                                                                     <div>{career.career_hr}</div> 
                                                                  </div>
                                                                  <div> AVG
                                                                     <div>{career.career_average}</div> 
                                                                  </div>
                                                          </div> : null}
                                                             </div>
                                                         )
                                                     })}
                                                       
                                                    </div> : null  }
                                                    {pitcherId ?
                                                    <div style={{backgroundColor: 'white', borderRadius: '5px'}} className='about-inner'> Pitcher Stats:
                                                    {pitcherId.map((pitcher, index)=>{
                                                        return(
                                                            <div>
                                                                {Number(memberId) === pitcher.players_id ? 
                                                                // <div style={{}} className='about-inner'> Pitcher Stats:
                                                                <div style={{}} className='about-inner1'>
                                                                <div style={{marginBottom: '10px'}} className='about-inner2'> GAME
                                                                  <div style={{marginTop: '10px'}}>  {pitcher.game_date} {pitcher.game}</div>
                                                                </div>
                                                                <div> IP
                                                                    <div style={{textAlign: 'center'}}>{pitcher.ip >= 0 ? pitcher.ip : '-'}</div>
                                                                </div>
                                                                <div> H
                                                                    <div style={{textAlign: 'center'}}>{pitcher.h >= 0 ? pitcher.h : '-'}</div>
                                                                </div>
                                                                <div> R
                                                                    <div style={{textAlign: 'center'}}>{pitcher.r >= 0 ? pitcher.r : '-'}</div>
                                                                </div>
                                                                <div> ER
                                                                    <div style={{textAlign: 'center'}}>{pitcher.er >= 0 ? pitcher.er : '-'}</div>
                                                                </div>
                                                                <div> HR
                                                                    <div style={{textAlign: 'center'}}>{pitcher.hr >= 0 ? pitcher.hr : '-'}</div>
                                                                </div>
                                                                <div> BB
                                                                    <div style={{textAlign: 'center'}}>{pitcher.bb >= 0 ? pitcher.bb : '-'}</div>
                                                                </div>
                                                                <div> SO
                                                                    <div style={{textAlign: 'center'}}>{pitcher.so >= 0 ? pitcher.so : '-'}</div>
                                                                </div>
                                                                <div> SV
                                                                    <div style={{textAlign: 'center'}}>{pitcher.sv >= 0 ? pitcher.sv : '-'}</div>
                                                                </div>
                                                                <div> ERA
                                                                    <div style={{textAlign: 'center'}}>{pitcher.era >= 0 ? pitcher.era : '-'}</div>
                                                                </div>
                                                        </div>
                                                        : null}
                                                            </div>
                                                        )
                                                    })}
                                                        
                                                    </div> : null}
                                                    {pitcherCareerId ? 
                                                    <div style={{backgroundColor: 'white', borderRadius: '5px'}} className='about-inner'> Career Pitcher Stats:
                                                    {pitcherCareerId.map((careerP, index)=>{
                                                        return(
                                                            <div>
                                                                {Number(memberId) === careerP.pitcher_id ? 
                                                                 <div style={{}} className='about-inner1'>
                                                                 <div style={{marginTop: '7px'}}>Year
                                                                      <div>{careerP.game_year}</div>
                                                                 </div>
                                                                 <div style={{marginTop: '7px'}} className='about-innerTeam'>Team
                                                                      <div>{careerP.team}</div>
                                                                 </div>
                                                                 <div> GP
                                                                      <div style={{textAlign: 'center'}}>{careerP.career_gp >= 0 ? careerP.career_gp : '-'}</div>
                                                                 </div>
                                                                 <div> CG
                                                                      <div style={{textAlign: 'center'}}>{careerP.career_cg >= 0 ? careerP.career_cg : '-'}</div>
                                                                 </div>
                                                                 <div> ER
                                                                      <div style={{textAlign: 'center'}}>{careerP.career_er >= 0 ? careerP.career_er : '-'}</div>
                                                                 </div>
                                                                 <div> SO
                                                                      <div style={{textAlign: 'center'}}>{careerP.career_so >= 0 ? careerP.career_so : '-'}</div>
                                                                 </div>
                                                                 <div> W
                                                                      <div style={{textAlign: 'center'}}>{careerP.career_w >= 0 ? careerP.career_w : '-'}</div>
                                                                 </div>
                                                                 <div> L
                                                                      <div style={{textAlign: 'center'}}>{careerP.career_l >= 0 ? careerP.career_l : '-'}</div>
                                                                 </div>
                                                                 <div> Sv
                                                                      <div style={{textAlign: 'center'}}>{careerP.career_sv >= 0 ? careerP.career_sv : '-'}</div>
                                                                 </div>
                                                                 <div> WHIP
                                                                      <div style={{textAlign: 'center'}}>{careerP.career_whip >= 0 ? careerP.career_whip : '-'}</div>
                                                                 </div>
                                                                 <div> ERA
                                                                      <div style={{textAlign: 'center'}}>{careerP.career_era >= 0 ? careerP.career_era : '-'}</div>
                                                                 </div>
                                                         </div>: null}
                                                            </div>
                                                        )
                                                    }) }
                                                       
                                                    </div>
                                                    : null}
                                                    {/* {coachId ? <div>{
                                                        coachId.map((coach, index)=>{
                                                            return(
                                                                <div style={{}} className='about-inner'> Coach Career Stats:
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

                                                            )
                                                        })
                                                    }</div> : null} */}
                                                   
                                                   
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