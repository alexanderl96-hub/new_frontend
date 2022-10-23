import React, { useState, useEffect } from 'react'
import {Link, useParams,useNavigate} from 'react-router-dom'
import './addStatsPlayers.css'
import axios from "axios";
import Navbar from '../navBar/Navbar'

const AddStatsPlayers = () => {
    const navigate = useNavigate();
   const [memberHold, setMemberHold] = useState([])
   const [checkId, setCheckId] = useState([])
   const [statPlayers, setStatPlayers] = useState({
    players_id: '', 
    game: '',
    game_date: '', 
    ab: '', 
    r: '', 
    h: '', 
    rb: '', 
    bb: '', 
    so: '', 
    hr: '', 
    sb: '', 
    average: '',
   })
   const [statCareer, setStatCareer] = useState({
    players_id: '', 
    game_year: '', 
    team: '', 
    career_gp: '', 
    career_ab: '', 
    career_r: '', 
    career_h: '', 
    career_rbi: '', 
    career_bb: '', 
    career_so: '', 
    career_hr: '', 
    career_average: '',
   })
   const [statPitcher, setStatPitcher] = useState({
    players_id: '', 
    game: '', 
    game_date: '', 
    ip: '', 
    h: '', 
    r: '', 
    er: '', 
    hr: '', 
    bb: '', 
    so: '', 
    sv: '', 
    era: '',
   })
   const [statPCareer, setStatPCareer] = useState({
    pitcher_id: '', 
    game_year: '', 
    team: '', 
    career_gp: '', 
    career_cg: '', 
    career_er: '', 
    career_so: '', 
    career_w: '', 
    career_l: '', 
    career_sv: '', 
    career_whip: '', 
    career_era: '',
   })


   //create variable to store an specific obj depending of the position or the id

  let params = useParams()
  let memberId = params.id

  useEffect(() => {
         fetch(`https://my-baseball-teams.adaptable.app/groups`)
        .then(res => res.json())
        .then(data =>{
    //       setNewGroup(data)
    //       setCoachName(data)
    setMemberHold(data = data.filter(a => a.id === Number(memberId)))
    setCheckId(data = data.filter(a => a.id === Number(memberId)).map((a,i)=>{return a.id}))
         })
       },[memberId])
    // useEffect(() => {
    //     fetch(`http://localhost:9000/groups`)
    //     .then(res => res.json())
    //     .then(data =>{
    //         setMemberHold(data = data.filter(a => a.id === Number(memberId)))
    //         setCheckId(data = data.filter(a => a.id === Number(memberId)).map((a,i)=>{return a.id}))
        
    //     })
    // },[memberId])
 const handleInput = (e) =>{
    const {value} = e.target
    setStatPlayers({...statPlayers, [e.target.id]: value})
  }
  const handleInput2 = (e) =>{
    const {value} = e.target
    setStatCareer({...statCareer, [e.target.id]: value})
  }
    const handleInput3 = (e) =>{
    const {value} = e.target
    setStatPitcher({...statPitcher, [e.target.id]: value})
  }
  const handleInput4 = (e) =>{
    const {value} = e.target
    setStatPCareer({...statPCareer, [e.target.id]: value})
  }
/* update stats */
//   const handleSubmit = (e) => {
//     e.preventDefault();
//      updatedTeam(statPlayers, memberId)
//     navigate(`/teams/groups/${memberId}`)
    
//   };
//   const updatedTeam = (update, id) => {
//     axios.put(`http://localhost:9000/playersStats/${id}`, update).then(
//       (res) => {
//         const newTeam = [...statPlayers];
//         newTeam[id] = update;
//         setStatPlayers(newTeam);
//       },
//       (error) => console.log(error)
//     );
//   };
/* add new stats*/
  const handleSubmit = (e) =>{
    e.preventDefault()
    addStatsPlayers(statPlayers)
  }
   const handleSubmit2 = (e) =>{
    e.preventDefault()
    addStatsPlayers2(statCareer)
  }
  const handleSubmit3 = (e) =>{
    e.preventDefault()
    addStatsPlayers3(statPitcher)
  }
  const handleSubmit4 = (e) =>{
    e.preventDefault()
    addStatsPlayers4(statPCareer)
  }
  // const addStatsPlayers = (newPlayers) => {
  //   axios.post(`http://localhost:9000/playersStats`, newPlayers).then((res)=>{
  //     navigate(`/teams/groups/${memberId}`);
  //     })
  // }
  const addStatsPlayers = (newPlayers) => {
    axios.post(`https://my-baseball-teams.adaptable.app/playersStats`, newPlayers).then((res)=>{
      navigate(`/teams/groups/${memberId}`);
      })
  }
  //  const addStatsPlayers2 = (newPlayers) => {
  //   axios.post(`http://localhost:9000/playersCareer`, newPlayers).then((res)=>{
  //     navigate(`/teams/groups/${memberId}`);
  //     })
  // }
  const addStatsPlayers2 = (newPlayers) => {
    axios.post(`https://my-baseball-teams.adaptable.app/playersCareer`, newPlayers).then((res)=>{
      navigate(`/teams/groups/${memberId}`);
      })
  }
  // const addStatsPlayers3 = (newPlayers) => {
  //   axios.post(`http://localhost:9000/pitchersStats`, newPlayers).then((res)=>{
  //     navigate(`/teams/groups/${memberId}`);
  //     })
  // }
  const addStatsPlayers3 = (newPlayers) => {
    axios.post(`https://my-baseball-teams.adaptable.app/pitchersStats`, newPlayers).then((res)=>{
      navigate(`/teams/groups/${memberId}`);
      })
  }
  //  const addStatsPlayers4 = (newPlayers) => {
  //   axios.post(`http://localhost:9000/pitchersCarrer`, newPlayers).then((res)=>{
  //     navigate(`/teams/groups/${memberId}`);
  //     })
  // }
  const addStatsPlayers4 = (newPlayers) => {
    axios.post(`https://my-baseball-teams.adaptable.app/pitchersCarrer`, newPlayers).then((res)=>{
      navigate(`/teams/groups/${memberId}`);
      })
  }
//   const addMember = (newMember) => {
//     axios.post(`https://my-baseball-teams.herokuapp.com/groups`, newMember).then((res)=>{
//       navigate(`/teams/updateteam/${id}`);
//       })
//   }

console.log(statPitcher, 'check')
  return (
    <div className='StasContainer'>
        <Navbar />
        <h1 >Add Stats</h1>
        <div className='StasContainer-inner'>
              <div className='innerImg'>
                  {memberHold.map((a,i)=>{
                    return(
                        <div >
                          <img src={a.imag} alt='' className='fondo' />
                          <h3  className='fondoINt'>{a.name}</h3>
                          <h4  className='fondoINt'>{a.city} - {a.age}</h4>
                          <h4  className='fondoINt'>{a.height} - {a.weight}</h4>
                          <h4  className='fondoINt'>{a.salary}</h4>
                          <h4  className='fondoINt'>{a.current_team}</h4>
                        </div>
                    )})}              
              </div>
              <div className="ContainerStats">
              <div className='Major'>
            <div className='PlayersSats'>
                <h3>Players Stats</h3>
                <form onSubmit={handleSubmit}>
                        <input id='players_id' type="number" onChange={handleInput} placeholder={memberId}/>
                        <input id='game' type="text"  onChange={handleInput} placeholder="game"/>
                        <input id='game_date' type="text"  onChange={handleInput} placeholder="game_date"/>
                        <input id='ab' type="number"  onChange={handleInput}placeholder="ab"/>
                        <input id='r' type="number"  onChange={handleInput} placeholder="r"/>
                        <input id='h' type="number"  onChange={handleInput} placeholder="h"/>
                        <input id='rb' type="number" onChange={handleInput} placeholder="rb"/>
                        <input id='bb' type="number"  onChange={handleInput} placeholder="bb"/>
                        <input id='so' type="number" onChange={handleInput} placeholder="so"/> 
                        <input id='hr' type="number"  onChange={handleInput} placeholder="hr"/>
                        <input id='sb' type="number"  onChange={handleInput} placeholder="sb"/>
                        <input id='average' type="number" onChange={handleInput} placeholder="average"/>
                </form>
                <button type="submit" onClick={handleSubmit}>AddStats</button>
            </div>
            <div className='PlayersSats1'>
                <h3>Career Players Stats</h3>
                <form onSubmit={handleSubmit2}>
                        <input id='players_id' type="number" onChange={handleInput2} placeholder={memberId}/>
                        <input id='game_year' type="number" onChange={handleInput2} placeholder="game_year"/>
                        <input id='team' type="text"  onChange={handleInput2} placeholder="Team"/>
                        <input id='career_gp' type="number"  onChange={handleInput2} placeholder="career_gp"/>
                        <input id='career_ab' type="number" onChange={handleInput2} placeholder="career_ab"/>
                        <input id='career_r' type="number" onChange={handleInput2} placeholder="career_r"/>
                        <input id='career_h' type="number" onChange={handleInput2} placeholder="career_h"/>
                        <input id='career_rbi' type="number" onChange={handleInput2} placeholder="career_rbi"/>
                        <input id='career_bb' type="number" onChange={handleInput2} placeholder="career_bb"/> 
                        <input id='career_so' type="number" onChange={handleInput2} placeholder="career_so"/>
                        <input id='career_hr' type="number" onChange={handleInput2} placeholder="career_hr"/>
                        <input id='career_average' type="number" onChange={handleInput2} placeholder="career_average"/>
                </form>
                <button type="submit" onClick={handleSubmit2} >AddStats</button>
            </div> 

            {/* <div className='Major-in2'></div> */}

            <div className='PlayersSats2'>
                <h3>Pitcher Stats</h3>
                <form onSubmit={handleSubmit3}>
                        <input id='players_id' type="number" onChange={handleInput3}  placeholder={memberId}/>
                        <input id='game' type="text" onChange={handleInput3} placeholder="game"/>
                        <input id='game_date' type="text" onChange={handleInput3} placeholder="game_date"/>
                        <input id='ip' type="number" onChange={handleInput3} placeholder="ip"/>
                        <input id='h' type="number" onChange={handleInput3} placeholder="h"/>
                        <input id='r' type="number" onChange={handleInput3} placeholder="r"/>
                        <input id='er' type="number" onChange={handleInput3} placeholder="er"/>
                        <input id='hr' type="number" onChange={handleInput3} placeholder="hr"/>
                        <input id='bb' type="number" onChange={handleInput3} placeholder="bb"/> 
                        <input id='so' type="number" onChange={handleInput3} placeholder="so"/>
                        <input id='sv' type="number" onChange={handleInput3} placeholder="sv"/>
                        <input id='era' type="number" onChange={handleInput3} placeholder="era"/>
                </form>
                <button type="submit" onClick={handleSubmit3}>AddStats</button>
            </div>
            <div className='PlayersSats3'>
                <h3>Career Pitcher Stats</h3>
                <form onSubmit={handleSubmit4}>
                        <input id='pitcher_id' type="number" onChange={handleInput4} placeholder={memberId}/>
                        <input id='game_year' type="number" onChange={handleInput4} placeholder="game_year"/>
                        <input id='team' type="text" onChange={handleInput4} placeholder="team"/>
                        <input id='career_gp' type="number" onChange={handleInput4} placeholder="career_gp"/>
                        <input id='career_cg' type="number" onChange={handleInput4} placeholder="career_cg"/>
                        <input id='career_er' type="number" onChange={handleInput4} placeholder="career_er"/>
                        <input id='career_so' type="number" onChange={handleInput4} placeholder="career_so"/>
                        <input id='career_w' type="number" onChange={handleInput4} placeholder="career_w"/>
                        <input id='career_l' type="number" onChange={handleInput4} placeholder="career_l"/> 
                        <input id='career_sv' type="number" onChange={handleInput4} placeholder="career_sv"/>
                        <input id='career_whip' type="number" onChange={handleInput4} placeholder="career_whip"/>
                        <input id='career_era' type="number" onChange={handleInput4} placeholder="career_era"/>
                </form>
                <button type="submit" onClick={handleSubmit4}>AddStats</button>
            </div>
            </div>
        </div>

        </div>
        {/* -- check the member id and the position before display data */}
       
        
    </div>
  )
}

export default AddStatsPlayers