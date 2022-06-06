import React, { useState  } from 'react'
import { Link , useNavigate } from 'react-router-dom'
import axios from "axios";
import '../teamUpDate/TeamUpDate.css'
import './NewTeam.css'


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

  const handleSubmit = (e) =>{
    e.preventDefault()
    addTeam(newTeam)
  }
  const addTeam = (newTeam) => {
    axios.post(`https://my-baseball-teams.herokuapp.com/teams`, newTeam).then((res)=>{
      navigate('/teams');
      })
  }

  return (
    <div className='newTeam_Container'>
         <h1 className='newTitle'>New Team</h1>
         <div className='divLink'> <Link to={`/teams`} className='newLinkBack'>Back</Link> </div>
         <div className='newTeam_Wrap' >
                <form className='newTeam_Form' onSubmit={handleSubmit} >
                    <label htmlFor="">Name:</label>
                    <input id='name' type="text" onChange={handleInput}  placeholder="Name and lastname..." className='newInputteam' ></input>
                    <label htmlFor="">Image URL:</label> 
                    <input id='imag' type="text" onChange={handleInput} value='' placeholder="Image URL..." className='newInputteam' ></input>
                    <hr/>
                    <div className="newTeam_photo1">
                            <img
                            src={newTeam.imag ? newTeam.imag : null}
                            alt='NewImage'
                            className="newphoto1"
                            />
                            
                      </div>  
                    <buttom type='submit' className='newTeamButton' onClick={handleDelete} >Reset</buttom>
                    <buttom type='submit' className='newTeamButton' onClick={handleSubmit} >Add New</buttom>
                </form>
           
         </div>
         <div className='newTeam_Name'><h3>{newTeam.name}</h3></div>
      </div>
  )
}

export default NewTeam