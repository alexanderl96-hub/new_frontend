import React, { useState  } from 'react'
import './Navbar.css'
import {FaBaseBallPlayer, FaBaseballBall, FaPlus, FaLongArrowAltDown, FaLongArrowAltLeft, FaLongArrowAltRight,FaLockOpen, FaLongArrowAltUp, FaUser, FaUserAlt, FaUserAltSlash, FaUserAstronaut, FaUserCheck, FaUserCircle, FaUserClock, FaUserCog, FaUserEdit, FaUserFriends, FaUserGraduate, FaUserInjured, FaUserLock, FaUserMd, FaUserMinus, FaUserNinja, FaUserNurse, FaUserPlus, FaUserSecret, FaUserShield, FaUserSlash, FaUserTag, FaUserTie, FaUserTimes, FaUsers, FaUsersCog, FaUsersSlash, } from 'react-icons/fa';
import { NavLink , Link} from 'react-router-dom'

function Navbar({id}) {
  const [className, setClassName] = useState(false)
  
  return (
    <div className="navbar">
          <div className="nav" >
            
            <NavLink to='/' className='nav-inner' 
             id='teams' onClick={()=>setClassName(true)} >
               <div >TEAMS </div>
               
            </NavLink>
            <NavLink to={'/teams/allplayers'} className='nav-inner'   >
               <div  >PLAYERS</div>
            </NavLink>
            <NavLink to={'/teams/allCoaches'} className='nav-inner' >
               <div >COACHES</div>
            </NavLink>
           <NavLink to={'/teams/Season'} className='nav-inner' >
               <div >SEASON</div>
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
                <div className='navlogIn'>LOG <FaUser /></div>  
            </Link>
           </div>
    </div>
  )
}

export default Navbar