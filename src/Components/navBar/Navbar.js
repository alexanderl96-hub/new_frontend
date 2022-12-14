import React, { useState, useEffect} from 'react'
import './Navbar.css'
import { FaHome, FaUser} from 'react-icons/fa';
import { NavLink , Link} from 'react-router-dom'
import imageLogo from '../../image/FullLogoTransparent.png'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
// import frontLogo from '../../image/FullLogo.png'

function Navbar({setOpenLoginModal, loggedIn, setLoggedIn, user, userImage}) {
  const [menuIdActive, setMenuIdActive] = useState('')
  const [sideNavar, setSideNavar]= useState('sideNavar')
  const [goodbye, setGoodBye] = useState('')
  const [toggleMenu, setToggleMenu] = useState(false);



  const logOut = ()=>{
   document.cookie = "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setLoggedIn(false)
    localStorage.removeItem('username')
    localStorage.removeItem('userImage')
    setGoodBye(`GoodBye ${user}`)
  }

useEffect(()=>{
  if(!loggedIn){
    setTimeout(() => {
      setGoodBye('')
    }, 2000);
  }
})
  

  function changeNav(){
    if(sideNavar === 'sideNavar'){
      setSideNavar('sideNavar2')
    }else if(sideNavar === 'sideNavar2'){
      setSideNavar('sideNavar')
    }
  }
  function handleClickModal (){
    setOpenLoginModal(true)
  }
  


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
            <NavLink to={`/teams/News`} className='nav-inner' id='news' onClick={(e)=>setMenuIdActive(e.target.id)} >
               <div >NEWS</div>
           </NavLink>
            
         </div>
          <div className="nav2">        

              <div text="More.." path=""  onMouseEnter={()=> setToggleMenu(true)} onMouseLeave={()=> setToggleMenu(false)}>
                   <div className="setToggleMenu" >{toggleMenu ? "" : " More.."}</div>
                 {toggleMenu && <div className="submenu" >
                      {/* <div className="submenu__item" id="More..">More..</div> */}
                      {loggedIn &&  user === 'alexander87' && 
                         <Link to={'/teams/new'} style={{ color:'black'}} onClick={()=> setToggleMenu(false)}>
                            <div className="submenu__item" id="More..">Add New Team</div>
                         </Link>}
                        <NavLink to={'/teams/Favorite'} style={{ color:'black'}} onClick={()=> setToggleMenu(false)} >
                            <div className="submenu__item">Baseball Favorite</div>
                        </NavLink>
                        <NavLink to={'/teams/AllTimes'} style={{ color:'black'}} onClick={()=> setToggleMenu(false)} >
                            <div className="submenu__item">Baseball All Times</div>
                        </NavLink>
                        <NavLink to={'/teams/Legend'} style={{ color:'black'}} onClick={()=> setToggleMenu(false)} >
                            <div className="submenu__item">Baseball Legend</div>
                        </NavLink>
                      <hr/>
                      {loggedIn && 
                        <NavLink to={'/teams/Profile'} style={{ color:'black'}} onClick={()=> setToggleMenu(false)} > 
                            <div className="submenu__item">My Profile</div> 
                        </NavLink>}
                        <NavLink to={'/teams/About'} style={{ color:'black'}} onClick={()=> setToggleMenu(false)}>
                            <div className="submenu__item">About us </div>
                        </NavLink>
                        <NavLink to='/' style={{ color:'black'}} onClick={()=> setToggleMenu(false)}>
                          <div className="submenu__item">@Sport World</div>
                        </NavLink>
                  </div>}

            </div>
           {loggedIn && <button  className='navAddgroup' onClick={logOut} >Log out</button> }
           {!loggedIn && <button  className='navAddgroup' onClick={(e)=> setOpenLoginModal(true)} >Log in</button> }
            {/* {!loggedIn  <button  style={{color: 'black'}}>Log in</button>} */}
            <div className='navlogIn'>
               <div >
                 {!loggedIn ?  <FaUser className="fauserIcon" /> :
                   <img src={userImage !== '' ? userImage : 'https://d11a6trkgmumsb.cloudfront.net/original/3X/d/8/d8b5d0a738295345ebd8934b859fa1fca1c8c6ad.jpeg'} alt='' 
                   className='userImageProfile'  /> }</div>

                 {loggedIn && <div classNamne='userHoldInfo' >{ user }</div>}
                 {!loggedIn && <div className='userGoodbyeInfo' >{ goodbye  }</div>}
              </div> 
         
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