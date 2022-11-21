import React, { useState } from 'react'; 
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';


import Teams from '../src/Components/teamsInfo/Teams'
import IndividualMember from './Components/IndividualMember/IndividualMember'
import UpDateMember from '../src/Components/memberUpDate/MemberUpDate'
import NewTeam from '../src/Components/newTeam/NewTeam'
import NewMember from '../src/Components/newMember/NewMember'
import Allplayers from '../src/ComponentsPlayers/Players/Players'
import Coaches from '../src/ComponentsPlayers/Coaches/Coaches'
import Season from '../src/ComponentsPlayers/Season/Season'
import AddStats from '../src/Components/statsPlayers/addStatsPlayers'
import Desing from './Components/AllMembers/desing'
import AllMembers from '../src/Components/AllMembers/desing'
import CurrentHistagram from '../src/Components/Histogram/CurrentHistagram'
import About from '../src/Components/AboutUs/about'
import News from '../src/Components/LatestsNews/News'
import Text from '../src/Components/text/text.js'
import LoginModal from '../src/Components/Login/LoginModal'
import NavBar from '../src/Components/navBar/Navbar'


function App() {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('accessToken') ? true : false);
 console.log(openLoginModal, loggedIn, 'string')
  return (
    <div className="App">
      <Router >
        <NavBar setOpenLoginModal={setOpenLoginModal} loggedIn={loggedIn} setLoggedIn={setLoggedIn}  />
        <LoginModal  openLoginModal={openLoginModal} setOpenLoginModal={setOpenLoginModal} setLoggedIn={setLoggedIn} />
        <Routes>
          <Route exact path="/" element={<Teams/>}/>
          <Route  path="/teams/groups/:id" element={<IndividualMember/>}/>
          <Route  path="/teams/updateMember/:id" element={<UpDateMember/>}/>
          <Route  path="/teams/new" element={<NewTeam/>}/>
          <Route  path="/teams/newMember/:id" element={<NewMember/>}/>
          <Route  path="/teams/allplayers" element={<Allplayers/>}/>
          <Route  path="/teams/allCoaches" element={<Coaches/>}/>
          <Route  path="/teams/Season" element={<Season/>}/>
          <Route  path="/teams/About" element={<About/>}/>
          <Route  path="/teams/News" element={<News/>}/>
          <Route  path="/teams/Text" element={<Text/>}/>
          <Route  path="/teams/groups/:id/addStats" element={<AddStats/>}/>
          <Route  path="/teams/newpage/:id" element={<Desing/>}/>  
          <Route  path="/teams/allmembers/:id" element={<AllMembers />}/> 
          <Route  path="/teams/CurrentHistagram/:id" element={<CurrentHistagram/>}/>      
         </Routes>
      </Router>
       
    </div>
  );
}

export default App;
