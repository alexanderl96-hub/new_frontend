import React,  { useState }from 'react'
import { useParams, Link, useNavigate} from 'react-router-dom'
import { apiURL } from '../back-end/Back-End'
import axios from "axios";
const API_DTBASE = apiURL();

const MemberUpDate = () => {
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
    currentTeam: '',
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
    navigate(`/homebase/groups/${id}`)
    
  };
  const updatedTeam = (update, id) => {
    axios.put(`${API_DTBASE}/groups/${id}`, update).then(
      (res) => {
        const newTeam = [...newMember];
        newTeam[id] = update;
        setMember(newTeam);
      },
      (error) => console.log(error)
    );
  };

  return (
         <div className='TeamUpDate_Container'>
           <h1 className='newTitle'>UpDate Member</h1>
         <div style={{paddingTop: '10px', textAlign: 'start', marginLeft: '20%', marginBottom: '20px'}}> <Link to={`/homeBase/groups/${id}`} className='memberLink1' >Back</Link> </div>
         <div >
         <form onSubmit={handleSubmit} className='newMember_AboutGrid'>
                            {/* <label className='label-1' >Name: </label> */}
                            <input id='name' type="text" onChange={handleInput} placeholder='Name...' className='input-1' ></input>
                            {/* <label className='label-2' >Team_Id: </label> */}
                            <input id='team_id' type="text" onChange={handleInput} placeholder="Team_Id ..." className='input-2' ></input>
                            {/* <label className='label-3' >Nickname: </label> */}
                            <input id='nickname'type="text" onChange={handleInput}  placeholder="Nickname..." className='input-3' ></input>
                            {/* <label className='label-4' >Image URL: </label> */}
                            <input id='imag' type="text" onChange={handleInput}  placeholder="Url..." className='input-4' ></input>
                            {/* <label className='label-5' >Born: </label> */}
                            <input id='born' type="text" onChange={handleInput}  placeholder="Months day, year" className='input-5' ></input>
                            {/* <label className='label-6' >City: </label> */}
                            <input id='city' type="text" onChange={handleInput}  placeholder="City..." className='input-6' ></input>
                            {/* <label className='label-7' >State: </label> */}
                            <input id='state' type="text" onChange={handleInput} placeholder="State..."  className='input-7' ></input>
                            {/* <label className='label-8' >Country: </label> */}
                            <input id='country' type="text" onChange={handleInput} placeholder="Country..." className='input-8' ></input>
                            {/* <label>Age: </label> */}
                            <input id='age' type="text" onChange={handleInput}  placeholder="Age..." className='input-9'></input>
                            {/* <label>Height: </label> */}
                            <input id='height' type="text" onChange={handleInput}  placeholder="Height..."  className='input-10' ></input>
                            {/* <label>Weight: </label> */}
                            <input id='weight' type="text" onChange={handleInput}  placeholder="Weight..." className='input-11' ></input>
                            {/* <label>Current Team: </label> */}
                            <input id='currentTeam' type="text" onChange={handleInput} placeholder="Current Team..." className='input-12' ></input>
                            {/* <label>Salary: </label> */}
                            <input id='salary' type="text" onChange={handleInput}  placeholder="Salary..." className='input-13' ></input>
                            {/* <label>Number: </label> */}
                            <input id='number' type="number" onChange={handleInput} placeholder="Number..." className='input-14' ></input>
                            {/* <label>Education: </label> */}
                            <input id='education' type="text" onChange={handleInput}  placeholder="Education..." className='input-15'></input>
                            {/* <label>Spouse: </label> */}
                            <input id='spouse' type="text" onChange={handleInput}  placeholder="Spouse..." className='input-16'></input>
                            {/* <label>Parents: </label> */}
                            <input id='parents' type="text" onChange={handleInput}  placeholder="Parents..." className='input-17'></input>
                            {/* <label>Children: </label> */}
                            <input id='children' type="text" onChange={handleInput}  placeholder="Children..." className='input-18'></input>
                            {/* <label>Siblings: </label> */}
                            <input id='siblings' type="text" onChange={handleInput}  placeholder="Siblings..." className='input-19'></input>
                            {/* <label>Position: </label> */}
                            <input id='position' type="text" onChange={handleInput} placeholder="Position..." className='input-20'></input>
                            {/* <label>Bats: </label> */}
                            <input id='bats' type="text" onChange={handleInput}  placeholder="Bats..." className='input-21'></input>
                            {/* <label>Throws: </label> */}
                            <input id='throws' type="text" onChange={handleInput}  placeholder="Throws..." className='input-22'></input>
                            {/* <label>Stats: </label> */}
                            <input id='stats' type="text" onChange={handleInput}  placeholder="Stats..." className='input-23'></input>
                            <input id='about' type="text" onChange={handleInput}  placeholder="About..." className='input-24'></input>
                            <div  className='div'>
                                <img src={newMember.imag ? newMember.imag : null } alt='NewImage' className='photo' />
                            </div>
                           
                 <buttom type='submit' className='newMemberButton' onClick={handleSubmit}  >Submit</buttom>
             </form>
         </div>
      </div>
  )
}

export default MemberUpDate