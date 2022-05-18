import React, { useState, useEffect } from 'react'
import { apiURL } from '../back-end/Back-End'
import { Link, useParams, useNavigate} from "react-router-dom";
import './TeamUpDate.css'
import axios from "axios";
const API_DTBASE = apiURL();

const TeamUpDate = () => {
  const [name, setName] = useState([])
  const [newgroup, setNewGroup] = useState([])
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
useEffect(() => {
  fetch(`http://localhost:9000/groups`)
  .then(res => res.json())
  .then(data =>{
    setNewGroup(data)
  })
},[])

console.log(newgroup)
const articule = (artist) => {
  let pro = "";
  let allt = artist.split(" ");
  if(allt.length > 3){
    pro = allt[0] +' '+ allt[1] +' '+ allt[2]
  }else{
    pro = allt.join(' ')
  }
  return pro
};


  return (
      <div className='TeamUpDate_Container'>
         <h1 className='newTitle'>Team Up Date</h1>
         <div style={{paddingTop: '10px', textAlign: 'start', marginLeft: '20px'}} > <Link to={`/homeBase/${id}`} className='newLinkBack'>Back</Link> </div>
         {/* <Link to={`/homebase`}><h3>HomeBase</h3></Link> */}
         <Link to={`/homeBase/newMember/${id}`} id={id} className="teamLinkDelete" >Add Member</Link>
         <div className='TeamUpDate_Wrap' >
              <div style={{ margin: '5px', color:'red'}}><h2>Team: {name}</h2></div>
                  <form className='TeamUpDate_Form' onSubmit={handleSubmit}>
                      <label htmlFor="">Image URL:</label> 
                      <input id='imag' type="text" value=''  onChange={handleInput} placeholder="Url..." className='upDateTeam' ></input>
                      <hr/>
                      <div className="Url_photo">
                        <img
                          src={group.imag ? group.imag : null}
                          alt='NewImage'
                          className="newphoto"
                          />
                      </div>
                      <buttom type='submit' className='updateButtom' onClick={handleSubmit}  >Submit</buttom>
                  </form>         
         </div>
         <div style={{border: '2px solid', height: '183px', margin: '5px', borderRadius: '5px', display: 'flex', flexDirection: 'row',  alignItems: 'space-around',backgroundColor: '#0000ff6d'}} className='last'> 
           {newgroup.map((players, index)=>{
             return(
               <div style={{marginLeft:'12px'}}>
                 
                { Number(id) === players.team_id ? 
                   <div style={{ border: '3px solid gray', borderRadius: '5px', color: 'white'}} >
                      <img src={players.imag} alt='' style={{height: '140px', width: '175px',borderRadius: '5px'}} /> 
                      <div style={{backgroundColor: 'gray', }}>{articule(players.name)}</div>
                  </div>
                  : null }
                  
                 </div>
             )  
           } )}
        </div>
      </div>
    
  )
}

export default TeamUpDate