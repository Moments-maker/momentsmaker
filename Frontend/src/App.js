import './App.css';
import NavBar from './Components/navbar/Navbar';
import Homepage from './Components/homepage/Homepage';
import Login from './Components/login/Login';
import Register from './Components/register/Register';
import Events from './Components/events/Events';
import User from './Components/user/User';
import Samp from './Components/events/Samp';

import About from './Components/about/About';
import PostAd from './Components/postAd/PostAd';
import VendorRegister from './Components/register/VendorRegister';

import Photography from './Components/services/Photography';
import Venue from './Components/services/Venue';
import Decoration from './Components/services/Decoration';
import Mua from './Components/services/Mua';
import Music from './Components/services/Music';
import Designer from './Components/services/Designer';
import Officiate from './Components/services/Officiate';


import Wedding from './Components/events/Wedding';
import Birthday from './Components/events/Birthday';
import Corporate from './Components/events/Corporate';
import ThemedParty from './Components/events/ThemedParty';
import Funeral from './Components/events/Funeral';
import Concert from './Components/events/Concert';



import {
  BrowserRouter as Router,
  Routes,
  Route

} from "react-router-dom";
import { useState } from 'react';
import Sidebar from './Components/sidebar/Sidebar';



function App() {
  const [user, setLoginUser] = useState({

  })
  return (
    <div className="App">
      {/* <Sidebar/> */}
      {/* <Events/> */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path='/Sidebar' element={<Sidebar/>}></Route>
          <Route path='/User' element={<User/>}></Route>
          
          <Route path='/Navbar' element={<NavBar/>}></Route>
          <Route path="/Login" element={<Login/>}></Route>
          {/* <Route path="/Login"><Login setLoginUser={setLoginUser} /></Route> */}
          <Route path="/Register" element={<Register/>}></Route>
          {/* <Route path="/VendorRegister" element={<VendorRegister/>}></Route> */}
          <Route path="/Events" element={<Events/>}></Route>
          <Route path="/PostAd" element={<PostAd/>}></Route>
          
          <Route path="/Photography" element={<Photography/>}></Route>
          <Route path="/Venue" element={<Venue/>}></Route>
          <Route path="/Decoration" element={<Decoration/>}></Route>
          <Route path="/Mua" element={<Mua/>}></Route>
          <Route path="/Music" element={<Music/>}></Route>
          <Route path="/Officiate" element={<Officiate/>}></Route>
          <Route path="/Designer" element={<Designer/>}></Route>


          <Route path="/Birthday" element={<Birthday/>}></Route>
          <Route path="/Corporate" element={<Corporate/>}></Route>
          <Route path="/Funeral" element={<Funeral/>}></Route>
          <Route path="/ThemedParty" element={<ThemedParty/>}></Route>
          <Route path='/Wedding' element={<Wedding/>}></Route>
          <Route path='/Concert' element={<Concert/>}></Route>
          <Route path='/Samp' element={<Samp/>}></Route>
        </Routes>

      </Router>
      
    </div>
  );
}

export default App;
