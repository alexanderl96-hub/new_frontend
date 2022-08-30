import React,  { useState, useEffect }from 'react'
import { useParams, Link} from 'react-router-dom'
// import './IndividualMember.css'
// import axios from 'axios'

const Seconddesing = () => {
    const [member, setMember] = useState([])
    // const [teamId, setTeamID] = useState([])
    // const [teamCareerId, setTeamCareerID] = useState([])
    // const [pitcherId, setPitcherID] = useState([])
    // const [pitcherCareerId, setPitcherCareerID] = useState([])
 //    const [coachId, setCoachID] = useState([])
    // const [group, setGroup] =useState([])
   
 
   let params = useParams()
   let memberId = params.id
   
    useEffect(() => {
        fetch(`https://my-baseball-teams.herokuapp.com/groups`)
        .then(res => res.json())
        .then(data =>{
            setMember(data)
        })
  },[])
  console.log(memberId, 'asdf')
  return (
    <div>
         <div className="section2"> 
           {/* {search ? } */}
            {member.map((a , index)=>{
                   return(
                 <div id={index} >
                            {Number(memberId) === a.id ?
                           <div className="section2Container">   
                   
                           <div className="innerSection2">
                               <div className="inner-innersection2">
                                <img src={a.imag} alt='' className ='image' />
                               </div>
                               <h3 className="innersection2H3" >{a.name}</h3>
                           </div>
                           <div >
                             <div className='innerSection2-3'> 
                                <p>Team: {a.current_team}</p>
                                <p>Number: {a.number}</p>
                                <p>Position: {a.position}</p>
                                <p>Salary: {a.salary}</p>
                                <p>About: {a.about}</p>
                                <p>Bats: alexander</p>
                                <p>Throws: alexander</p>
                                <p>Height: alexander</p>
                                <p>Weight: alexander</p>
                                {/* <Link to={`/teams/groups/${teamId}`} >More</Link> */}
                              </div>
                            <div className='innerSectionStart'>{a.team_id}</div>
                        </div>
                    </div> : null}
                </div>
                   
                   )})}
          
        </div>
    </div>
  )
}

export default Seconddesing