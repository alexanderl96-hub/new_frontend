import React,  { useState, useEffect }from 'react'
import { useParams, Link} from 'react-router-dom'
import './IndividualMember.css'
import axios from 'axios'
import Navbar from '../navBar/Navbar'


const IndividualMember = () => {
   const [member, setMember] = useState([])
   const [memberImg, setMemberImg] = useState([])
   const [memberImg2, setMemberImg2] = useState([])
   const [memberTeam, setMemberTeam] = useState([])
   const [memberAge, setMemberAge] = useState([])
   const [memberName, setMemberName] = useState([])
   const [memberNumber, setMemberNumber] = useState([])
   const [memberPosition, setMemberPosition] = useState([])
   const [teamId, setTeamID] = useState([])
   const [teamCareerId, setTeamCareerID] = useState([])
   const [pitcherId, setPitcherID] = useState([])
   const [pitcherCareerId, setPitcherCareerID] = useState([])
//    const [coachId, setCoachID] = useState([])
   const [group, setGroup] =useState([])
  

  let params = useParams()
  let memberId = params.id
  

// const navigate = useNavigate();   
// const handleDelete = () => {
//     axios.delete(`https://my-baseball-teams.herokuapp.com/groups/${memberId}`).then(() =>{
//         //  navigate(`/homebase`)
//     }, (error) => console.log(error))
// };
const handleDelete = () => {
    axios.delete(`https://my-baseball-teams.herokuapp.com/groups/${memberId}`).then(() =>{
        //  navigate(`/homebase`)
    }, (error) => console.log(error))
    axios.delete(`https://my-baseball-teams.herokuapp.com/playersStats/${memberId}`).then(() =>{
        //  navigate(`/homebase`)
    }, (error) => console.log(error))
    axios.delete(`https://my-baseball-teams.herokuapp.com/playersCareer/${memberId}`).then(() =>{
        //  navigate(`/homebase`)
    }, (error) => console.log(error))
    axios.delete(`https://my-baseball-teams.herokuapp.com/pitchersStats/${memberId}`).then(() =>{
        //  navigate(`/homebase`)
    }, (error) => console.log(error))
    axios.delete(`https://my-baseball-teams.herokuapp.com/pitchersCarrer/${memberId}`).then(() =>{
        //  navigate(`/homebase`)
    }, (error) => console.log(error))
};
// const handleDeleteStats = () => {
//     axios.delete(`http://localhost:9000/playersStats/${memberId}`).then(() =>{
//         //  navigate(`/homebase`)
//     }, (error) => console.log(error))
// };

//     useEffect(() => {
//         fetch(`https://my-baseball-teams.herokuapp.com/groups`)
//         .then(res => res.json())
//         .then(data =>{
//             setMember(data)
//         })
//   },[])

  useEffect(() => {
    fetch(`http://localhost:9000/groups`)
    .then(res => res.json())
    .then(data =>{
        setMember(data)
    })
},[])
//   useEffect(() => {
//     fetch(`https://my-baseball-teams.herokuapp.com/playersStats`)
//     .then(res => res.json())
//     .then(data =>{
//         setTeamID(data)
//     })
// },[])
useEffect(() => {
    fetch(`http://localhost:9000/playersStats`)
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
// useEffect(() => {
//     fetch(`http://localhost:9000/playersCareer`)
//     .then(res => res.json())
//     .then(data =>{
//         setTeamCareerID(data)
//     })
// },[])

useEffect(() => {
    fetch(`https://my-baseball-teams.herokuapp.com/pitchersStats`)
    .then(res => res.json())
    .then(data =>{
        setPitcherID(data)
    })
},[])
// useEffect(() => {
//     fetch(`http://localhost:9000/pitchersStats`)
//     .then(res => res.json())
//     .then(data =>{
//         setPitcherID(data)
//     })
// },[])


useEffect(() => {
    fetch(`https://my-baseball-teams.herokuapp.com/pitchersCarrer`)
    .then(res => res.json())
    .then(data =>{
        setPitcherCareerID(data)
    })
},[])
// useEffect(() => {
//     fetch(`http://localhost:9000/pitchersCarrer`)
//     .then(res => res.json())
//     .then(data =>{
//         setPitcherCareerID(data)
//     })
// },[])

//   useEffect(() => {
//     fetch(`https://my-baseball-teams.herokuapp.com/groups/${memberId}`)
//     .then(res => res.json())
//     .then(data =>{
//         setGroup(data.team.team_id )
//         setMemberImg(data.team.imag)
//         setMemberImg2(data.team.imag2)
//         setMemberTeam(data.team.current_team)
//         setMemberAge(data.team.age)
//         setMemberPosition(data.team.position)
//         setMemberName(data.team.name)
//         setMemberNumber(data.team.number)
//     })
// },[memberId])
// var sectionStyle = {  backgroundImage: url('https://images2.minutemediacdn.com/image/fetch/w_1046,h_485,c_fill,g_auto,f_auto/https%3A%2F%2Fnolanwritin.com%2Fwp-content%2Fuploads%2Fimagn-images%2F2017%2F07%2F17949891-850x560.jpeg')
// };
useEffect(() => {
    fetch(`http://localhost:9000/groups/${memberId}`)
    .then(res => res.json())
    .then(data =>{
        setGroup(data.team.team_id )
setMemberImg(data.team.imag)
setMemberTeam(data.team.current_team)
setMemberAge(data.team.age)
setMemberPosition(data.team.position)
setMemberName(data.team.name)
setMemberNumber(data.team.number)
    })
  },[memberId])

 console.log(teamId, group)
  return (
      <div  className='Main'>
            <Navbar />
          <div  className='Main2'>
          
              {/* <div > <Link to={`/teams/newpage/${group}`} className='memberLink1'>Back</Link> </div>
              <div className='add-Update'> 
                <Link to={`/teams/updateMember/${memberId}`} className='memberLink'>Update Member
                </Link>
                <Link to={`/teams/groups/${memberId}/addStats`} className='memberLink2'>Add Stats</Link> */}
                {/* <div className='delBTn'> 
                    <Link to={`/teams/newpage/${group}`} onClick={handleDelete}  className="teamLinkDelete" >Delete</Link>
                </div> */}
                {/* give the css to add Stats buttonLink */}
                {/* <Link to={`/teams/groups/${memberId}/addStats`} className='memberLink2'>Add Stats</Link> */}
              {/* </div> */}
              
          </div>  
           {/* <Link to={`/teams/updateMember/${memberId}`} className='memberLink'>Update Member
                </Link> */}

          <div style={{backgroundImage: `url(${memberImg2})`}} className='divTop'>
               <div className='divTop-inner'>Member

               </div>
               <img src={memberImg} alt='1'  />
               <h2>{memberName} {memberNumber ? `# ${memberNumber}`: ''}</h2>
               <h3>{memberTeam} | {memberPosition} | Age: {memberAge}</h3>
               
          </div>
          <div className='divMedium'>
          {member.map((player, index) =>{
              return (   
                  <div>
                       {Number(memberId) === player.id ?
                        <div className="IndividualContin"> 
                            <div className='IndividualWrapper'>
                                    <div className="team_About1">
                                        <div className='class1'> <span>Born:</span> <p>{player.born ? player.born : '-'}</p></div> 
                                        <div  className='class2'> <span>City: </span> <p>{player.city ? player.city : '-'}</p></div> 
                                        <div  className='class3'> <span>State:</span><p>{player.state ? player.state : '-'}</p> </div>
                                        <div  className='class4'> <span>Country:</span> <p>{player.country ? player.country : '-'}</p></div> 
                                        <div  className='class5'> <span>Education:</span> <p>{player.education ? player.education : '-'}</p></div>
                                    </div>
                            </div>
                            <div className='IndividualWrapper2'>
                                    <div className="team_About2">
                                        <div className='class1'> <span>Nickname:</span><p>{player.nickname ? player.nickname : '-'}</p></div>
                                        <div className='class2'> <span>Parents:</span> <p>{player.parents ? player.parents : '-'}</p></div> 
                                        <div className='class3'> <span>Spouse: </span><p>{player.spouse ? player.spouse : '-'}</p></div> 
                                        <div className='class4'> <span>Children:</span> <p>{player.children ? player.children : '-'}</p></div>
                                        <div className='class5'> <span>Siblings:</span> <p>{player.siblings ? player.siblings : '-'}</p></div>
                                    </div>
                            </div>
                            <div className='IndividualWrapper3'>
                                    <div className="team_About3">         
                                        <div className='class1'> <span>Bats:</span> <p>{player.bats ? player.bats : '-'}</p></div>
                                        <div className='class2'> <span>Throws:</span> <p>{player.bats ? player.bats : '-'}</p></div>
                                        <div className='class3'> <span>Height:</span><p>{player.height ? player.height : '-'}</p> </div>
                                        <div className='class4'> <span>Weight: </span> <p>{player.weight ? player.weight : '-'}</p></div>
                                        <div className='class5'> <span>Salary:</span><p>{player?.salary ? player.salary : '-'}</p> </div>
                                    </div>
                            </div>
                            <div className='IndividualWrapper4'>
                                    <div className="team_About4">
                                        <div className='classAbout'> <span>About: </span> <div>{player.about ? player.about : '-'}.</div> </div> 
                                    </div>
                            </div>
                            <div className='IndividualWrapper5'>
                                    <div className="team_About5">
                                        {/* <div style={{}} className="about4-1"> <span>Stats: </span>{memberId}</div>   */}
                                        <h2>Players Stats</h2>
                                        <div className='statsGrid'>
                                            <div className='game'>GAME</div>
                                            <div>AB</div>
                                            <div>R</div>
                                            <div>H</div>
                                            <div>RB</div>
                                            <div>BB</div>
                                            <div>SO</div>
                                            <div>HR</div>
                                            <div>SB</div>
                                            <div>AVG</div>
                                        </div>
                                        { teamId  ? 
                                                    <div style={{backgroundColor: 'red', marginLeft: '-10px',
                                                    marginRight: '-10px', color: 'white'}} > 
                                                    {  teamId.map((stat, index)=>{
                                                        return(
                                                            <div>
                                                                {Number(memberId) === stat.players_id ?  
                                                                    <div className='about-inner1'>
                                                                        <div className='game-inner'>{stat.game_date} {stat.game}</div>
                                                                        <div style={{textAlign: 'center',width:'60px'}}>{stat.ab >= 0 ? stat.ab : '-'}</div>
                                                                        <div style={{textAlign: 'center',width:'60px'}}>{stat.r >= 0 ? stat.r : '-'}</div>
                                                                        <div style={{textAlign: 'center',width:'60px'}}>{stat.h >= 0 ? stat.h : '-'}</div>
                                                                        <div style={{textAlign: 'center',width:'60px'}}>{stat.rb >= 0 ? stat.rb : '-'}</div>
                                                                        <div style={{textAlign: 'center',width:'60px'}}>{stat.bb >= 0 ? stat.bb : '-'}</div>
                                                                        <div style={{textAlign: 'center',width:'60px'}}>{stat.so  >= 0 ? stat.so : '-'}</div>
                                                                        <div style={{textAlign: 'center',width:'60px'}}>{stat.hr >= 0 ? stat.hr : '-'}</div>
                                                                        <div style={{textAlign: 'center',width:'60px'}}>{stat.sb  >= 0 ? stat.sb : '-'}</div>
                                                                        <div style={{textAlign: 'center',width:'60px'}}>{stat.average  >= 0 ? stat.average : '-'}</div>
                                                                    </div>
                                                                   
                                                            : null}
                                                        </div>
                                                        )
                                                    })}  
                                            </div> : null }
                                    </div>
                            </div>
                             

                            <div className='IndividualWrapper6'>
                               <div className="team_About5">
                                    <h2 style={{color: 'white'}}>Careers Stats</h2>
                                    <div className='statsGrid2'>
                                        <div className='career'>YEAR</div>
                                        <div className='career'>TEAM</div>
                                        <div>GP</div>
                                        <div>AB</div>
                                        <div>R</div>
                                        <div>H</div>
                                        <div>RBI</div>
                                        <div>BB</div>
                                        <div>SO</div>
                                        <div>HR</div>
                                        <div>AVG</div>
                                    </div>
                                    {teamCareerId  ? 
                                                    <div style={{backgroundColor: 'red', marginLeft: '-10px',
                                                    marginRight: '-10px', color: 'white'}} > 
                                                    {  teamCareerId.map((career, index)=>{
                                                        return(
                                                            <div>
                                                                {Number(memberId) === career.players_id  ?  
                                                                    <div className='about-inner2'>
                                                                        <div className='career1'>{career.game_year} </div>
                                                                        <div className='career2'>{career.team} </div>
                                                                        <div style={{textAlign: 'center',width:'80px'}}>{career.career_gp}</div>
                                                                        <div style={{textAlign: 'center',width:'80px'}}>{career.career_ab}</div>
                                                                        <div style={{textAlign: 'center',width:'80px'}}>{career.career_r}</div>
                                                                        <div style={{textAlign: 'center',width:'80px'}}>{career.career_h}</div>
                                                                        <div style={{textAlign: 'center',width:'80px'}}>{career.career_rbi}</div>
                                                                        <div style={{textAlign: 'center',width:'80px'}}>{career.career_bb}</div>
                                                                        <div style={{textAlign: 'center',width:'80px'}}>{career.career_so}</div>
                                                                        <div style={{textAlign: 'center',width:'80px'}}>{career.career_hr}</div>
                                                                        <div style={{textAlign: 'center',width:'80px'}}>{career.career_average}</div>
                                                                    </div>
                                                                   
                                                            : null}
                                                        </div>
                                                        )
                                                    })}  
                                            </div> : null }
                               </div>
                            </div>


                        
                        </div>
                    : null}
            </div>
            ) }) }
          </div>
        
          {/* {member.map((player, index) =>{
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
                                   
                                             { teamId  ? 
                                                    <div style={{backgroundColor: 'red', borderRadius: '5px'}} className='about-inner'> Game Stats:
                                                    {  teamId.map((stat, index)=>{
                                                        return(
                                                            <div>
                                                                {Number(memberId) === stat.players_id ?  
                                                                    <div className='about-inner1'>
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
                                                                        <hr/>
                                                                    </div>
                                                                   
                                                            : null}
                                                        </div>
                                                        )
                                                    })}  
                                            </div> : null }
                                            { teamCareerId  ? 
                                                    <div style={{backgroundColor: 'white', borderRadius: '5px'}} className='about-inner'> Career Stats:
                                                     {teamCareerId.map((career, index)=>{
                                                         return(
                                                             <div>
                                                                 {Number(memberId) === career.players_id ? 
                                                                  <div style={{}} className='about-inner1'>
                                                                  <div style={{marginTop: '5px'}} className='about-inner2-2'>Year
                                                                     <div>{career.game_year}</div> 
                                                                  </div>
                                                                  <div style={{marginTop: '5px'}} className='about-innerTeam'>Team
                                                                     <div>{career.team}</div> 
                                                                  </div>
                                                                  <div  className='help'> GP
                                                                     <div>{career.career_gp}</div> 
                                                                  </div>
                                                                  <div  className='help'> AB
                                                                     <div>{career.career_ab}</div> 
                                                                  </div >
                                                                  <div  className='help'> R
                                                                     <div>{career.career_r}</div> 
                                                                  </div>
                                                                  <div  className='help'> H
                                                                     <div>{career.career_h}</div> 
                                                                  </div>
                                                                  <div  className='help'> RBI
                                                                     <div>{career.career_rbi}</div> 
                                                                  </div>
                                                                  <div  className='help'> BB
                                                                     <div>{career.career_bb}</div> 
                                                                  </div>
                                                                  <div  className='help'> SO
                                                                     <div>{career.career_so}</div> 
                                                                  </div>
                                                                  <div  className='help'> HR
                                                                     <div>{career.career_hr}</div> 
                                                                  </div>
                                                                  <div  className='help'> AVG
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
                                                                 <div className='help'> GP
                                                                      <div style={{textAlign: 'center'}}>{careerP.career_gp >= 0 ? careerP.career_gp : '-'}</div>
                                                                 </div>
                                                                 <div className='help'> CG
                                                                      <div style={{textAlign: 'center'}}>{careerP.career_cg >= 0 ? careerP.career_cg : '-'}</div>
                                                                 </div>
                                                                 <div className='help'> ER
                                                                      <div style={{textAlign: 'center'}}>{careerP.career_er >= 0 ? careerP.career_er : '-'}</div>
                                                                 </div>
                                                                 <div className='help'> SO
                                                                      <div style={{textAlign: 'center'}}>{careerP.career_so >= 0 ? careerP.career_so : '-'}</div>
                                                                 </div>
                                                                 <div className='help'> W
                                                                      <div style={{textAlign: 'center'}}>{careerP.career_w >= 0 ? careerP.career_w : '-'}</div>
                                                                 </div>
                                                                 <div className='help'> L
                                                                      <div style={{textAlign: 'center'}}>{careerP.career_l >= 0 ? careerP.career_l : '-'}</div>
                                                                 </div>
                                                                 <div className='help'> Sv
                                                                      <div style={{textAlign: 'center'}}>{careerP.career_sv >= 0 ? careerP.career_sv : '-'}</div>
                                                                 </div>
                                                                 <div className='help'> WHIP
                                                                      <div style={{textAlign: 'center'}}>{careerP.career_whip >= 0 ? careerP.career_whip : '-'}</div>
                                                                 </div>
                                                                 <div className='help'> ERA
                                                                      <div style={{textAlign: 'center'}}>{careerP.career_era >= 0 ? careerP.career_era : '-'}</div>
                                                                 </div>
                                                         </div>: null}
                                                            </div>
                                                        )
                                                    }) }
                                                       
                                            </div>
                                                    : null}
                                                    {coachId ? <div>{
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
                                                    }</div> : null}
                                                
                                             </div> 
                                        </div>
                                    </div>

                            </div>
                          
                       </div>
                       : null}
                  </div>
              )  
          })} */}
          
                      
      </div>
   
  )
}

export default IndividualMember