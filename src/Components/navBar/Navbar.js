import React, { useState  } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { homeObjOne } from '../navBar/Data'

function Navbar({id}) {
  const [className, setClassName] = useState(false)
  // function changeClass(){
   
  //   if( 'teams'){
  //      setClassName(true)
  //   }else{
  //     setClassName(false)
  //   }
  // }
  console.log(className)
  return (
    <div className="navbar">
          <div className="nav" >
            <Link to='/teams' className='nav-inner' 
             id='teams' onClick={()=>setClassName(true)} >
               <div className={className === true ? 'nav-inner-inner2' : 'nav-inner-inner' }  >TEAMS</div>
            </Link>
            <Link to={'/teams/allplayers'} className='nav-inner'   >
               <div className='' >PLAYERS</div>
            </Link>
            <Link to={'/teams/allCoaches'} className='nav-inner' >
               <div className='nav-inner-inner'>COACHES</div>
            </Link>
           <Link to={'/teams/Season'} className='nav-inner' >
               <div className='nav-inner-inner'>SEASON</div>
           </Link>
           {/* <Link to={'/teams/allFavorites'} className='nav-inner'>
               <div className='nav-inner-inner'>Favorites</div>
           </Link> */}
         </div>
          <div className="nav2">        
            <Link to={'/teams/new'}>
                <div className='navAddgroup'>ADD TEAM</div>
            </Link>
            <Link to={'/teams/new'}>
                <div className='navlogIn'>LOG IN  <img src='' alt='1'/></div>  
            </Link>
           </div>
    </div>
  )
}

export default Navbar