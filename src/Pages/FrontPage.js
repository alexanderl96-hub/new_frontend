import React, { useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Loading from '../Loading'
import '../App.css'

const FrontPage = () => {
  const [count, setCount] = useState(<div className='Loading'><Loading/></div>);
  const [countInTimeout, setCountInTimeout] = useState(<div><Link to='/teams' className="TitleLink" >Baseball Teams </Link> </div> );
  
  useEffect(() => {
   
    setTimeout(() => {
      setCountInTimeout(count)
    },5000);
    setCount()
  },[count])
  return (
    <div>
        <div className="app Title">
          {!countInTimeout ? (
            <div className='Team'>  
              <Link to='/teams' className="TitleLink" >Baseball Teams </Link> 
         </div> 
          )
          :
          ( 
            <div className='Team'>
               <div className='Loading'><Loading/></div>
            </div>
             )

          }
           
           
            
        </div>
    </div>
  )
}

export default FrontPage