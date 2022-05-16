import React, { useState } from 'react'
import { apiURL } from '../back-end/Back-End'
import { Link , useNavigate, useParams } from 'react-router-dom'
import './NewMember.css'
import axios from 'axios'

const API_DTBASE = apiURL();

const NewMember = () => {
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
   
    const handleInput = (e) =>{
        const {value} = e.target
        setMember({...newMember, [e.target.id]: value})
      }
    
      const handleSubmit = (e) =>{
        e.preventDefault()
        addMember(newMember)
      }
      const addMember = (newMember) => {
        axios.post(`${API_DTBASE}/groups`, newMember).then((res)=>{
          navigate(`/homebase/${id}`);
          })
      }
    
//     useEffect(() => {
//         fetch(`http://localhost:9000/teams/${id}`)
//         .then(res => res.json())
//         .then(data =>{
//             setMember(data.team.name)
//         })
//   },[id])
  return (
    <div className='newMember_Container'>
         <h1 className='newTitle'>New Member</h1>
         <div style={{paddingTop: '10px', textAlign: 'start', marginLeft: '20px'}} > <Link to={`/homeBase/${id}`} className='newLinkBack'>Back</Link> </div>
         <div>
             <h5>New Member</h5>
             <div>
             <form onSubmit={handleSubmit} >
                 {/* <div style={{display: 'flex'}}>              */}
                        {/* <div style={{display: 'flex', flexDirection: 'column'}}> */}
                            <label>Name: </label>
                            <input id='name' type="text" onChange={handleInput} placeholder="Name ..." style={{width: '200px', borderRadius: '6px', fontSize: '15px', padding: '2px'}}></input>
                            <label>Team_Id: </label>
                            <input id='team_id' type="text" onChange={handleInput}  placeholder="Team_Id ..." style={{width: '200px', borderRadius: '6px', fontSize: '15px', padding: '2px'}}></input>
                            <label>Nickname: </label>
                            <input id='nickname'type="text" onChange={handleInput}  placeholder="Nickname..." style={{width: '200px', borderRadius: '6px', fontSize: '15px', padding: '2px'}}></input>
                            <label>Image URL: </label>
                            <input id='imag' type="text" onChange={handleInput}  placeholder="Url..." style={{width: '200px', borderRadius: '6px', fontSize: '15px', padding: '2px'}}></input>
                            <label>Born: </label>
                            <input id='born' type="text" onChange={handleInput}  placeholder="Months day, year" style={{width: '200px', borderRadius: '6px', fontSize: '15px', padding: '2px'}}></input>
                            <label>City: </label>
                            <input id='city' type="text" onChange={handleInput}  placeholder="City..." style={{width: '200px',borderRadius: '6px', fontSize: '15px', padding: '2px'}}></input>
                            <label>State: </label>
                            <input id='state' type="text" onChange={handleInput} placeholder="State..." style={{width: '200px', borderRadius: '6px', fontSize: '15px', padding: '2px'}}></input>
                            <label>Country: </label>
                            <input id='country' type="text" onChange={handleInput} placeholder="Country..." style={{width: '200px', borderRadius: '6px', fontSize: '15px', padding: '2px'}}></input>
                        {/* </div>
                        <div style={{display: 'flex', flexDirection: 'column'}}>  */}
                            <label>Age: </label>
                            <input id='age' type="text" onChange={handleInput}  placeholder="Age..." style={{width: '200px',borderRadius: '6px', fontSize: '15px', padding: '2px'}}></input>
                            <label>Height: </label>
                            <input id='height' type="text" onChange={handleInput}  placeholder="Height..." style={{width: '200px',borderRadius: '6px', fontSize: '15px', padding: '2px'}}></input>
                            <label>Weight: </label>
                            <input id='weight' type="text" onChange={handleInput}  placeholder="Weight..." style={{width: '200px',borderRadius: '6px', fontSize: '15px', padding: '2px'}}></input>
                            <label>Current Team: </label>
                            <input id='currentTeam' type="text" onChange={handleInput}  placeholder="Current Team..." style={{width: '200px',borderRadius: '6px', fontSize: '15px', padding: '2px'}}></input>
                            <label>Salary: </label>
                            <input id='salary' type="text" onChange={handleInput}   placeholder="Salary..." style={{width: '200px',borderRadius: '6px', fontSize: '15px', padding: '2px'}}></input>
                            <label>Number: </label>
                            <input id='number' type="number" onChange={handleInput} placeholder="Number..." style={{width: '200px',borderRadius: '6px', fontSize: '15px', padding: '2px'}}></input>
                            <label>Education: </label>
                            <input id='education' type="text" onChange={handleInput}  placeholder="Education..." style={{width: '200px',borderRadius: '6px', fontSize: '15px', padding: '2px'}}></input>
                        {/* </div>            
                        <div style={{display: 'flex', flexDirection: 'column'}}> */}
                            <label>Spouse: </label>
                            <input id='spouse' type="text" onChange={handleInput}  placeholder="Spouse..." style={{width: '200px', borderRadius: '6px', fontSize: '15px', padding: '2px'}}></input>
                            <label>Parents: </label>
                            <input id='parents' type="text" onChange={handleInput}  placeholder="Parents..." style={{width: '200px', borderRadius: '6px', fontSize: '15px', padding: '2px'}}></input>
                            <label>Children: </label>
                            <input id='children' type="text" onChange={handleInput}  placeholder="Children..." style={{width: '200px', borderRadius: '6px', fontSize: '15px', padding: '2px'}}></input>
                            <label>Siblings: </label>
                            <input id='siblings' type="text" onChange={handleInput}  placeholder="Siblings..." style={{width: '200px', borderRadius: '6px', fontSize: '15px', padding: '2px'}}></input>
                            <label>Position: </label>
                            <input id='position' type="text" onChange={handleInput} placeholder="Position..." style={{width: '200px', borderRadius: '6px', fontSize: '15px', padding: '2px'}}></input>
                            <label>Bats: </label>
                            <input id='bats' type="text" onChange={handleInput}  placeholder="Bats..." style={{width: '200px',borderRadius: '6px', fontSize: '15px', padding: '2px'}}></input>
                            <label>Throws: </label>
                            <input id='throws' type="text" onChange={handleInput}  placeholder="Throws..." style={{width: '200px',borderRadius: '6px', fontSize: '15px', padding: '2px'}}></input>
                            <label>Stats: </label>
                            <input id='stats' type="text" onChange={handleInput}  placeholder="Stats..." style={{width: '200px',borderRadius: '6px', fontSize: '15px', padding: '2px'}}></input>
                        {/* </div>
                        <div style={{display: 'flex', flexDirection: 'column'}}> */}
                            <label>About: </label>
                            <input id='about' type="text" onChange={handleInput}  placeholder="About..." style={{width: '320px', borderRadius: '6px', fontSize: '15px', padding: '2px', height:'120px'}}></input>
                            <div style={{height: '240px', width: '200px', border: '5px solid #595858', marginTop: '25px', borderRadius: '40px'}}>
                                <img src={newMember.imag ? newMember.imag : null } alt='NewImage' className="photo" />
                            </div>
                           
                        {/* </div>    */}

                 {/* </div> */}
                 <buttom type='submit' className='newMemberButton' onClick={handleSubmit} style={{marginTop: '30px', width: '8%',fontSize: '15px', cursor: 'pointer',borderRadius: '4px'}}>Add New</buttom>
             </form>
             </div>
         </div>
    </div>
  )
}

export default NewMember