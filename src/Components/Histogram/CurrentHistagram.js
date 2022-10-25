import React, { useState, useEffect } from 'react'
import { Chart } from "react-google-charts";
import { useParams } from 'react-router-dom'


 const CurrentHistagram = ()=> {
    const [member, setMember] = useState([])
    const [playerYear, setPlayerYear] = useState([])
    const [playerGP, setPlayerGP] = useState([])
    const [playerCG, setPlayerCG] = useState([])
    const [playerER, setPlayerER] = useState([])
    const [playerSO, setPlayerSO] = useState([])
    const [playerW, setPlayerW] = useState([])
    const [playerL, setPlayerL] = useState([])
    const [playerSV, setPlayerSV] = useState([])
    const [playerWHIP, setPlayerWHIP] = useState([])
    const [playerERA, setPlayerERA] = useState([])
  
    let params = useParams()
    let memberId = params.id

    const data = [
        ["Year", "GP", "AB", "R", "H", "RBI", "BB", "SO", "HR", "AVG"],
        [String(playerYear['0']), playerGP['0'], playerCG['0'], playerER['0'], playerSO['0'], playerW['0'], playerL['0'], playerSV['0'], playerWHIP['0'], playerERA['0']], /*      */ 
        [playerYear['1'], playerGP['1'], playerCG['1'], playerER['1'], playerSO['1'], playerW['1'], playerL['1'], playerSV['1'], playerWHIP['1'], playerERA['1']],    
        [playerYear['2'], playerGP['2'], playerCG['2'], playerER['2'], playerSO['2'], playerW['2'], playerL['2'], playerSV['2'], playerWHIP['2'], playerERA['2']],
        [playerYear['3'], playerGP['3'], playerCG['3'], playerER['3'], playerSO['3'], playerW['3'], playerL['3'], playerSV['3'], playerWHIP['3'], playerERA['3']],
        [playerYear['4'], playerGP['4'], playerCG['4'], playerER['4'], playerSO['4'], playerW['4'], playerL['4'], playerSV['4'], playerWHIP['4'], playerERA['4']],

      ];

      const options = {
        title: member.toString(),
        is3D: true,
        backgroundColor: 'transparent',
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
            let val = data.filter(a => a.pitcher_id === Number(memberId)).slice(-5)
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
             
             setPlayerYear(storeYear)    
                setPlayerGP(storeGP)
                setPlayerCG(storeCG)
                setPlayerER(storeER)
                setPlayerSO(storeSO)
                setPlayerW(storeW)
                setPlayerL(storeL)
                setPlayerSV(storeSV)
                setPlayerWHIP(storeWHIP)
                setPlayerERA(storeERA)
        })
      },[memberId])


  return (
    <div>
            <div>
                <Chart
                chartType="PieChart"
                width='80%'
                height="600px"
                data={data}
                options={options}
                />

                <p style={{marginLeft: '300px', fontSize: '20px'}}>Career Pitcher Stats</p>
            </div>
             <div></div>
    </div>
  );
}
export default CurrentHistagram;