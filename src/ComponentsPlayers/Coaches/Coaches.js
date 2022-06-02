import React, { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom'
import Navbar from '../../Components/navBar/Navbar'

const Coaches = () => {
    const [coach, setCoach] = useState([])
    const [on , setON] = useState([true]);
    const [more, setMore] = useState(['⌄'])
    const [val, setVal] = useState([])
    // const [search, setSearch] = useState({
    //     position: '',
    // })


    useEffect(() =>{
        fetch(`http://localhost:9000/groups`)
        .then(res => res.json())
        .then(data => {
            setCoach(data = data.filter(element => element.position.includes('Team')))
        })
    },[])
  
    const targetId =(e)=>{
        let current = e.target.id
        if(current && on){
            setVal(current)
            setMore('⌃')
            setON(false)
        }else{
            setVal()
            setMore('⌄')
            setON(true)
        }
    }
// console.log(teamId, 'allcoach')
  console.log( coach, 'team.id')
  return (
    <div>
        <Navbar/>
        <h1>Coaches</h1>
        {/* add input tag to search for an specific coach */}
        <div>
            {coach.map((coach, index) =>{
                return(
                    <div>{coach.id ? 
                        <div id={coach.id} style={{display: 'flex', margin: '10px', backgroundColor: '#b9b6b6e9',
                        borderRadius: '10px', boxShadow: '3px 4px 2px black', cursor: 'pointer', padding: '1px'}} >
                            <div >
                                <img src={coach.imag} alt={coach.id} style={{height: '120px', width: '150px', borderRadius: '10px'}}/>
                            </div>
                           <div style={{width: '250px'}}> 
                               <div style={{textAlign: 'center'}}><span>{coach.name}</span></div>
                               <hr/>
                               <div> Team: {coach.current_team}</div>
                               <div> Age: {coach.age}</div>
                               <div> {coach?.city}, {coach?.state}, {coach?.country}</div>
                           </div>
                           <p style={{width:'1px', cursor: 'pointer'}} id={coach.id} onClick={targetId} >{more}</p> 
                           
                           {/* <div> add a checkbox for a favorite coach keep a count of how many likes</div>   */}
                       </div>: null}
                       { Number(val) === coach.id ? 
                          <div style={{display: 'column', marginTop: '-8px', marginLeft: '10px', marginRight: '10px',backgroundColor: '#b9b6b6e9',
                          borderRadius: '10px', boxShadow: '3px 4px 2px black', cursor: 'pointer', padding: '3px'}}>
                             <div style={{ margin: '15px', cursor: 'pointer'}} id={coach.id} >{coach.born}</div>
                             <div style={{margin: '15px'}}>{coach.about} more...</div>
                          </div>
                           : null}
                     </div>
                    
                   
                )
            })}
        </div>
    </div>
  )
}

export default Coaches