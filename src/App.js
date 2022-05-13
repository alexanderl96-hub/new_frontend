import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';

import FrontPage from './Pages/FrontPage'
import Teams from '../src/Components/teamsInfo/Teams'
import Testing from '../src/Components/textFolder/TextFolder'
import IndividualTeam from '../src/Components/individualTeam/IndividualTeam'
import TeamsPlayers from './Components/teamsPlayers/TemasPlayers'
 import TeamUpDate from './Components/teamUpDate/TeamUpDate'


function App() {
  
  return (
    <div className="App">
      <Router>
        {/* <NavBar /> */}
        <Routes>
          <Route exact path="/" element={<FrontPage/>}/>
          <Route exact path="/homeBase" element={<Teams/>}/>
          <Route exact path="/homeBase/:id" element={<Testing/>}/>
          <Route exact path="/homeBase/groups" element={<TeamsPlayers/>}/>
          <Route exact path="/homeBase/groups/:id" element={<TeamsPlayers/>}/>
          <Route exact path="/homeBase/groups/team/:team_id" element={<TeamsPlayers/>}/>
          <Route exact path="/homeBase/team" element={<TeamUpDate/>}/>
        </Routes>
      </Router>
       
    </div>
  );
}

export default App;
