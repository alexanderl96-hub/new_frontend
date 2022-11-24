import React, {  useState, useEffect } from 'react';
import { Link, useParams} from 'react-router-dom'
import ReactStars from "react-rating-stars-component"




import './desing.css'
import { FaTrash,FaUserPlus} from 'react-icons/fa';
import axios from 'axios'





const Desing = ({loggedIn}) => {
    const [ newI, setNewI]= useState([])
    const [ newtest, setNewtest]= useState([])
    const [nombre, setCoachName] = useState([])
    const [search, setSearch] = useState([])
     const [group, setGroup] = useState([])
     const [start, setStart] = useState(0)
     const [last, setLast] = useState(6)
     const [start1, setPreviuos] =useState(0)
     const [last1, setLastP] =useState(6)
     const [open, setOpen] = useState([false])
     const [handel, setHandel] = useState(0)
   
      //  const sliderIndex = getComputedStyle(document.documentElement).getPropertyValue('--slider-Index');
      //  document.documentElement.style.setProperty('--slider-Index',this.state.color);
    
    let fisrt = 0
    let params = useParams()
    let teamId = params.id
    // const location = useLocation();

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
      // console.log(last,'outside')
      const value = newtest.length - last 
      let jump = value - last
   

      if(jump  <= 6){
        // console.log(start, 'start')// console.log(newtest.length - last)
         setStart(newtest.slice(last))
         setLast(newtest.slice(last + 2))  
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


     function onHandleClick (e){
       let value = 0
       if(e.target.id === 'next'){
         value++
        
          if((newtest.length - (handel+value)*7) < 7 ){    
            let control =    (newtest.length - ((handel+value)*7))/7 
            setHandel(control)
          }else{ setHandel(handel + value)}


       }else if (e.target.id === 'prev'){
         setHandel(0)
        // value++
      //   let check = (newtest.length / 7 + (handel-value) )/7
      //   console.log(check)
      //   if(((newtest.length - (handel * 7) ) - 7) > 0){
      
      //     let control =   (newtest.length - (handel * 7) ) - 7
      //     // console.log(handel , control)
      //       setHandel(control)
          
      //   }  setHandel(handel -  value)
       }
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

       
           <div style={{display:'flex', flexDirection: 'row'}}>
             <div style={{width: '12%', height: '145px',}}>
             {group.map((a,i)=>{
                     return(
                       <div >
                         <img src={a.imag} alt='' style={{width: '143%', 
                         height: '145px', background: 'white', borderStyle:'solid ', 
                         borderBottomColor: 'black',
                         borderLeftColor: 'transparent',
                         borderRightColor: 'black',
                         borderTopColor: 'transparent'}}  />
                       </div>
                     )
                   })}
             </div>
              <div className='container' >
                    <div id='prev' className='handel prev-handle' >
                       {handel > 0 ? <div id='prev' className='text' onClick={onHandleClick} >&#8249;</div> : null}
                  </div>
                  {/*  */}
                    <div className='slider' style={{'--slider-Index': handel}}>
                    {newtest.map((a,i)=>{
                        return(
                          < >
                              <img src={a.imag} alt='' onClick={(e)=>setSearch(a.id)} />
                              {/* <p>{a.name}</p> */}
                          </>
                        )                
                    })}
                    </div>
                    <div id='next' className='handel next-handle'  >
                     {handel == 0  ? <div id='next' className='text' onClick={onHandleClick} >&#8250;</div> : null}
                  </div>

                </div> 
                </div>
        
        
       
        <div className='desingIcon'>
   {loggedIn && <Link to={`/teams/newMember/${teamId}`} id={teamId} className='newadded'> <FaUserPlus /></Link> }
      {loggedIn && <Link to={`/`} id={teamId} className='trash' onClick={handleDelete}> <FaTrash /></Link>}
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
                               <p><span>About: </span>{a.about}  <Link to={`/teams/groups/${search}`} className='changeMore'> More..→</Link></p>
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
                   {newtest.slice(0,1).map((a,i)=>{
                     return(
                       <div className="section2Container" >
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
                               <p><span>About: </span>{a.about}  <Link to={`/teams/groups/${a.id}`} className='changeMore'> More..→</Link></p>
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
                       </div>
                     
                     )
                   })}
                </div> } 
      
        </div>
      
        {/* <div className='mid'>
        {start <= 0 ? null : <button onClick={previuosrow } className='button1'>&#10148;</button>}
        {last >= newtest.length ? null :  <button onClick={nextrow} className='button2'>&#10148;</button>  }
        </div>   */}
        {/* {newtest.length > 0 ? 
        <div className="section3">
           {newtest.slice(0,1).map((a, index)=>{
               return (
                   <div className='scrollPlayers' >              
                      { Number(teamId) === a.team_id ? 
                      <div className={`media-group-container `}  onClick={(e)=>setOpen(true)} > 
                          <div className='media-group'  onClick={(e)=>setSearch(a.id)}  > <img src={a.imag} alt='' /> </div>  
                           <h3 onClick={(e)=>setSearch(a.id)} >{articule(a.name)}</h3>
                      </div> 
                       : <div className={`section4`}    > 
                           <div className='media-group' > Hola </div>  
                         </div> }                
                   </div>
               )
           })}          
         </div> 
             :  <div className="section3-empty">
                <div className=''  > 
                          <div className=''> </div>  
                           <h3></h3>
                      </div> 
               </div>} */}
   </div>
  )
}

export default Desing