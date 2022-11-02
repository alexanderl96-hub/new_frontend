import React, { useState, useEffect } from 'react'
import { NavLink} from 'react-router-dom'
import {FaArrowDown,  FaArrowUp,} from 'react-icons/fa';

const Transcitions = () => {
    const [transaction, setTransaction] = useState([])
    const [open, setOpen] = useState(false)
    const [currentValue, setCurrentValue] = useState('')
    const [clasDrop, setClasDrop] = useState('drop')

    function handleInput (e){
      const {value} = e.target
      setCurrentValue(value)
    }
    
    function changeNav(){
      if(clasDrop === 'drop'){
        setClasDrop('drop2')
      }else if(clasDrop === 'drop2'){
        setClasDrop('drop')
      }
    }
    const toggle = ()=> setOpen(!open)
    let previous = new Date()
    let current = new Date()


    function currentDate(value){
        let date = new Date(value);
        let day = date.getDate() < 10 ? '0'.concat(date.getDate() ) : date.getDate()
        let month = date.getMonth()+1 < 10 ? '0'.concat(date.getMonth()+1) : date.getMonth()+1 
        let year = date.getFullYear()
        return [year, month, day].join('')
      }

    function changeDate(value){
        let date = new Date(value);
        let day = date.getDate() < 10 ? '0'.concat(date.getDate() ) : date.getDate()
        let month = date.getMonth()+1 < 10 ? '0'.concat(date.getMonth()+1) : date.getMonth()+1 
        let year = date.getFullYear()
        return [year, month, day].join('-')
      }

      function serachFromlastTwoMonth (day){
        let date = new Date(day);
        let today = date.getDate() < 10 ? '0'.concat(date.getDate() ) : date.getDate()
        let month = date.getMonth()+1 < 10 ? '0'.concat(date.getMonth()+1): date.getMonth()+1
        let year = date.getFullYear()
        let current = 0
           if(today-7 <= 0){
             current = today - 7
             today = 30 - Math.abs(current)
              year = month -1 === 0 ? year-1 : year
             let currentmonth = month -1 === 0 ? 12 : month -1
             month = currentmonth < 10 ? '0'.concat(currentmonth) : currentmonth
           }else {
             today = today-7 < 10 ? '0'.concat(today-7) : today-7
           }
        
        return [year, month, today].join('')
      }

    useEffect(() => {
        fetch(`http://lookup-service-prod.mlb.com/json/named.transaction_all.bam?sport_code='mlb'&start_date='${serachFromlastTwoMonth(previous)}'&end_date='${currentDate(current)}'`)
        .then(res => res.json())
        .then(data =>{
            setTransaction(data.transaction_all.queryResults.row)
        })
    },[])
   console.log(currentValue, clasDrop)
  return (
    <div>
         <div className='mainNews'>
            <h2 >News</h2>
            <div className='mainNews-firstinner' >
                { transaction.map((a, index)=>{
                    return(
                        <div>
                            <div className= 'newsMap'>
                                <div >
                                    { changeDate(a.effective_date)} 
                                </div>                     
                                <div  className= 'newsMap-Name'>
                                    {a.note}
                                </div>
                                <div className= 'newsMap-Name'>
                                    {a.name_display_first_last} / {a.orig_asset}
                                </div>
                                <div  className= 'newsMap-Name'>
                                    {a.team} {a.orig_asset_type} {a.trans_date_cd}
                                </div>
                                <div  className= 'newsMap-Name'>
                                    {a.type_cd}
                                </div>    
                            </div>
                        </div>
                    )
                })}
                </div>
         </div>
         <div  role="button" onClick={()=> toggle(!open)} style={{  display: 'flex',  background: '#2e2666',height: '50px',color: 'white', justifyContent: 'flex-end' ,alignItems: 'center',}} className='seconddropNav'>
         {/* <p >{open ? 'Close': "Open"} </p> */}
           <p onClick={changeNav} style={{ margin: '10px' }}>{open ? <p>Close <FaArrowUp/></p> : <p> Open <FaArrowDown/></p>}</p>
         </div>
         {open ?
          <div className={clasDrop}>
              <NavLink to='/teams/News' >
                <div value='Regular Season' smooth style={{textDecoration: 'none',color: 'white', margin:'7px', textAlign:'center' }} onClick={handleInput}>Regular Season</div></NavLink>
                <NavLink to='/teams/News/SpringTraining'>
                <div value='Spring Training' style={{textDecoration: 'none',color: 'white',  margin:'7px', textAlign:'center' }} onClick={handleInput}>Spring Training</div></NavLink>
                <NavLink to='/teams/News/Exhibition'>
                <div style={{textDecoration: 'none',color: 'white', margin:'7px', textAlign:'center'  }}>Exhibition</div></NavLink>
                <NavLink to='/teams/News/AllStart'>
                <div style={{textDecoration: 'none',color: 'white',  margin:'7px', textAlign:'center' }}>All Start Game</div></NavLink>
                <NavLink to='/teams/News/DivisionSeries'>
                <div style={{textDecoration: 'none',color: 'white', margin:'7px', textAlign:'center'  }}>Division Series</div></NavLink>
                <NavLink to='/teams/News/FirstRound(wildCard)'>
                <div style={{textDecoration: 'none',color: 'white', margin:'7px', textAlign:'center'  }}>First Round</div></NavLink>
                <NavLink to='/teams/News/LeagueChampionship'>
                <div style={{textDecoration: 'none',color: 'white',  margin:'7px', textAlign:'center' }}>League Championship</div></NavLink>
                <NavLink to='/teams/News/WorldSeries'>
                <div style={{textDecoration: 'none',color: 'white', margin:'7px', textAlign:'center'  }}>World Series</div></NavLink>
         </div>: null}
    </div>
  )
}

export default Transcitions