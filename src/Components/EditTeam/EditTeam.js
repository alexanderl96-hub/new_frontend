import React, { useState, useEffect } from 'react';
import { useNavigate, Link, useParams} from 'react-router-dom';
import './EditTeam.css';
import axios from 'axios';

const EditTeam = () => {
    const navigate = useNavigate();
    const [oldImage, setOldImage] = useState('')
    const [currentName, setCurrentName] = useState('')
    const [editTeam, setEditTeam] = useState({
        name: '',
        imag: '',
    })
    let { id } = useParams();

    const handleInput =(e)=>{
        const {value} = e.target;
         setEditTeam({...editTeam, [e.target.id]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        updatedTeam(editTeam, id)
        navigate(`/teams/allmembers/${id}`)
        
      };


      const updatedTeam = (update, id) => {
        axios.put(`https://my-baseball-teams.adaptable.app/teams/${id}`, update).then(
          (res) => {
            const updateMyTeam = [...editTeam];
            updateMyTeam[id] = update;
            setEditTeam(updateMyTeam);
          },
          (error) => console.log(error)
        );
      }; 

  useEffect(() => {
    fetch(`https://my-baseball-teams.adaptable.app/teams/${id}`)
    .then((res) =>  res.json())
    .then(data =>{
        setOldImage(data.team.imag)
        setCurrentName(data.team.name)
    })
  },[id])

console.log(oldImage, currentName)
  return (
    <div style={{ minHeight: '811px'}}>
         <div style={{ display:'flex', justifyContent: 'center', 
                      textAlign: 'center', minHeight: '80px', fontSize: '35px', fontFamily: 'Spantaran', margin: '15px'}}>{currentName}</div>
         <div  style={{ display:'flex', justifyContent: 'space-around',  margin: '5%'}} >
             <img src={oldImage} alt=''  style={{ borderStyle: 'solid', borderColor: ' #070f3c', borderRadius: '5%', 
                  width:'300px',  height: '280px'}} />
            {editTeam.imag && <img src={editTeam.imag } alt='' style={{ borderStyle: 'solid', borderColor: ' #070f3c', borderRadius: '5%', 
                  width:'300px',  height: '280px'}}/>}
         </div>
        <div style={{ display:'flex', justifyContent: 'center', textAlign: 'center', minHeight: '80px',}}>
           
            <form style={{ display:'flex',  padding: '7px 20%', 
                                     width: '80%',  minHeight: '10%',backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', 
                                      border: '2.5px solid black'}}onSubmit={handleSubmit}>
                       
            
                            <input id='name'
                                   type='text' 
                                   onChange={handleInput}
                                    value={editTeam.name}
                                   style={{display:'none', width: '300px', border: '0.5px solid #BaBaBa', height: '40px', color: '#6c6c6c'}}
                                   placeholder='Username...'
                                    />
                           <input id='imag'
                                   type='text' 
                                   onChange={handleInput}
                                    value={editTeam.imag }
                                   style={{ width: '600px', border: '0.5px solid #BaBaBa', 
                                          height: '40px', color: '#6c6c6c', borderTopLeftRadius: '40px', borderBottomLeftRadius: '40px',
                                           paddingLeft: '10px', borderStyle: 'solid', borderRightColor: 'transparent' }}
                                   placeholder='User image link url...'
                                    />

                           
                           
                         
                            <button type='submit' value="Send" onSubmit={handleSubmit} style={{height: '40px',
                             width: '200px', border: '0.5px solid #BaBaBa', color: 'white', cursor: 'pointer',
                             borderTopRightRadius: '40px', borderBottomRightRadius: '40px', backgroundColor: '#371F76',
                             borderStyle: 'solid',  borderLeftColor: 'transparent' }} >Submit</button>
                   
                    </form>
                
         
       </div>
    </div>
  )
}

export default EditTeam