import React, { useState, useEffect } from 'react'
import LeaderPitcher from './Regular Season/LeaderPitcher'
import LeaderHitting from './Regular Season/LeaderHitting'
import NavBar from '../navBar/Navbar'
import { NavLink} from 'react-router-dom'
import Footer from '../Footer/Footer'

const News = () => {
    const [transaction, setTransaction] = useState([])


    useEffect(() => {
        fetch(`http://lookup-service-prod.mlb.com/json/named.transaction_all.bam?sport_code='mlb'&start_date='20221101'&end_date='20221231'`)
        .then(res => res.json())
        .then(data =>{
            setTransaction(data.transaction_all.queryResults.row)
        })
    },[])
    // useEffect(() => {
    //     fetch(` http://lookup-service-prod.mlb.com/json/named.leader_hitting_repeater.bam?sport_code='mlb'&results=5&game_type='R'&season='2017'&sort_column=ab`)
    //     .then(res => res.json())
    //     .then(data =>{
    //         setLeaderHitting(data.leader_hitting_repeater.leader_hitting_mux.queryResults.row)
    //     })
    // },[])
    // useEffect(() => {
    //     fetch(`  http://lookup-service-prod.mlb.com/json/named.leader_pitching_repeater.bam?sport_code='mlb'&results=5&game_type='R'&season='2017'&sort_column=era`)
    //     .then(res => res.json())
    //     .then(data =>{
    //         setLeaderPitcher(data.leader_pitching_repeater.leader_pitching_mux.queryResults.row)
    //     })
    // },[])
    // console.log(leaderPitcher)
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
            <div style={{display: 'flex', justifyContent: 'space-evenly', background: 'blue', height: '35px', color: 'white', alignItems: 'center'}}>
              <NavLink to={'/teams/News'} >
                <div style={{cursor: 'pointer', color: 'white', textDecoration:'underline'}}>Regular Season</div></NavLink>
                <NavLink to='/teams/News/SpringTraining'>
                <div style={{cursor: 'pointer', color: 'white'}}>Spring Training</div></NavLink>
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
            <LeaderHitting />
            <LeaderPitcher />
        </div>


        
       <Footer />
    </div>
  )
}

export default News