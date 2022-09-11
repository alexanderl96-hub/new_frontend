import React,  { useState, useEffect }from 'react'
import Navbar from '../../Components/navBar/Navbar'
import './players.css'


const Players = () => {    
    const [allplayers, setAllPlayers] = useState([])
    const [more, setMore] = useState(['⌄'])
    const [val, setVal] = useState([])
    const [search, setSearch] = useState({
        name: '',
    })

    useEffect(() => {
        let name = search.name
        fetch(`https://my-baseball-teams.herokuapp.com/groups`)
        .then(res => res.json())
        .then(data =>{
            setAllPlayers(data)
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
//   const handleReset = (e) =>{
//         setSearch({ [e.target.value] : "" })
//   }

 const open = (e) =>{
    if(more === '⌄'){
        setMore('⌃')
        
    }else{
        setMore('⌄')
    }
 }

  return (
    <div  >
        <Navbar/>
        {/* <h1 style={{backgroundColor: 'red',color: 'white',width:'10%', borderRadius: '10px', marginTop: '5px', marginBottom: '5px'}}>Players</h1> */}
        <div className='navPlay'>
            <h1 >Players</h1>

            <div className='divForm'>
                <form onChange={handleSubmit} >
                <input id='name' type='text' onChange={handleInput} placeholder="🔍" style={{}} ></input>
                {/* <button type='submit' onClick={handleReset} style={{padding: '2px', fontSize: '15px', marginLeft: '-49px'}} >Reset</button> */}
                </form>
            </div>
            <div className='divMatch'>
                {val.length === allplayers.length ? 
                 <div className='divMatchAll'>Players: {allplayers.length}</div> : 
                  <div className='divMatchPart'>{val.length > 0 ? 
                    <div >Match: {val.length}</div> : 
                       <div className='divMatchNone'>Not matchers</div>}</div>}
            </div>
        </div>
        <div style={{}}>
        { val.length  ? 
             <div style={{ paddingBottom: '10px', height: '100%'}}>
                  {val.map((player, index)=>{
                      return(
                        <div style={{}} key={index} >
                        <div style={{ backgroundColor: 'red', color: 'white', margin: '10px', display: 'flex',
                        padding: '10px', borderRadius: '10px', boxShadow: '3px 4px 2px black'}}>
                            <img src={player.imag} alt={player.id} 
                            style={{height: '110px', width: '140px', border: '1px solid', borderRadius: '10px'}} />
                            <h3 style={{width: '200px'}}>{player.name}</h3>
                            <div style={{width: '200px'}}>
                                <h4><span>{player.current_team}</span></h4>
                                <hr/>
                                <h4>{player.position}</h4>
                            </div>
                                         <p style={{width:'1px', cursor: 'pointer'}} onClick={open}>{more}</p> 
                         
                        </div>
                    </div>
                      )
                   })}
             </div> : 
              <div style={{backgroundColor: 'red', height: '200px'}}>
                  No found
                    {/* {allplayers.map((player, index) =>{
                        return (
                            <div style={{justifyItems: 'center'}} key={index}>
                                <div style={{ backgroundColor: 'red', margin: '10px', display: 'flex',
                                padding: '10px', borderRadius: '10px'}}>
                                    <img src={player.imag} alt={player.id} 
                                    style={{height: '110px', width: '140px', border: '1px solid', borderRadius: '10px'}} />
                                    <h3 style={{width: '200px'}}>{player.name}</h3>
                                    <div style={{width: '200px'}}>
                                        <h4><span>{player.current_team}</span></h4>
                                        <hr/>
                                        <h4>{player.position}</h4>
                                    </div>
                                         <p style={{width:'1px', cursor: 'pointer'}} onClick={open}>{more}</p> 
                                      
                                 
                                </div>
                            </div>
                        )
                    })} */}
          </div>}
          </div>
    </div>
  )
}

 export default Players
//<img src={'https://cdn.iconscout.com/icon/premium/png-256-thumb/baseball-player-1488400-1259743.png'} alt='' />