import React, { useState, useEffect } from 'react'
import { Link, useParams, useHistory } from "react-router-dom";
import './TeamUpDate.css'


const TeamUpDate = () => {
    // let { id } = useParams();
    // let history = useHistory();
    // const [team, setTeam] = useState([])

    // const [group, setGroup] = useState({
    //     name: '',
    //     imag: '',
    // });

    // const update = (updateTeam, id ) => { }

    // const handleInput =(e)=>{
    //     const {value} = e.target;
    //     setGroup({...group, [e.target.id]: value })
    // }

    // const handleSubmit =()=>{
        
    // }

    // useEffect(()=>{}, [])


  return (
      <div className='TeamUpDate_Container'>
         <div>TeamUpDate</div>
         <div className='TeamUpDate_Wrap'>
             <form className='TeamUpDate_Form'>
                 <label htmlFor="">Name:</label>
                 <input id='' type="text" value='' placeholder="" className='' ></input>
                 <label htmlFor="">Image URL:</label> 
                 <input id='' type="text" value='' placeholder="" className='' ></input>
                 <hr/>
                 <bottom type='submit' className='' >Submit</bottom>
             </form>
             <div className="songs_photo">
            <img
              src={null}
              alt={'all'}
              style={{ width: "350px", height: "320px" }}
              className="photo"
            />
          </div>
         </div>
      </div>
    
  )
}

export default TeamUpDate