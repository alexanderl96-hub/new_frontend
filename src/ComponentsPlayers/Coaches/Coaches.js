import React, { useState, useEffect } from 'react'
import { Link} from 'react-router-dom'
import Navbar from '../../Components/navBar/Navbar'
import './coaches.css'

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

   
    const articule = (artist) => {
        let pro = "";
        let allt = artist.split(" ");
        if(allt.length >= 3){
          pro = allt[0] +' '+ allt[1] +' '+ allt[2]
        }else{
          pro = allt.join(' ')
        }
        return pro
      };

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
  
    // const targetId =(e)=>{
    //     let current = e.target.id
    //     if(current && on){
    //         setVal(current)
    //         setMore('⌃')
    //         setON(false)
    //     }else{
    //         setVal()
    //         setMore('⌄')
    //         setON(true)
    //     }
    // }

console.log(count)
console.log( coach, 'coach')
  return (
    <div style={{width:'100%'}} >
        <Navbar/>
        <div className='navCoach'>
        <h1 >Coaches</h1>
            <div className='divForm'>
                <form onChange={handleSubmit} >
                   <input id='name' type='text' onChange={handleInput} placeholder="🔍" ></input>
                </form>
            </div>
            <div className='divMatch'>{count.length === coachName.length ? 
                 <div className='divMatchAll' >Players: {count.length}</div> : 
                  <div className='divMatchPart'>{coachName.length > 0 ? 
                    <div >Match: {coachName.length}</div> : 
                       <div className='divMatchNone'>Not matchers</div>}</div>}
            </div>

        </div>
        <div className='payContent2' >
            {coachName.length  ? 
                <div className='payContCoach'>
                    {coachName.map((a, index)=>{
                              return(
                                <div  key={index} >
                                    <Link to={`/teams/groups/${a.id}`} style={{textDecoration: 'none'}}>
                                    <div className='playDivCoach'>
                                        <img src={a.imag} alt={a.id}  />
                                        <h3 >{articule(a.name)}</h3>
                                        <div style={{width: '170px', height: '100px'}}>
                                        <hr/>
                                            <h4 className='child1'><span>{a.current_team}</span></h4>
                                            <h4 className='child2'>{a.position}</h4>
                                        </div>
                                        {/* <p style={{width:'1px', cursor: 'pointer'}} onClick={open}>{more}</p>  */}
                                    
                                    </div>
                                    </Link>
                        </div>
                              )
                    })}
                 </div> : <div className="container2">           
                    <div className="carousel2">
                        <p className='slide'>No Coaches Found</p>
                        <p className='slide'>No Coaches Found</p>
                        <p className='slide'>No Coaches Found</p>                     
                        <p className='slide'>No Coaches Found</p>
                        <p className='slide'>No Coaches Found</p>
                        <p className='slide'>No Coaches Found</p>
                        <p className='slide'>No Coaches Found</p>
                        <p className='slide'>No Coaches Found</p>
                        <p className='slide'>No Coaches Found</p>
                    </div>
              </div> }
            
        </div>
    </div>
  )
}

export default Coaches


// <div >{coach.map((coach, index) =>{
//                     return(
//                         <div style={{backgroundColor: 'red'}}>{coach.id ? 
//                             <div id={coach.id} style={{display: 'flex', margin: '10px', backgroundColor: '#b9b6b6e9',
//                             borderRadius: '10px', boxShadow: '3px 4px 2px black', cursor: 'pointer', padding: '1px'}} >
//                                 <div >
//                                     <img src={coach.imag} alt={coach.id} style={{height: '120px', width: '150px', borderRadius: '10px'}}/>
//                                 </div>
//                                <div style={{width: '250px'}}> 
//                                    <div style={{textAlign: 'center'}}><span>{coach.name}</span></div>
//                                    <hr/>
//                                    <div> Team: {coach.current_team}</div>
//                                    <div> Age: {coach.age}</div>
//                                    <div> {coach?.city}, {coach?.state}, {coach?.country}</div>
//                                </div>
//                                <p style={{width:'1px', cursor: 'pointer'}} id={coach.id} onClick={targetId} >{more}</p> 
                               
//                                {/* <div> add a checkbox for a favorite coach keep a count of how many likes</div>   */}
//                            </div>: null}
//                            { Number(val) === coach.id ? <Link to={`/homeBase/groups/${coach.id}`}>
//                               <div style={{display: 'column', marginTop: '-8px', marginLeft: '10px', marginRight: '10px',backgroundColor: '#b9b6b6e9',
//                               borderRadius: '10px', boxShadow: '3px 4px 2px black', cursor: 'pointer', padding: '3px'}}>
//                                  <div style={{ margin: '15px', cursor: 'pointer'}} id={coach.id} >{coach.born}</div>
//                                  <div style={{margin: '15px'}}>{coach.about} more...</div>
//                               </div>
//                               </Link>
//                                : null}
//                          </div>
                        
                       
//                     )
//                 })} 