import React,  { useState, useEffect}from 'react'
import { useParams, Link, useNavigate} from 'react-router-dom'
import axios from "axios";
import '../newMember/NewMember.css'
import './MemberUpdate.css'

const MemberUpDate = () => {
  const [member, setMemberid] = useState([])
  const [memberName, setMemberName] = useState([])
  const [memberImg, setMemberImg] = useState([])
  const navigate = useNavigate(); 
  let { id } = useParams();
  const [newMember,setMember] = useState({
    name: '',
    team_id: '',
    nickname: '',
    imag: '',
    born: '',
    city: '',
    state: '',
    country: '',
    age: '',
    height: '',
    weight: '',
    current_team: '',
    salary: '',
    number: '',
    education: '',
    spouse: '',
    parents: '',
    children: '',
    siblings: '',
    position: '',
    bats: '',
    throws: '',
    stats: '',
    about: '',
 })



  const handleInput =(e)=>{
    const {value} = e.target;
     setMember({...newMember, [e.target.id]: value })
}

  const handleSubmit = (e) => {
    e.preventDefault();
     updatedTeam(newMember, id)
    navigate(`/teams/groups/${id}`)
    
  };
  // const updatedTeam = (update, id) => {
  //   axios.put(`https://my-baseball-teams.herokuapp.com/groups/${id}`, update).then(
  //     (res) => {
  //       const newTeam = [...newMember];
  //       newTeam[id] = update;
  //       setMember(newTeam);
  //     },
  //     (error) => console.log(error)
  //   );
  // };
   const updatedTeam = (update, id) => {
    axios.put(`http://localhost:9000/groups/${id}`, update).then(
      (res) => {
        const newTeam = [...newMember];
        newTeam[id] = update;
        setMember(newTeam);
      },
      (error) => console.log(error)
    );
  };
 
  // useEffect(() => {
  //   fetch(`https://my-baseball-teams.herokuapp.com/groups/${id}`)
  //       .then(res => res.json())
  //       .then(data =>{
  //           setMemberid(data.team.team_id)
  //           setMemberName(data.team.name)
  //           setMemberImg(data.team.imag)
  //       })
  // },[id])
   useEffect(() => {
    fetch(`http://localhost:9000/groups/${id}`)
        .then(res => res.json())
        .then(data =>{
            setMemberid(data.team.team_id)
            setMemberName(data.team.name)
            setMemberImg(data.team.imag)
        })
  },[id])

  console.log(member)
  return (
         <div className='Update_Container'>
           <h1 className='newTitle'>UpDate Member</h1>
         <div style={{}} className='wrapLink'> <Link to={`/teams/groups/${id}`} className='newLinkBackNew' >Back</Link> </div>
         <div >
           <h2>{memberName}</h2>
         <form onSubmit={handleSubmit} className='newMemberUpdate'>
                           <div className='innerUpdate'>
                                <input id='name' type="text" onChange={handleInput} placeholder={memberName} className='inputT' ></input>
                                <input id='team_id' type="text" onChange={handleInput} placeholder={'team_id = ' +member} className='inputT' ></input>
                                <input id='nickname'type="text" onChange={handleInput}  placeholder="Nickname..." className='inputT' ></input>
                                <input id='imag' type="text" onChange={handleInput}  placeholder="Url..." className='inputT' ></input>
                                <input id='born' type="text" onChange={handleInput}  placeholder="Months day, year" className='inputT' ></input>
                                <input id='city' type="text" onChange={handleInput}  placeholder="City..." className='inputT' ></input>
                                <input id='state' type="text" onChange={handleInput} placeholder="State..."  className='inputT' ></input>
                                <input id='country' type="text" onChange={handleInput} placeholder="Country..." className='inputT' ></input>
                            </div>
                            <div className='innerUpdate'>
                                <input id='age' type="text" onChange={handleInput}  placeholder="Age..." className='inputT'></input>
                                <input id='height' type="text" onChange={handleInput}  placeholder="Height..."  className='inputT' ></input>
                                <input id='weight' type="text" onChange={handleInput}  placeholder="Weight..." className='inputT' ></input>
                                <input id='current_team' type="text" onChange={handleInput} placeholder="Current Team..." className='inputT' ></input>
                                <input id='salary' type="text" onChange={handleInput}  placeholder="Salary..." className='inputT' ></input>
                                <input id='number' type="number" onChange={handleInput} placeholder="Number..." className='inputT' ></input>
                                <input id='education' type="text" onChange={handleInput}  placeholder="Education..." className='inputT'></input>
                                <input id='spouse' type="text" onChange={handleInput}  placeholder="Spouse..." className='inputT'></input>
                            </div>
                            <div className='innerUpdate'>
                                <input id='parents' type="text" onChange={handleInput}  placeholder="Parents..." className='inputT'></input>
                                <input id='children' type="text" onChange={handleInput}  placeholder="Children..." className='inputT'></input>
                                <input id='siblings' type="text" onChange={handleInput}  placeholder="Siblings..." className='inputT'></input>
                                <input id='position' type="text" onChange={handleInput} placeholder="Position..." className='inputT'></input>
                                <input id='bats' type="text" onChange={handleInput}  placeholder="Bats..." className='inputT'></input>
                                <input id='throws' type="text" onChange={handleInput}  placeholder="Throws..." className='inputT'></input>
                                <input id='stats' type="text" onChange={handleInput}  placeholder={'Stats id = ' + id} className='inputT'></input>
                                <input id='about' type="text" onChange={handleInput}  placeholder="About..." className='inputTAbout'></input>
                            </div>
                            <div  className='divImage'>
                                <img src={newMember.imag ? newMember.imag : memberImg } alt='NewImage' className='photo' />
                            </div>
                           
                 <buttom type='submit' className='newMemberButton' onClick={handleSubmit}  >Submit</buttom>
             </form>
         </div>
      </div>
  )
}

export default MemberUpDate