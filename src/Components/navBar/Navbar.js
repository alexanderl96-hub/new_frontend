import React, { useState  } from 'react'
import './Navbar.css'
import { FaHome, FaUser} from 'react-icons/fa';
import { NavLink , Link} from 'react-router-dom'
import imageLogo from '../../image/FullLogoTransparent.png'
// import frontLogo from '../../image/FullLogo.png'

function Navbar({setOpenLoginModal, loggedIn, setLoggedIn}) {
  const [menuIdActive, setMenuIdActive] = useState('')
  const [sideNavar, setSideNavar]= useState('sideNavar')
// console.log(loggedIn, 'nsav')

  const logOut = ()=>{
     localStorage.removeItem('accessToken');
    setLoggedIn(false)
   
  }

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
            {/* <Link to={'/teams/new'}>
                <div className='navAddgroup'> ADD</div>
            </Link> */}
           {loggedIn && <button onClick={logOut} style={{color: 'black', cursor: 'pointer', marginLeft: '-15px' }}>Log out</button> }
           {!loggedIn && <button  style={{color: 'black', cursor: 'pointer', marginLeft: '-15px'}}>Log in</button> }
            {/* {!loggedIn  <button  style={{color: 'black'}}>Log in</button>} */}
            <div className='navlogIn' onClick={(e)=> setOpenLoginModal(true)} style={{marginTop:'-1px'}}>
              <FaUser  style={{ border:'2px solid white', borderRadius: '50px', fontSize: '25px', padding: '1px', marginRight: '70px'}}/></div> 
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