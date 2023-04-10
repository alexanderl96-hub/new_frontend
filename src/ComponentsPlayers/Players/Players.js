import React,  { useState, useEffect }from 'react'
// import Navbar from '../../Components/navBar/Navbar'
import './players.css'
import {Link} from 'react-router-dom'
import Loading from '../../Loading'


const Players = () => {    
    const [allplayers, setAllPlayers] = useState([])
    const [val, setVal] = useState([])
    const [openInput, setOpenInput] = useState(false)
    const [searchName, setSearchName] = useState({
        search: '',
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
   function handleOpenInput (){
     setOpenInput(true)
   }

    useEffect(() => {
        let name = searchName.search
        fetch(`https://my-baseball-teams.adaptable.app/groups`)
        .then(res => res.json())
        .then(data =>{
            setAllPlayers(data = data.filter(element => !element.position.includes('Team')))
            setVal(data = data.filter(g => g.name.includes(name))); 
        })
  },[searchName])
 
  const handleInput = (e) =>{
    const {value} = e.target
    setSearchName({[e.target.id]: value})
  }
 
  const handleSubmit = (e) =>{
     e.preventDefault()
    setVal(val)
  }


  return (
    <div className='playerMainContent'  >
        {/* <Navbar/> */}
        <div className='navPlay'>
           <div></div>

            <div className='divFormPlay'>  
              {/* { !openInput ?  <div onClick={handleOpenInput} className='divFormIcon'>🔍</div> : */}
               <form onChange={handleSubmit} >
                   {/* { !openInput ?  <button onClick={handleOpenInput} className='divFormIcon'>Search</button> :
                    <input id='search' type='search' onChange={handleInput} placeholder="Type ..."  className='checkInputPlay'
                  /> } */}
                   <input id='search' 
                          type='search'
                          onChange={handleInput} 
                          onClick={(()=> openInput === false ? setOpenInput(true) : setOpenInput(false) )}
                          placeholder='🔍' 
                          className='checkInputPlay'
                  /> 
                </form>  
            </div>
          
            <div className='divMatch'>
           

                {val.length === allplayers.length ? 
                 <p className='divMatchAll'>Players: {allplayers.length}</p> : 
                  <p className='divMatchPart'>{val.length > 0 ? 
                    <p >Match: {val.length}</p> : 
                       <p className='divMatchNone'>None</p>} </p>}
            </div>
        </div>
        <div  className='titlePlayCoach'> Players </div>
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
                                <div style={{}} className='playDiv-child'>
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
              <div className="containerNoplay" style={{backgroundColor: 'white'}} >
                 
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