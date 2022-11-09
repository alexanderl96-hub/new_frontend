import React, { useState  } from 'react'
import './Navbar.css'
import { FaHome} from 'react-icons/fa';
import { NavLink , Link} from 'react-router-dom'
import imageLogo from '../../image/FullLogoTransparent.png'
// import frontLogo from '../../image/FullLogo.png'

function Navbar() {
  const [menuIdActive, setMenuIdActive] = useState('')
  const [sideNavar, setSideNavar]= useState('sideNavar')

  function changeNav(){
    if(sideNavar === 'sideNavar'){
      setSideNavar('sideNavar2')
    }else if(sideNavar === 'sideNavar2'){
      setSideNavar('sideNavar')
    }
  }
  console.log(menuIdActive)
  
  return (
    <div className="navbar">
          <div className="nav" >
         
            <div className='navLogo'>
               <img src={imageLogo} alt="1" className='forntLogo'/>
            </div>
            
            <NavLink to='/' className='nav-inner' 
             id='teams' onClick={(e)=>setMenuIdActive(e.target.id)} >
               <div >TEAMS </div>
               
            </NavLink>
            <NavLink to={'/teams/allplayers'} className='nav-inner'   id='player' onClick={(e)=>setMenuIdActive(e.target.id)}  >
               <div  >PLAYERS</div>
            </NavLink>
            <NavLink to={'/teams/allCoaches'} className='nav-inner'  id='coach' onClick={(e)=>setMenuIdActive(e.target.id)} >
               <div >COACHES</div>
            </NavLink>
           <NavLink to={'/teams/Season'} className='nav-inner'  id='season' onClick={(e)=>setMenuIdActive(e.target.id)} >
               <div >SEASON</div>
           </NavLink>
           {/* <Link to={'/teams/allFavorites'} className='nav-inner'>
               <div className='nav-inner-inner'>Favorites</div>
           </Link>  */}
            <NavLink to={'/teams/News'} className='nav-inner' id='news' onClick={(e)=>setMenuIdActive(e.target.id)} >
               <div >NEWS</div>
           </NavLink>
            
         </div>
          <div className="nav2">        
            <Link to={'/teams/new'}>
                <div className='navAddgroup'> ADD</div>
            </Link>
            {/* <div className='navlogIn'>LOG <FaUser /></div>  */}
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
                      <NavLink to="/teams/News" className='topicLink' >News</NavLink>
                      <NavLink to="/teams/About" className='topicLink' >About</NavLink>
                      <NavLink to="/teams/new" className='topicLink' >New Team</NavLink>
                      <NavLink to="" className='topicLink' >Log In</NavLink>
                </div>
           </div>
           {/* <img src={imageLogo} alt="1"  className='topicLogoFront' /> */}
    </div>
  )
}

export default Navbar