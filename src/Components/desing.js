import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactStars from "react-rating-stars-component"
// import DeleteIcon from '@mui/icons-material/Delete';

import './desing.css'
import axios from 'axios'


const Desing = () => {
    const [newgroup, setNewGroup] = useState([])
    const [ newI, setNewI]= useState([])
    const [ newtest, setNewtest]= useState([])
    const [nombre, setCoachName] = useState([])
    const [search, setSearch] = useState([])
    const [ab, setAB] = useState([])
     const [group, setGroup] =useState([])

     const [start, setStart] =useState(0)
     const [last, setLast] =useState(10)
     const [start1, setPreviuos] =useState(0)
     const [last1, setLastP] =useState(10)
    // let sum = 0
    let fisrt = 0
    let params = useParams()
    let teamId = params.id


    const ratingChanged = (a) => { 
      console.log(ab)
      let rest = ab
      if(ab ===  0.500 ){ rest = 5.0 }
      else if(a >= 0.450 && a < 0.500){ rest = 4.5 }
      else if(a >= 0.400 && a < 0.450){ rest = 4.0 }
      else if(a >= 0.350 && a < 0.400){ rest = 3.5 }
      else if(a >= 0.300 && a < 0.350){ rest = 3.0 }
      else if(a >= 0.250 && a< 0.300){ rest = 2.5 }
      else if(a >= 0.200 && a < 0.250){ rest = 2.0 }
      else if(a >= 0.150 && a < 0.200){ rest = 1.5 }
      else if(a>= 0.100 && a < 0.150){ rest = 1.0 }
      else if(a >= 0.50 && a < 0.10){ rest = 4.5 }
      else if(a>= 0.10){ rest = 0.0}
      return rest
    }; 
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

    function nextrow (){
      const value = newtest.length - 10
      let count = Math.abs(value)
      if(last > value){
        setStart(count)
        setLast(newtest.length )  
      }
      // console.log(last, start , count, value)
      setStart(start + 10)
      setLast(last + 10)
       setPreviuos(start+ 10)
      setLastP(last+ 10)
    }
    function previuosrow (){
      // let value = newtest.length -10
      // if(last >= newtest.length ){
      //   setLast(newtest.length )  
      // }
      // console.log( start > value)
      setPreviuos(start1 - 10)
      setLastP(last1 - 10)
      setStart(start -10)
      setLast(last - 10)
    }
    // useEffect(() => {
    //     fetch(`https://my-baseball-teams.herokuapp.com/groups`)
    //     .then(res => res.json())
    //     .then(data =>{
    //       setNewGroup(data)
    //       setCoachName(data)
    //     })
    //   },[search])
      useEffect(() => {
        fetch(`http://localhost:9000/groups`)
        .then(res => res.json())
        .then(data =>{
          setNewGroup(data)
          setCoachName(data)
          setNewtest(data = data.filter((a,b)=> a.team_id === Number(teamId)))
        })
      },[search])
      useEffect(() => {
        fetch(`http://localhost:9000/teams`)
        .then(res => res.json())
        .then(data =>{
          setGroup(data = data.filter((a,b )=> a.id === Number(teamId)))
        })
      },[teamId])

    //   useEffect(() => {
    //     fetch(`https://my-baseball-teams.herokuapp.com/playersStats`)
    //     .then(res => res.json())
    //     .then(data =>{
    //       let arr = data.map((stat,i) => {return stat.players_id === Number(search) ? stat.average: null })
    //         setNewI(arr = arr.map((a , index)=>  a !== null ? setAB(a) : ''))
    //     })
    // },[search])
    useEffect(() => {
      fetch(`http://localhost:9000/playersStats`)
      .then(res => res.json())
      .then(data =>{
        let arr = data.map((stat,i) => {return stat.players_id === Number(search) ? stat.average: null })
          setNewI(arr = arr.map((a , index)=>  a !== null ? setAB(a) : ''))
      })
  },[search])

    // const handleDelete = () => {
  //     axios.delete(`https://my-baseball-teams.herokuapp.com/groups/${search}`).then(() =>{
  //         //  navigate(`/homebase`)
  //     }, (error) => console.log(error))
  // };

   // sum = ratingChanged(ab)
    fisrt = ratingChanged(ab)
      // console.log(newI,'kjkjs')
      // console.log(search, 'search')
      // console.log(teamId)
      // console.log(group,'group')
      // console.log(sum)
      // console.log(fisrt)
      console.log(newtest.slice(start,last), 'test')
      console.log(newtest.slice(start1,last1), 'testp')

  return (
   <div className='MainDesing'style={{ }}>
       
        <div className='sectionNav'>
            <Link to='/teams'className='return' ><h3 className='returnH3' >🔙</h3></Link>     
            {/* <div className='innerSectionNav' > 
            <Link to={`/teams/updateMember/${search}`}>
               <button className='editPlayer' >Edit</button></Link>
               <Link to={`/teams`} onClick={handleDelete}>
              <h3 className='deletePlayer' >🚮</h3></Link>
            </div> */}
            {/* {DeleteIcon} */}
            {/* <svg data-testid="DeleteIcon"> {DeleteIcon}</svg> */}
            <Link to={`/teams/newMember/${teamId}`} id={teamId} className='newadded'>New</Link>
        </div>

        <div className="section2"> 
         
               { search > 0 ? nombre.map((a, i)=>{
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
                               <Link to={`/teams/groups/${search}`} className='changeMore'>More...</Link>
                             </div>
                           <div className='innerSectionStart'>
                           <ReactStars 
                              count={5}
                              value={ratingChanged(ab)}
                              color='gray'
                              edit={false}
                              size={35}
                              isHalf={true}
                              onChange={0.300}
                              /> 
                           </div>
                       </div>
                   </div> : null}
                    </div>
                )}) : <div >  
                   {group.map((a,i)=>{
                     return(
                       <div className='miFlag'>
                         <img src={a.imag} alt='' className='miFlag2'/>
                       </div>
                     )
                   })}
                </div> } 
      
        </div>
        <div className='mid'>
        {start <= 0 ? null : <button onClick={previuosrow } className='button1'>Back</button>}
        {last > newtest.length ? null :  <button onClick={nextrow} className='button2'>Forward</button>  }
        </div>         {/* {new} */}
        <div className="section3">
           {newtest.slice(start,last).map((a, index)=>{
               return (
                   <div className='scrollPlayers' >              
                      { Number(teamId) === a.team_id ? 
                      <div className={`media-group-container ? change : media-group-container`}  onClick={(e)=>setSearch(a.id)}  > 
                          <div className='media-group' > <img src={a.imag} alt='' /> </div>  
                           <h3  >{articule(a.name)}</h3>
                      </div> 
                       : <div className={`section4`}  onClick={(e)=>setSearch(a.id)}  > 
                           <div className='media-group' > <img src={a.imag} alt='' /> </div>  
                         </div> }                
                   </div>
               )
           })}
             
         </div> 
             
   </div>
  )
}

export default Desing