import React from 'react'
import LeaderPitcher from './Regular Season/LeaderPitcher'
import LeaderHitting from './Regular Season/LeaderHitting'
import Transcitions from './Transcitions'
import NavBar from '../navBar/Navbar'
import { NavLink} from 'react-router-dom'
import Footer from '../Footer/Footer'

const News = () => {
   
  return (
    <div>
       <NavBar />
       <Transcitions />
        <div>
            <div className='newsNavbar' >
              <NavLink to={'/teams/News'} >
                <div className='navRegularS'>Regular Season</div></NavLink>
                <NavLink to='/teams/News/SpringTraining'>
                <div className='newsNavAll' >Spring Training</div></NavLink>
                <NavLink to='/teams/News/Exhibition'>
                <div className='newsNavAll' >Exhibition</div></NavLink>
                <NavLink to='/teams/News/AllStart'>
                <div className='newsNavAll' >All Start Game</div></NavLink>
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
   
        <div className='newsNavComponent'>
            <LeaderHitting />
            <LeaderPitcher />
        </div>


        
       <Footer />
    </div>
  )
}

export default News