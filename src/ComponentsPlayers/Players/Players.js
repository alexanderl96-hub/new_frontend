import React,  { useState, useEffect }from 'react'
import Navbar from '../../Components/navBar/Navbar'
// import { useParams} from 'react-router-dom'

const Players = () => {
    // let params = useParams()
    // let memberId = params.id

    const [allplayers, setAllPlayers] = useState([])
    const [more, setMore] = useState(['⌄'])
    const [val, setVal] = useState([])
    const [search, setSearch] = useState({
        name: '',
    })

    useEffect(() => {
        let name = search.name
        fetch(`http://localhost:9000/groups`)
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
  const handleReset = (e) =>{
        setSearch({ [e.target.value] : "" })
  }

 const open = (e) =>{
    if(more === '⌄'){
        setMore('⌃')
    }else{
        setMore('⌄')
    }
 }
 console.log(more, 'check open')
  return (
    <div style={{ marginBottom: '17px'}} >
        <Navbar/>
        <h1>Players</h1>
        <div style={{marginRight: '-600px', width: '1400px'}}>
            <fom onChange={handleSubmit}>
               <input id='name' type='text' onChange={handleInput} placeholder="..." style={{padding: '2px'}} ></input>
               <button type='submit' onClick={handleReset} style={{padding: '2px', fontSize: '15px', marginLeft: '-49px'}} >Reset</button>
            </fom>
            <div>{val.length === 0 ? 
            <div><h3 style={{backgroundColor: 'red', color: 'white', width: '9%', borderRadius: '10px'}}>Not matchers</h3></div> : 
            <div><h3 style={{backgroundColor: 'red', color: 'white', width: '9%', borderRadius: '10px'}}>Match: {val.length}</h3></div>  }</div>
        </div>
        { val.length  ? 
             <div style={{}}>
                  {val.map((player, index)=>{
                      return(
                        <div style={{justifyItems: 'center'}} key={index} >
                        <div style={{width: '97%', backgroundColor: 'red', color: 'white', margin: '10px', display: 'flex',
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
              <div >
                    {allplayers.map((player, index) =>{
                        return (
                            <div style={{justifyItems: 'center'}} key={index}>
                                <div style={{width: '97%', backgroundColor: 'red', margin: '10px', display: 'flex',
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
                    })}
          </div>}
    </div>
  )
}

export default Players