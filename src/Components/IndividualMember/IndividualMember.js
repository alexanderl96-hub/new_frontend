import React,  { useState, useEffect }from 'react'
import { useParams, Link} from 'react-router-dom'
// import { BiEdit} from "react-icons/fa";
import {FaPlus, FaRecycle , FaUserEdit } from 'react-icons/fa';
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
//    const [text, setText] = useState([])
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
    axios.delete(`https://my-baseball-teams.adaptable.app/groups/${memberId}`).then(() =>{
        //  navigate(`/homebase`)
    }, (error) => console.log(error))
    axios.delete(`https://my-baseball-teams.adaptable.app/playersStats/${memberId}`).then(() =>{
        //  navigate(`/homebase`)
    }, (error) => console.log(error))
    axios.delete(`https://my-baseball-teams.adaptable.app/playersCareer/${memberId}`).then(() =>{
        //  navigate(`/homebase`)
    }, (error) => console.log(error))
    axios.delete(`https://my-baseball-teams.adaptable.app/pitchersStats/${memberId}`).then(() =>{
        //  navigate(`/homebase`)
    }, (error) => console.log(error))
    axios.delete(`https://my-baseball-teams.adaptable.app/pitchersCarrer/${memberId}`).then(() =>{
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
    fetch(`https://my-baseball-teams.adaptable.app/groups`)
    .then(res => res.json())
    .then(data =>{
        setMember(data)
    })
},[])
//   useEffect(() => {
//     fetch(`http://localhost:9000/groups`)
//     .then(res => res.json())
//     .then(data =>{
//         setMember(data)
//     })
// },[])
  useEffect(() => {
    fetch(`https://my-baseball-teams.adaptable.app/playersStats`)
    .then(res => res.json())
    .then(data =>{
         let playerStats = data.filter(a => a.players_id === Number(memberId))
         playerStats.sort((a,b)=> b.id - a.id) 
         setTeamID(playerStats)
        // data.filter(a=> a.includes)
    })
},[memberId])
// useEffect(() => {
//     fetch(`http://localhost:9000/playersStats`)
//     .then(res => res.json())
//     .then(data =>{
//         setTeamID(data)
//     })
// },[])

useEffect(() => {
    fetch(`https://my-baseball-teams.adaptable.app/playersCareer`)
    .then(res => res.json())
    .then(data =>{
        let playerStats = data.filter(a => a.players_id === Number(memberId))
        playerStats.sort((a,b)=> b.id - a.id) 
        setTeamCareerID( playerStats)
    })
 },[memberId])
// useEffect(() => {
//     fetch(`http://localhost:9000/playersCareer`)
//     .then(res => res.json())
//     .then(data =>{
//         setTeamCareerID(data)
//     })
// },[])

useEffect(() => {
    fetch(`https://my-baseball-teams.adaptable.app/pitchersStats`)
    .then(res => res.json())
    .then(data =>{
        let playerStats = data.filter(a => a.players_id === Number(memberId))
        playerStats.sort((a,b)=> b.id - a.id) 
        setPitcherID( playerStats)
    })
},[memberId])
// useEffect(() => {
//     fetch(`http://localhost:9000/pitchersStats`)
//     .then(res => res.json())
//     .then(data =>{
//         setPitcherID(data)
//     })
// },[])


useEffect(() => {
    fetch(`https://my-baseball-teams.adaptable.app/pitchersCarrer`)
    .then(res => res.json())
    .then(data =>{
         let playerStats = data.filter(a => a.pitcher_id === Number(memberId))
         playerStats.sort((a,b)=> b.id - a.id) 
        setPitcherCareerID( playerStats)
    })
},[memberId])
// useEffect(() => {
//     fetch(`http://localhost:9000/pitchersCarrer`)
//     .then(res => res.json())
//     .then(data =>{
//         setPitcherCareerID(data)
//     })
// },[])

  useEffect(() => {
    fetch(`https://my-baseball-teams.adaptable.app/groups/${memberId}`)
    .then(res => res.json())
    .then(data =>{
        setGroup(data.team.team_id )
        setMemberImg(data.team.imag)
        setMemberImg2(data.team.imag2)
        setMemberTeam(data.team.current_team)
        setMemberAge(data.team.age)
        setMemberPosition(data.team.position)
        setMemberName(data.team.name)
        setMemberNumber(data.team.number)
    })
},[memberId])


function convertInKG(str){
    let convert = Number(str.slice(0, -4))/2.205
    return Number(convert.toFixed(1))
  }

  function convertFootInCm (height){
    let change = height[0] + '.' + height.slice(2)
    return String(Number(change)*30.48).slice(0, 5)
  }

// useEffect(() => {
//     fetch(`http://localhost:9000/groups/${memberId}`)
//     .then(res => res.json())
//     .then(data =>{
//         setGroup(data.team.team_id )
// setMemberImg(data.team.imag)
// setMemberTeam(data.team.current_team)
// setMemberAge(data.team.age)
// setMemberPosition(data.team.position)
// setMemberName(data.team.name)
// setMemberNumber(data.team.number)
//     })
//   },[memberId])


 console.log(teamId, 'sortPlayer')
//  console.log(teamCareerId.filter(a=> a.players_id  === Number(memberId) ), 'sortPitcher')
//  console.log(pitcherId.filter(a=> a.players_id  === Number(memberId)), 'sortPitcher')
//  console.log(pitcherCareerId.filter(a=> a.pitcher_id  === Number(memberId)), 'sortPitcher')
  return (
      <div  className='MainMember'>
            <Navbar />
            {/* style={{backgroundImage: `url(${memberImg2})`}}     */}
          <div className='divTop' style={{backgroundImage: `url(${memberImg2})`}} >
              {/* <img src={memberImg2} alt='alt' className='divTop-ImgBackground'>  */}
               <div className='divTop-inner'>Member
                     {/* <img src={FaEdit} alt='edit' /> */}
                     <Link to={`/teams/updateMember/${memberId}`} className='divEdit3'> <FaUserEdit /></Link>
                     <Link to={`/teams/groups/${memberId}/addStats`} className='divEdit'> <FaPlus /> </Link> 
                     <Link to={`/teams/allmembers/${group}`} onClick={handleDelete}  className="divEdit2" ><FaRecycle /></Link>   
               </div>
               <img src={memberImg} alt='1'  />
               <h2>{memberName} {memberNumber ? `# ${memberNumber}`: ''}</h2>
               <h3>{memberTeam} | {memberPosition} | Age: {memberAge}</h3>
              {/* </img> */}
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
                                        <div className='class3'> <span>Height:</span><p>{player.height  &&  player.height !== 'unknown' ? player.height + ", ("+ convertFootInCm(player.height)+"cm)" : '-'}</p> </div>
                                        <div className='class4'> <span>Weight: </span> <p>{player.weight && player.weight !== 'unknown' ? player.weight  + ", ("+convertInKG(player.weight)+"kg)" : '-'}</p></div>
                                        <div className='class5'> <span>Salary:</span><p>{player?.salary ? player.salary : '-'}</p> </div>
                                    </div>
                            </div>
                            <div className='IndividualWrapper4'>
                                    <div className="team_About4">
                                        <div className='classAbout'> <span>About: </span> <div>{player.about ? player.about : '-'}.</div> </div> 
                                    </div>
                                    <div className="team_About4">
                                          <Link to={`/teams/CurrentHistagram/${memberId}`} style={{textDecoration: 'none'}}>
                                             <div className="Histogram">Player Statistics</div>
                                          </Link> 
                                    </div>
                                   
                            </div>
                            <div className='IndividualWrapper5'>
                                    <div className="team_About5">
                                        <h2>Player Stats</h2>
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
                                        <div>
                                            { teamId  ? 
                                                        <div className = 'statsPlayerMap'> 
                                                        {  teamId.map((stat, index)=>{
                                                            return(
                                                                <div>
                                                                    {stat.players_id ?  
                                                                        <div className='about-inner1'>
                                                                            <div className='game-inner'>{stat.game_date}  {stat.game}</div>
                                                                            <div className= 'gameInnerPoint'>{stat.ab >= 0 ? stat.ab : '-'}</div>
                                                                            <div className= 'gameInnerPoint'>{stat.r >= 0 ? stat.r : '-'}</div>
                                                                            <div className= 'gameInnerPoint'>{stat.h >= 0 ? stat.h : '-'}</div>
                                                                            <div className= 'gameInnerPoint'>{stat.rb >= 0 ? stat.rb : '-'}</div>
                                                                            <div className= 'gameInnerPoint'>{stat.bb >= 0 ? stat.bb : '-'}</div>
                                                                            <div className= 'gameInnerPoint'>{stat.so  >= 0 ? stat.so : '-'}</div>
                                                                            <div className= 'gameInnerPoint'>{stat.hr >= 0 ? stat.hr : '-'}</div>
                                                                            <div className= 'gameInnerPoint'>{stat.sb  >= 0 ? stat.sb : '-'}</div>
                                                                            <div className= 'gameInnerPoint'>{stat.average  >= 0 ? stat.average : '-'}</div>
                                                                        </div>
                                                                    
                                                                : null}
                                                            </div>
                                                            )
                                                        })}  
                                                </div> : null }
                                        </div>
                                    </div>
                            </div>
                             

                            <div className='IndividualWrapper6'>
                               <div className="team_About5">
                                    <h2 >Career Stats</h2>
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
                                                    <div className = 'statsPlayerMap2' > 
                                                    {  teamCareerId.map((career, index)=>{
                                                        return(
                                                            <div>
                                                                {career.players_id  ?  
                                                                    <div className='about-inner2'>
                                                                        <div className='career1'>{career.game_year  > 0 ? career.game_year : ''} </div>
                                                                        <div className='career2'>{career.team} </div>
                                                                        <div className= 'gameInnerPoint2'>{career.career_gp}</div>
                                                                        <div className= 'gameInnerPoint2'>{career.career_ab}</div>
                                                                        <div className= 'gameInnerPoint2'>{career.career_r}</div>
                                                                        <div className= 'gameInnerPoint2'>{career.career_h}</div>
                                                                        <div className= 'gameInnerPoint2'>{career.career_rbi}</div>
                                                                        <div className= 'gameInnerPoint2'>{career.career_bb}</div>
                                                                        <div className= 'gameInnerPoint2'>{career.career_so}</div>
                                                                        <div className= 'gameInnerPoint2'>{career.career_hr}</div>
                                                                        <div className= 'gameInnerPoint2'>{career.career_average}</div>
                                                                    </div>
                                                                   
                                                            : null}
                                                        </div>
                                                        )
                                                    })}  
                                            </div> : null }                                          
                               </div>
                            </div>


                            <div className='IndividualWrapper7'>
                               <div className="team_About5">
                                    <h2 >Pitcher Stats</h2>
                                    <div className='statsGridPitcher'>
                                        <div className='pitcher'>GAME</div>
                                        <div>IP</div>
                                        <div>H</div>
                                        <div>R</div>
                                        <div>ER</div>
                                        <div>HR</div>
                                        <div>BB</div>
                                        <div>SO</div>
                                        <div>SV</div>
                                        <div>ERA</div>
                                    </div>
                                    {pitcherId  ? 
                                                    <div className = 'statsPlayerMapPitcher'> 
                                                    {  pitcherId.map((pitcher, index)=>{
                                                        return(
                                                            <div>
                                                                {pitcher.players_id  ?  
                                                                    <div className='pitcher-inner1'>
                                                                        <div className='pitcher-inner'>{pitcher.game_date} {pitcher.game} </div>
                                                                        <div className= 'gameInnerPoint2'>{pitcher.ip >= 0 ? pitcher.ip : '-'}</div>
                                                                        <div className= 'gameInnerPoint2'>{pitcher.h >= 0 ? pitcher.h : '-'}</div>
                                                                        <div className= 'gameInnerPoint2'>{pitcher.r >= 0 ? pitcher.r : '-'}</div>
                                                                        <div className= 'gameInnerPoint2'>{pitcher.er >= 0 ? pitcher.er : '-'}</div>
                                                                        <div className= 'gameInnerPoint2'>{pitcher.hr >= 0 ? pitcher.hr : '-'}</div>
                                                                        <div className= 'gameInnerPoint2'>{pitcher.bb >= 0 ? pitcher.bb : '-'}</div>
                                                                        <div className= 'gameInnerPoint2'>{pitcher.so >= 0 ? pitcher.so : '-'}</div>
                                                                        <div className= 'gameInnerPoint2'>{pitcher.sv >= 0 ? pitcher.sv : '-'}</div>
                                                                        <div className= 'gameInnerPoint2'>{pitcher.era >= 0 ? pitcher.era : '-'}</div>
                                                                    </div>
                                                                   
                                                            : null}
                                                        </div>
                                                        )
                                                    })}  
                                            </div> : null }                                          
                               </div>
                            </div>


                            <div className='IndividualWrapper8'>
                               <div className="team_About5">
                                    <h2 >Career Pitcher Stats</h2>
                                    <div className='statsGrid2PitcherCarrer'>
                                        <div className='career'>YEAR</div>
                                        <div className='career'>TEAM</div>
                                        <div>GP</div>
                                        <div>CG</div>
                                        <div>ER</div>
                                        <div>SO</div>
                                        <div>W</div>
                                        <div>L</div>
                                        <div>SV</div>
                                        <div>WHIP</div>
                                        <div>ERA</div>
                                    </div>
                                    {pitcherCareerId  ? 
                                                    <div className = 'statsPlayerMap4' > 
                                                    {  pitcherCareerId.map((careerP, index)=>{
                                                        return(
                                                            <div >
                                                                {careerP.pitcher_id  ?  
                                                                    <div className='about-inner2'>
                                                                        <div className='career1'>{careerP.game_year > 0 ? careerP.game_year : ''} </div>
                                                                        <div className='career2'>{careerP.team} </div>
                                                                        <div className= 'gameInnerPoint2'>{careerP.career_gp >= 0 ? careerP.career_gp : '-'}</div>
                                                                        <div className= 'gameInnerPoint2'>{careerP.career_cg >= 0 ? careerP.career_cg : '-'}</div>
                                                                        <div className= 'gameInnerPoint2'>{careerP.career_er >= 0 ? careerP.career_er : '-'}</div>
                                                                        <div className= 'gameInnerPoint2'>{careerP.career_so >= 0 ? careerP.career_so : '-'}</div>
                                                                        <div className= 'gameInnerPoint2'>{careerP.career_w >= 0 ? careerP.career_w : '-'}</div>
                                                                        <div className= 'gameInnerPoint2'>{careerP.career_l >= 0 ? careerP.career_l : '-'}</div>
                                                                        <div className= 'gameInnerPoint2'>{careerP.career_sv >= 0 ? careerP.career_sv : '-'}</div>
                                                                        <div className= 'gameInnerPoint2'>{careerP.career_whip >= 0 ? careerP.career_whip : '-'}</div>
                                                                        <div className= 'gameInnerPoint2'>{careerP.career_era >= 0 ? careerP.career_era : '-'}</div>
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
      </div>
   
  )
}

export default IndividualMember
// {coachId ? <div>{
//     coachId.map((coach, index)=>{
//         return(
//             <div style={{}} className='about-inner'> Coach Career Stats:
//             <div style={{}} className='about-inner1'>
//                     <div>Year</div>
//                     <div style={{}} className='about-innerTeam'>Team</div>
//                     <div> GP</div>
//                     <div> CG</div>
//                     <div> ER</div>
//                     <div> SO</div>
//                     <div> W</div>
//                     <div> L</div>
//                     <div> Sv</div>
//                     <div> WHIP</div>
//                     <div> ERA</div>
//             </div>
//         </div>

//         )
//     })
// }</div> : null}