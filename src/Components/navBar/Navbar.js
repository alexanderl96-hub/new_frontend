import React, { useState  } from 'react'
import './Navbar.css'
import {FaBaseBallPlayer, FaBaseballBall, FaPlus, FaLongArrowAltDown, FaLongArrowAltLeft, FaLongArrowAltRight,FaLockOpen, FaLongArrowAltUp, FaUser, FaUserAlt, FaUserAltSlash, FaUserAstronaut, FaUserCheck, FaUserCircle, FaUserClock, FaUserCog, FaUserEdit, FaUserFriends, FaUserGraduate, FaUserInjured, FaUserLock, FaUserMd, FaUserMinus, FaUserNinja, FaUserNurse, FaUserPlus, FaUserSecret, FaUserShield, FaUserSlash, FaUserTag, FaUserTie, FaUserTimes, FaUsers, FaUsersCog, FaUsersSlash, } from 'react-icons/fa';
import { NavLink , Link} from 'react-router-dom'
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
            
            <NavLink to='/' className='nav-inner' 
             id='teams' onClick={()=>setClassName(true)} >
               <div className=''  >TEAMS
                  {/* <div className='dropMenu'>
                      <p>Hola</p>
                      <p>Hola</p>
                      <p>Hola</p>
                      <p>Hola</p>
                  </div> */}
               </div>
               
            </NavLink>
            <NavLink to={'/teams/allplayers'} className='nav-inner'   >
               <div className='' >PLAYERS</div>
            </NavLink>
            <NavLink to={'/teams/allCoaches'} className='nav-inner' >
               <div className='nav-inner-inner'>COACHES</div>
            </NavLink>
           <NavLink to={'/teams/Season'} className='nav-inner' >
               <div className='nav-inner-inner'>SEASON</div>
           </NavLink>
           {/* <Link to={'/teams/allFavorites'} className='nav-inner'>
               <div className='nav-inner-inner'>Favorites</div>
           </Link> */}
           
         </div>
          <div className="nav2">        
            <Link to={'/teams/new'}>
                <div className='navAddgroup'> TEAM</div>
            </Link>
            <Link to={'/teams/new'}>
                <div className='navlogIn'>LOG IN  <FaUser /></div>  
            </Link>
           </div>
    </div>
  )
}

export default Navbar