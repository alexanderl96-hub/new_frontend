import React, { useState, useEffect} from 'react'
import './text.css'
// import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';



const Text = () => {
    const [teams, setTeams] = useState([]);
   const [handel, setHandel] = useState(0);

    function onHandleClick (e){
        let value = 0
      
        if(e.target.id === 'prev' ){
            value++
            setHandel(handel - value)
        }else if(e.target.id === 'next'){
            value++
            setHandel(handel + value)
        }

    }
   
   
    useEffect(() => {
        fetch(`https://my-baseball-teams.adaptable.app/teams`)
        .then(res => res.json())
        .then(data =>{
            setTeams(data)
        })
    },[])
    console.log(teams, handel )
    return (
          <div className='container'>
              <div id='prev' className='handel prev-handle' >
                  <div id='prev' className='text' onClick={onHandleClick} >&#8249;</div>
             </div>
              <div className='Slider'>
              {teams.map((a,i)=>{
                  return(
                    < div style={{display:'flex', flexDirection: 'column'}}>
                        <img src={a.imag} alt='' />
                        <p>{a.name}</p>
                     </ div>
                  )                
              })}
              </div>
              <div id='next' className='handel next-handle'  >
                  <div id='next' className='text' onClick={onHandleClick} >&#8250;</div>
             </div>

          </div>   
    )
}

export default Text