// import React, { useState, useEffect} from 'react'
// import {Link} from 'react-router-dom'
// import Loading from '../Loading'
// import '../App.css'
// import './front.css'

// const FrontPage = () => {
//   const [word,setWord]= useState("Baseball Teams")
//   const [count, setCount] = useState(<div className='Loading'><Loading/></div>);
//   const [countInTimeout, setCountInTimeout] = useState(<div><Link to='/teams' className="TitleLink" >Baseball Teams </Link> </div> );
  
   

//   useEffect(() => {
   
//     setTimeout(() => {
//       setCountInTimeout(count)
//     },5000);
//     setCount()
//   },[count])

//   function homeClick(){
//     if('Baseball Teams'){
//       setWord ('Click me')
//   }else{
//     setWord('Baseball Teams')
//   }
//   }
//   function homeClickOut(){
//     if('Click me'){
//       setWord ('Baseball Teams')
//   }else{
//     setWord('Click me')
//   }
//   }
 
//   return (
//     <div>
//         <div className="app Title">
//           {!countInTimeout ? (
//             <div className='Team'>  
//             <p className='soccer'>LA Dodgers</p>
//             <p   className='arrows'> NY Mets</p>
//              <span className='spanArrow'>&#8674;</span>
//               <Link to='/teams' className="TitleLink" onMouseOver={homeClick} onMouseOut={homeClickOut}> {word}</Link> 
             
//               <div className='martir'>
//                   <p className='sportL'>New York Yankees</p>
//               </div>
//               <div className="container">
//                      <div className="carousel">
//                      <p className='slide'>New York Yankees</p>
//                      <p className='slide'>Atlanta Braves</p>
//                      <p className='slide'>Red Sox</p>
//                      <p className='slide'>New York Mets</p>
//                      <p className='slide'>LA Dodgers</p>
//                      <p className='slide'>New York Yankees</p>
//                      <p className='slide'>New York Yankees</p>
//                       </div>
//               </div>
           
//                {/* <p   className='soccer'>Atlanta Braves</p>
//                <p className='arrows'>Red Sox</p> */}
//          </div> 
//           )
//           :
//           ( 
//             <div className='Team'>
//                <div className='Loading'><Loading/></div>
//             </div>
//              )

//           }
           
           
            
//         </div>
//     </div>
//   )
// }

// export default FrontPage