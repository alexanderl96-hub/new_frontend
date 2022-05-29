import React,  { useState, useEffect }from 'react'
import Navbar from '../../Components/navBar/Navbar'
import axios from 'axios'

const Players = () => {
    const [allplayers, setAllPlayers] = useState([])
    const [val, setVal] = useState([])
    const [search, setSearch] = useState([])

    useEffect(() => {
        fetch(`http://localhost:9000/groups`)
        .then(res => res.json())
        .then(data =>{
            setAllPlayers(data)
           
        })
  },[])

  useEffect(() => {
    fetch(`http://localhost:9000/groups/${search}`)
    .then(res => res.json())
    .then(data =>{
        setVal(data.mao((name, i)=>{
            return name[name]
        }))
       
    })
},[search])
//   const getsearch =async (userinput) => {
//     const {data} = await axios.get(`http://localhost:9000/groups${userinput}`
//     )
//     return data.items
// }
   
  const handleInput = (e) =>{
    const {value} = e.target
    setSearch({...search, [e.target.id]: value})
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
  }

 console.log(allplayers)
 console.log(search.name, 'input')
 console.log(val, 'inputadfsadf')
 
  return (
    <div>
        <Navbar/>
        <h1>Players</h1>
        <div style={{marginRight: '-600px', width: '1400px'}}>
            <fom >
               <input id='name' type='text' onChange={handleInput}  style={{padding: '2px'}}></input>
            </fom>
        </div>
       
       {/* <h2>{allplayers.length} </h2>  */}
        <div >
            {allplayers.map((player, index) =>{
                return (
                   <div style={{justifyItems: 'center'}}>
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
                       </div>
                   </div>
                )
            })}
        </div>
    </div>
  )
}

export default Players