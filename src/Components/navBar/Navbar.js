import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div>
        <div style={{backgroundColor: 'gray', padding: '10px' }}>
         <h1 >Showing Team</h1>
         <div className="nav">
           <div className='nav-inner'>Team</div>
           <div className='nav-inner'>Players</div>
           <div className='nav-inner'>Coaches</div>
           <div className='nav-inner'>Season</div>
           <div className='nav-inner'>Favorites</div>
         </div>
         </div>
    </div>
  )
}

export default Navbar