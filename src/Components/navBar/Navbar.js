import React, { useState  } from 'react'
import './Navbar.css'
import { FaHome, FaUser } from 'react-icons/fa';
import { NavLink , Link} from 'react-router-dom'
import imageLogo from '../../image/FullLogoTransparent.png'

function Navbar({id}) {
  const [className, setClassName] = useState(false)
  const [sideNavar, setSideNavar]= useState('sideNavar')

  function changeNav(){
    if(sideNavar === 'sideNavar'){
      setSideNavar('sideNavar2')
    }else if(sideNavar === 'sideNavar2'){
      setSideNavar('sideNavar')
    }
  }
  
  
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
           </Link>  */}
            
         </div>
          <div className="nav2">        
            <Link to={'/teams/new'}>
                <div className='navAddgroup'> TEAM</div>
            </Link>
            <div className='navlogIn'>LOG <FaUser /></div> 
            {/* <Link to={'/teams/new'}>
                <div className='navlogIn'>LOG <FaUser /></div>  
            </Link> */}
           </div>  
           <div  className={sideNavar} >
                  <div>
                      <FaHome id="home" onClick={changeNav}/>
                 </div>
                <div className='entrada'>
                      <div>
                      <img src={imageLogo} alt="1"  className='topicLogo' />
                      </div>
                      <NavLink to="/" className='topicLink' >Teams</NavLink>
                      <NavLink to="/teams/allplayers" className='topicLink' >Players</NavLink>
                      <NavLink to="/teams/allCoaches" className='topicLink' >Coaches</NavLink>
                      <NavLink to="/teams/Season" className='topicLink' >Season</NavLink>
                      <NavLink to="" className='topicLink' >About</NavLink>
                      <NavLink to="/teams/new" className='topicLink' >New Team</NavLink>
                      <NavLink to="" className='topicLink' >Log In</NavLink>
                </div>
           </div>
    </div>
  )
}

export default Navbar