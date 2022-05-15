import React, { useState  } from 'react'
import { apiURL } from '../back-end/Back-End'
import { Link , useNavigate, useParams} from 'react-router-dom'
// import { useNavigate } from 'react-router-dom';
import axios from "axios";
import '../teamUpDate/TeamUpDate.css'
import './NewTeam.css'

const API_DTBASE = apiURL();

const NewTeam = () => {
  const navigate = useNavigate();
  const [newTeam, setNewTeam] = useState({
      name: '',
      imag: '',
  })
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
      navigate('/homebase');
      })
  }

  return (
    <div className='newTeam_Container'>
         <h1 className='newTitle'>New Team</h1>
         <div style={{paddingTop: '10px', textAlign: 'start', marginLeft: '20px'}} > <Link to={`/homeBase`} className='newLinkBack'>Back</Link> </div>
         <div className='newTeam_Wrap' >
             <div>
                <form className='newTeam_Form' onSubmit={handleSubmit} >
                    <label htmlFor="">Name:</label>
                    <input id='name' type="text" onChange={handleInput}  placeholder="Name..." className='newInputteam' ></input>
                    <label htmlFor="">Image URL:</label> 
                    <input id='imag' type="text" onChange={handleInput} value='' placeholder="Image URL..." className='newInputteam' ></input>
                    <hr/>
                    <buttom type='submit' className='newTeamButton' onClick={handleDelete} >Reset</buttom>
                    <buttom type='submit' className='newTeamButton' onClick={handleSubmit} >Add New</buttom>
                </form>
             </div>
           <div className="newTeam_photo">
                <img
                src={newTeam.imag ? newTeam.imag : null}
                alt='NewImage'
                className="photo"
                />
                
           </div>  
         </div>
         <div className='newTeam_Name'><h3>{newTeam.name}</h3></div>
      </div>
  )
}

export default NewTeam