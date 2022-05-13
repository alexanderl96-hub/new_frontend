import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';

import FrontPage from './Pages/FrontPage'
import Teams from '../src/Components/teamsInfo/Teams'
import IndividualTeam from '../src/Components/textFolder/TextFolder'
import TeamUpDate from './Components/teamUpDate/TeamUpDate'
import IndividualMember from './Components/IndividualMember/IndividualMember'
import UpDateMember from '../src/Components/memberUpDate/MemberUpDate'


function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<FrontPage/>}/>
          <Route exact path="/homeBase" element={<Teams/>}/>
          <Route exact path="/homeBase/:id" element={<IndividualTeam/>}/>
          <Route exact path="/homeBase/groups/:id" element={<IndividualMember/>}/>
          <Route exact path="/homeBase/updateteam/:id" element={<TeamUpDate/>}/>
          <Route exact path="/homeBase/updateMember/:id" element={<UpDateMember/>}/>
        </Routes>
      </Router>
       
    </div>
  );
}

export default App;
