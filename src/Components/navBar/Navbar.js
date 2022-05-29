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
               <div >Team</div>
            </Link>
            <Link to={'/homebase/allplayers'} className='nav-inner'>
               <div >Players</div>
            </Link>
           <div className='nav-inner'>Coaches</div>
           <div className='nav-inner'>Season</div>
           <div className='nav-inner'>Favorites</div>
         </div>
         </div>
    </div>
  )
}

export default Navbar