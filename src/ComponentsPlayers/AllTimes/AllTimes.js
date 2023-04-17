import React, {useState, useEffect} from 'react'

const AllTimes = () => {
  const [allData, setAllData] = useState([])


  useEffect(()=>{
    fetch(`https://my-baseball-teams.adaptable.app/allTimes`)
    .then(res => res.json())
    .then(data => {
      setAllData(data)
    })
  },[])

  console.log(allData.map(a => a))
  return (
    <div  style={{minHeight: '831px', }}>
        <h1 className='titlePlayCoach'> AllTimes </h1>
        <div style={{color: 'black', margin:'10px 20%'}}>
          {allData.map((a,ind)=>{
            return(
              <div key={ind} style={{marginBottom: '40px'}}>
                <div style={{ display: 'flex', justifyContent: 'start', gap: '20px', alignItems: 'center'}} >
                <div style={{width: '35px', height: '35px', borderRadius: '50%', 
                             backgroundColor: 'purple', color: '#fff', fontSize: '18px', fontWeight: 700,
                             display: 'flex', justifyContent: 'center', alignItems: 'center'}}>{ind+1}</div>

                <h3 style={{color: 'black',fontSize: '18px',}}>{a.name}</h3>
                </div>
                <div style={{ display: 'inline-block', }}>
                   
                   <div ><img src={a.imag} alt=''
                              style={{width: '150px', height: '190px', float: 'left',
                                     marginLeft: '10px', marginRight: '20px',marginBottom: '2px', filter:`grayscale(100%)` }}/> </div>
                   <div style={{wordWrap: 'break-word', textAlign: 'justify'}}> {a.sumary} </div> 
                </div>
               
              </div>
            )
           
          })}
        </div>
     </div>
  )
}

export default AllTimes


// float: left;
// margin: 25px;
// border-radius: 50%;
// border: 2px solid black;
// width: 275px; 
// transition: all 0.8s;
// p{
//   word-wrap: break-word;
//   font-size: 20px;
//   text-align: center;
//   color: #e3e3e3;
//   font-family: sans-serif;
// }