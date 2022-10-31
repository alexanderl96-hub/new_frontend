import React, { useState, useEffect } from 'react'
import SprintHit from './SpringTraining/springHit'
import SprintPit from './SpringTraining/springPit'
import Footer from '../Footer/Footer'
import NavBar from '../navBar/Navbar'
import { NavLink} from 'react-router-dom'

const Sprint = () => {
  const [transaction, setTransaction] = useState([])

  useEffect(() => {
    fetch(`http://lookup-service-prod.mlb.com/json/named.transaction_all.bam?sport_code='mlb'&start_date='20221101'&end_date='20221231'`)
    .then(res => res.json())
    .then(data =>{
        setTransaction(data.transaction_all.queryResults.row)
    })
},[])
  return (
    <div>
        <NavBar />
        <div style={{display: 'flex',  justifyContent: 'space-around'}}>
            <h2 style={{marginLeft: '30px'}}>News</h2>
            <div style={{display: 'flex',}}>
                { transaction.map((a, index)=>{
                    return(
                        <div>
                            <div style={{display: 'flex', flexDirection: 'column', width: '500px', margin:'5px'}}>
                                <div>
                                    {a.effective_date} 
                                </div>                     
                                <div >
                                    {a.note}
                                </div>
                                <div style={{textAlign: 'center'}}>
                                    {a.name_display_first_last} / {a.orig_asset}
                                </div>
                                <div style={{textAlign: 'center'}}>
                                    {a.team} {a.orig_asset_type} {a.trans_date_cd}
                                </div>
                                <div style={{textAlign: 'center'}}>
                                    {a.type_cd}
                                </div>    
                            </div>
                        </div>
                    )
                })}
                </div>
         </div>
        <div>
            <div style={{display: 'flex', justifyContent: 'space-evenly', background: '#2e2666', height: '40px', color: 'white', alignItems: 'center'}}>
              <NavLink to='/teams/News' >
                <div style={{cursor: 'pointer', color: 'white'}}>Regular Season</div></NavLink>
                <NavLink to='/teams/News/SpringTraining'>
                <div style={{cursor: 'pointer',textDecoration:'underline', fontFamily: 'cursive' , color: 'gray'}}>Spring Training</div></NavLink>
                <NavLink to='/teams/News/Exhibition'>
                <div style={{cursor: 'pointer', color: 'white'}}>Exhibition</div></NavLink>
                <NavLink to='/teams/News/AllStart'>
                <div style={{cursor: 'pointer', color: 'white'}}>All Start Game</div></NavLink>
                <NavLink to='/teams/News/DivisionSeries'>
                <div style={{cursor: 'pointer', color: 'white'}}>Division Series</div></NavLink>
                <NavLink to='/teams/News/FirstRound(wildCard)'>
                <div style={{cursor: 'pointer', color: 'white'}}>First Round</div></NavLink>
                <NavLink to='/teams/News/LeagueChampionship'>
                <div style={{cursor: 'pointer', color: 'white'}}>League Championship</div></NavLink>
                <NavLink to='/teams/News/WorldSeries'>
                <div style={{cursor: 'pointer', color: 'white'}}>World Series</div></NavLink>
            </div>
        </div>
      
        <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
            <SprintHit />
            <SprintPit />
        </div>

        <Footer />
    </div>
  )
}

export default Sprint