import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <div style={{}} className="navbar1">
          <div style={{}} className="navbar2">
            <h1 style={{}} className="navbar3">Showing Team</h1>
            <Link to={'/homebase/new'}>
                <h4 style={{}} className='navAddgroup'>Add +</h4>
            </Link>
         </div>
         <div className="nav">
            <Link to={'/homebase'} className='nav-inner'>
               <div className='nav-inner-inner'>Team</div>
            </Link>
            <Link to={'/homebase/allplayers'} className='nav-inner'>
               <div className='nav-inner-inner' >Players</div>
            </Link>
            <Link to={'/homebase/allCoaches'} className='nav-inner'>
               <div className='nav-inner-inner'>Coaches</div>
            </Link>
           <Link to={'/homebase/Season'} className='nav-inner'>
               <div className='nav-inner-inner'>Season</div>
           </Link>
           <Link to={'/homebase/allFavorites'} className='nav-inner'>
               <div className='nav-inner-inner'>Favorites</div>
           </Link>
         </div>
         </div>
    </div>
  )
}

export default Navbar