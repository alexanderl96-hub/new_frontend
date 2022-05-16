import React, { useState, useEffect } from 'react'
import { apiURL } from '../back-end/Back-End'
import { Link, useParams, useNavigate} from "react-router-dom";
import './TeamUpDate.css'
import axios from "axios";
const API_DTBASE = apiURL();

const TeamUpDate = () => {
  const [name, setName] = useState([])
  //const [newgroup, setNewGroup] = useState([])
    let { id } = useParams();
    const navigate = useNavigate();

   
    const [group, setGroup] = useState({
        imag: '',
    });
     
    const handleInput =(e)=>{
      const {value} = e.target;
      setGroup({...group, [e.target.id]: value })
  }
  

  const handleSubmit = (e) => {
    e.preventDefault();
    updatedTeam(group, id)
    navigate(`/homebase`)
    
  };
   
  const updatedTeam = (updateteam, id) => {
    axios.put(`${API_DTBASE}/teams/${id}`, updateteam).then(
      (res) => {
        const newTeam = [...group];
        newTeam[id] = updateteam;
        setGroup(newTeam);
      },
      (error) => console.log(error)
    );
  };

     useEffect(() => {
    axios
      .get(`${API_DTBASE}/teams/${id}`)
      .then((res) => {
        const { data } = res;
        setGroup(data.team);
      })
      .catch(() => {
        navigate("/not found");
      });
  }, [id, navigate]);


    useEffect(() => {
      fetch(`http://localhost:9000/teams/${id}`)
      .then(res => res.json())
      .then(data =>{
          setName(data.team.name)
      })
},[id])



  return (
      <div className='TeamUpDate_Container'>
         <h1 className='newTitle'>Team Up Date</h1>
         <div style={{paddingTop: '10px', textAlign: 'start', marginLeft: '20px'}} > <Link to={`/homeBase/${id}`} className='newLinkBack'>Back</Link> </div>
         <Link to={`/homebase`}><h3>HomeBase</h3></Link>
         <div className='TeamUpDate_Wrap' >
              <div><h1>Team: {name}</h1></div>
                  <form className='TeamUpDate_Form' onSubmit={handleSubmit}>
                      <label htmlFor="">Image URL:</label> 
                      <input id='imag' type="text" value=''  onChange={handleInput} placeholder="Url..." className='upDateTeam' ></input>
                      <hr/>
                      <div className="Url_photo">
                        <img
                          src={group.imag ? group.imag : null}
                          alt='NewImage'
                          className="photo"
                          />
                      </div>
                      <buttom type='submit' className='updateButtom' onClick={handleSubmit}  >Submit</buttom>
                  </form>
                    
         </div>
      </div>
    
  )
}

export default TeamUpDate