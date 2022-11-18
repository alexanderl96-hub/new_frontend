import React, { useState, useEffect } from 'react'
import SprintHit from './SpringTraining/springHit'
import SprintPit from './SpringTraining/springPit'
import Transcitions from './Transcitions'
import Footer from '../Footer/Footer'
import NavBar from '../navBar/Navbar'
import { NavLink} from 'react-router-dom'
import LoadingHome from '../../../src/Loading'

const Sprint = () => {
  const [count, setCount] = useState(<div className='LoadingFront'><LoadingHome/></div>);
  const [countInTimeout, setCountInTimeout] = useState([]);
  useEffect(() => {
   
    setTimeout(() => {
      setCountInTimeout(count)
    },2000);
    setCount()
  },[count])

  return (
    <div>
        <NavBar />
        <Transcitions />
        {/* <div>
            <div className='newsNavbar' >
              <NavLink to='/teams/News' >
                <div className='newsNavAll'>Regular Season</div></NavLink>
                <NavLink to='/teams/News/SpringTraining'>
                <div className='navRegularS' >Spring Training</div></NavLink>
                <NavLink to='/teams/News/Exhibition'>
                <div className='newsNavAll'>Exhibition</div></NavLink>
                <NavLink to='/teams/News/AllStart'>
                <div className='newsNavAll'>All Start Game</div></NavLink>
                <NavLink to='/teams/News/DivisionSeries'>
                <div className='newsNavAll'>Division Series</div></NavLink>
                <NavLink to='/teams/News/FirstRound(wildCard)'>
                <div className='newsNavAll'>First Round</div></NavLink>
                <NavLink to='/teams/News/LeagueChampionship'>
                <div className='newsNavAll'>League Championship</div></NavLink>
                <NavLink to='/teams/News/WorldSeries'>
                <div className='newsNavAll'>World Series</div></NavLink>
            </div>
        </div> */}
      
        {/* {!countInTimeout ? 
        <div className='newsNavComponent'>
            <SprintHit />
            <SprintPit />
        </div> : <div className='LoadingFront'><LoadingHome/></div>} */}

        {/* <Footer /> */}
    </div>
  )
}

export default Sprint