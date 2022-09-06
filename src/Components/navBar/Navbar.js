import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="navbar">
        <div className="navbar1">
          <div className="navbar2">
            <h1 className="navbar3">USA Teams</h1>
            <Link to={'/teams/new'}>
                <h4 className='navAddgroup'>Add Team</h4>
            </Link>
         </div>
         <div className="nav">
            <Link to={'/teams'} className='nav-inner'>
               <div className='nav-inner-inner'>Team</div>
            </Link>
            <Link to={'/teams/allplayers'} className='nav-inner'>
               <div className='nav-inner-inner' >Players</div>
            </Link>
            <Link to={'/teams/allCoaches'} className='nav-inner'>
               <div className='nav-inner-inner'>Coaches</div>
            </Link>
           <Link to={'/teams/Season'} className='nav-inner'>
               <div className='nav-inner-inner'>Season</div>
           </Link>
           {/* <Link to={'/teams/allFavorites'} className='nav-inner'>
               <div className='nav-inner-inner'>Favorites</div>
           </Link> */}
         </div>
         </div>
    </div>
  )
}

export default Navbar