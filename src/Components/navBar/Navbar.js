import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar({id}) {
  return (
    <div className="navbar">
          <div className="nav">
            <Link to={'/'} className='nav-inner' >
               <div className='nav-inner-inner1'>TEAMS</div>
            </Link>
            <Link to={'/teams/allplayers'} className='nav-inner'>
               <div className='nav-inner-inner' >PLAYERS</div>
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
                <h2 className='navAddgroup'>Add Team</h2>
            </Link>
           </div>
    </div>
  )
}

export default Navbar