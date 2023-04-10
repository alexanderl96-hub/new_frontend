import React from 'react'

const Favorites = ({favorite}) => {
  console.log(favorite, 'infavorite')
  return (
    <div style={{minHeight: '831px'}}>
         <h1 className='titlePlayCoach'> Favorites </h1>
         <div >{favorite.map(a =>{
          return(<div style={{margin: '10px'}}>{a}</div>)
         })}</div>
    </div>
  )
}

export default Favorites