import React from 'react'
import NavBar from '../navBar/Navbar'
import { NavLink} from 'react-router-dom'
import Footer from '../Footer/Footer'
import AllStartHit from './All Start Game/allStartHit'
import AllStartPit from './All Start Game/allStartPit'
import Transcitions from './Transcitions'

const AllStart = () => {
  

  return (
    <div>
         <NavBar />
         <Transcitions />
         <div>
            <div className='newsNavbar' >
              <NavLink to='/teams/News' >
                <div className='newsNavAll' >Regular Season</div></NavLink>
                <NavLink to='/teams/News/SpringTraining'>
                <div className='newsNavAll' >Spring Training</div></NavLink>
                <NavLink to='/teams/News/Exhibition'>
                <div className='newsNavAll' >Exhibition</div></NavLink>
                <NavLink to='/teams/News/AllStart'>
                <div className='navRegularS'>All Start Game</div></NavLink>
                <NavLink to='/teams/News/DivisionSeries'>
                <div className='newsNavAll' >Division Series</div></NavLink>
                <NavLink to='/teams/News/FirstRound(wildCard)'>
                <div className='newsNavAll' >First Round</div></NavLink>
                <NavLink to='/teams/News/LeagueChampionship'>
                <div className='newsNavAll' >League Championship</div></NavLink>
                <NavLink to='/teams/News/WorldSeries'>
                <div className='newsNavAll' >World Series</div></NavLink>
            </div>
        </div>

        <div className='newsNavComponent' >
            <AllStartHit />
            <AllStartPit />
        </div>

       <Footer />
    </div>
  )
}

export default AllStart