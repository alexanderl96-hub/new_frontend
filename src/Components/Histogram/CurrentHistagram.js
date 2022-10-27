import React, { useState, useEffect } from 'react'
import { Chart } from "react-google-charts";
import { useParams } from 'react-router-dom';
import './CurrentHistagram.css';

 const CurrentHistagram = ()=> {
    const [member, setMember] = useState([])
    const [playerYear, setPlayerYear] = useState([])
    const [playerGP, setPlayerGP] = useState([])
    const [playerAB, setPlayerAB] = useState([])
    const [playerR, setPlayerR] = useState([])
    const [playerSO, setPlayerSO] = useState([])
    const [playerH, setPlayerH] = useState([])
    const [playerRBI, setPlayerRBI] = useState([])
    const [playerBB, setPlayerBB] = useState([])
    const [playerHR, setPlayerHR] = useState([])
    const [playerAVE, setPlayerAVE] = useState([])
    const [pitcherYear, setPitcherYear] = useState([])
    const [pitcherGP, setPitcherGP] = useState([])
    const [pitcherCG, setPitcherCG] = useState([])
    const [pitcherER, setPitcherER] = useState([])
    const [pitcherSO, setPitcherSO] = useState([])
    const [pitcherW, setPitcherW] = useState([])
    const [pitcherL, setPitcherL] = useState([])
    const [pitcherSV, setPitcherSV] = useState([])
    const [pitcherWHIP, setPitcherWHIP] = useState([])
    const [pitcherERA, setPitcherERA] = useState([])
    const [currentDate, setCurrDate] = useState([])
    const [currentAb, setCurrAB] = useState([])
    const [currentR, setCurrR] = useState([])
    const [currentH, setCurrH] = useState([])
    const [currentRb, setCurrRB] = useState([])
    const [currentBb, setCurrBB] = useState([])
    const [currentHr, setCurrHR] = useState([])
    const [currentSo, setCurrSO] = useState([])
    const [currentSb, setCurrSB] = useState([])
    const [currentAVE, setCurrAVE] = useState([])
    const [currPitDate, setCurrPitDate] = useState([])
    const [currPitIp, setCurrPitIP] = useState([])
    const [currPitR, setCurrPitR] = useState([])
    const [currPitH, setCurrPitH] = useState([])
    const [currPitEr, setCurrPitEr] = useState([])
    const [currPitBb, setCurrPitBB] = useState([])
    const [currPitHr, setCurrPitHR] = useState([])
    const [currPitSo, setCurrPitSO] = useState([])
    const [currPitSv, setCurrPitSv] = useState([])
    const [currPitERA, setCurrPitERA] = useState([])
  
    let params = useParams()
    let memberId = params.id

    const data = [
        ["Year", "GP", "AB", "R", "H", "RBI", "BB", "SO", "HR", "AVG"],
        [String(playerYear['0']), playerGP['0'], playerAB['0'], playerR['0'], playerSO['0'], playerH['0'], playerRBI['0'], playerBB['0'], playerHR['0'], playerAVE['0']], /*      */ 
        [playerYear['1'], playerGP['1'], playerAB['1'], playerR['1'], playerSO['1'], playerH['1'], playerRBI['1'], playerBB['1'], playerHR['1'], playerAVE['1']],    
        [playerYear['2'], playerGP['2'], playerAB['2'], playerR['2'], playerSO['2'], playerH['2'], playerRBI['2'], playerBB['2'], playerHR['2'], playerAVE['2']],
        [playerYear['3'], playerGP['3'], playerAB['3'], playerR['3'], playerSO['3'], playerH['3'], playerRBI['3'], playerBB['3'], playerHR['3'], playerAVE['3']],
        [playerYear['4'], playerGP['4'], playerAB['4'], playerR['4'], playerSO['4'], playerH['4'], playerRBI['4'], playerBB['4'], playerHR['4'], playerAVE['4']],

      ];
      const dataPitcher = [
        ["Year", "GP", "AB", "R", "H", "RBI", "BB", "SO", "HR", "AVG"],
        [String(pitcherYear['0']), pitcherGP['0'], pitcherCG['0'], pitcherER['0'], pitcherSO['0'], pitcherW['0'], pitcherL['0'], pitcherSV['0'], pitcherWHIP['0'], pitcherERA['0']], /*      */ 
        [pitcherYear['1'], pitcherGP['1'], pitcherCG['1'], pitcherER['1'], pitcherSO['1'], pitcherW['1'], pitcherL['1'], pitcherSV['1'], pitcherWHIP['1'], pitcherERA['1']],    
        [pitcherYear['2'], pitcherGP['2'], pitcherCG['2'], pitcherER['2'], pitcherSO['2'], pitcherW['2'], pitcherL['2'], pitcherSV['2'], pitcherWHIP['2'], pitcherERA['2']],
        [pitcherYear['3'], pitcherGP['3'], pitcherCG['3'], pitcherER['3'], pitcherSO['3'], pitcherW['3'], pitcherL['3'], pitcherSV['3'], pitcherWHIP['3'], pitcherERA['3']],
        [pitcherYear['4'], pitcherGP['4'], pitcherCG['4'], pitcherER['4'], pitcherSO['4'], pitcherW['4'], pitcherL['4'], pitcherSV['4'], pitcherWHIP['4'], pitcherERA['4']],
        
      ]
      const dataCurrent = [
        ["Date", "AB", "R", "H", "RB", "BB", "SO", "HR", "SB", "AVG"],
        [currentDate['0'], currentAb['0'], currentR['0'], currentH['0'], currentRb['0'], currentBb['0'], currentSo['0'], currentHr['0'], currentSb['0'], currentAVE['0']], /*      */ 
        [currentDate['1'], currentAb['1'], currentR['1'], currentH['1'], currentRb['1'], currentBb['1'], currentSo['1'], currentHr['1'], currentSb['1'], currentAVE['1']],    
        [currentDate['2'], currentAb['2'], currentR['2'], currentH['2'], currentRb['2'], currentBb['2'], currentSo['2'], currentHr['2'], currentSb['2'], currentAVE['2']],
        [currentDate['3'], currentAb['3'], currentR['3'], currentH['3'], currentRb['3'], currentBb['3'], currentSo['3'], currentHr['3'], currentSb['3'], currentAVE['3']],
        [currentDate['4'], currentAb['4'], currentR['4'], currentH['4'], currentRb['4'], currentBb['4'], currentSo['4'], currentHr['4'], currentSb['4'], currentAVE['4']],
    
      ];
       
 const dataCurrPit = [
    ["Date", "H", "R", "ER", "IP", "HR", "BB", "SO", "SV", "ERA"],
    [currPitDate['0'], currPitH['0'], currPitR['0'], currPitEr['0'], currPitIp['0'], currPitHr['0'], currPitBb['0'], currPitSo['0'], currPitSv['0'], currPitERA['0']], /*      */ 
    [currPitDate['1'], currPitH['1'], currPitR['1'], currPitEr['1'], currPitIp['1'], currPitHr['1'],currPitBb['1'], currPitSo['1'],  currPitSv['1'], currPitERA['1']],    
    [currPitDate['2'], currPitH['2'], currPitR['2'], currPitEr['2'], currPitIp['2'], currPitHr['2'],currPitBb['2'], currPitSo['2'],  currPitSv['2'], currPitERA['2']],
    [currPitDate['3'], currPitH['3'], currPitR['3'], currPitEr['3'], currPitIp['3'], currPitHr['3'],currPitBb['3'], currPitSo['3'],  currPitSv['3'], currPitERA['3']],
    [currPitDate['4'], currPitH['4'], currPitR['4'], currPitEr['4'], currPitIp['4'], currPitHr['4'],currPitBb['4'], currPitSo['4'],  currPitSv['4'], currPitERA['4']],
  ];


      const options = {
        title: member.toString(),
        is3D: true,
        backgroundColor: 'transparent',
        chart: {
            // title: " Current Season",
           // subtitle: "in millions of dollars (USD)",
          },
      };
      
     
    const ratingChanged = (a) => { 
      let rest = 0
      if(a >=  0.300 ){ rest = 5.0 }
      else if(a >= 0.275 && a < 0.300){ rest = 4.5 }
      else if(a >= 0.250 && a < 0.275){ rest = 4.0 }
      else if(a >= 0.225 && a < 0.250){ rest = 3.5 }
      else if(a >= 0.200 && a < 0.225){ rest = 3.0 }
      else if(a >= 0.175 && a < 0.200){ rest = 2.5 }
      else if(a >= 0.150 && a < 0.175){ rest = 2.0 }
      else if(a >= 0.125 && a < 0.150){ rest = 1.5 }
      else if(a>= 0.100 && a < 0.125){ rest = 1.0 }
      else if(a >= 0.50 && a < 0.10){ rest = 0.5 }
      else if(a>= 0.10){ rest = 0.0}
      return rest
    }; 

      useEffect(() => {
        fetch(`https://my-baseball-teams.adaptable.app/groups`)
        .then(res => res.json())
        .then(data =>{
            setMember(data.filter(a => a.id === Number(memberId)).map(a => a.name))
        })
    },[memberId])

      useEffect(() => {
        fetch(`https://my-baseball-teams.adaptable.app/pitchersCarrer`)
        .then(res => res.json())
        .then(data =>{
            let storeYear= []
            let storeGP = []   
            let storeCG = []
            let storeER = []
            let storeSO = []
            let storeW = []
            let storeL = []
            let storeSV = []
            let storeWHIP = []
            let storeERA = []
            let val = data.filter(a => a.pitcher_id === Number(memberId)).slice(-5).sort((a,b)=>a.id-b.id)
            val.forEach((elem)=>{
                storeYear.push(elem.game_year)
                storeGP.push(elem.career_gp)
                storeCG.push(elem.career_cg)
                storeER.push(elem.career_er)
                storeSO.push(elem.career_so)
                 storeW.push(elem.career_w)
                 storeL.push(elem.career_l)
                 storeSV.push(elem.career_sv)
                 storeWHIP.push(elem.career_whip)
                 storeERA.push(elem.career_era)
                
            })
             
            setPitcherYear(storeYear)    
            setPitcherGP(storeGP)
            setPitcherCG(storeCG)
            setPitcherER(storeER)
            setPitcherSO(storeSO)
            setPitcherW(storeW)
            setPitcherL(storeL)
            setPitcherSV(storeSV)
            setPitcherWHIP(storeWHIP)
            setPitcherERA(storeERA)
        })
      },[memberId])
  
      useEffect(() => {
        fetch(`https://my-baseball-teams.adaptable.app/playersCareer`)
        .then(res => res.json())
        .then(data =>{
            let storeYear= []
            let storeGP = []   
            let storeAB = []
            let storeR = []
            let storeH = []
            let storeRBI = []
            let storeBB = []
            let storeSO = []
            let storeHR = []
            let storeAVE = []
            let val = data.filter(a => a.players_id === Number(memberId)).slice(-5).sort((a,b)=>a.id-b.id)
            val.forEach((elem)=>{
                storeYear.push(elem.game_year)
                storeGP.push(elem.career_gp)
                storeAB.push(elem.career_ab)
                storeR.push(elem.career_r)
                storeH.push(elem.career_h)
                 storeRBI.push(elem.career_rbi)
                 storeBB.push(elem.career_bb)
                 storeSO.push(elem.career_so)
                 storeHR.push(elem.career_hr)
                 storeAVE.push(ratingChanged(elem.career_average))
                
            })
             
             setPlayerYear(storeYear)    
                setPlayerGP(storeGP)
                setPlayerAB(storeAB)
                setPlayerR(storeR)
                setPlayerH(storeH)
                setPlayerRBI(storeRBI)
                setPlayerBB(storeBB)
                setPlayerSO(storeSO)
                setPlayerHR(storeHR)
                setPlayerAVE(storeAVE)
        })
      },[memberId])

      useEffect(() => {
        fetch(`https://my-baseball-teams.adaptable.app/playersStats`)
        .then(res => res.json())
        .then(data =>{
            let storeDate= []
            let storeSB = []   
            let storeAB = []
            let storeR = []
            let storeH = []
            let storeRB = []
            let storeBB = []
            let storeSO = []
            let storeHR = []
            let storeAVE = []
            let val = data.filter(a => a.players_id === Number(memberId)).slice(-7).sort((a,b)=>a.id-b.id)
            val.forEach((elem)=>{
                storeDate.push(elem.game_date)
                storeSB.push(elem.sb)
                storeAB.push(elem.ab)
                storeR.push(elem.r)
                storeH.push(elem.h)
                 storeRB.push(elem.rb)
                 storeBB.push(elem.bb)
                 storeSO.push(elem.so)
                 storeHR.push(elem.hr)
                 storeAVE.push(ratingChanged(elem.average))
                
            })
            console.log(storeAVE, 'sortlast')
                setCurrDate(storeDate)    
                setCurrSB(storeSB)
                setCurrAB(storeAB)
                setCurrR(storeR)
                setCurrH(storeH)
                setCurrRB(storeRB)
                setCurrBB(storeBB)
                setCurrSO(storeSO)
                setCurrHR(storeHR)
                setCurrAVE(storeAVE)
        })
      },[memberId])

      useEffect(() => {
        fetch(`https://my-baseball-teams.adaptable.app/pitchersStats`)
        .then(res => res.json())
        .then(data =>{
            let storeDate= []
            let storeIp = []   
            let storeH = []
            let storeR = []
            let storeEr = []
            let storeHr = []
            let storeBB = []
            let storeSO = []
            let storeSv = []
            let storeERA = []
            let val = data.filter(a => a.players_id === Number(memberId)).slice(-7).sort((a,b)=>a.id-b.id)
            val.forEach((elem)=>{
                storeDate.push(elem.game_date)
                storeIp.push(elem.ip)
                storeH.push(elem.h)
                storeR.push(elem.r)
                storeEr.push(elem.er)
                 storeHr.push(elem.hr)
                 storeBB.push(elem.bb)
                 storeSO.push(elem.so)
                 storeSv.push(elem.sv)
                 storeERA.push(elem.era)
                
            })
            console.log(storeERA, 'sort')
                setCurrPitDate(storeDate)    
                setCurrPitSv(storeSv)
                setCurrPitIP(storeIp)
                setCurrPitR(storeR)
                setCurrPitH(storeH)
                setCurrPitEr(storeEr)
                setCurrPitBB(storeBB)
                setCurrPitSO(storeSO)
                setCurrPitHR(storeHr)
                setCurrPitERA(storeERA)
        })
      },[memberId])
    
      console.log(playerYear, pitcherERA)
  return (
    <div className='MainContStatc'>
        <div>
                { pitcherYear.length > 0 ? 
                <div className='pitcherCarStatc'>
                <Chart
                chartType="PieChart"
                width='650px'
                height="600px"
                data={ dataPitcher }
                options={options}
                />
                <p >Career Pitcher Stats</p>
            </div> :null}
                
            
                {playerYear.length > 0 ?   
                <div className='pitcherCarStatc'> 
                    <Chart
                    chartType="PieChart"
                    width='650px'
                    height="600px"
                    data={data}
                    options={options}
                    />
                    <p >Career Player Stats</p>
                </div>      
                : null}
           
          </div>
          <div>
          
           { currentDate.length > 0 ? 
                <div className='currStatc'>
                <Chart
                chartType="Line"
                width='650px'
                height="500px"
                data={ dataCurrent }
                options={options}
                />
                <p > Player Current Season</p>
            </div> :null}
            { currPitDate.length > 0 ? 
                <div className='currStatc'>
                <Chart
                chartType="Line"
                width='650px'
                height="500px"
                data={ dataCurrPit }
                options={options}
                />
                <p > Pitcher Current Season</p>
            </div> :null}
           </div>
    </div>
  );
}
export default CurrentHistagram;