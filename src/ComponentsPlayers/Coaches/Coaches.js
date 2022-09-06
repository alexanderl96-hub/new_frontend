import React, { useState, useEffect } from 'react'
import { Link} from 'react-router-dom'
import Navbar from '../../Components/navBar/Navbar'

const Coaches = () => {
    const [coach, setCoach] = useState([])
    const [on , setON] = useState([true]);
    const [more, setMore] = useState(['⌄'])
    const [val, setVal] = useState([])
    const [count, setCount] = useState([])
    const [coachName, setCoachName] = useState([])
    const [search, setSearch] = useState({
        name: '',
    })

   
    useEffect(() =>{
        let namecoach = search.name
        fetch(`https://my-baseball-teams.herokuapp.com/groups`)
        .then(res => res.json())
        .then(data => {
            setCoach(data = data.filter(element => element.position.includes('Team')));
            setCoachName(data = data.filter(g => g.name.includes(namecoach)));
        })
    },[search]);

    const handleInput = (e) =>{
        const {value} = e.target
        setSearch({[e.target.id]: value})
      }
      const handleSubmit = (e) =>{
        e.preventDefault()
       setCount(coachName)
     }
  
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


  return (
    <div style={{width:'100%'}} >
        <Navbar/>
        <h1 style={{backgroundColor: 'gray',color: 'white',width:'10%', borderRadius: '10px', marginTop: '5px', marginBottom: '5px'}}>Coaches</h1>
        <div style={{display:'flex'}}>
            <div >
                <fom onChange={handleSubmit} >
                   <input id='name' type='text' onChange={handleInput} placeholder="🔍" style={{padding: '2px',color:'blue',  marginLeft: '400px',width: '300px'}} ></input>
                </fom>
            </div>
            <div>{coach.length === coachName.length ? 
                 <div style={{backgroundColor: 'gray', color: 'white', width: '80px', borderRadius: '10px', padding:'1px', textAlign: 'center'}}>Players: {coach.length}</div> : 
                  <div>{coachName.length > 0 ? 
                    <div style={{backgroundColor: 'gray', color: 'white', width: '80px', borderRadius: '10px',padding:'1px', textAlign: 'center'}}>Match: {coachName.length}</div> : 
                       <div style={{backgroundColor: 'gray', color: 'white', width: '95px', borderRadius: '10px',padding:'1px', textAlign: 'center'}}>Not matchers</div>}</div>}</div>

        </div>
        <div>
            {count.length ? 
            <div>{coachName ? 
               <div>{coachName.map((name, index)=>{
                return (
                    <div>{name.id ? 
                        <div id={name.id} style={{display: 'flex', margin: '10px', backgroundColor: '#b9b6b6e9',
                        borderRadius: '10px', boxShadow: '3px 4px 2px black', cursor: 'pointer', padding: '1px'}} >
                            <div >
                                <img src={name.imag} alt={name.id} style={{height: '120px', width: '150px', borderRadius: '10px'}}/>
                            </div>
                           <div style={{width: '250px'}}> 
                               <div style={{textAlign: 'center'}}><span>{name.name}</span></div>
                               <hr/>
                               <div> Team: {name.current_team}</div>
                               <div> Age: {name.age}</div>
                               <div> {name?.city}, {name?.state}, {name?.country}</div>
                           </div>
                           <p style={{width:'1px', cursor: 'pointer'}} id={name.id} onClick={targetId} >{more}</p> 
                           
                           {/* <div> add a checkbox for a favorite coach keep a count of how many likes</div>   */}
                       </div>: null}
                       { Number(val) === name.id ? <Link to={`/homeBase/groups/${name.id}`}>
                          <div style={{display: 'column', marginTop: '-8px', marginLeft: '10px', marginRight: '10px',backgroundColor: '#b9b6b6e9',
                          borderRadius: '10px', boxShadow: '3px 4px 2px black', cursor: 'pointer', padding: '3px'}}>
                             <div style={{ margin: '15px', cursor: 'pointer'}} id={name.id} >{name.born}</div>
                             <div style={{margin: '15px'}}>{name.about} more...</div>
                          </div>
                          </Link>
                           : null}
                     </div>
                )
                 })}</div> : null}</div> :
             <div>{coach.map((coach, index) =>{
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
                       { Number(val) === coach.id ? <Link to={`/homeBase/groups/${coach.id}`}>
                          <div style={{display: 'column', marginTop: '-8px', marginLeft: '10px', marginRight: '10px',backgroundColor: '#b9b6b6e9',
                          borderRadius: '10px', boxShadow: '3px 4px 2px black', cursor: 'pointer', padding: '3px'}}>
                             <div style={{ margin: '15px', cursor: 'pointer'}} id={coach.id} >{coach.born}</div>
                             <div style={{margin: '15px'}}>{coach.about} more...</div>
                          </div>
                          </Link>
                           : null}
                     </div>
                    
                   
                )
            })}</div> 
            }
            
        </div>
    </div>
  )
}

export default Coaches