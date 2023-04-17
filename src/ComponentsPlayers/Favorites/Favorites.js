import React, {useEffect, useState} from 'react'
import { FaThumbsUp} from 'react-icons/fa';

const Favorites = ({favorite}) => {
  const [allFavorites, setAllFavorites] = useState([])
  const values = favorite
 
  useEffect (()=>{
    fetch(`https://my-baseball-teams.adaptable.app/groups`)
    .then(res => res.json())
    .then(data => {

       setAllFavorites(data = data.filter( a => values.includes(a.id)))
    })
  },[values])

  console.log(favorite, allFavorites,'infavorite')
  return (
    <div style={{minHeight: '831px'}}>
         <h1 className='titlePlayCoach'> Favorites </h1>
        <div style={{color: 'black', margin:'10px 15%', }}>{allFavorites.map(a =>{
          return(
            <div style={{backgroundColor:'#aedec4',display: 'flex',justifyContent:'start',
                     marginBottom: '10px', borderRadius: '10px'}}>
              <div style={{display: 'flex', flexDirection:'column',justifyContent:'center', 
                        alignItems:'center', padding: '3px', width: '130px', marginLeft: '10px'}}>
                <div style={{}}>{a.name.split(' ').slice(0,2).join(' ')}</div>
                <img src={a.imag} alt='' style={{width: '100px', height: '100px',
                        backgroundColor: '#fff', borderRadius: '5px'}} />
              </div>
              <div style={{display: 'flex', flexDirection:'column',justifyContent:'center', 
                        alignItems:'center', padding: '3px', width: '300px', marginLeft: '10px'}}>
                 <div style={{lineHeight: '4'}}>{a.current_team}</div>
                 <div style={{display: 'flex',justifyContent:'center',width: '200px',  alignItems:'center', fontSize: '1vw'}}>{a.position}</div>
              </div>
              <div style={{display: 'flex', flexDirection:'column',justifyContent:'center', 
                        alignItems:'center', padding: '3px', width: '600px', marginLeft: '10px'}} >
                           <FaThumbsUp color={ 'blue' } style={{marginLeft: '90%'}}/>
                 <div style={{textAlign: 'justify', marginRight: '10px', height: '90px', }}>{a.about}</div>
              </div>

            </div>
            )
         })}</div>
    </div>
  )
}

export default Favorites