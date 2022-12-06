import React, { useState, useEffect } from 'react'; 
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import { getCookie } from '../src/utils/cookieUtils'

// import Alert from '@mui/material/Alert';
// import CheckIcon from '@mui/icons-material/Check';

import Teams from '../src/Components/teamsInfo/Teams'
import IndividualMember from './Components/IndividualMember/IndividualMember'
import UpDateMember from '../src/Components/memberUpDate/MemberUpDate'
import NewTeam from '../src/Components/newTeam/NewTeam'
import NewMember from '../src/Components/newMember/NewMember'
import Allplayers from '../src/ComponentsPlayers/Players/Players'
import Coaches from '../src/ComponentsPlayers/Coaches/Coaches'
import Season from '../src/ComponentsPlayers/Season/Season'
import AddStats from '../src/Components/statsPlayers/addStatsPlayers'
import AllMembers from '../src/Components/AllMembers/desing'
import CurrentHistagram from '../src/Components/Histogram/CurrentHistagram'
import About from '../src/Components/AboutUs/about'
import News from '../src/Components/LatestsNews/News'
import Text from '../src/Components/text/text.js'
import LoginModal from '../src/Components/Login/LoginModal'
import NavBar from '../src/Components/navBar/Navbar'
import Footer from '../src/Components/Footer/Footer'
import EditTeam from '../src/Components/EditTeam/EditTeam'
import Favorites from '../src/ComponentsPlayers/Favorites/Favorites'
import Legend from '../src/ComponentsPlayers/Legend/Legend'
import AllTimes from '../src/ComponentsPlayers/AllTimes/AllTimes'
import Profile from '../src/ComponentProfile/Profile/Profile'
import TermofUse from '../src/ComponentPrivacy/Terms of Use/TermofUse'
import PrivacyPolicy from '../src/ComponentPrivacy/Privacy Policy/PrivacyPolicy'
import LegalNotices from '../src/ComponentPrivacy/Legal Notices/LegalNotices'
import UploadImage from '../src/ComponentProfile/UploadImageToS3WithReactS3'

// import { Favorite } from '@mui/icons-material';


function App() {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [loggedIn, setLoggedIn] = useState( getCookie('accessToken') ? true : false);
  const [user, setUser] = useState(localStorage.getItem("username") || "Welcome");
  const [userImage, setUserImage]= useState(localStorage.getItem("userImage") || "")
  const [userId, setUserId] = useState(localStorage.getItem("userid") || "")
  // const [loginMessage, setLoginMessage] = useState('');

  // useEffect(() => {

  //   setTimeout(function() {
  //     setLoginMessage('')
  //   }, 2000)

  // }, [loginMessage])

  return (
      <Router >
           <div className="App">
            <NavBar setOpenLoginModal={setOpenLoginModal} loggedIn={loggedIn} setLoggedIn={setLoggedIn} 
                    user={user}  userImage={userImage} />

            <LoginModal  openLoginModal={openLoginModal} 
                         setOpenLoginModal={setOpenLoginModal} 
                         setLoggedIn={setLoggedIn} 
                         setUser={setUser}
                         setUserImage={ setUserImage}
                         setUserId={setUserId}
                          // setLoginMessage={setLoginMessage}
                        />
                         {/* {loginMessage && 
          <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
            {loginMessage}
          </Alert>
        } */}
              <Routes>
                  <Route exact path="/" element={<Teams/>} />
                  <Route  path="/teams/groups/:id" element={<IndividualMember loggedIn={loggedIn}  user={user}/>} />
                  <Route  path="/teams/updateMember/:id" element={<UpDateMember/>}/>
                  <Route  path="/teams/new" element={<NewTeam/>}/>
                  <Route  path="/teams/newMember/:id" element={<NewMember/>}/>
                  <Route  path="/teams/allplayers" element={<Allplayers/>}/>
                  <Route  path="/teams/allCoaches" element={<Coaches/>}/>
                  <Route  path="/teams/Season" element={<Season/>}/>
                  <Route  path="/teams/About" element={<About/>} />
                  <Route  path="/teams/News" element={<News/>}/>
                  <Route  path="/teams/Text" element={<Text/>}/>
                  <Route  path="/teams/groups/:id/addStats" element={<AddStats/>} />
                  <Route  path="/teams/allmembers/:id" element={<AllMembers loggedIn={loggedIn}  user={user} userImage={userImage} />  } /> 
                  <Route  path="/teams/CurrentHistagram/:id" element={<CurrentHistagram/>}/>      
                  <Route  path="/teams/EditTeam/:id" element={<EditTeam/>}/>   
                  <Route  path="/teams/Favorite" element={<Favorites/>}/>   
                  <Route  path="/teams/Legend" element={<Legend/>}/> 
                  <Route  path="/teams/AllTimes" element={<AllTimes/>}/> 
                  <Route  path="/teams/Profile" element={<Profile  user={user} userImage={userImage} userId={userId} />}/> 
                  <Route  path="/teams/TermofUse" element={<TermofUse/>}/> 
                  <Route  path="/teams/LegalNotices" element={<LegalNotices/>}/> 
                  <Route  path="/teams/PrivacyPolicy" element={<PrivacyPolicy/>}/> 
                  <Route path="/teams/upload" element={<UploadImage />} />
              </Routes>
              <Footer />
          </div>
      </Router>
  );
}

export default App;
