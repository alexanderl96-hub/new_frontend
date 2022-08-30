import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import './desing.css'
import Second from './seconddesing'

const Desing = () => {
    const [newgroup, setNewGroup] = useState([])
    const [ newI, setNewI]= useState([])
    const [nombre, setCoachName] = useState([])
    const [search, setSearch] = useState([])
    let params = useParams()
    let teamId = params.id

    // function chooseP (e){
    //     console.log(e.target.id);
    //     setCoachName(e.target.id)
    // //    setMember({...newMember, [e.target.id]: value })
   
    // }
    const articule = (artist) => {
        let pro = "";
        let allt = artist.split(" ");
        if(allt.length >= 3){
          pro = allt[0] +' '+ allt[1]
        }else{
          pro = allt.join(' ')
        }
        return pro
      };
    useEffect(() => {
        let nombre = search.name
        fetch(`https://my-baseball-teams.herokuapp.com/groups`)
        .then(res => res.json())
        .then(data =>{
          setNewGroup(data)
          setNewI(data)
          setCoachName(data)
        })
      },[search])

      console.log(nombre, 'nombre')
      console.log(teamId)

  return (
   <div style={{ overflowX: 'hidden',overflowY: 'hidden', backgroundColor: '#80808095'}}>
       
        <div className='sectionNav'>
            <Link to='/teams'className='return' ><h3 className='returnH3' >🔙</h3></Link>     
            <div className='innerSectionNav' > 
               <button className='editPlayer' >Edit</button>
               <h3 className='deletePlayer' >🚮</h3>
            </div>
        </div>
        {/* <Second /> */}
        <div className="section2"> 
               { nombre.map((a, i)=>{
                    return(
                        <div>
                           {search === a.id ?
                              <div className="section2Container">   
                   
                              <div className="innerSection2">
                                  <div className="inner-innersection2">
                                   <img src={a.imag} alt='' className ='image' />
                                  </div>
                                  <h3 className="innersection2H3" >{articule(a.name)}</h3>
                              </div>
                              <div >
                                <div className='innerSection2-3'> 
                                   <hr/>
                                   <p><span>Team:</span> {a.current_team}</p>
                                   <p><span>Number:</span> {a.number}</p>
                                   <p><span>Position:</span> {a.position}</p>
                                   <p><span>Salary:</span> {a.salary}</p>
                                   <p><span>About: </span>{a.about}</p>
                                   <p><span>Bats:</span> {a.bats}</p>
                                   <p><span>Throws:</span> {a.throws}</p>
                                   <p><span>Height:</span> {a.height}</p>
                                   <p><span>Weight:</span> {a.weight}</p>
                                   {/* <Link to={`/teams/groups/${teamId}`} >More</Link> */}
                                 </div>
                               <div className='innerSectionStart'>{a.team_id}</div>
                           </div>
                       </div> : null}
                        </div>
                    )})}
                    {/* {Number(teamId) ? 
                    newI.map((a , index)=>{return ( <div><p>{a.name}</p></div> )}): null} */}
                    {/* { newI.map((a , index)=>{
                return(
              <div id={index} >
                         {Number(teamId) === a.team_id ?
                        <div className="section2Container">   
                
                        <div className="innerSection2">
                            <div className="inner-innersection2">
                             <img src={a.imag} alt='' className ='image' />
                            </div>
                            <h3 className="innersection2H3" >{a.name}</h3>
                        </div>
                        <div >
                          <div className='innerSection2-3'> 
                             <p>Team: {a.current_team}</p>
                             <p>Number: {a.number}</p>
                             <p>Position: {a.position}</p>
                             <p>Salary: {a.salary}</p>
                             <p>About: {a.about}</p>
                             <p>Bats: alexander</p>
                             <p>Throws: alexander</p>
                             <p>Height: alexander</p>
                             <p>Weight: alexander</p>
                             <Link to={`/teams/groups/${teamId}`} >More</Link>
                           </div>
                         <div className='innerSectionStart'>{a.team_id}</div>
                     </div>
                 </div> : null}
             </div>
                
                )})} */}
           
          
        </div>
        <div className="section3">
           {newgroup.map((a, index)=>{
               return (
                   <div className='scrollPlayers' >
                      { Number(teamId) === a.team_id ? 
                      <div className='media-group-container'  onClick={(e)=>setSearch(a.id)}  > 
                          <div className='media-group' > <img src={a.imag} alt='' /> </div>  
                           <h3  >{articule(a.name)}</h3>
                      </div> 
                       : null }                
                   </div>
               )
           })}
         </div>
        <div style={{backgroundColor: '#80808095',height:'20px'}}> </div>
       
   </div>
  )
}

export default Desing