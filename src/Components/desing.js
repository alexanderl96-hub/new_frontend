import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactStars from "react-rating-stars-component"
// import DeleteIcon from '@mui/icons-material/Delete';
import Navbar from '../Components/navBar/Navbar'
import './desing.css'
import { FaTrash,FaUserPlus} from 'react-icons/fa';
import axios from 'axios'


const Desing = () => {
    const [ newI, setNewI]= useState([])
    const [ newtest, setNewtest]= useState([])
    const [nombre, setCoachName] = useState([])
    const [search, setSearch] = useState([])
     const [group, setGroup] =useState([])
     const [start, setStart] =useState(0)
     const [last, setLast] =useState(6)
     const [start1, setPreviuos] =useState(0)
     const [last1, setLastP] =useState(6)
    let fisrt = 0
    let params = useParams()
    let teamId = params.id


    const ratingChanged = (a) => { 
      let rest = 0
      if(a ===  0.500 ){ rest = 5.0 }
      else if(a >= 0.450 && a < 0.500){ rest = 4.5 }
      else if(a >= 0.400 && a < 0.450){ rest = 4.0 }
      else if(a >= 0.350 && a < 0.400){ rest = 3.5 }
      else if(a >= 0.300 && a < 0.350){ rest = 3.0 }
      else if(a >= 0.250 && a< 0.300){ rest = 2.5 }
      else if(a >= 0.200 && a < 0.250){ rest = 2.0 }
      else if(a >= 0.150 && a < 0.200){ rest = 1.5 }
      else if(a>= 0.100 && a < 0.150){ rest = 1.0 }
      else if(a >= 0.50 && a < 0.10){ rest = 0.5 }
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
      const value = newtest.length - 6
      let count = Math.abs(value)
      if(last > value){
        setStart(newtest.slice(count, -2))
         setLast(newtest.length )  
      }
      setStart(start + 6)
      setLast(last + 6)
       setPreviuos(start+ 6)
      setLastP(last+ 6)
    }
    function previuosrow (){
      setPreviuos(start1 - 6)
      setLastP(last1 - 6)
      setStart(start -6)
      setLast(last - 6)
    }
     useEffect(() => {
         fetch(`https://my-baseball-teams.adaptable.app/groups`)
         .then(res => res.json())
         .then(data =>{
           setCoachName(data)
          setNewtest(data = data.filter((a,b)=> a.team_id === Number(teamId)))
         })
       },[teamId])
      // useEffect(() => {
      //   fetch(`http://localhost:9000/groups`)
      //   .then(res => res.json())
      //   .then(data =>{
      //     setNewGroup(data)
      //     setCoachName(data)
      //     setNewtest(data = data.filter((a,b)=> a.team_id === Number(teamId)))
      //   })
      // },[search])
      // useEffect(() => {
      //   fetch(`http://localhost:9000/teams`)
      //   .then(res => res.json())
      //   .then(data =>{
      //     setGroup(data = data.filter((a,b )=> a.id === Number(teamId)))
      //   })
      // },[teamId])
      useEffect(() => {
        fetch(`https://my-baseball-teams.adaptable.app/teams`)
        .then(res => res.json())
        .then(data =>{
          setGroup(data = data.filter((a)=> a.id === Number(teamId)))
        })
      },[teamId])

       useEffect(() => {
         fetch(`https://my-baseball-teams.adaptable.app/playersCareer`)
         .then(res => res.json())
         .then(data =>{
          let arr = data.filter(stat => stat.players_id === Number(search))
            setNewI(arr.sort((a,b)=>a.id-b.id).slice(-1).map(a => a.career_average
              ))
         })
     },[search])

     const handleDelete = () => {
      axios.delete(`https://my-baseball-teams.adaptable.app/teams/${teamId}`).then(() =>{
        //  navigate(`/homebase`)
    }, (error) => console.log(error))
     }
  //   useEffect(() => {
  //     fetch(`http://localhost:9000/playersStats`)
  //     .then(res => res.json())
  //     .then(data =>{
  //       let arr = data.map((stat,i) => {return stat.players_id === Number(search) ? stat.average: null })
  //         setNewI(arr = arr.map((a , index)=>  a !== null ? setAB(a) : ''))
  //     })
  // },[search])

    fisrt = ratingChanged(Number(newI.join()))
      

  return (
   <div className='MainDesing'>
        <Navbar />
        <div className='desingIcon'>
           <Link to={`/teams/newMember/${teamId}`} id={teamId} className='newadded'> <FaUserPlus /></Link>
           <Link to={`/`} id={teamId} className='trash' onClick={handleDelete}> <FaTrash /></Link>
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
                               <p><span>About: </span>{a.about}  <Link to={`/teams/groups/${search}`} className='changeMore'> See More...</Link></p>
                               {/* <Link to={`/teams/groups/${search}`} className='changeMore'> See More...</Link> */}
                             </div>
                           <div className='innerSectionStart'>
                           <ReactStars 
                              count={5}
                              value={fisrt}
                              color='gray'
                              edit={false}
                              size={30}
                              isHalf={true}
                              onChange={fisrt}
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
        {start <= 0 ? null : <button onClick={previuosrow } className='button1'>&#10148;</button>}
        {last >= newtest.length ? null :  <button onClick={nextrow} className='button2'>&#10148;</button>  }
        </div>  
        {newtest.length > 0 ? 
        <div className="section3">
           {newtest.slice(start,last).map((a, index)=>{
               return (
                   <div className='scrollPlayers' >              
                      { Number(teamId) === a.team_id ? 
                      <div className={`media-group-container `}  onClick={(e)=>setSearch(a.id)}  > 
                          <div className='media-group' > <img src={a.imag} alt='' /> </div>  
                           <h3  >{articule(a.name)}</h3>
                      </div> 
                       : <div className={`section4`}  onClick={(e)=>setSearch(a.id)}  > 
                           <div className='media-group' > Hola </div>  
                         </div> }                
                   </div>
               )
           })}          
         </div> 
             :  <div className="section3-empty">
                <div className=''  > 
                          <div className=''> </div>  
                           {/* <h3></h3> */}
                      </div> 
               </div>}
   </div>
  )
}

export default Desing