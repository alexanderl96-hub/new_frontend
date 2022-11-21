import React,  { useState, useEffect }from 'react'
// import Navbar from '../../Components/navBar/Navbar'
import './players.css'
import {Link} from 'react-router-dom'
import Loading from '../../Loading'


const Players = () => {    
    const [allplayers, setAllPlayers] = useState([])
    const [val, setVal] = useState([])
    // const [day, setDay] = useState()
    const [search, setSearch] = useState({
        name: '',
    })
    const [count, setCount] = useState(<div className='Loading'><Loading/></div>);
  const [countInTimeout, setCountInTimeout] = useState([]);
  useEffect(() => {
   
    setTimeout(() => {
      setCountInTimeout(count)
    },2000);
    setCount()
  },[count])

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

  //     useEffect(() => {
  
  //      setInterval(interval, 5000)
  //     },[])
  // var date = new Date()
  //     function interval(){
  //       if(!day){
  //         let value = date.getFullYear()
  //         setDay(Number(value))
  //       }else if(day){
  //         setDay('')
  //       }
  //     } 

    useEffect(() => {
        let name = search.name
        fetch(`https://my-baseball-teams.adaptable.app/groups`)
        .then(res => res.json())
        .then(data =>{
            setAllPlayers(data = data.filter(element => !element.position.includes('Team')))
            setVal(data = data.filter(g => g.name.includes(name))); 
        })
  },[search])
 
  const handleInput = (e) =>{
    const {value} = e.target
    setSearch({[e.target.id]: value})
  }
 
  const handleSubmit = (e) =>{
     e.preventDefault()
    setVal(val)
  }


  return (
    <div className='playerMainContent'  >
        {/* <Navbar/> */}
        <div className='navPlay'>
            <h1 >Players </h1>

            <div className='divForm'>
                <form onChange={handleSubmit} >
                <input id='name' type='text' onChange={handleInput} placeholder="🔍"  />
                </form>
            </div>
            <div className='divMatch'>
                {val.length === allplayers.length ? 
                 <div className='divMatchAll'>Players: {allplayers.length}</div> : 
                  <div className='divMatchPart'>{val.length > 0 ? 
                    <div >Match: {val.length}</div> : 
                       <div className='divMatchNone'>None</div>}</div>}
            </div>
        </div>

       {!countInTimeout ? (

        <div className='payContentPlayer'>
        { val.length  ? 
             <div className='payContentReturn'>
                  {val.map((player, index)=>{
                      return(
                        <div  key={index} >
                            <Link to={`/teams/groups/${player.id}`} style={{textDecoration: 'none'}}>
                            <div className='playDivCont'>
                                <img src={player.imag} alt={player.id}  />
                                <h3 >{articule(player.name)}</h3>
                                <div style={{width: '170px', height: '100px'}}>
                                   <hr/>
                                    <h4 className='child1'><span>{player.current_team}</span></h4>
                                    <h4 className='child2'>{player.position}</h4>
                                </div>
                                {/* <p style={{width:'1px', cursor: 'pointer'}} onClick={open}>{more}</p>  */}
                            
                            </div>
                            </Link>
                        </div>
                      )
                   })}
             </div> : 
              <div className="container">
                 
                  <div className="carousel">
                      <p className='slide'>No Player Found</p>
                      <p className='slide'>No Player Found</p>
                      <p className='slide'>No Player Found</p>                     
                      <p className='slide'>No Player Found</p>
                      <p className='slide'>No Player Found</p>
                      <p className='slide'>No Player Found</p>
                      <p className='slide'>No Player Found</p>
                      <p className='slide'>No Player Found</p>
                      <p className='slide'>No Player Found</p>
                      <p className='slide'>No Player Found</p>                     
                      <p className='slide'>No Player Found</p>
                      <p className='slide'>No Player Found</p>
                      <p className='slide'>No Player Found</p>
                      <p className='slide'>No Player Found</p>
                </div>
          </div>}
          </div>

          ) : (
            <div className='Loading'><Loading/></div>
          )}
    </div>
  )
}

 export default Players
//<img src={'https://cdn.iconscout.com/icon/premium/png-256-thumb/baseball-player-1488400-1259743.png'} alt='' />