import React, { useState, useEffect } from 'react'
import { Link} from 'react-router-dom'
import Navbar from '../../Components/navBar/Navbar'
import './coaches.css'
import Loading from '../../Loading'

const Coaches = () => {
    const [coach, setCoach] = useState([])
    const [count, setCount] = useState([])
    const [coachName, setCoachName] = useState([])
    const [search, setSearch] = useState({
        name: '',
    })
    const [countOut, setCountOut] = useState(<div className='Loading'><Loading/></div>);
    const [countInTimeout, setCountInTimeout] = useState([]);
    useEffect(() => {
     
      setTimeout(() => {
        setCountInTimeout(countOut)
      },2000);
      setCountOut()
    },[countOut])
   
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
        fetch(`https://my-baseball-teams.adaptable.app/groups`)
        .then(res => res.json())
        .then(data => {
            setCoach(data = data.filter(element => element.position.includes('Team')));
            setCoachName(data = data.filter(g => g.name.includes(namecoach ) ));
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
    <div  className='coachMainContent' >
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
                       <div className='divMatchNone'>None</div>}</div>}
            </div>

        </div>
        {!countInTimeout ? (

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
                    </div>
              </div> }
            
        </div>
        ) : (
            <div className='Loading'><Loading/></div>
          )}
    </div>
  )
}

export default Coaches

