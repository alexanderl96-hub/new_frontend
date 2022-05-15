import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <div style={{backgroundColor: 'gray', padding: '10px' }}>
          <div style={{padding: '5px', display: 'flex'}}>
            <h1 style={{marginLeft: '40%'}}>Showing Team</h1>
            <Link to={'/homebase/new'}>
                <h4 style={{border: '1px solid', padding: '2px', borderRadius: '3px', width: '50px', textAlign: 'center', cursor: 'pointer', backgroundColor: 'white', marginLeft: '130%', marginTop: '20px'}}>Add +</h4>
            </Link>
         </div>
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