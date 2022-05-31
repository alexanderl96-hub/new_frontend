import React, { useState, useEffect } from 'react'
import Navbar from '../../Components/navBar/Navbar'

const Coaches = () => {
    const [coach, setCoach] = useState([])
    const [more, setMore] = useState(['⌄'])
    // const [search, setSearch] = useState({
    //     position: '',
    // })

    useEffect(() =>{
        //  let position = ['Infielder', 'Team Coached', 'Team Manager']
        fetch(`http://localhost:9000/groups`)
        .then(res => res.json())
        .then(data => {
            setCoach(data = data.filter(element => element.position.includes('Team')))
        })
    },[])

    const open = (e) =>{
        if(more === '⌄'){
            setMore('⌃')
        }else{
            setMore('⌄')
        }
     }
console.log(coach, 'allcoach')
  return (
    <div>
        <Navbar/>
        <h1>Coaches</h1>
        <div>
            {coach.map((coach, index) =>{
                return(
                    <div key={index} style={{display: 'flex', margin: '10px', backgroundColor: '#b9b6b6e9',
                     borderRadius: '10px', boxShadow: '3px 4px 2px black', cursor: 'pointer', padding: '1px'}}>
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
                        <p style={{width:'1px', cursor: 'pointer'}} onClick={open}>{more}</p>
                        
                        <div></div>
                       
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Coaches