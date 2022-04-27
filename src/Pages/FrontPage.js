import React from 'react'
import {Link} from 'react-router-dom'

const FrontPage = () => {
  return (
    <div>
        <div className="app Title">
            <div className='Team'>
              <Link to='/homeBase' className="TitleLink" >Baseball Teams </Link>
            </div>
        </div>
    </div>
  )
}

export default FrontPage