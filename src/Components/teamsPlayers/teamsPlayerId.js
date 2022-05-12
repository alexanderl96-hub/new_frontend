// import React,  { useState, useEffect} from 'react';
// import { useParams } from 'react-router-dom';
// import './TeamsPlayers.css'

// const teamsPlayerId = ({player}) => {
// //   let  params = useParams();
// //   let teamId = params.id
// //   const [group, setGroup] = useState({});
// //   console.log(teamId, 'teamId')

// //   useEffect(()=>{
// //     fetch(`http://localhost:9000/groups/${teamId}`)
// //     .then(res => res.json())
// //     .then(data =>{
// //       console.log(data , 'temasPlayers');
// //       setGroup(data)
// //     })
// //   },[teamId])

//   return (
//     <div className="teamPlayer_Group">
//     <div className="teamPlayer_About">
//        <div><span>About:</span> {player.about}</div> 
//     </div>
     
//      <div className="teamPlayer_About">
//        <div> <span>Age:</span> {player.age}</div> 
//        <div> <span>Born:</span> {player.born}</div> 
//        <div> <span>City: </span>{player.city}</div> 
//        <div> <span>State:</span> {player.state}</div>
//        <div> <span>Country:</span> {player.country}</div> 
//        <div> <span>Education:</span> {player.education}</div>
//      </div>
//      <div className="teamPlayer_About">
//        <div> <span>Parents:</span> {player.parents}</div> 
//        <div> <span>Spouse: </span>{player.spouse}</div> 
//        <div> <span>Children:</span> {player.children}</div>
//        <div> <span>Siblings:</span> {player.siblings}</div>
//      </div>
//      <div className="teamPlayer_About">
//        <div> <span>Nickname:</span> {player.nickname}</div>
//        <div> <span>Bats:</span> {player.bats}</div>
//        <div> <span>Throws:</span> {player.throws}</div>
//        <div> <span>Height:</span> {player.height}</div>
//        <div> <span>Weight: </span>{player.weight}</div>
//      </div>
//      <div className="teamPlayer_About">
//        <div> <span>Stats: </span>{player.stats}</div>
//      </div>
//   </div>
//   )
// }

// export default teamsPlayerId