import React, {  useState, useEffect } from 'react';
import { useNavigate, Link, useParams} from 'react-router-dom'
import ReactStars from "react-rating-stars-component"

import '../text/text.css'
import './desing.css'
import { FaPlus, FaTrash,FaUserPlus} from 'react-icons/fa';
import axios from 'axios'





const Desing = ({loggedIn}) => {
   const navigate = useNavigate();
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
    const  [commentId, setCommentId] = useState(0)
    const [comment, setComment] = useState([]);
    const [open1, setOpen1] = useState(false)
    const [open2, setOpen2] = useState(false)
    const date = new Date();
    const year = date.getFullYear()
    const month = date.getMonth()+1
    const hoy = date.getDate()
    const [increment, setIncrement] = useState(3)

    let fisrt = 0
    let params = useParams()
    const teamId = params.id

    // let check = Number(nombre.filter((a)=> a.id === Number(search)).map(a => a.id).join(''))
    const [newComment, setNewComment] = useState({
        username: '',
        userimage: '',
        comment: '',
        memberid:`${teamId}`,
        date: [month, hoy, year].join('/'),
    })

  

    function handelOpen (){
       if(open1 === false){
             setOpen1(true)
       }else{
        setOpen1(false)
       }
    }
    function handelOpen2 (){
      if(open2 === false){
            setOpen2(true)
      }else{
       setOpen2(false)
      }
   }
    const handleInput = (e) =>{
      const {value} = e.target
      setNewComment({...newComment, [e.target.id]: value})
       
    }
    const handleSubmit = (e) =>{
      e.preventDefault()
      addComment(newComment)
      setOpen1(false)

    }
    const addComment = (newComment) => {
       axios.post(`http://localhost:9000/comments`, newComment).then((res)=>{
      setNewComment({
          username: '',
          userImage: '',
          comment: '',
          memberid: `${teamId}`, 
          memberId: '',
      })
      navigate(`/teams/allmembers/${teamId}`);
       })
    }
    useEffect(()=>{
        fetch('http://localhost:9000/comments')
        .then(res => res.json())
        .then(data =>{
           setComment(data.comments.filter(a=> a.memberid === teamId))
         
         
      })
    },[])
    

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
        let pro = "" ;
        let allt = artist.split(" ");
        if(allt.length >= 3){
          pro = allt[0] +' '+ allt[1]
        }else{
          pro = allt.join(' ')
        }
        return pro
      };

    // function nextrow (){
    //   // console.log(last,'outside')
    //   const value = newtest.length - last 
    //   let jump = value - last
   

    //   if(jump  <= 6){
    //     // console.log(start, 'start')// console.log(newtest.length - last)
    //      setStart(newtest.slice(last))
    //      setLast(newtest.slice(last + 2))  
    //   }
    //   setStart(start + 6)
    //   setLast(last + 6)
    //    setPreviuos(start+ 6)
    //   setLastP(last+ 6)
    
    // }
    // function previuosrow (){
    //   setPreviuos(start1 - 6)
    //   setLastP(last1 - 6)
    //   setStart(start -6)
    //   setLast(last - 6)
    // }


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
          // setCommentId( data[0] )
          //: Number(nombre.filter((a)=> a.id === Number(search)).map(a => a.id).join(''))

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
  const aboutLength = (about) => {
    let pro = [];
    let i = 0
    let str = about.split(" ");
    while(i < str.length ){
       pro.push(str[i])
       i++
    }
    return pro.length <= 90 ?  pro.join(' ') : pro.slice(0, 91).join(' ').concat(' ...')
  };


    fisrt = ratingChanged(Number(newI.join()))
  //  set(nombre.filter((a)=> a.id === Number(search)).map(a => a.id ))

 
   console.log( comment.length, increment)

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
                              <img src={a.imag} alt='' onClick={(e)=>setSearch(a.id) && setCommentId(a.id)} />
                              {/* <p>{a.name}</p> */}
                          </>
                        )                
                    })}
                    </div>
                    <div id='next' className='handel next-handle'  >
                     {handel === 0  ? <div id='next' className='text' onClick={onHandleClick} >&#8250;</div> : null}
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
                               <p><span>About: </span>{a.about}  <Link to={`/teams/groups/${search}`}  className='changeMore'> More..→</Link></p>
                               {/* <p><span>ID:</span> {a.id}</p> */}
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
                )}) : <div style={{minHeight: '370px'}}>  
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
                               {/* <p><span>ID:</span> {a.id}</p> */}
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

        
        <div style={{marginBottom: '30px'}} >
          <div style={{display: 'flex', justifyContent: 'center', textAlign: 'center', marginTop: '5%', }}>
                   <h3 style={{color: 'white', fontSize: '20px', width: '200px', height: '40px', border: '2px solid', 
                   borderRadius: '10px', backgroundColor: '#070f3c', paddingTop: '6px', cursor: 'pointer' }} onClick={handelOpen } >Comments 
                   {!open1 ? <FaPlus  style={{marginLeft: '10px', paddingTop: '6px'}} /> : null}</h3>
          </div>
          <div style={{display:'flex', textAlign: 'center', justifyContent: 'center', marginBottom: '20px'}}  >
         { open1 ? 
                    <form style={{ display:'flex', flexDirection: 'column', padding: '7px', 
                                     width: '430px',  height: '420px',backgroundColor: 'white',  alignItems: 'center', 
                                     justifyContent: 'center', border: '2.5px solid black'}}onSubmit={handleSubmit}>
                       
                   
                            <h4 style={{color: ' #6c6c6c'}}>Leave your comment here</h4>
                            <input id='username'
                                   type='text' 
                                   onChange={handleInput}
                                    value={newComment.username }
                                   style={{ width: '300px', border: '0.5px solid #BaBaBa', height: '40px', color: '#6c6c6c', marginBottom:'4px'}}
                                   placeholder='Username...'
                                    />
                            <input id='memberid' 
                                   type='text' 
                                   onChange={handleInput} 
                                    value={newComment.memberid }
                                       style={{ display:'none', width: '300px', border: '0.5px solid #BaBaBa', height: '40px', color: '#6c6c6c',marginBottom:'4px'}}
                                
                                   />
                            <input id='userimage' 
                                   type='text' 
                                   onChange={handleInput} 
                                    value={newComment.userimage} 
                                    style={{ width: '300px', border: '0.5px solid #BaBaBa', height: '40px', color: '#6c6c6c',marginBottom:'4px'}}
                                    placeholder='User image link url...'
                                   />
                            <textarea id='comment' 
                                      name='message' 
                                      onChange={handleInput} 
                                      placeholder='Message...' 
                                      required 
                                       value={newComment.comment}
                                       style={{ width: '300px', height: '220px', border: '0.5px solid #BaBaBa', color: '#6c6c6c', marginBottom:'4px'}}
                                      />
                            <button type='submit' value="Send" onSubmit={handleSubmit} style={{height: '40px', marginTop: '7px',
                             width: '300px', border: '0.5px solid #BaBaBa', color: 'white', cursor: 'pointer', backgroundColor: '#371F76', marginBottom:'4px'}} >Submit</button>
                   
                    </form>
               : null }
                 </div>

         <div style={{display:'flex',flexDirection:'row', justifyContent: 'space-around',flexWrap: 'wrap', textAlign: 'center', margin: '10px', gap: '10px'}}>
            {comment.slice(0, increment).map((a, i)=>{
                return(
                    <div style={{ minHeight: '270px', width: '30%', border: 'none', borderRadius: '35px',
                                display: 'flex', flexDirection: 'column' , padding: '4px', cursor: 'pointer', backgroundColor:'#fff'}}>
                        <div style={{margin: '5px', fontSize: '15px'}}>{a.username}</div>
                        <div style={{padding: '3px', display: 'flex',  flexDirection: 'column', justifyContent: 'center', alignItems:'center', flexWrap: 'wrap' }}>
                            <img src={a.userimage ? a.userimage : 'https://d11a6trkgmumsb.cloudfront.net/original/3X/d/8/d8b5d0a738295345ebd8934b859fa1fca1c8c6ad.jpeg'} alt ='' style={{ height: '90px', width: '90px', borderRadius: '10px', backgroundPosition: 'center',
  backgroundSize: '100% 100%'}} />
                          <div style={{display:'flex', textAlign: 'justify', marginTop: '8px', fontSize: '12.7px', }} onClick={handelOpen2 }>{ open2 ? a.comment : aboutLength(a.comment)}</div> 
                            <div style={{fontSize: '13px',  marginTop: '5px'}}>{a.date}</div>
                        </div>
                    </div>
                )
            })}
          </div>
        {increment < comment.length ? <div onClick={((e)=> setIncrement(increment+3))} 
          className='loadComents'
         >Load More...</div> : null }
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