import React, {useState, useEffect} from 'react'

const Records = () => {
  const [allRecordData, setAllRecordData] = useState([])


  useEffect(()=>{
    fetch(`https://my-baseball-teams.adaptable.app/records`)
    .then(res => res.json())
    .then(data => {
      setAllRecordData(data)
    })
  },[])


  return (
    <div  style={{minHeight: '831px'}}>
        <h1 className='titlePlayCoach'> Records </h1>
        <div style={{color: 'black', margin:'10px 20%'}}>
          {allRecordData.map((a,ind)=>{
            return(
              <div key={ind} style={{marginBottom: '60px'}}>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', alignItems: 'center'}} >
                      <h2 style={{color: 'black',fontSize: '2.7vw',fontWeight: 'bold', }}>{a.name}</h2>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '2px', 
                       alignItems: 'center', marginBottom: '40px', color: '#cccccc'}} >{ind+1} OF {allRecordData.length} </div>
             
                 <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px'}}>
                           <img src={a.imag} alt=''
                              style={{width: '83%', height: '450px' }}/> </div>
                   {a.record && <div style={{marginLeft: '9%', width: '85%', wordWrap: 'break-word', textAlign: 'justify', 
                                 wordSpacing: '.3', lineHeight: '2.0em', fontSize: '17px',}}>Record: {a.record} </div> }
                   {a.moderndayrecord && <div style={{marginLeft: '9%', width: '85%',wordWrap: 'break-word', textAlign: 'justify',
                               wordSpacing: '.3', lineHeight: '2.0em', fontSize: '17px',}}>Modern day record: {a.moderndayrecord} </div> }
                   {a.closestsince && <div style={{marginLeft: '9%', width: '85%',wordWrap: 'break-word', textAlign: 'justify', 
                               wordSpacing: '.3', lineHeight: '2.0em', fontSize: '17px',}}>Closests since 2000: {a.closestsince} </div> }
                    {a.closestactiveplayer && <div style={{marginLeft: '9%', width: '85%',wordWrap: 'break-word', textAlign: 'justify', 
                                wordSpacing: '.3', lineHeight: '2.0em', fontSize: '17px',}}>Closest active player: {a.closestactiveplayer} </div>  } 
                   {a.closestunderthirty && <div style={{marginLeft: '9%', width: '85%',wordWrap: 'break-word', textAlign: 'justify', 
                                wordSpacing: '.3', lineHeight: '2.0em', fontSize: '17px',}}>Closest under 30: {a.closestunderthirty} </div>}        
                   <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', 
                              wordWrap: 'break-word', textAlign: 'justify', margin: '13px 70px',fontSize: '18px',
                              wordSpacing: '.3'}}> {a.sumary} </div> 
                   {ind+1 !== allRecordData.length && <div style={{ display: 'flex', justifyContent: 'center',
                       alignItems: 'center',}}>
                        <div style={{border: '.8px solid', width: '130px', marginTop: '50px'}}></div>
                    </div>}
               
              </div>
            )
           
          })}
        </div>
    </div>
  )
}

export default Records