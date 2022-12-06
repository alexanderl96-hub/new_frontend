import React, { useState, useEffect } from 'react'
import LoadingHome from '../../../src/Loading.js'


import LeaderPitcher from '../LatestsNews/Regular Season/LeaderPitcher'
import LeaderHitting from '../LatestsNews/Regular Season/LeaderHitting'
import SprintHit from '../LatestsNews/SpringTraining/springHit'
import SprintPit from '../LatestsNews/SpringTraining/springPit'
import ExhibitionHit from '../LatestsNews/Exhibition/exhibitionHit'
import ExhibitionPit from '../LatestsNews/Exhibition/exhibitionPit'
import AllStartHit from '../LatestsNews/All Start Game/allStartHit'
import AllStartPit from '../LatestsNews/All Start Game/allStartPit'
import DivisionHit from '../LatestsNews/Division Series/divisionHit'
import DivisionPit from '../LatestsNews/Division Series/divisionPit'
import FirstHit from '../LatestsNews/First Round/firstHit'
import FirstPit from '../LatestsNews/First Round/firstPit'
import ChampionHit from '../LatestsNews/League Championship/championHit'
import ChampionPit from '../LatestsNews/League Championship/championPit'
import WorldHit from '../LatestsNews/World Series/worldSeriesHit'
import WorldPit from '../LatestsNews/World Series/worldSeriesPit'


const Transcitions = () => {
    const [transaction, setTransaction] = useState([])
    const [currentValue, setCurrentValue] = useState('Regular')
    const [count, setCount] = useState(<div className='LoadingFront'><LoadingHome/></div>);
    const [countInTimeout, setCountInTimeout] = useState([]);



    // function valueTarget (e){
    //   if(e.target.id ){
    //     setIdValue(e.target.id)
    //     window.history.replaceState(null, "Sport World", `/teams/News=${e.target.id}%Top-10`)
    //   }       
    // }

  useEffect(() => {
   
    setTimeout(() => {
      setCountInTimeout(count)
    },2000);
    setCount()
  },[count])



    function handleInput (e){
      const {value} = e.target
        setCurrentValue(value)
        if(e.target.id ){
          setCurrentValue(e.target.id)
        } 
        window.history.replaceState(null, "Sport World", `/teams/News`)
    }
   
    // function changeNav(){
    //   if(clasDrop === 'drop'){
    //     setClasDrop('drop2')
    //   }else if(clasDrop === 'drop2'){
    //     setClasDrop('drop')
    //   }
    // }
    // const toggle = ()=> setOpen(!open)
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

//       const handleRandomNew = (e) => { 
//         let store = []
   
//     let arrMonths = [1, 2, 3]
//       arrMonths.forEach((n, i)=>{
//           while(store.length < 3){
//           const r = Math.floor(Math.random()* e.length-1)+1
//            if(store.indexOf(e[r]) === -1 ){store.push(e[r]) } 
//         } 
//       }) 
//    console.log(store)
      
//    setInterval( function ()  {
//       store = []
//      let arrMonths = [1, 2, 3]
//       arrMonths.forEach((n, i)=>{
//         while(store.length < 3){
//           const r = Math.floor(Math.random()* e.length-1)+1
//            if(store.indexOf(e[r]) === -1 ){store.push(e[r]) } 
//         }  
//       }) 
     
//      console.log(store)
 
//  }, 25000);
//    }
    useEffect(() => {
        fetch(`http://lookup-service-prod.mlb.com/json/named.transaction_all.bam?sport_code='mlb'&start_date='${serachFromlastTwoMonth(previous)}'&end_date='${currentDate(current)}'`)
        .then(res => res.json())
        .then(data =>{
              // let start = handleRandomNew(data.transaction_all.queryResults.row)
            //  console.log(start,'start')
            setTransaction(data.transaction_all.queryResults.row.reverse())
        })
    },[])
  //  console.log( idvalue)
  return (
    <div >
         <div className='mainNews'>
            <h2 style={{ fontFamily: 'spantaran', fontSize: '35px'}}>News</h2>
            <div className='mainNews-firstinner' >
                { transaction.map((a, index)=>{
                    return(
                        <div key={index} className='slidetrack'>
                            <div className= 'newsMap'>
                                <div className='dateEffect'>
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
         {/* <div  role="button" onClick={()=> toggle(!open)}  className='seconddropNav'>
     
           <p onClick={changeNav} style={{ margin: '10px' }}>{open ? <p>Close <FaArrowUp/></p> : <p> Open <FaArrowDown/></p>}</p>
         </div> */}
         {/* {open ?
          <div className={clasDrop}>
              <NavLink to='/teams/News/Regular' >
                <div value='Regular Season' smooth className='dropNavItem' >Regular Season</div></NavLink>
                <NavLink to='/teams/News/SpringTraining'>
                <div value='Spring Training' smooth className='dropNavItem'  >Spring Training</div></NavLink>
                <NavLink to='/teams/News/Exhibition'>
                <div smooth className='dropNavItem' >Exhibition</div></NavLink>
                <NavLink to='/teams/News/AllStart'>
                <div smooth className='dropNavItem' >All Start Game</div></NavLink>
                <NavLink to='/teams/News/DivisionSeries'>
                <div smooth className='dropNavItem' >Division Series</div></NavLink>
                <NavLink to='/teams/News/FirstRound(wildCard)'>
                <div smooth className='dropNavItem' >First Round</div></NavLink>
                <NavLink to='/teams/News/LeagueChampionship'>
                <div smooth className='dropNavItem' >League Championship</div></NavLink>
                <NavLink to='/teams/News/WorldSeries'>
                <div smooth className='dropNavItem' >World Series</div></NavLink>
         </div>: null} */}
         <select 
            name="forma"
            onChange={handleInput}
           required
           className='seconddropNav'
           style={{marginLeft: '10px', height: '27px', padding: '3px', borderRadius: '20px', cursor: 'pointer', background: '#070f3c', color: 'white',}}
          >
           <option value='Regular'  >Regular Season</option>
           <option value='SpringTraining' > Spring Training</option>
           <option value='Exhibition' >Exhibition</option>
           <option value='AllStart' >All Start Game</option>
           <option value='DivisionSeries' >Division Series</option>
           <option value='FirstRound(wildCard)' >First Round</option>
           <option value='LeagueChampionship' >League Championship</option>
           <option value='WorldSeries' >World Series</option>
          
         </select>

         <div>
            <div className='newsNavbar' >
             
                <div id='Regular' className={  currentValue === 'Regular' ? 'navRegularS' : 'newsNavAll' } onClick={handleInput}>Regular Season</div>
             
                <div id='SpringTraining' className={ currentValue === 'SpringTraining' ? 'navRegularS' : 'newsNavAll' }  onClick={handleInput} >Spring Training</div>
             
                <div id='Exhibition' className={ currentValue === 'Exhibition' ?  'navRegularS' : 'newsNavAll'} onClick={handleInput} >Exhibition</div>

                <div id='AllStart' className={currentValue === 'AllStart' ?  'navRegularS' : 'newsNavAll'} onClick={handleInput} >All Start Game</div>

                <div id='DivisionSeries' className={currentValue === 'DivisionSeries' ?  'navRegularS' : 'newsNavAll'}  onClick={handleInput} >Division Series</div>

                <div id='FirstRound(wildCard)' className={currentValue === 'FirstRound(wildCard)' ?  'navRegularS' : 'newsNavAll'}  onClick={handleInput}  >First Round</div>

                <div id='LeagueChampionship' className={currentValue === 'LeagueChampionship' ?  'navRegularS' : 'newsNavAll'}  onClick={handleInput} >League Championship</div>

                <div id='WorldSeries' className={currentValue === 'WorldSeries' ?  'navRegularS' : 'newsNavAll'} onClick={handleInput}  >World Series</div>
            </div>
        </div>

        {currentValue === 'Regular' ?
            <div >  {!countInTimeout ? 
                       <div className='newsNavComponent'>
                           <LeaderHitting />
                           <LeaderPitcher />
                       </div> : <div className='LoadingFront'><LoadingHome/></div>}
        </div> : null}

        {currentValue === 'SpringTraining'? 
            <div > {!countInTimeout ? 
                      <div className='newsNavComponent'>
                          <SprintHit />
                          <SprintPit />
                     </div> : <div className='LoadingFront'><LoadingHome/></div>}
        </div> : null}

        {currentValue === 'Exhibition' ? 
            <div >{!countInTimeout ? 
                     <div className='newsNavComponent' smooth >
                         <ExhibitionHit />
                         <ExhibitionPit />
                    </div> : <div className='LoadingFront'><LoadingHome/></div>}
        </div> : null}

        {currentValue === 'AllStart' ? 
            <div > {!countInTimeout ? 
                      <div className='newsNavComponent'smooth>
                          <AllStartHit />
                          <AllStartPit />
                      </div> : <div className='LoadingFront'><LoadingHome/></div>}
        </div> : null}

        {currentValue === 'DivisionSeries' ? 
            <div > {!countInTimeout ? 
                      <div className='newsNavComponent' smooth >
                          <DivisionHit />
                          <DivisionPit />
                      </div>: <div className='LoadingFront'><LoadingHome/></div>}
        </div> : null}

        {currentValue === 'FirstRound(wildCard)'? 
            <div >{!countInTimeout ? 
                      <div className='newsNavComponent' >
                          <FirstHit />
                          <FirstPit />
                      </div> : <div className='LoadingFront'><LoadingHome/></div>}
        </div> : null}

        {currentValue === 'LeagueChampionship' ? 
            <div > {!countInTimeout ? 
                      <div className='newsNavComponent' >
                          <ChampionHit />
                          <ChampionPit />
                      </div> : <div className='LoadingFront'><LoadingHome/></div>}
        </div> : null}

        {currentValue === 'WorldSeries'  ? 
           <div > {!countInTimeout ? 
                      <div className='newsNavComponent'>
                          <WorldHit />
                          <WorldPit />
                      </div> : <div className='LoadingFront'><LoadingHome/></div>}
        </div> : null}

        
        
     
    </div>
  )
}

export default Transcitions