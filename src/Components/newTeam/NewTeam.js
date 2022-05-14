import React, { useState , useEffect } from 'react'
import { apiURL } from '../back-end/Back-End'
import {Link, useHistory } from 'react-router-dom'
import axios from "axios";
import '../teamUpDate/TeamUpDate.css'
import './NewTeam.css'

const API_DTBASE = apiURL();

const NewTeam = () => {
     const [teams, setTeams] = useState([]);
    //  const [teamval, setTeamVal] = useState({});
 
//    const history = useHistory();
  const [newTeam, setNewTeam] = useState({
      name: '',
      imag: '',
  })

  useEffect(() => {
    axios.get(`${API_DTBASE}/teams`).then((res) => {
      const { data } = res;
      setTeams(data);
    });
  }, []);

  const handleInput = (e) =>{
    const {value} = e.target
    setNewTeam({...newTeam, [e.target.id]: value})
  }
  
  const handleDelete = (e) =>{
    if(newTeam.imag || newTeam.name){
        setNewTeam({ [e.target.value] : '' })
    }

   
  }
console.log(newTeam, 'val')

  const handleSubmit = (e) =>{
    e.preventDefault()
    addTeam(newTeam)
  }
  const addTeam = (newTeam) => {
    axios.post(`${API_DTBASE}/teams`, newTeam).then((res)=>{
        // history.push('/teams')
      })
  }

  return (
    <div className='TeamUpDate_Container'>
         <div >New Team</div>
         <div style={{paddingBottom: '15px'}} > <Link to={`/homeBase`} className='memberLink1' >Back</Link> </div>
         <div className='TeamUpDate_Wrap' >
             <div>
                <form className='TeamUpDate_Form' onSubmit={handleSubmit} >
                    <label htmlFor="">Name:</label>
                    <input id='name' type="text" onChange={handleInput} value='' placeholder="Name..." className='newInputteam' ></input>
                    <label htmlFor="">Image URL:</label> 
                    <input id='imag' type="text" onChange={handleInput} value='' placeholder="Image URL..." className='newInputteam' ></input>
                    <hr/>
                    <bottom type='submit' className='' onClick={handleDelete} style={{cursor: 'pointer'}}>Reset</bottom>
                    <bottom type='submit' className='' >Submit</bottom>
                </form>
             </div>
           <div className="newTeam_photo">
                <img
                src={newTeam.imag ? newTeam.imag : null}
                alt={'all'}
                style={{ width: "350px", height: "270px" }}
                className="photo"
                />
                 <div style={{marginTop: "30%"}}><h3>{newTeam.name}</h3></div>
           </div>  
         </div>
        
      </div>
  )
}

export default NewTeam