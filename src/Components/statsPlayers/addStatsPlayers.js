import React, { useState, useEffect } from 'react'
import {Link, useParams,useNavigate} from 'react-router-dom'
import './addStatsPlayers.css'
import axios from "axios";

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

 // useEffect(() => {
    //     fetch(`https://my-baseball-teams.herokuapp.com/groups`)
    //     .then(res => res.json())
    //     .then(data =>{
    //       setNewGroup(data)
    //       setCoachName(data)
    //     })
    //   },[search])
    useEffect(() => {
        fetch(`http://localhost:9000/groups`)
        .then(res => res.json())
        .then(data =>{
            setMemberHold(data = data.filter(a => a.id === Number(memberId)))
            setCheckId(data = data.filter(a => a.id === Number(memberId)).map((a,i)=>{return a.id}))
        
        })
    },[memberId])
 const handleInput = (e) =>{
    const {value} = e.target
    setStatPlayers({...statPlayers, [e.target.id]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
     updatedTeam(statPlayers, memberId)
    navigate(`/teams/groups/${memberId}`)
    
  };
  const updatedTeam = (update, id) => {
    axios.put(`http://localhost:9000/playersStats/${id}`, update).then(
      (res) => {
        const newTeam = [...statPlayers];
        newTeam[id] = update;
        setStatPlayers(newTeam);
      },
      (error) => console.log(error)
    );
  };
//   const addMember = (newMember) => {
//     axios.post(`https://my-baseball-teams.herokuapp.com/groups`, newMember).then((res)=>{
//       navigate(`/teams/updateteam/${id}`);
//       })
//   }

console.log(memberId)
console.log(memberHold,'memberHold')
console.log(checkId)
console.log(statPlayers)

  return (
    <div className='StasContainer'>
        <h1 className='newTitle'>Add Stats</h1>
        <div style={{}} className='wrapLink'> <Link to={`/teams/groups/${memberId}`} className='newLinkBackNew' >Back</Link> </div>
        {/* -- check the member id and the position before display data */}
        <div className="ContainerStats">
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
                <button type="submit" onSubmit={handleSubmit}>AddStats</button>
            </div>
            <div className='PlayersSats1'>
                <h3>Career Players Stats</h3>
                <form>
                        <input type="number" placeholder={memberId}/>
                        <input type="number" placeholder="game_year"/>
                        <input type="text" placeholder="Team"/>
                        <input type="number" placeholder="career_gp"/>
                        <input type="number" placeholder="career_ab"/>
                        <input type="number" placeholder="career_r"/>
                        <input type="number" placeholder="career_h"/>
                        <input type="number" placeholder="career_rbi"/>
                        <input type="number" placeholder="career_bb"/> 
                        <input type="number" placeholder="career_so"/>
                        <input type="number" placeholder="career_hr"/>
                        <input type="number" placeholder="career_average"/>
                </form>
                <button type="submit">AddStats</button>
            </div> 

            <div className='PlayersSats2'>
                <h3>Pitcher Stats</h3>
                <form>
                        <input type="number" placeholder={memberId}/>
                        <input type="text" placeholder="game"/>
                        <input type="text" placeholder="game_date"/>
                        <input type="number" placeholder="ip"/>
                        <input type="number" placeholder="h"/>
                        <input type="number" placeholder="r"/>
                        <input type="number" placeholder="er"/>
                        <input type="number" placeholder="hr"/>
                        <input type="number" placeholder="bb"/> 
                        <input type="number" placeholder="so"/>
                        <input type="number" placeholder="sv"/>
                        <input type="number" placeholder="era"/>
                </form>
                <button type="submit">AddStats</button>
            </div>
            <div className='PlayersSats3'>
                <h3>Career Pitcher Stats</h3>
                <form>
                        <input type="number" placeholder={memberId}/>
                        <input type="number" placeholder="game_year"/>
                        <input type="text" placeholder="team"/>
                        <input type="number" placeholder="career_gp"/>
                        <input type="number" placeholder="career_cg"/>
                        <input type="number" placeholder="career_er"/>
                        <input type="number" placeholder="career_so"/>
                        <input type="number" placeholder="career_w"/>
                        <input type="number" placeholder="career_l"/> 
                        <input type="number" placeholder="career_sv"/>
                        <input type="number" placeholder="career_whip"/>
                        <input type="number" placeholder="career_era"/>
                </form>
                <button type="submit">AddStats</button>
            </div>
        </div>
         {memberHold.map((a,i)=>{
                 return(
                     <><img src={a.imag} alt='' /></>
                 )})}
    </div>
  )
}

export default AddStatsPlayers